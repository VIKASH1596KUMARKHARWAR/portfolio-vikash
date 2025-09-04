import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import CursorFollower from "@/components/CursorFollower";
import { ThemeProvider } from "@/contexts/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vikash Kumar Kharwar | Portfolio",
  description:
    "Welcome to Vikash Kumar Kharwar's portfolio - Backedn focused-Full Stack Developer passionate about creating innovative web solutions",
  authors: [{ name: "Vikash Kumar Kharwar" }],
  keywords: [
    "Vikash Kumar Kharwar",
    "Portfolio",
    "Full Stack Developer",
    "Web Development",
    "Software Engineer",
  ],
  creator: "Vikash Kumar Kharwar",
  icons: {
    icon: [
      {
        url: "/code-icon.svg",
        type: "image/svg+xml",
      },
    ],
    shortcut: ["/code-icon.svg"],
    apple: [
      {
        url: "/code-icon.svg",
        type: "image/svg+xml",
      },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Vikash Kumar Kharwar | Portfolio",
    description:
      "Welcome to Vikash Kumar Kharwar's portfolio - Full Stack Developer passionate about creating innovative web solutions",
    siteName: "Vikash Kumar Kharwar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vikash Kumar Kharwar | Portfolio",
    description:
      "Welcome to Vikash Kumar Kharwar's portfolio - Full Stack Developer passionate about creating innovative web solutions",
    creator: "@VikashKumar Kharwar",
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
        <ThemeProvider>
          <CursorFollower />
          <ScrollProgress />
          {children}
          <Footer />
          <Toaster richColors position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
