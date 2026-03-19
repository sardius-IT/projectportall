"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FileText, Compass, Users, Award, CheckCircle, Globe, BookOpen, MessageSquare, GraduationCap } from "lucide-react";


const services = [
  {
    icon: Compass,
    title: "University Selection & Profiling",
    description: "We analyze your academic profile, extracurriculars, career goals, and preferences to create a curated list of best-fit universities across the globe.",
    features: ["Personalized university shortlist", "Program compatibility analysis", "Admit probability assessment", "Budget & location matching"],
  },
  {
    icon: FileText,
    title: "Application Strategy & Management",
    description: "From timeline planning to final submission, we manage every detail of your applications to ensure nothing falls through the cracks.",
    features: ["Application timeline planning", "Document checklist management", "Deadline tracking", "Multi-application coordination"],
  },
  {
    icon: MessageSquare,
    title: "Essay & SOP Review",
    description: "Our team of expert editors and former admissions officers help you craft compelling narratives that highlight your unique story.",
    features: ["Brainstorming sessions", "Multiple draft reviews", "Tone & voice optimization", "Plagiarism checks"],
  },
  {
    icon: GraduationCap,
    title: "Standardized Test Preparation",
    description: "Strategic guidance on test selection, preparation plans, and score improvement for SAT, GRE, GMAT, IELTS, TOEFL, and more.",
    features: ["Diagnostic assessment", "Custom study plans", "Practice test analysis", "Score improvement strategies"],
  },
  {
    icon: Award,
    title: "Scholarship & Financial Aid",
    description: "We identify scholarship opportunities and guide you through the application process to reduce your financial burden.",
    features: ["Scholarship database access", "Application assistance", "Financial aid planning", "Negotiation support"],
  },
  // {
  //   icon: Globe,
  //   title: "Visa & Pre-Departure Support",
  //   description: "Navigate the visa process with confidence and get ready for life abroad with our comprehensive pre-departure guidance.",
  //   features: ["Visa application support", "Interview preparation", "Accommodation guidance", "Cultural orientation"],
  // },
  {
    icon: Users,
    title: "Interview Preparation",
    description: "Mock interviews with tailored feedback to help you present your best self to admissions committees and scholarship panels.",
    features: ["Mock interview sessions", "Body language coaching", "Common question prep", "Personalized feedback"],
  },
  // {
  //   icon: BookOpen,
  //   title: "LOR & Resume Building",
  //   description: "Guidance on securing strong letters of recommendation and building a resume that showcases your strengths effectively.",
  //   features: ["Recommender selection", "Brief preparation", "Resume formatting", "Achievement highlighting"],
  // },
];

// const packages = [
//   {
//     name: "Explorer",
//     price: "499",
//     description: "Perfect for students who need targeted help",
//     features: ["University shortlisting", "1 application review", "Email support"],
//     highlighted: false,
//   },
//   {
//     name: "Pathfinder",
//     price: "1,499",
//     description: "Our most popular comprehensive package",
//     features: ["Everything in Explorer", "Up to 5 applications", "Essay & SOP review", "Interview prep", "Priority support"],
//     highlighted: true,
//   },
//   {
//     name: "Visionary",
//     price: "2,999",
//     description: "Full-service premium admission support",
//     features: ["Everything in Pathfinder", "Unlimited applications", "Scholarship guidance", "Visa support", "Dedicated counselor", "1-year mentorship"],
//     highlighted: false,
//   },
// ];

export default function Services() {
  return (
    <div className="pt-10 bg-white">
      {/* Hero */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-accent text-sm font-semibold uppercase tracking-widest">Our Services</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-3 tracking-tight">
              Everything You Need to
              <span className="text-accent block">Get Admitted</span>
            </h1>
            <p className="text-foreground mt-6 text-lg leading-relaxed max-w-2xl">
              Comprehensive admission consulting services designed to maximize your chances at top universities worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group grid md:grid-cols-[auto_1fr] gap-8 p-8 rounded-2xl bg-card border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors flex-shrink-0">
                  <service.icon className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                        <span className="text-sm text-foreground/80">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      {/* <section className="py-24 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-accent text-sm font-semibold uppercase tracking-widest">Pricing</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 tracking-tight">
              Choose Your Package
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-lg">
              Flexible plans designed to fit every student's needs and budget.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, i) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`rounded-2xl p-8 border transition-shadow ${
                  pkg.highlighted
                    ? "bg-primary text-primary-foreground border-primary shadow-2xl scale-105"
                    : "bg-card border-border hover:shadow-lg"
                }`}
              >
                <h3 className={`font-semibold text-lg ${pkg.highlighted ? "text-accent" : "text-accent"}`}>
                  {pkg.name}
                </h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-bold">${pkg.price}</span>
                  <span className={`text-sm ${pkg.highlighted ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                    / student
                  </span>
                </div>
                <p className={`text-sm mt-2 ${pkg.highlighted ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                  {pkg.description}
                </p>
                <div className="my-8 space-y-3">
                  {pkg.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <CheckCircle className={`w-4 h-4 flex-shrink-0 ${pkg.highlighted ? "text-accent" : "text-accent"}`} />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link href="/contact">
                  <button
                    className={`w-full rounded-xl h-12 font-medium ${
                      pkg.highlighted
                        ? "bg-accent text-accent-foreground hover:bg-accent/90"
                        : "bg-primary text-primary-foreground hover:bg-primary/90"
                    }`}
                  >
                    Get Started
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
}