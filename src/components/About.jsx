import React from "react";
import { motion } from "framer-motion";
import { User, MapPin, Phone, Mail, GraduationCap, Download } from "lucide-react";
import { personalInfo, stats } from "../data/resume.js";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const statAccents = [
  "from-blue-500 to-blue-600",
  "from-indigo-500 to-indigo-600",
  "from-purple-500 to-purple-600",
  "from-fuchsia-500 to-purple-600",
];

const About = () => {
  return (
    <section id="about" className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/70 to-white py-24 md:py-32">
      {/* Ambient orbs */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-32 top-32 h-96 w-96 rounded-full bg-blue-400/10 blur-[120px]" />
        <div className="absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-purple-400/10 blur-[120px]" />
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
            About Me
          </span>
          <h2 className="max-w-2xl text-3xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
            An operations mindset, applied to{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              full-stack code
            </span>
            .
          </h2>
          <div className="h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 to-purple-600" />
        </motion.div>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Bio */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            <p className="text-lg leading-relaxed text-gray-600 md:text-xl">{personalInfo.about}</p>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
                >
                  <div
                    className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${statAccents[i]} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                  />
                  <p className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {stat.value}
                  </p>
                  <p className="mt-1.5 text-[12px] font-medium uppercase tracking-wide text-gray-500">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="group mt-8 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50/60 px-6 py-3 text-sm font-semibold text-indigo-700 transition-all hover:border-indigo-300 hover:bg-indigo-50 hover:shadow-soft"
            >
              <Download size={15} className="transition-transform group-hover:translate-y-0.5" />
              Download full resume
            </motion.a>
          </motion.div>

          {/* Profile card */}
          <motion.aside
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-fit overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-700 p-8 text-white shadow-lift lg:sticky lg:top-28"
          >
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-purple-300/20 blur-2xl" />

            <p className="relative text-2xl font-bold">At a glance</p>
            <dl className="relative mt-6 space-y-5 text-sm">
              {[
                { icon: User, k: "Name", v: personalInfo.name },
                { icon: GraduationCap, k: "Role", v: personalInfo.role },
                { icon: MapPin, k: "Location", v: personalInfo.location },
                { icon: Phone, k: "Phone", v: personalInfo.phone },
                { icon: Mail, k: "Email", v: personalInfo.email },
              ].map(({ icon: Icon, k, v }) => (
                <div key={k} className="flex items-start gap-3 border-b border-white/10 pb-4 last:border-0 last:pb-0">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10">
                    <Icon size={14} className="text-white/90" />
                  </span>
                  <div className="min-w-0">
                    <dt className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/50">{k}</dt>
                    <dd className="break-words text-white/95">{v}</dd>
                  </div>
                </div>
              ))}
            </dl>
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-indigo-700 transition-transform hover:scale-[1.02]"
            >
              <Download size={15} /> View full resume
            </a>
          </motion.aside>
        </div>
      </div>
    </section>
  );
};

export default About;
