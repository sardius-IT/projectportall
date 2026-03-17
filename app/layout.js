import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Acenta Edu Consultants",
  description:
    "Your Trusted Education Partner.",
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
      </body>
    </html>
  );
}
