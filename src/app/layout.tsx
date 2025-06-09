import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import DockNavbar from "@/components/DockNavbar";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bhargav Prasad - Octagone",
  description:
    "Bhargav Prasad (Octagone) — Computer Science student, developer, and tech enthusiast. Exploring software through real-world projects and a passion for learning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.variable} antialiased`}>
        {children}
        <DockNavbar />
      </body>
    </html>
  );
}
