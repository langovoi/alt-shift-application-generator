import { cn } from "@shared/lib";
import { cva, type VariantProps } from "class-variance-authority";
import type { ReactNode } from "react";
import styles from "./FieldGroup.module.css";

const fieldGroupVariants = cva(styles.group, {
  variants: {
    orientation: {
      vertical: styles.vertical,
      horizontal: styles.horizontal,
    },
  },
  defaultVariants: {
    orientation: "vertical",
  },
});

interface FieldGroupProps extends VariantProps<typeof fieldGroupVariants> {
  children: ReactNode;
  className?: string;
}

export function FieldGroup({
  children,
  orientation,
  className,
}: FieldGroupProps) {
  return (
    <div className={cn(fieldGroupVariants({ orientation }), className)}>
      {children}
    </div>
  );
}
