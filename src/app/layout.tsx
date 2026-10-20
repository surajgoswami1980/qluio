import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  themeColor: "#081426",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://synteriq.com"),
  title: {
    default: "Synteriq Technologies — Enterprise Software, AI & SaaS Engineering",
    template: "%s | Synteriq Technologies",
  },
  description:
    "Synteriq Technologies builds enterprise software, AI solutions, SaaS products, and cloud platforms. Intelligent software, built for what's next.",
  keywords: [
    "enterprise software development",
    "AI solutions",
    "SaaS product development",
    "cloud and DevOps",
    "custom software",
    "system integration",
    "digital engineering",
    "Synteriq Technologies",
    "MyClasses",
  ],
  authors: [{ name: "Synteriq Technologies" }],
  openGraph: {
    type: "website",
    siteName: "Synteriq Technologies",
    title: "Synteriq Technologies — Intelligent Software. Built for What's Next.",
    description:
      "Enterprise software, AI solutions, SaaS, and cloud engineering for organizations that want to ship faster and operate smarter.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Synteriq Technologies",
    description: "Enterprise software, AI solutions, SaaS, and cloud engineering.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <body className="font-sans">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-navy"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content" className="relative min-h-screen overflow-x-clip">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
