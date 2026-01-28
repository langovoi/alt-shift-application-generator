import type {Metadata, Viewport} from "next";
import type React from "react";
import { Providers } from "./providers";

import "./globals.css";
import { GoalProgress } from "@features/goal-tracker";
import { cn } from "@shared/lib";
import { Container } from "@shared/ui";
import { fixelDisplayFont, fixelTextFont } from "@shared/ui/font";
import { Header } from "@widgets/header";
import styles from "./layout.module.css";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#ffffff'
}

export const metadata: Metadata = {
  title: "Alt+Shift",
  description: "Generate personalized job applications in seconds using AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(fixelTextFont.variable, fixelDisplayFont.variable)}
    >
      <body className={styles.layout}>
        <Providers>
          <Container>
            <Header>
              <GoalProgress />
            </Header>
          </Container>
          <main className={styles.main}>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
