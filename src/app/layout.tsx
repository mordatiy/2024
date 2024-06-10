import React from 'react'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Manrope } from "next/font/google";
import { Roboto } from "next/font/google";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

// const inter = Inter({ subsets: ["latin"] });
const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Euro 2024",
  description: "Let's place bets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    // <html lang="en">
    //   <body className={inter.className}>{children}</body>
    // </html>
      <html lang="en">
        <body className={openSans.className}>
            <Header />
            <div className={"container"}>
                {children}
            </div>

        </body>
      </html>
  );
}
