"use client";

import type { FieldMetadata } from "@conform-to/react";
import { Heading } from "@shared/ui";

import styles from "./FormTitle.module.css";

interface FormTitleProps {
  jobTitle: FieldMetadata<string>;
  company: FieldMetadata<string>;
}

export function FormTitle({ jobTitle, company }: FormTitleProps) {
  if (jobTitle.value || company.value) {
    return (
      <div className={styles.title}>
        <Heading level={2}>
          {[jobTitle.value, company.value].filter(Boolean).join(", ")}
        </Heading>
      </div>
    );
  }

  return (
    <div className={styles.title}>
      <Heading level={2} color="muted">
        New application
      </Heading>
    </div>
  );
}
