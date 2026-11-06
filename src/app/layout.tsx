import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Iris by Halion — Assistive technology built around privacy by design",
  description:
    "Iris by Halion is assistive technology worn like an ordinary pair of glasses, built around privacy by design.",
  keywords: ["assistive technology", "privacy by design", "AR glasses", "smart glasses", "wearable technology", "Iris", "Halion"],
  icons: {
    icon: "/images/icon.png",
  },
  openGraph: {
    title: "Iris by Halion — Assistive technology built around privacy by design",
    description:
      "Assistive technology worn like an ordinary pair of glasses, built around privacy by design.",
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
