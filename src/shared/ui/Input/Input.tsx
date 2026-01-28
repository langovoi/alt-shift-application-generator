import { cn } from "@shared/lib";
import type { InputHTMLAttributes } from "react";
import { forwardRef } from "react";
import styles from "./Input.module.css";

export const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={cn(
        styles.input,
        (props["aria-invalid"] === true || props["aria-invalid"] === "true") &&
          styles.error,
        className,
      )}
      {...props}
    />
  );
});

Input.displayName = "Input";
