import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";
import ClientLayout from "@/components/ClientLayout";
import { AnimationProvider } from '@/context/AnimationContext'
import { DeviceProvider } from '@/context/DeviceContext'
import { LoadingProvider } from '@/context/LoadingContext'
import Loading from '@/components/Loading'

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
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased container mx-auto`}>
        <DeviceProvider>
          <AnimationProvider>
            <LoadingProvider>
              <Loading />
              <ClientLayout>
                {children}
              </ClientLayout>
            </LoadingProvider>
          </AnimationProvider>
        </DeviceProvider>
      </body>
    </html>
  );
}
