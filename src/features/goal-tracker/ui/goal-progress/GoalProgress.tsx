"use client";

import { lettersQueries } from "@entities/letter";
import { CheckIcon, Progress } from "@shared/ui";
import { useQuery } from "@tanstack/react-query";
import { GOAL } from "../../config/constants";

import styles from "./GoalProgress.module.css";

export function GoalProgress() {
  const { data } = useQuery(lettersQueries.all());

  const current = Math.min(data?.length || 0, GOAL);

  return (
    <div className={styles.progress}>
      <span className={styles.progressText}>
        {current}/{GOAL} applications generated
      </span>
      {current >= GOAL ? (
        <div className={styles.checkIcon}>
          <CheckIcon size="lg" />
        </div>
      ) : (
        <Progress current={current} total={GOAL} variant="dots" />
      )}
    </div>
  );
}
