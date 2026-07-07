import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
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

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  axes: ["SOFT", "WONK", "opsz"],
  fallback: ["Georgia", "serif"],
  variable: "--font-fraunces",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.omarbakri.com"),
  title: {
    default: "Omar Al-Bakri — Applied AI Engineer & Product Builder",
    template: "%s | Omar Al-Bakri",
  },
  description:
    "Applied AI engineer and FinTech operator building production AI products across creator intelligence, compliance automation, sales automation, and multi-agent systems.",
  keywords: [
    "Omar Al-Bakri",
    "Applied AI Engineer",
    "AI Product Builder",
    "Agentic AI",
    "CallScore",
    "Crypto Creator Intelligence",
    "Crypto Market Calls Tracker",
    "LangGraph",
    "GraphRAG",
    "Full-Stack AI Engineer",
    "Enterprise FinTech",
    "AI Automation",
    "Multi-agent systems",
    "Cross-border payments",
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
    url: "https://www.omarbakri.com",
    siteName: "Omar Al-Bakri",
    title: "Omar Al-Bakri — Applied AI Engineer & Product Builder",
    description:
      "Applied AI engineer and FinTech operator building production AI products including CallScore, ruleIQ, Helios, and thredOS.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Omar Al-Bakri — Applied AI Engineer & Product Builder",
    description:
      "Applied AI engineer and FinTech operator building production AI products including CallScore, ruleIQ, Helios, and thredOS.",
  },
  alternates: {
    canonical: "https://www.omarbakri.com",
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
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
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
