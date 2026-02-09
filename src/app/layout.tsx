import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Halion — Augmented Reality Glasses for Everyday Life",
  description:
    "Halion builds AR glasses that feel natural to use as part of daily life, with just the right amount of intelligence to make everyday tasks easier.",
  keywords: ["AR glasses", "augmented reality", "wearable technology", "smart glasses", "Halion"],
  openGraph: {
    title: "Halion — Augmented Reality Glasses for Everyday Life",
    description:
      "AR glasses designed around the human, not the hardware. Subtle, contextual assistance without demanding attention.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
