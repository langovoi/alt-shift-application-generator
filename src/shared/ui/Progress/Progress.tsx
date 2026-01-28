import { cn } from "@shared/lib";
import styles from "./Progress.module.css";

interface ProgressDotsProps {
  current: number;
  total: number;
  variant: "dots" | "bars";
}

export function Progress({ current, total, variant }: ProgressDotsProps) {
  return (
    <div
      className={cn(
        styles.container,
        variant === "bars" && styles.bars,
        variant === "dots" && styles.dots,
      )}
      role="progressbar"
      aria-valuenow={current}
      aria-valuemax={total}
    >
      {Array.from({ length: total }, (_, index) => (
        <span
          key={index}
          className={cn(styles.item, index < current && styles.filled)}
        />
      ))}
    </div>
  );
}
