import type { LabelHTMLAttributes, ReactNode } from "react";
import styles from "./Label.module.css";
import {cn} from "@shared/lib";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
  required?: boolean;
}

export function Label({ children, required, className, ...props }: LabelProps) {
  return (
    <label className={cn(styles.label, className)} {...props}>
      {children}
      {required && <span className={styles.required}>*</span>}
    </label>
  );
}
