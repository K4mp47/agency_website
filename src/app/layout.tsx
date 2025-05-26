"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Lenis from "lenis";
import { useEffect } from "react";
import { Doto } from "next/font/google";

const doto = Doto({
  variable: "--font-doto",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${doto.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
