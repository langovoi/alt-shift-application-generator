"use client";

import { GenerateLetterForm } from "@features/generate-letter";
import { Container } from "@shared/ui";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function NewApplicationPage() {
  const router = useRouter();

  return (
    <Container className={styles.container}>
      <GenerateLetterForm
        onSuccess={(letter) => router.push(`/letter/${letter.id}`)}
      />
    </Container>
  );
}
