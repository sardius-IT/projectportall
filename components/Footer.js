import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-muted pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* ✅ Logo & About */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Image
              src="/AcentaEduLogo.png"
              alt="Acenta Edu Consultants Logo"
              width={120}
              height={120}
              className="object-contain"
            />
          </div>
          <h2 className="text-xl font-bold tracking-tight bg-gradient-to-r from-orange-400 via-slate-300 to-slate-100 bg-clip-text text-transparent">
            Acenta Edu Consultants✨
          </h2>
          {/* </div> */}
          <p className="text-sm leading-relaxed text-white">
            Your trusted partner for your student's education. We guide you to
            achieve your dreams with a personalized support.
          </p>
        </div>

        {/* ✅ Quick Links */}
        <div className="md:pl-6">
          <h3 className="text-sm font-semibold tracking-wider text-white uppercase mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm text-white">
            <li>
              <Link href="/" className="text-white hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-white hover:text-white transition"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="text-white hover:text-white transition"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-white hover:text-white transition"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* ✅ Services */}
        <div>
          <h3 className="text-sm font-semibold tracking-wider text-white uppercase mb-4">
            Services
          </h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li>University Selection</li>
            <li>University Admission Guidance</li>
            <li>Career & Profile Evaluation</li>
            <li>Application Strategy</li>
          </ul>
        </div>

        {/* ✅ Contact Info */}
        <div>
          <h3 className="text-sm font-semibold tracking-wider text-white uppercase mb-4">
            Contact
          </h3>
          <ul className="space-y-3 text-sm text-white">
            <li className="flex items-start gap-2">
              <span className="mt-1 text-accent">📧</span>
              <a
                href="mailto:info@acentaedu.com"
                className="text-white hover:text-accent hover:underline transition"
              >
                info@acentaedu.com
              </a>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-accent">📞 </span>
              <a
                href="tel:+919000012345"
                className="text-white hover:text-accent hover:underline transition"
              >
                +91 7386055697
              </a>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-accent">📍</span>
              <span>Vijayawada, AP</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-white/10 pt-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <div className="text-left">
            © {new Date().getFullYear()}{" "}
            <span className="text-white font-semibold">
              ✨Acenta Edu Consultants✨
            </span>{" "}
            — All rights reserved.
          </div>

          <div className="flex gap-6 mt-3 md:mt-0">
            <span className="text-xs text-white/40 hover:text-white/70 cursor-pointer transition-colors">
              Privacy Policy
            </span>
            <span className="text-xs text-white/40 hover:text-white/70 cursor-pointer transition-colors">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
