"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Link from "next/link";
import { GraduationCap, FileText, MessageSquare, Globe, Compass, Award, ArrowRight } from "lucide-react";

/* -------------------------------------------------------
   AURORA BACKGROUND
-------------------------------------------------------- */
// function AuroraBackground() {
//   return (
//     <div className="fixed inset-0 -z-50 overflow-hidden">
//       <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#111] to-[#050505]" />

//       <motion.div
//         className="absolute top-[-15%] left-[-10%] w-[60vw] h-[60vw] bg-blue-500/25 blur-[200px] rounded-full"
//         animate={{ x: [0, 50, -30, 0], y: [0, -30, 20, 0] }}
//         transition={{ duration: 12, repeat: Infinity }}
//       />

//       <motion.div
//         className="absolute bottom-[-15%] right-[-10%] w-[55vw] h-[55vw] bg-orange-400/20 blur-[180px] rounded-full"
//         animate={{ x: [0, -40, 30, 0], y: [0, 20, -25, 0] }}
//         transition={{ duration: 14, repeat: Infinity }}
//       />

//       <motion.div
//         className="absolute top-[20%] right-[20%] w-[40vw] h-[40vw] bg-purple-500/20 blur-[180px] rounded-full"
//         animate={{ x: [0, 20, -20, 0], y: [0, -25, 30, 0] }}
//         transition={{ duration: 16, repeat: Infinity }}
//       />
//     </div>
//   );
// }


const services = [
  {
    icon: Compass,
    title: "University Selection",
    description: "Data-driven matching to find universities that align with your profile, goals, and budget.",
  },
  {
    icon: FileText,
    title: "Application Strategy",
    description: "Comprehensive planning that maximizes your chances across all target institutions.",
  },
  // {
  //   icon: MessageSquare,
  //   title: "Essay & SOP Review",
  //   description: "Expert editing and feedback to make your personal statements compelling and authentic.",
  // },
  // {
  //   icon: GraduationCap,
  //   title: "Test Preparation",
  //   description: "Guidance on standardized tests including SAT, GRE, GMAT, IELTS, and TOEFL.",
  // },
  {
    icon: Award,
    title: "Scholarship Guidance",
    description: "Identify and apply for scholarships and financial aid opportunities worldwide.",
  },
  // {
  //   icon: Globe,
  //   title: "Visa Assistance",
  //   description: "Step-by-step visa application support to ensure a smooth transition abroad.",
  // },
];


