import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  CheckCircle2,
  Loader2,
  ArrowUpRight,
  AlertCircle,
} from "lucide-react";
import { personalInfo } from "../data/resume.js";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          
          access_key: "72431d6c-0df4-421f-8bf8-698f722b962c",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          from_name: "Portfolio Contact Form",
          subject: `New Portfolio Inquiry from ${formData.name}`,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });

        setTimeout(() => setIsSubmitted(false), 6000);
      } else {
        setIsSubmitting(false);
        setErrorMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setIsSubmitting(false);
      setErrorMessage("Network error. Please check your connection and try again.");
    }
  };

  const channels = [
    { icon: Mail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: Phone, label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phoneHref}` },
    { icon: MapPin, label: "Location", value: personalInfo.location, href: null },
    { icon: Github, label: "GitHub", value: "rohanpardeshi7", href: personalInfo.github },
    { icon: Linkedin, label: "LinkedIn", value: "rohan-pardeshi", href: personalInfo.linkedin },
  ];

  return (
    <section id="contact" className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-20 right-0 h-96 w-96 rounded-full bg-blue-400/10 blur-[120px]" />
        <div className="absolute bottom-0 -left-32 h-96 w-96 rounded-full bg-purple-400/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center gap-3 text-center"
        >
          <span className="rounded-full bg-indigo-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-indigo-600">
            Contact
          </span>
          <h2 className="max-w-2xl text-3xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
            Let's build something{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              together
            </span>
            .
          </h2>
          <div className="h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 to-purple-600" />
          <p className="mt-2 max-w-xl text-gray-500">
            Open to junior full-stack roles and freelance collaborations. Drop a message —
            I usually reply within a day.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Channels */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-4"
          >
            {channels.map((ch, i) => {
              const Icon = ch.icon;
              const inner = (
                <div className="group flex items-center gap-4 rounded-[1.1rem] border border-gray-100 bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-lift">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-[0_8px_20px_-8px_rgba(79,70,229,0.5)] transition-transform duration-300 group-hover:scale-110">
                    <Icon size={18} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-gray-400">
                      {ch.label}
                    </p>
                    <p className="truncate text-gray-800">{ch.value}</p>
                  </div>
                  {ch.href && (
                    <ArrowUpRight
                      size={16}
                      className="ml-auto shrink-0 text-gray-300 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-indigo-500"
                    />
                  )}
                </div>
              );
              return ch.href ? (
                <motion.a
                  key={ch.label}
                  href={ch.href}
                  target={ch.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="block"
                >
                  {inner}
                </motion.a>
              ) : (
                <motion.div
                  key={ch.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                >
                  {inner}
                </motion.div>
              );
            })}
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-700 p-7 text-white shadow-lift md:p-10"
          >
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-purple-300/20 blur-2xl" />

            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="relative flex min-h-[380px] flex-col items-center justify-center text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 14 }}
                  >
                    <CheckCircle2 size={64} className="text-emerald-300" />
                  </motion.div>
                  <h3 className="mt-6 text-3xl font-bold">Message sent!</h3>
                  <p className="mt-3 max-w-xs text-white/70">
                    Thanks for reaching out. I'll get back to you as soon as possible.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="relative space-y-6"
                >
                  <div>
                    <h3 className="text-2xl font-bold">Send a message</h3>
                    <p className="mt-1 text-sm text-white/60">All fields are required.</p>
                  </div>

                  {errorMessage && (
                    <div className="flex items-center gap-2 rounded-xl bg-red-500/20 border border-red-400/30 p-3 text-sm text-red-100">
                      <AlertCircle size={18} className="shrink-0 text-red-300" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-[11px] font-medium uppercase tracking-[0.2em] text-white/70"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder:text-white/30 backdrop-blur transition-all focus:border-white/40 focus:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/20"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-[11px] font-medium uppercase tracking-[0.2em] text-white/70"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder:text-white/30 backdrop-blur transition-all focus:border-white/40 focus:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-[11px] font-medium uppercase tracking-[0.2em] text-white/70"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or role..."
                      className="w-full resize-none rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder:text-white/30 backdrop-blur transition-all focus:border-white/40 focus:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/20"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-indigo-700 transition-all hover:scale-[1.02] hover:shadow-[0_16px_36px_-12px_rgba(255,255,255,0.5)] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send message
                        <Send
                          size={15}
                          className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;