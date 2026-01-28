import { cn } from "@shared/lib";
import { cva, type VariantProps } from "class-variance-authority";
import type { ReactNode } from "react";
import styles from "./Heading.module.css";

const headingVariants = cva(styles.heading, {
  variants: {
    level: {
      1: styles.level1,
      2: styles.level2,
    },
    color: {
      default: styles.colorDefault,
      muted: styles.colorMuted,
    },
  },
  defaultVariants: {
    level: 1,
    color: "default",
  },
});

type HeadingElement = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div";

interface HeadingProps extends VariantProps<typeof headingVariants> {
  as?: HeadingElement;
  children: ReactNode;
  className?: string;
}

function getDefaultElement(level: 1 | 2 | null | undefined): HeadingElement {
  if (level === 2) {
    return "h2";
  }
  return "h1";
}

export function Heading({
  as,
  level,
  color,
  children,
  className,
}: HeadingProps) {
  const Component = as ?? getDefaultElement(level);

  return (
    <Component className={cn(headingVariants({ level, color }), className)}>
      {children}
    </Component>
  );
}
