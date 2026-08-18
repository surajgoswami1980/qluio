import type { Metadata } from "next";
import "@/styles/globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://edunova.in"),
  title: {
    default: "Edunova - School Management Platform | India's #1 School ERP",
    template: "%s | Edunova",
  },
  description:
    "India's leading School ERP SaaS platform by MS Technology Limited. Manage admissions, attendance, fees, exams, transport & more. Built for CBSE, ICSE & State Board schools. Start free trial today.",
  keywords: [
    "school ERP",
    "school management software",
    "school management system India",
    "CBSE school software",
    "fee management",
    "student management",
    "attendance management",
    "school app",
    "education technology",
    "EdTech India",
    "Edunova",
    "MS Technology",
  ],
  authors: [{ name: "Edunova by MS Technology Limited" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Edunova",
    title: "Edunova - Transform Your School Management",
    description:
      "India's most comprehensive school management platform. Automate admissions, attendance, fees, exams, and more.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Edunova - School Management Platform",
    description:
      "India's leading School ERP. Manage everything from one dashboard.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
