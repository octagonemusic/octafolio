import type { Metadata, Viewport } from "next";
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
  keywords: [
    "Bhargav Prasad",
    "Octagone",
    "Computer Science",
    "Developer",
    "Full Stack",
    "Linux",
    "Portfolio",
    "Tech Enthusiast",
    "Software Engineer",
  ],
  authors: [{ name: "Bhargav Prasad", url: "https://octafolio.vercel.app" }],
  creator: "Bhargav Prasad",
  publisher: "Bhargav Prasad",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Bhargav Prasad - Octagone",
    description:
      "Bhargav Prasad (Octagone) — Computer Science student, developer, and tech enthusiast. Exploring software through real-world projects and a passion for learning.",
    images: [
      {
        url: "/logo.svg",
        width: 1200,
        height: 630,
        alt: "Bhargav Prasad - Octagone Portfolio",
        type: "image/svg+xml",
      },
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Bhargav Prasad - Octagone Portfolio",
        type: "image/png",
      },
    ],
    type: "website",
    siteName: "Bhargav Prasad - Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhargav Prasad - Octagone",
    description:
      "Bhargav Prasad (Octagone) — Computer Science student, developer, and tech enthusiast. Exploring software through real-world projects and a passion for learning.",
    images: ["/logo.svg"],
  },
  metadataBase: new URL("https://octafolio.vercel.app"),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
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
