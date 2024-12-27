import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";
import BackgroundEffects from "@/components/BackgroundEffects";
import { AnimationProvider } from "@/context/AnimationContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Emre Altunkaya",
  description: "Emre Altunkaya's Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AnimationProvider>
          <BackgroundEffects />
          {children}
        </AnimationProvider>
      </body>
    </html>
  );
}
