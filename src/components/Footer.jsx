import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, ArrowUp, Github, Linkedin, Mail, Download } from "lucide-react";
import { personalInfo } from "../data/resume.js";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-slate-900 to-indigo-950 text-white">
      {/* Gradient divider */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600" />
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -top-20 left-1/4 h-64 w-64 rounded-full bg-indigo-600/20 blur-[100px]" />

      <div className="relative mx-auto max-w-6xl px-5 py-16 md:px-6 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          {/* Brand */}
          <div>
            <a href="#home" className="inline-flex items-baseline gap-0.5">
              <span className="text-3xl font-extrabold text-white">Rohan</span>
              <span className="text-3xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Pardeshi
              </span>
              <span className="ml-2 text-[11px] font-medium uppercase tracking-[0.25em] text-white/40">
                {personalInfo.role}
              </span>
            </a>
            <p className="mt-4 max-w-sm text-white/55">
              Building digital experiences with passion and precision — merging operations-grade
              rigor with modern full-stack craft.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {[
                { icon: Github, href: personalInfo.github, label: "GitHub" },
                { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
                { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition-all hover:-translate-y-0.5 hover:border-indigo-400/50 hover:bg-gradient-to-br hover:from-blue-600 hover:to-purple-600 hover:text-white"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-indigo-400">
              Explore
            </p>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="link-sweep text-white/60 transition-colors hover:text-white"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-indigo-400">
              Get in touch
            </p>
            <ul className="mt-5 space-y-3 text-white/60">
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="link-sweep break-all hover:text-white"
                >
                  {personalInfo.email}
                </a>
              </li>
              <li>
                <a href={`tel:${personalInfo.phoneHref}`} className="link-sweep hover:text-white">
                  {personalInfo.phone}
                </a>
              </li>
              <li className="text-white/40">{personalInfo.location}</li>
              <li>
                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-sweep inline-flex items-center gap-1.5 text-indigo-400 hover:text-white"
                >
                  <Download size={13} /> Download resume
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/40 md:flex-row">
          <p>
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Made with <Heart size={13} className="fill-rose-500 text-rose-500" /> using React
            &amp; Tailwind CSS
          </p>
        </div>
      </div>

      {/* Back to top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.7, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.7, y: 12 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-[0_12px_30px_-10px_rgba(79,70,229,0.7)] transition-transform hover:scale-110"
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
