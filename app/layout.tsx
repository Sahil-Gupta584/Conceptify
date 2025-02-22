import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { Analytics } from "@vercel/analytics/react"
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Conceptify - Easily Memorize Your Concepts.",
  description: "Convert you hard topic or concepts into simple Diagrams.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <meta name="google-site-verification" content="jaRe97M-uTV-Cs3QgkeyEVX5fJa4gITkCyWNPWs_6Nc" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-black`}
      >
        <SessionProvider>
          {children}
          <Analytics />

        </SessionProvider>
      </body>
    </html>
  );
}
