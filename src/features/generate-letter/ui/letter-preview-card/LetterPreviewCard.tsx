"use client";

import { CopyButton } from "@entities/letter";
import { Card } from "@shared/ui";
import { useFormStatus } from "react-dom";
import styles from "./LetterPreviewCard.module.css";
import { LoadingIcon } from "./LoadingIcon";

interface LetterPreviewCardProps {
  content?: string;
}

export function LetterPreviewCard({ content }: LetterPreviewCardProps) {
  const { pending } = useFormStatus();

  if (pending) {
    return (
      <Card className={styles.preview}>
        <div className={styles.loading}>
          <LoadingIcon className={styles.loadingIcon} />
        </div>
      </Card>
    );
  }

  if (!content) {
    return (
      <Card className={styles.preview}>
        <p className={styles.content}>
          Your personalized job application will appear here...
        </p>
      </Card>
    );
  }

  return (
    <Card className={styles.preview}>
      <p className={styles.content}>{content}</p>
      <div className={styles.actions}>
        <CopyButton content={content} />
      </div>
    </Card>
  );
}
