"use client";

import { type SubmissionResult, useForm } from "@conform-to/react";
import { getZodConstraint, parseWithZod } from "@conform-to/zod/v4";
import { type GenerateLetterData, generateLetterSchema } from "../model/schema";

interface UseGenerateLetterFormParams {
  lastResult: SubmissionResult | null;
  defaultValue?: Partial<GenerateLetterData>;
}

export function useGenerateLetterForm({
  lastResult,
  defaultValue,
}: UseGenerateLetterFormParams) {
  const [form, fields] = useForm<GenerateLetterData>({
    lastResult,
    defaultValue,
    constraint: getZodConstraint(generateLetterSchema),
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: generateLetterSchema });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  return { form, fields };
}
