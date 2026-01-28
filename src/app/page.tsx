import { GoalHero } from "@features/goal-tracker";

import { Button, Container, Heading, PlusIcon } from "@shared/ui";
import { LettersGrid } from "@widgets/letters-grid";
import Link from "next/link";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <Container className={styles.wrapper}>
      <div className={styles.header}>
        <Heading>Applications</Heading>
        <Button variant="primary" asChild>
          <Link href="/new">
            <PlusIcon />
            Create New
          </Link>
        </Button>
      </div>
      <LettersGrid />
      <GoalHero />
    </Container>
  );
}
