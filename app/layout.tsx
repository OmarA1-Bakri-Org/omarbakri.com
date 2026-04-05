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
    default: "Omar Al-Bakri \u2014 15 Years Selling Tech. Now I Build It.",
    template: "%s | Omar Al-Bakri",
  },
  description:
    "15 years in enterprise FinTech sales. Taught myself to code at 40. Shipped three production AI platforms solo. The full story.",
  keywords: [
    "Omar Al-Bakri",
    "AI Engineer",
    "Career Change",
    "Agentic AI",
    "LangGraph",
    "Neo4j GraphRAG",
    "Full-Stack Engineering",
    "Enterprise Sales",
    "FinTech",
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
    url: "https://omarbakri.com",
    siteName: "Omar Al-Bakri",
    title: "Omar Al-Bakri \u2014 15 Years Selling Tech. Now I Build It.",
    description:
      "Former enterprise FinTech sales leader who taught himself to code and shipped three production AI platforms solo. ruleIQ, Helios, ThreadOS.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Omar Al-Bakri \u2014 15 Years Selling Tech. Now I Build It.",
    description:
      "Former enterprise FinTech sales leader who taught himself to code and shipped three production AI platforms solo. ruleIQ, Helios, ThreadOS.",
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
