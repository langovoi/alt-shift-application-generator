import { Slot } from "@radix-ui/react-slot";
import { cn } from "@shared/lib";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.css";

const buttonVariants = cva(styles.button, {
  variants: {
    variant: {
      primary: styles.primary,
      outline: styles.outline,
      ghost: styles.ghost,
    },
    size: {
      md: styles.md,
      lg: styles.lg,
      "icon-md": styles["icon-md"],
      inline: styles.inline,
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children?: ReactNode;
  asChild?: boolean;
}

export function Button({
  children,
  variant,
  size,
  disabled,
  className,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  const buttonClassName = cn(buttonVariants({ variant, size }), className);

  return (
    <Comp className={buttonClassName} disabled={disabled} {...props}>
      {children}
    </Comp>
  );
}
