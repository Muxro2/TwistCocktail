import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Twist Cocktail",
  description: "Discover amazing cocktail recipes",
  manifest: "/manifest.webmanifest", // link to your PWA manifest
  icons: {
    icon: "/icon.png", // main favicon or app icon
    apple: "/apple-touch-icon.png", // iOS Add to Home Screen
    shortcut: "/favicon.svg",
  },
  themeColor: "#111", // changes browser bar color on mobile
  appleWebApp: {
    capable: true,
    title: "Twist Cocktail",
    statusBarStyle: "default",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
