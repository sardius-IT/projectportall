import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { GoogleAnalytics } from '@next/third-parties/google'; 

export const metadata = {
  title: "Acenta Edu Consultants | Expert University Admission Consultant Vijayawada",
  description: "Expert guidance for university admissions, career counseling and scholarships. Let Acenta Edu be your guide to a brighter future for the 2026-27 intake.",

  // 1. Keywords (Google ignores this tag, but other small engines use it)
  keywords: ["University Admissions", "Study Abroad", "Scholarships", "Vijayawada", "Acenta Edu", "Undergrad Admissions", "Grad Admissions", "Career Counseling", "Overseas Education", "Education Consultant", "Application Assistance", "College Selection", "Admissions Strategy", "Telangana Education Consulting Services", "Andhra Pradesh Education Consulting Services", "Vishakhapatnam Education Consulting Services", "India Education Consulting Services", "MBBS", "Hotel Management Admissions", "Engineering Admissions", "Business School Admissions", "Medical School Admissions", "International Student Admissions", "University Application Guidance", "Education Consulting in Vijayawada", "Education Consulting in Telangana", "Education Consulting in Andhra Pradesh", "Education Consulting in Vishakhapatnam", "Education Consulting in India"],
  
  // 2. Author
  authors: [{ name: "Acenta Edu Team" }],
  
  // 3. Robots (This tells bots how to treat the page)
  robots: {
    index: true,     // Allow search engines to show this page
    follow: true,    // Allow search engines to follow links on this page
    nocache: true,   // Don't show a "cached" link in search results
  },

  metadataBase: new URL('https://acentaedu.com'),
  alternates: {
    canonical: '/',
  },

  // This is where your Google Site Verification goes!
  verification: {
    google: "xaMMemfis-hlSGvkEPmRBaSjmEb6CjFnjPuojZ9DDIs",
  },

  // Social Media (Facebook/OpenGraph and Twitter)
  openGraph: {
    title: "Acenta Edu | University Admissions",
    description: "Your trusted partner and exper guidance for university admissions.",
    url: "https://acentaedu.com",
    siteName: "Acenta Edu",
    images: [
      {
        url: "https://acentaedu.com/AcentaEduLogo.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Acenta Edu | University Admissions",
    description: "Your trusted partner and exper guidance for university admissions.",
    images: ["https://acentaedu.com/AcentaEduLogo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white min-h-screen flex flex-col">
        {/* Navbar fixed at top */}
        <Navbar />

        {/* Main content with top padding to avoid overlap */}
        <main className="flex-1 pt-24">{children}</main>

        {/* Footer */}
        <Footer />

        <GoogleAnalytics gaId="G-K9BN6D1NS8" />
      </body>
    </html>
  );
}
