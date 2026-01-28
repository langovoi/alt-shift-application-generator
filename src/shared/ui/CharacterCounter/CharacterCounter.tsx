import { cn } from "@shared/lib";
import styles from "./CharacterCounter.module.css";

interface CharacterCounterProps {
  current: number;
  max: number;
}

export function CharacterCounter({ current, max }: CharacterCounterProps) {
  const isOverLimit = current > max;

  return (
    <span className={cn(styles.counter, isOverLimit && styles.error)}>
      {current}/{max}
    </span>
  );
}
