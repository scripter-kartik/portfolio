import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit, Fira_Code } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import ParticleBackground from "@/components/ParticleBackground";
import { Toaster } from "react-hot-toast";
import CommandMenu from "@/components/CommandMenu";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-outfit",
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Kartik | Full Stack Developer",
  description:
    "Kartik — full-stack developer based in Delhi, India. Building responsive, high-performance web applications with Next.js, React, Node.js, and more.",
  keywords: ["full stack developer", "Next.js", "React", "portfolio", "Kartik"],
  authors: [{ name: "Kartik" }],
  openGraph: {
    title: "Kartik | Full Stack Developer",
    description:
      "Full-stack products, shipped clean. Building responsive, high-performance web applications.",
    type: "website",
  },
  icons: {
    icon: "/kartikLabsLogo.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${firaCode.variable} ${outfit.variable} font-[var(--font-outfit)] antialiased gradient-bg`}
        suppressHydrationWarning
      >
        <SmoothScroll>
          <CustomCursor />
          <ParticleBackground />
          <CommandMenu />
          <Toaster 
            position="bottom-center"
            toastOptions={{
              style: {
                background: '#1A1025',
                color: '#fff',
                border: '1px solid rgba(199, 120, 221, 0.2)',
                fontFamily: 'monospace'
              },
            }}
          />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}