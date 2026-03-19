"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // WhatsApp submission handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace with your real WhatsApp number (no + or spaces)
    const whatsappNumber = "917386055697";

    const message = `
📩 *New Enquiry from Acenta Edu Consultants*

👤 Name: ${formData.name}
📧 Email: ${formData.email}
📱 Phone: ${formData.phone}
💬 Message: ${formData.message}
    `;

    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message,
    )}`;
    window.open(whatsappLink, "_blank");
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "info@acentaedu.com" },
    { icon: Phone, label: "Phone", value: "+91 7386055697" },
    {
      icon: MapPin,
      label: "Office",
      value:
        "54-20/2-3A/1, Road 2, Mahanadu Road, Srinivasa Nagar Bank Colony, Vijayawada - 520008",
    },
    { icon: Clock, label: "Hours", value: "Mon - Fri: 9AM - 6PM EST" },
  ];

  return (
    <div className="pt-10 bg-white">
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-accent text-sm font-semibold uppercase tracking-widest">
              Contact Us
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-3 tracking-tight">
              Let's Start Your
              <span className="text-accent block">Journey Together</span>
            </h1>
            <p className="text-foreground mt-6 text-lg leading-relaxed max-w-2xl">
              Have questions or ready to get started? Reach out to us for a free
              consultation.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Left Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                Send Us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-md text-black outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-md text-black outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+91111111111"
                    value={formData.phone}
                    onChange={handleChange}
                    pattern="+[0-9]{13}"
                    maxLength="13"
                    required
                    className="w-full p-3 rounded-md text-black outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    placeholder="Type your message..."
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    required
                    className="w-full p-3 rounded-md text-black outline-none focus:ring-2 focus:ring-blue-400"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 rounded-xl h-14 text-base font-medium gap-2"
                >
                  Send Message on WhatsApp
                </button>
              </form>
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
                <p className="text-foreground text-sm">
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
                      <div className="text-sm font-medium text-foreground">
                        {info.label}
                      </div>
                      <div className="text-sm text-foreground mt-0.5">
                        {info.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl overflow-hidden border border-border h-64 flex items-center justify-center">
                <div className="text-center text-foreground">
                  <MapPin className="w-8 h-8 mx-auto mb-2 text-accent/50" />
                  <p className="text-sm font-medium">
                    54-20/2-3A/1, Road 2, Mahanadu Road, Srinivasa Nagar Bank
                    Colony
                  </p>
                  <p className="text-xs">Vijayawada - 520008, AP</p>
                </div>
              </div>

              <div className="bg-primary rounded-2xl p-6 text-primary-foreground">
                <h4 className="font-semibold mb-2">
                  Free 30-Minute Consultation
                </h4>
                <p className="text-sm text-primary-foreground/70 leading-relaxed">
                  Not sure where to start? Book a free consultation call with
                  our admissions experts. No commitment, just honest advice.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>

    // <section className="bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] text-white min-h-screen py-20 px-6">
    //   {/* Page Header */}
    //   <motion.div
    //     initial={{ opacity: 0, y: 30 }}
    //     animate={{ opacity: 1, y: 0 }}
    //     transition={{ duration: 0.8 }}
    //     className="text-center mb-12"
    //   >
    //     <h1 className="text-5xl font-bold mb-3 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-600 bg-clip-text text-transparent">
    //       Contact Acenta Edu Consultants
    //     </h1>
    //     <p className="text-gray-300 max-w-2xl mx-auto text-lg">
    //       Have questions or need a consultation? We’re here to help you craft
    //       the perfect communication and marketing strategy for your brand.
    //     </p>
    //   </motion.div>

    //   {/* Main Grid Section */}
    //   <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
    //     {/* Left Column - Contact Form */}
    //     <motion.div
    //       initial={{ opacity: 0, x: -40 }}
    //       whileInView={{ opacity: 1, x: 0 }}
    //       transition={{ duration: 0.8 }}
    //       viewport={{ once: true }}
    //       className="bg-white/10 border border-white/10 rounded-2xl p-8 backdrop-blur-lg shadow-lg"
    //     >
    //       <h2 className="text-2xl font-semibold mb-6 text-blue-300">
    //         Send Us a Message
    //       </h2>

    //       <form onSubmit={handleSubmit} className="space-y-4">
    //         <div>
    //           <label className="block text-sm mb-1 text-gray-300">
    //             Your Name
    //           </label>
    //           <input
    //             type="text"
    //             name="name"
    //             placeholder="Enter your full name"
    //             value={formData.name}
    //             onChange={handleChange}
    //             required
    //             className="w-full p-3 rounded-md text-black outline-none focus:ring-2 focus:ring-blue-400"
    //           />
    //         </div>

    //         <div>
    //           <label className="block text-sm mb-1 text-gray-300">
    //             Email Address
    //           </label>
    //           <input
    //             type="email"
    //             name="email"
    //             placeholder="Enter your email"
    //             value={formData.email}
    //             onChange={handleChange}
    //             required
    //             className="w-full p-3 rounded-md text-black outline-none focus:ring-2 focus:ring-blue-400"
    //           />
    //         </div>

    //         <div>
    //           <label className="block text-sm mb-1 text-gray-300">
    //             Mobile Number
    //           </label>
    //           <input
    //             type="tel"
    //             name="phone"
    //             placeholder="Enter your 10-digit mobile number"
    //             value={formData.phone}
    //             onChange={handleChange}
    //             pattern="[0-9]{10}"
    //             maxLength="10"
    //             required
    //             className="w-full p-3 rounded-md text-black outline-none focus:ring-2 focus:ring-blue-400"
    //           />
    //         </div>

    //         <div>
    //           <label className="block text-sm mb-1 text-gray-300">
    //             Your Message
    //           </label>
    //           <textarea
    //             name="message"
    //             placeholder="Type your message..."
    //             value={formData.message}
    //             onChange={handleChange}
    //             rows="4"
    //             required
    //             className="w-full p-3 rounded-md text-black outline-none focus:ring-2 focus:ring-blue-400"
    //           ></textarea>
    //         </div>

    //         <button
    //           type="submit"
    //           className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-black font-semibold py-3 rounded-md hover:opacity-90 transition"
    //         >
    //           Send Message on WhatsApp
    //         </button>
    //       </form>
    //     </motion.div>

    //     {/* Right Column - Info + Map */}
    //     <motion.div
    //       initial={{ opacity: 0, x: 40 }}
    //       whileInView={{ opacity: 1, x: 0 }}
    //       transition={{ duration: 0.8 }}
    //       viewport={{ once: true }}
    //       className="space-y-6"
    //     >
    //       <div className="bg-white/10 border border-white/10 rounded-2xl p-6 shadow-lg">
    //         <h3 className="text-2xl font-semibold mb-4 text-cyan-300">
    //           Get in Touch
    //         </h3>

    //         <p className="text-gray-300 mb-2">
    //           📍 <strong>Address:</strong> Acenta Edu Consultants, 54-20/2-3A/1, Road 2, Mahanadu Road, Srinivasa Nagar Bank Colony, Vijayawada - 520008
    //         </p>

    //         <p className="text-gray-300 mb-2">
    //           📞 <strong>Phone:</strong>{" "}
    //           <a
    //             href="tel:+919876543210"
    //             className="text-blue-400 hover:underline"
    //           >
    //             +91 98765 43210
    //           </a>
    //         </p>

    //         <p className="text-gray-300 mb-4">
    //           📧 <strong>Email:</strong>{" "}
    //           <a
    //             href="mailto:info@acentaedu.com"
    //             className="text-blue-400 hover:underline"
    //           >
    //             info@acentaedu.com
    //           </a>
    //         </p>

    //         <a
    //           href="https://wa.me/917386055697"
    //           target="_blank"
    //           className="inline-block mt-5 bg-gradient-to-r from-green-400 to-green-600 text-black px-5 py-2.5 rounded-full font-semibold hover:opacity-90 transition"
    //         >
    //           💬 Chat on WhatsApp
    //         </a>
    //       </div>

    //       {/* Google Map */}
    //       {/* <div className="rounded-2xl overflow-hidden border border-white/10 shadow-lg">
    //         <iframe
    //           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.442237973149!2d78.4282073!3d17.4240343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91b8b02bba81%3A0xdda17d2a12e53b63!2sBanjara%20Hills%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1731476954000!5m2!1sen!2sin"
    //           width="100%"
    //           height="300"
    //           style={{ border: 0 }}
    //           allowFullScreen=""
    //           loading="lazy"
    //         ></iframe>
    //       </div> */}
    //     </motion.div>
    //   </div>
    // </section>
  );
}
