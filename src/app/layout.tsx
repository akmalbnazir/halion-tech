import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Halion — The personal secretary that lives in your glasses",
  description:
    "Halion is a primary AR device with fully independent onboard compute — passive memory and ambient context for busy, high-output people. Launching at AWE California, June 2026.",
  keywords: ["AR glasses", "augmented reality", "wearable technology", "smart glasses", "memory assistance", "ambient computing", "Halion"],
  icons: {
    icon: "/images/icon.png",
  },
  openGraph: {
    title: "Halion — The personal secretary that lives in your glasses",
    description:
      "Passive memory for busy minds. A primary AR device with independent onboard compute, built in partnership with DigiLens. Launching at AWE June 2026.",
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
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
