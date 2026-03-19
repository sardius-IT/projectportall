"use client";

import { motion } from "framer-motion";
import { Target, Heart, Users, Award, CheckCircle } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Student-First Approach",
    description: "Every decision we make puts your aspirations and wellbeing at the center.",
  },
  {
    icon: Heart,
    title: "Integrity & Transparency",
    description: "Honest assessments, clear communication, and no hidden fees — ever.",
  },
  {
    icon: Users,
    title: "Personalized Guidance",
    description: "No cookie-cutter advice. Each strategy is tailored to your unique profile.",
  },
  {
    icon: Award,
    title: "Excellence in Results",
    description: "A 95% admission rate speaks to our commitment to delivering outcomes.",
  },
];

// const team = [
//   {
//     name: "Dr. Ananya Patel",
//     role: "Founder & Chief Consultant",
//     bio: "Former admissions officer at Columbia University with 15+ years of experience in global education consulting.",
//     initials: "AP",
//   },
//   {
//     name: "Michael Torres",
//     role: "Head of Strategy",
//     bio: "MBA from Wharton. Specializes in building compelling application narratives for top business schools.",
//     initials: "MT",
//   },
//   {
//     name: "Dr. Emily Wong",
//     role: "Academic Advisor",
//     bio: "PhD from Oxford. Expert in STEM admissions and research-focused program applications.",
//     initials: "EW",
//   },
//   {
//     name: "Rahul Krishnan",
//     role: "Test Prep Director",
//     bio: "Scored 99th percentile on GRE, GMAT, and SAT. Has coached over 500 students to their target scores.",
//     initials: "RK",
//   },
// ];

export default function About() {
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
            <span className="text-accent text-sm font-semibold uppercase tracking-widest">About Us</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-3 tracking-tight">
              Guiding Futures, <br />
              <span className="text-accent">One Admission at a Time</span>
            </h1>
            <p className="text-foreground mt-6 text-lg leading-relaxed max-w-2xl">
              Founded in 2025, Acenta Edu Consultants has grown from a small consultancy into a trusted name in education admissions. Our team of former admissions officers, academic experts, and career counselors work together to craft winning applications.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-15 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop"
                alt="Team collaboration"
                className="rounded-2xl shadow-xl object-cover w-full h-[400px]"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <span className="text-accent text-sm font-semibold uppercase tracking-widest">Our Mission</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                Democratizing Access to World-Class Education
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We believe every talented student deserves a shot at their dream university, regardless of background. Our mission is to provide expert, accessible, and affordable admission guidance that levels the playing field.
              </p>
              <div className="space-y-3">
                {["7+ years of proven results", "500+ successful placements", "Partnerships with universities", "Dedicated support from start to finish"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-accent text-sm font-semibold uppercase tracking-widest">Our Values</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 tracking-tight">
              What Drives Us
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-8 bg-card rounded-2xl border border-border"
              >
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-5">
                  <value.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      {/* <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-accent text-sm font-semibold uppercase tracking-widest">Our Team</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 tracking-tight">
              Meet the Experts
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-lg">
              Seasoned professionals who've walked the path and know the way.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-24 h-24 rounded-2xl bg-primary flex items-center justify-center mx-auto mb-5 text-2xl font-bold text-primary-foreground">
                  {member.initials}
                </div>
                <h3 className="font-semibold text-foreground">{member.name}</h3>
                <p className="text-accent text-sm font-medium mt-1">{member.role}</p>
                <p className="text-muted-foreground text-sm mt-3 leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
}
