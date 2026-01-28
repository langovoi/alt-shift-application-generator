import { Button, HomeIcon, Logo } from "@shared/ui";
import { clsx } from "clsx";
import Link from "next/link";
import type { ReactNode } from "react";

import styles from "./Header.module.css";

interface HeaderProps {
  children?: ReactNode;
  className?: string;
}

export function Header({ children, className }: HeaderProps) {
  return (
    <div className={clsx(styles.header, className)}>
      <Link href="/">
        <Logo />
      </Link>

      <div className={styles.rightSection}>
        {children}

        <Button variant="outline" size="icon-md" aria-label="Home" asChild>
          <Link href="/">
            <HomeIcon />
          </Link>
        </Button>
      </div>
    </div>
  );
}
