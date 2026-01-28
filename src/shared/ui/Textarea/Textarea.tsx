import { cn } from "@shared/lib";
import type { TextareaHTMLAttributes } from "react";
import { forwardRef } from "react";
import styles from "./Textarea.module.css";

export const Textarea = forwardRef<
  HTMLTextAreaElement,
  TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => {
  return (
    <textarea ref={ref} className={cn(styles.textarea, className)} {...props} />
  );
});

Textarea.displayName = "Textarea";
