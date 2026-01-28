import type React from "react";
import styles from "./Grid.module.css";

interface GridProps {
  children: React.ReactNode;
}

export function Grid({ children }: GridProps) {
  return <div className={styles.grid}>{children}</div>;
}
