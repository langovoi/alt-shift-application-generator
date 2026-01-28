import localFont from "next/font/local";

export const fixelDisplayFont = localFont({
  src: [
    {
      path: "./FixelDisplay-SemiBold.woff2",
      weight: "600",
    },
  ],
  fallback: ["system-ui", "sans-serif"],
  variable: "--font-family-heading",
});

export const fixelTextFont = localFont({
  src: [
    {
      path: "./FixelText-SemiBold.woff2",
      weight: "600",
    },
    {
      path: "./FixelText-Medium.woff2",
      weight: "500",
    },
    {
      path: "./FixelText-Regular.woff2",
      weight: "400",
    },
  ],
  fallback: ["system-ui", "sans-serif"],
  variable: "--font-family",
});
