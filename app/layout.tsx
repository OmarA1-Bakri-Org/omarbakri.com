import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MotionProvider from "./components/motion-provider";
import StructuredData from "./components/structured-data";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://omarbakri.com"),
  title: {
    default: "Omar Al-Bakri — AI Product Builder & Enterprise Sales Leader",
    template: "%s | Omar Al-Bakri",
  },
  description:
    "AI product builder with 15 years of enterprise FinTech sales leadership. Three production platforms shipped solo — compliance automation, sales AI, and multi-agent orchestration.",
  keywords: [
    "Omar Al-Bakri",
    "AI Product Builder",
    "Agentic AI",
    "LangGraph",
    "Neo4j GraphRAG",
    "Full-Stack Engineer",
    "Enterprise Sales",
    "FinTech",
    "Cross-border payments",
    "Multi-agent systems",
  ],
  authors: [{ name: "Omar Al-Bakri" }],
  creator: "Omar Al-Bakri",
  publisher: "Omar Al-Bakri",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://omarbakri.com",
    siteName: "Omar Al-Bakri",
    title: "Omar Al-Bakri — AI Product Builder & Enterprise Sales Leader",
    description:
      "AI product builder with 15 years of enterprise FinTech leadership. Three production platforms shipped solo — ruleIQ, Helios, thredOS.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Omar Al-Bakri — AI Product Builder & Enterprise Sales Leader",
    description:
      "AI product builder with 15 years of enterprise FinTech leadership. Three production platforms shipped solo — ruleIQ, Helios, thredOS.",
  },
  alternates: {
    canonical: "https://omarbakri.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://api.iconify.design" />
        <link rel="dns-prefetch" href="https://api.iconify.design" />
        <StructuredData />
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
