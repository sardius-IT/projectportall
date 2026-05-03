import ContactClient from "./ContactClient";

// ✅ SERVER COMPONENT (no "use client" here)
export const metadata = {
  title: "Contact Us • Acenta Edu Consultants",
  description:
    "Get in touch with Acenta Edu Consultants for consultations or partnership inquiries.",
  alternates: {
    canonical: '/contact',
  }
};

export default function ContactPage() {
  return <ContactClient />;
}