/* -------------------------------------------------------
   FULL PAGE WITHOUT MAGIC CURSOR
-------------------------------------------------------- */
export default function Home() {
  // const VISA_TYPES = ["Student Visa", "Work Visa", "Tourist Visa"];
  // const COUNTRIES = [
  //   "United States",
  //   "United Kingdom",
  //   "Australia",
  //   "New Zealand",
  //   "Japan",
  //   "China",
  // ];

  // const [visaType, setVisaType] = useState(VISA_TYPES[0]);
  // const [country, setCountry] = useState(COUNTRIES[0]);
  // const [name, setName] = useState("");
  // const [phone, setPhone] = useState("");

//   const handleWhatsAppSubmit = () => {
//     if (!name || !phone) return alert("Please enter name & phone number.");

//     const msg = `Hello PR Consultants,
// I want a free consultation.

// Name: ${name}
// Phone: ${phone}
// Visa Type: ${visaType}
// Country: ${country}`;

//     window.open(
//       `https://wa.me/919000012345?text=${encodeURIComponent(msg)}`,
//       "_blank",
//     );
//   };

  return (
     <main className="relative overflow-hidden bg-background text-foreground">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-secondary/50" />
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl" />

      {/* PREMIUM HERO SECTION */}
      <section className="relative pt-40 pb-32 text-center px-6 z-10">
        {/* <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold"
        >
          Andhra Pradesh & Telangana’s{" "}
          <span className="bg-gradient-to-r from-blue-400 via-orange-300 to-blue-300 text-transparent bg-clip-text">
            Leading Overseas Education Consultancy
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 max-w-3xl mx-auto text-gray-300 text-lg"
        >
          Acenta Edu Consultants empowers students with expert
          guidance, ethical support, and personalized counseling to achieve
          their dream of studying abroad.
        </motion.p> */}

        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-medium mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Admissions Open 2026-27
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-foreground">
              Your Path to
              <span className="block text-accent">
                Dream University
              </span>
            </h1>

            <p className="mt-6 text-lg text-muted leading-relaxed max-w-lg mx-auto">
              Expert guidance for university admissions worldwide. We craft personalized strategies that turn ambitious students into successful applicants.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 hover:bg-primary/90 transition"
            >
              Book Free Consultation
            </a>

            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-primary border border-primary/20 hover:bg-white/90 transition"
            >
              Explore Services
            </a>
          </div>
          </motion.div>
      </section>

            <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-semibold uppercase tracking-widest">What We Offer</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 tracking-tight">
            End-to-End Admission Support
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            From selecting the right university to stepping on campus — we guide you through every stage of your journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                <service.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12 mb-16"
        >
          <Link href="/Services" className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all">
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>


      {/* <section className="w-full  py-16">
        <div className="max-w-7xl mx-auto px-6"> */}
          {/* Heading */}
          {/* <h2 className="text-4xl font-bold text-center mb-14">
            Why Choose{" "}
            <span className="text-accent italic">PR Education Consultants?</span>
          </h2> */}

          {/* Cards */}
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"> */}
            {/* Card 1 */}
            {/* <div className="  rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition bg-white/10">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-lg font-semibold text-foreground">
                15+ University <br /> Partners
              </h3>
            </div> */}

            {/* Card 2 */}
            {/* <div className="rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition bg-white/10">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-lg font-semibold text-foreground">
                15,000+ Success <br /> Stories
              </h3>
            </div> */}

            {/* Card 3 */}
            {/* <div className="rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition bg-white/10">
              <div className="text-5xl mb-4">🎓</div>
              <h3 className="text-lg font-semibold text-foreground">
                Scholarship up to <br /> 30%*
              </h3>
            </div> */}

            {/* Card 4 */}
            {/* <div className="rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition bg-white/10">
              <div className="text-5xl mb-4">📜</div>
              <h3 className="text-lg font-semibold text-foreground">
                Courses starting <br /> at ₹5 Lakhs*
              </h3>
            </div> */}
          {/* </div>
        </div>
      </section> */}
      {/* <section className="w-full  py-20">
        <div className="max-w-7xl mx-auto px-6"> */}
          {/* Heading */}
          {/* <h2 className="text-4xl font-bold mb-14">
            PR Edu Consultants{" "}
            <span className="text-blue-600 italic">Advantage</span>
          </h2> */}

          {/* Cards Grid */}
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"> */}
            {/* Card 1 */}
            {/* <div className=" rounded-3xl shadow-lg p-10 text-center bg-white/10">
              <div className="text-5xl mb-6">🎓</div>
              <p className="text-lg font-medium">
                Finding the Program That’s <br /> Right for You
              </p>
            </div> */}

            {/* Card 2 */}
            {/* <div className=" rounded-3xl shadow-lg p-10 text-center bg-white/10">
              <div className="text-5xl mb-6">🎧</div>
              <p className="text-lg font-medium">
                Curated Expert-led <br /> Application Assistance
              </p>
            </div> */}

            {/* Card 3 */}
            {/* <div className=" rounded-3xl shadow-lg p-10 text-center bg-white/10">
              <div className="text-5xl mb-6">💰</div>
              <p className="text-lg font-medium">Solving for Money…!</p>
            </div> */}
            {/* <div className=" rounded-3xl shadow-lg p-10 text-center bg-white/10">
              <div className="text-5xl mb-6">📝</div>
              <p className="text-lg font-medium">
                English Assessment Test <br /> Prep On-the-go
              </p>
            </div> */}

            {/* Card 4 */}
            {/* <div className=" rounded-3xl shadow-lg p-10 text-center bg-white/10">
              <div className="text-5xl mb-6">✈️📄</div>
              <p className="text-lg font-medium">
                Interview Preparation & <br /> Visa Guidance
              </p>
            </div> */}

            {/* Card 5 */}
            {/* <div className=" rounded-3xl shadow-lg p-10 text-center bg-white/10">
              <div className="text-5xl mb-6">💰</div>
              <p className="text-lg font-medium">Solving for Money…!</p>
            </div> */}

            {/* Card 6 */}
            {/* <div className=" rounded-3xl shadow-lg p-10 text-center bg-white/10">
              <div className="text-5xl mb-6">🏠</div>
              <p className="text-lg font-medium">
                Making Sure You Stay <br /> Right, And Stay Well
              </p>
            </div> */}
          {/* </div>
        </div>
      </section> */}
      {/* STUDENT VISA */}
      {/* <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          src="/vi-su.jpg"
          className="rounded-2xl border border-white/10"
        />

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-200 text-transparent bg-clip-text">
            Student Visa
          </h2>
          <p className="text-gray-300 mt-3">
            Pursue your higher education with complete guidance.
          </p>

          <ul className="mt-4 text-gray-400 space-y-2">
            <li>✔ USA, UK, Australia, Canada & more</li>
            <li>✔ University shortlisting</li>
            <li>✔ Visa interview training</li>
          </ul>
        </motion.div>
      </section> */}
      {/* WORK VISA */}
      {/* <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-300 text-transparent bg-clip-text">
            Work Visa
          </h2>
          <p className="text-gray-300 mt-3">
            Trusted work visa assistance for global job opportunities.
          </p>

          <ul className="mt-4 text-gray-400 space-y-2">
            <li>✔ Skilled migration</li>
            <li>✔ Job seeker visa support</li>
            <li>✔ Relocation guidance</li>
          </ul>
        </motion.div>

        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          src="/work-visa.jpg"
          className="rounded-2xl border border-white/10"
        />
      </section> */}
      {/* TOURIST VISA */}
      {/* <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          src="/tourist.jpg"
          className="rounded-2xl border border-white/10"
        />

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-300 to-yellow-300 text-transparent bg-clip-text">
            Tourist Visa
          </h2>
          <p className="text-gray-300 mt-3">
            Fast and simple tourist visa processing for your next trip.
          </p>

          <ul className="mt-4 text-gray-400 space-y-2">
            <li>✔ Fast approvals</li>
            <li>✔ Hassle-free documentation</li>
            <li>✔ Family & group visas</li>
          </ul>
        </motion.div>
      </section> */}
      {/* IELTS */}
      {/* <section className="max-w-6xl mx-auto px-4 py-12 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          src="/ielts.jpg"
          className="rounded-2xl border border-white/20 shadow-xl"
        />

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-300 to-orange-300 text-transparent bg-clip-text">
            What is IELTS?
          </h2>
          <p className="text-gray-300 mt-3">
            IELTS evaluates your English skills in Listening, Reading, Writing,
            and Speaking.
          </p>
        </motion.div>
      </section> */}
      {/* GERMANY */}
      {/* <section className="max-w-6xl mx-auto px-4 py-12 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          src="/grm.jpg"
          className="rounded-2xl border border-white/20 shadow-xl"
        />

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-300 to-orange-300 text-transparent bg-clip-text">
            What is the German Language Exam?
          </h2>
          <p className="text-gray-300 mt-3">
            The German Language Exam evaluates your ability to speak, read,
            write, and understand German.
          </p>
        </motion.div>
      </section> */}
      {/* SERVICES */}
      {/* <section className="py-20 text-center">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-orange-300 to-blue-400 text-transparent bg-clip-text">
          Our Services
        </h2>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 max-w-7xl mx-auto">
          {[
            { icon: "🎓", title: "Study Abroad" },
            { icon: "💼", title: "Work Permits" },
            { icon: "🛂", title: "Permanent Residency" },
            { icon: "🌍", title: "Tourist Visa" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl"
            >
              <div className="text-4xl">{item.icon}</div>
              <h3 className="text-lg font-semibold text-white mt-3">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </section> */}
      {/* GOALS */}
      {/* <section className="py-20 max-w-4xl mx-auto text-center px-6">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-300 text-transparent bg-clip-text">
          Our Goals
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-6 text-gray-300 leading-relaxed"
        >
          Our aim is to provide ethical, transparent, and fast visa assistance
          for students, professionals, and travellers worldwide.
        </motion.p>
      </section> */}
      {/* AWARDS */}
      {/* <section className="py-20 text-center max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-yellow-300 to-orange-300 text-transparent bg-clip-text">
          Awards & Reviews
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {[
            { value: "10+", label: "Years of Experience" },
            { value: "1200+", label: "Successful Approvals" },
            { value: "4.9★", label: "Client Rating" },
            { value: "15+", label: "International Awards" },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10"
            >
              <h3 className="text-4xl font-bold">{s.value}</h3>
              <p className="text-gray-400 mt-2">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section> */}
    </main>
  );
}
