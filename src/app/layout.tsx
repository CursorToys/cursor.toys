import type { Metadata } from "next";
import { Sora, Space_Mono } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CursorToys | Cursor Supercharged",
  description:
    "Dark, modern landing page for CursorToys with deep links, feature highlights, and Vercel-ready Next.js setup.",
  metadataBase: new URL("https://cursortoys.dev"),
  openGraph: {
    title: "CursorToys | Cursor Supercharged",
    description:
      "Share commands instantly, test APIs in-editor, and scale your Cursor workflow.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${spaceMono.variable}`}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
