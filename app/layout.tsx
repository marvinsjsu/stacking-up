import type { Metadata } from "next";
import { Geist, Geist_Mono, Oswald, Lexend } from "next/font/google";

import Footer from "@/components/footer";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "arvin Mante - Stacking Up!",
  description: "Thoughts and insights from my journey as a software engineer - personal and technical growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${oswald.variable} ${lexend.variable} ${geistSans.variable} ${geistMono.variable} antialiased bg-argyle bg-white`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
