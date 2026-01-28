"use client";

import {
  getFormProps,
  getInputProps,
  getTextareaProps,
} from "@conform-to/react";
import { type Letter, useUpsertLetterMutation } from "@entities/letter";
import {
  CharacterCounter,
  Field,
  FieldGroup,
  Input,
  Label,
  Textarea,
} from "@shared/ui";
import { useActionState } from "react";
import { generateLetter } from "../api/generateLetter";
import { FormTitle } from "./form-title";
import styles from "./GenerateLetterForm.module.css";
import { GenerateButton } from "./generate-button";
import { LetterPreviewCard } from "./letter-preview-card";
import { useGenerateLetterForm } from "./useGenerateLetterForm";

interface GenerateLetterFormProps {
  initialLetter?: Letter;
  onSuccess?: (letter: Letter) => void;
}

export function GenerateLetterForm({
  initialLetter,
  onSuccess,
}: GenerateLetterFormProps) {
  const { mutateAsync: upsertLetter, data: mutatedLetter } =
    useUpsertLetterMutation();

  const letter = mutatedLetter ?? initialLetter;

  const [lastResult, formAction] = useActionState(
    async (_prev: unknown, formData: FormData) => {
      // TODO: error handling with try-catch
      const result = await generateLetter(formData);

      if (result.text) {
        const savedLetter = await upsertLetter({
          id: letter?.id,
          jobTitle: String(formData.get("jobTitle") ?? ""),
          company: String(formData.get("company") ?? ""),
          skills: String(formData.get("skills") ?? ""),
          additionalDetails: String(formData.get("additionalDetails") ?? ""),
          generatedContent: result.text,
        });
        onSuccess?.(savedLetter);
      }

      return result.submission;
    },
    null,
  );

  const { form, fields } = useGenerateLetterForm({
    lastResult,
    defaultValue: {
      jobTitle: letter?.jobTitle,
      company: letter?.company,
      skills: letter?.skills,
      additionalDetails: letter?.additionalDetails,
    },
  });

  return (
    <form
      {...getFormProps(form)}
      action={formAction}
      className={styles.content}
    >
      <div>
        <FormTitle jobTitle={fields.jobTitle} company={fields.company} />
        <FieldGroup orientation="vertical">
          <FieldGroup orientation="horizontal">
            <Field>
              <Label htmlFor={fields.jobTitle.id}>Job title</Label>
              <Input
                {...getInputProps(fields.jobTitle, { type: "text" })}
                key={fields.jobTitle.key}
                placeholder="Product manager"
              />
            </Field>

            <Field>
              <Label htmlFor={fields.company.id}>Company</Label>
              <Input
                {...getInputProps(fields.company, { type: "text" })}
                key={fields.company.key}
                placeholder="Apple"
              />
            </Field>
          </FieldGroup>

          <Field>
            <Label htmlFor={fields.skills.id}>I am good at...</Label>
            <Input
              {...getInputProps(fields.skills, { type: "text" })}
              key={fields.skills.key}
              placeholder="HTML, CSS and doing things in time"
            />
          </Field>

          <Field>
            <Label htmlFor={fields.additionalDetails.id}>
              Additional details
            </Label>
            <Textarea
              {...getTextareaProps(fields.additionalDetails)}
              key={fields.additionalDetails.key}
              placeholder="Describe why you are a great fit or paste your bio"
            />
            <CharacterCounter
              current={fields.additionalDetails.value?.length || 0}
              max={fields.additionalDetails.maxLength || +Infinity}
            />
          </Field>

          <Field>
            <GenerateButton isGenerated={!!letter} />
          </Field>
        </FieldGroup>
      </div>
      <div>
        <LetterPreviewCard content={letter?.generatedContent} />
      </div>
    </form>
  );
}
