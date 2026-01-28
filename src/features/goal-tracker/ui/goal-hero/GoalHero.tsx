"use client";

import { lettersQueries } from "@entities/letter";
import { Button, Card, Heading, PlusIcon, Progress } from "@shared/ui";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { GOAL } from "../../config/constants";
import styles from "./GoalHero.module.css";

export function GoalHero() {
  const { data } = useQuery(lettersQueries.all());

  if(data && data.length >= GOAL) {
    return;
  }

  const current = Math.min(data?.length || 0, GOAL);

  return (
    <Card variant="highlight" className={styles.card}>
      <div className={styles.content}>
        <Heading as="h2" level={2}>
          Hit your goal
        </Heading>
        <p className={styles.description}>
          Generate and send out couple more job applications today to get hired
          faster
        </p>
        <Button variant="primary" size="lg" asChild>
          <Link href="/new">
            <PlusIcon size="lg" />
            Create New
          </Link>
        </Button>
      </div>
      <div className={styles.progress}>
        <Progress current={current} total={GOAL} variant="bars" />
        <span className={styles.progressText}>
          {current} out of {GOAL}
        </span>
      </div>
    </Card>
  );
}
