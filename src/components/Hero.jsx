import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, MapPin, Download } from "lucide-react";
import { personalInfo, marqueeItems } from "../data/resume.js";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
};

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-0 md:pt-32">
      {/* Background image with overlay (original asset, softened) */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <img
          src="https://public.youware.com/users-website-assets/prod/f56deba9-bc6e-4c8c-83e9-1137a4eaf366/fa040d797ee74a5482ba40e4f9ff53e4.jpg"
          alt=""
          className="h-full w-full object-cover opacity-[0.12]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/85 to-white" />
        {/* Ambient gradient orbs — original blue/purple palette */}
        <div className="absolute -top-32 -right-40 h-[520px] w-[520px] rounded-full bg-blue-500/15 blur-[120px]" />
        <div className="absolute top-1/3 -left-40 h-[420px] w-[420px] rounded-full bg-purple-500/15 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-indigo-400/10 blur-[100px]" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto max-w-6xl px-5 md:px-6"
      >
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Copy */}
          <div>
            <motion.div
              variants={item}
              className="inline-flex items-center gap-2.5 rounded-full border border-indigo-100 bg-white/80 px-4 py-2 shadow-soft backdrop-blur"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-soft-pulse rounded-full bg-emerald-400" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-[12px] font-medium text-indigo-700">
                Open to junior full-stack roles
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="mt-7 text-[clamp(3rem,8.5vw,6rem)] font-black leading-[0.95] tracking-tight text-gray-900"
            >
              Hi, I'm{" "}
              <span className="animate-shimmer bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
                Rohan
              </span>
              <br />
              <span className="relative inline-block">
                <span className="relative z-10 animate-shimmer bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-600 bg-clip-text text-transparent">
                  Pardeshi
                </span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.9, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute bottom-2 left-0 z-0 h-3 w-full origin-left rounded-md bg-gradient-to-r from-blue-200/70 to-purple-200/70 md:h-4"
                />
              </span>
            </motion.h1>

            <motion.div variants={item} className="mt-6 flex items-center gap-4">
              <span className="h-1 w-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600" />
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gray-600 md:text-base">
                {personalInfo.role}
              </p>
            </motion.div>

            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-lg leading-relaxed text-gray-500 md:text-xl"
            >
              {personalInfo.heroIntro}
            </motion.p>

            <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-7 py-4 text-sm font-semibold text-white shadow-[0_12px_30px_-10px_rgba(79,70,229,0.6)] transition-all hover:shadow-[0_18px_40px_-10px_rgba(79,70,229,0.7)] hover:brightness-110"
              >
                <span className="absolute inset-0 translate-y-full bg-gradient-to-r from-purple-600 to-blue-600 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0" />
                <span className="relative">Let's work together</span>
                <ArrowUpRight size={16} className="relative transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-7 py-4 text-sm font-semibold text-gray-700 shadow-soft transition-all hover:border-indigo-300 hover:text-indigo-600 hover:shadow-lift"
              >
                <Download size={15} className="transition-transform group-hover:translate-y-0.5" />
                Download resume
              </a>
            </motion.div>

            <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-gray-500">
              <span className="inline-flex items-center gap-2">
                <MapPin size={15} className="text-indigo-500" />
                {personalInfo.location}
              </span>
              <span className="inline-flex items-center gap-2">
                <Mail size={15} className="text-indigo-500" />
                <a href={`mailto:${personalInfo.email}`} className="link-sweep">
                  {personalInfo.email}
                </a>
              </span>
              <span className="inline-flex items-center gap-2">
                <Github size={15} className="text-indigo-500" />
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="link-sweep">
                  GitHub
                </a>
              </span>
              <span className="inline-flex items-center gap-2">
                <Linkedin size={15} className="text-indigo-500" />
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="link-sweep">
                  LinkedIn
                </a>
              </span>
            </motion.div>
          </div>

          {/* Portrait card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, rotate: 3 }}
            animate={{ opacity: 1, scale: 1, rotate: 2 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-sm lg:max-w-none"
          >
            <div
              className="absolute -inset-3 rotate-6 rounded-[2rem] bg-gradient-to-br from-blue-500/25 via-indigo-400/20 to-purple-500/25 blur-[2px]"
              aria-hidden="true"
            />
            <div className="relative overflow-hidden rounded-[1.75rem] shadow-lift">
              <img
                src="https://public.youware.com/users-website-assets/prod/f56deba9-bc6e-4c8c-83e9-1137a4eaf366/fa040d797ee74a5482ba40e4f9ff53e4.jpg"
                alt="Modern developer workspace"
                className="h-[420px] w-full object-cover md:h-[500px]"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/85 via-gray-900/25 to-transparent" />

              {/* Monogram */}
              {/* <div className="absolute left-6 top-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/95 shadow-soft backdrop-blur">
                <span className="text-3xl font-extrabold text-gray-900">
                  <span className="text-purple-600">.</span>
                </span>
              </div> */}

              {/* Floating chips */}
              <div className="animate-float absolute right-5 top-8 rounded-full bg-white/90 px-4 py-2 shadow-soft backdrop-blur">
                <span className="text-xs font-semibold text-indigo-700">MERN Stack</span>
              </div>
              <div className="animate-float-slow absolute right-10 top-24 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 shadow-soft">
                <span className="text-xs font-semibold text-white">React · Node.js</span>
              </div>

              {/* Bottom facts */}
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-2xl font-bold text-white">Operations-honed precision</p>
                <p className="mt-1 text-sm text-white/70">
                  7+ years in high-volume financial data · now building for the web
                </p>
              </div>
            </div>

            <div className="animate-float-slow absolute -bottom-6 -left-4 rounded-2xl border border-indigo-100 bg-white px-5 py-4 shadow-lift md:-left-8">
              <p className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">7+</p>
              <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                Years experience
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Marquee ticker */}
      <div className="relative mt-16 overflow-hidden border-y border-gray-100 bg-gradient-to-r from-blue-50/60 via-white to-purple-50/60 py-4 select-none">
        <div className="marquee-mask flex overflow-hidden">
          <motion.div
            className="flex w-max shrink-0 items-center gap-10 pr-10 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 20, // speed adjust karne ke liye isko kam (fast) ya zyada (slow) kar sakte ho
            }}
          >
            {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((tech, i) => (
              <span key={`${tech}-${i}`} className="flex items-center gap-10">
                <span className="text-lg font-semibold text-gray-400 md:text-xl">
                  {tech}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shrink-0" />
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-5 pt-6 text-[11px] font-semibold uppercase tracking-[0.25em] text-gray-400 md:px-6">
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="flex h-8 w-5 items-start justify-center rounded-full border border-gray-300 p-1"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
        </motion.span>
        Scroll to explore
      </div>
    </section>
  );
};

export default Hero;
