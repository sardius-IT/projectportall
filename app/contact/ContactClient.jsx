"use client";


import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../../hooks/button.jsx";
import { Input } from "../../hooks/input.jsx";
import { Textarea } from "../../hooks/textarea.jsx";
import { Label } from "../../hooks/label.jsx";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../hooks/select.jsx";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { useToast } from "../../hooks/use-toast.jsx";


export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    toast({ title: "Message sent!", description: "We'll get back to you within 24 hours." });
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "info@acentaedu.com" },
    { icon: Phone, label: "Phone", value: "+91 98765 43210" },
    { icon: MapPin, label: "Office", value: "54-20/2-3A/1, Road 2, Mahanadu Road, Srinivasa Nagar Bank Colony, Vijayawada - 520008" },
    { icon: Clock, label: "Hours", value: "Mon - Fri: 9AM - 6PM EST" },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-secondary to-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-accent text-sm font-semibold uppercase tracking-widest">Contact Us</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-3 tracking-tight">
              Let's Start Your
              <span className="text-accent block">Journey Together</span>
            </h1>
            <p className="text-muted-foreground mt-6 text-lg leading-relaxed max-w-2xl">
              Have questions or ready to get started? Reach out to us for a free consultation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              {submitted ? (
                <div className="text-center py-20 bg-card rounded-2xl border border-border">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                    Thank You!
                  </h3>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    We've received your message and will get back to you within 24 hours. Check your email for a confirmation.
                  </p>
                  <Button
                    className="mt-8 bg-primary text-primary-foreground rounded-xl"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
                    }}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 bg-card rounded-2xl border border-border p-8 md:p-10">
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                    Send Us a Message
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6">
                    Fill out the form below and we'll respond within one business day.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="h-12 rounded-xl"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="h-12 rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="h-12 rounded-xl"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Interested Service</Label>
                      <Select
                        value={formData.service}
                        onValueChange={(value) => setFormData({ ...formData, service: value })}
                      >
                        <SelectTrigger className="h-12 rounded-xl">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="university_selection">University Selection</SelectItem>
                          <SelectItem value="application_strategy">Application Strategy</SelectItem>
                          <SelectItem value="essay_review">Essay & SOP Review</SelectItem>
                          <SelectItem value="test_prep">Test Preparation</SelectItem>
                          <SelectItem value="scholarship">Scholarship Guidance</SelectItem>
                          <SelectItem value="visa">Visa Assistance</SelectItem>
                          <SelectItem value="full_package">Full Package</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Your Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your educational goals, target universities, or any questions you have..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="min-h-[140px] rounded-xl resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90 rounded-xl h-14 text-base font-medium gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                  Get in Touch
                </h3>
                <p className="text-muted-foreground text-sm">
                  We'd love to hear from you. Here's how you can reach us.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-foreground">{info.label}</div>
                      <div className="text-sm text-muted-foreground mt-0.5">{info.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl overflow-hidden border border-border h-64 bg-muted flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <MapPin className="w-8 h-8 mx-auto mb-2 text-accent/50" />
                  <p className="text-sm font-medium">350 Fifth Avenue</p>
                  <p className="text-xs">New York, NY 10118</p>
                </div>
              </div>

              <div className="bg-primary rounded-2xl p-6 text-primary-foreground">
                <h4 className="font-semibold mb-2">Free 30-Minute Consultation</h4>
                <p className="text-sm text-primary-foreground/70 leading-relaxed">
                  Not sure where to start? Book a free consultation call with our admissions experts. No commitment, just honest advice.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}