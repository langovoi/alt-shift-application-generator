import type { ReactNode } from "react";
import styles from "./Field.module.css";

interface FieldProps {
  children: ReactNode;
}

export function Field({ children }: FieldProps) {
  return <div className={styles.field}>{children}</div>;
}
