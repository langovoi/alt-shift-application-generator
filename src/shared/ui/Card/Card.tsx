import { cn } from "@shared/lib";
import type { ReactNode } from "react";
import styles from "./Card.module.css";

interface CardProps {
  children: ReactNode;
  variant?: "default" | "highlight";
  className?: string;
}

export function Card({ children, variant = "default", className }: CardProps) {
  return (
    <div className={cn(styles.card, styles[variant], className)}>
      {children}
    </div>
  );
}
