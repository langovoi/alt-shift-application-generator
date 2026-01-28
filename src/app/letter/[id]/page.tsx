"use client";

import { lettersQueries } from "@entities/letter";
import { GenerateLetterForm } from "@features/generate-letter";
import { Container } from "@shared/ui";
import { useQuery } from "@tanstack/react-query";
import { redirect } from "next/navigation";
import { use } from "react";
import styles from "./page.module.css";
import {GoalHero} from "@features/goal-tracker";

export default function EditLetterPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const { data: letter, isLoading } = useQuery(lettersQueries.byId(id));

  if (isLoading) {
    return null;
  }

  if (!letter) {
    redirect("/new");
  }

  return (
    <Container className={styles.container}>
      <GenerateLetterForm initialLetter={letter} />
      <GoalHero />
    </Container>
  );
}
