"use client";

import { Card } from "@shared/ui";
import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./LetterCard.module.css";

interface LetterCardProps {
  content: string;
  href: string;
  footer?: ReactNode;
}

export function LetterCard({ content, href, footer }: LetterCardProps) {
  return (
    <Card variant="default" className={styles.card}>
      <div className={styles.content}>
        <Link href={href} className={styles.contentInner}>
          <p className={styles.preview}>{content}</p>
        </Link>
        <div className={styles.fadeOverlay} />
      </div>
      {footer && <div className={styles.footer}>{footer}</div>}
    </Card>
  );
}
