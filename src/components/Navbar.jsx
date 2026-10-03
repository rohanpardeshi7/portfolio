import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Download } from "lucide-react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { personalInfo } from "../data/resume.js";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-[0_4px_30px_-8px_rgba(79,70,229,0.15)] py-2"
          : "bg-transparent py-4"
      }`}
    >
      {/* Scroll progress bar */}
      <motion.div
        style={{ scaleX: progress }}
        className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600"
      />

      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 md:px-6">
        <a href="#home" className="group flex items-baseline gap-0.5" aria-label="Rohan Pardeshi — home">
          <span className="font-display text-2xl font-extrabold tracking-tight text-blue-700 transition-transform group-hover:scale-110">
            Rohan
          </span>
          <span className="font-display text-2xl font-extrabold tracking-tight text-purple-600 transition-transform group-hover:scale-110">
            Pardeshi
          </span>
          <span className="ml-2 hidden text-[10px] font-semibold uppercase tracking-[0.25em] text-gray-400 sm:inline">
            MERN Dev
          </span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="link-sweep text-[13px] font-medium text-gray-600 transition-colors hover:text-indigo-600"
            >
              {link.name}
            </a>
          ))}
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-1.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-2.5 text-[13px] font-semibold text-white shadow-[0_8px_20px_-8px_rgba(79,70,229,0.6)] transition-all hover:shadow-[0_12px_28px_-8px_rgba(79,70,229,0.7)] hover:brightness-110"
          >
            <Download size={14} className="transition-transform group-hover:translate-y-0.5" />
            Resume
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="relative z-[60] flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white/80 text-gray-700 backdrop-blur md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          <AnimatePresence mode="wait" initial={false}>
            {isOpen ? (
              <motion.span
                key="x"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={20} />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={20} />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[55] flex flex-col bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-700 text-white md:hidden"
          >
            <div className="flex h-full flex-col justify-center px-8">
              <nav className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 * i + 0.1, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="group flex items-baseline gap-4 border-b border-white/10 py-4"
                  >
                    <span className="text-xs tabular-nums text-white/50">0{i + 1}</span>
                    <span className="font-display text-4xl font-bold transition-all group-hover:translate-x-2 group-hover:text-white/90">
                      {link.name}
                    </span>
                  </motion.a>
                ))}
              </nav>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="mt-10"
              >
                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-indigo-700"
                >
                  <Download size={16} /> View Resume
                </a>
                <p className="mt-6 text-sm text-white/60">{personalInfo.email}</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
