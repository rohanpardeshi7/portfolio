import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award, CalendarDays, MapPin, Building2 } from "lucide-react";
import { experience, education, certifications, internship } from "../data/resume.js";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const Experience = () => {
  return (
    <section id="experience" className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 py-24 md:py-32">
      {/* Ambient orbs */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-blue-400/10 blur-[120px]" />
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
            Experience
          </span>
          <h2 className="max-w-2xl text-3xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
            Where precision meets{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              production
            </span>
            .
          </h2>
          <div className="h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 to-purple-600" />
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-16">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-[19px] top-2 bottom-2 hidden w-0.5 origin-top bg-gradient-to-b from-blue-500 via-indigo-400 to-purple-500 md:block"
          />

          <div className="space-y-8">
            {/* 1. Internship (Sabse Pehle + Remote/Online Badge) */}
            {internship && (
              <motion.article
                custom={0}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                className="group relative grid gap-6 rounded-[1.5rem] border border-dashed border-indigo-200 bg-indigo-50/30 p-7 transition-all duration-500 hover:border-indigo-300 hover:bg-indigo-50/60 md:grid-cols-[auto_1fr] md:gap-8 md:p-8"
              >
                <div className="hidden md:block">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-indigo-300 bg-white">
                    <Award size={16} className="text-indigo-500" />
                  </div>
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-indigo-600 shadow-soft">
                      <CalendarDays size={12} />
                      {internship.period}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                      Certification Course
                    </span>
                    {/* Remote / Online Badge */}
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-semibold tracking-wider text-emerald-600">
                      <MapPin size={12} />
                      {internship.location || "Remote (Online)"}
                    </span>
                  </div>

                  <h3 className="mt-4 text-2xl font-bold text-gray-900">{internship.role}</h3>
                  <p className="mt-1.5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.15em] text-indigo-600">
                    <Building2 size={14} />
                    {internship.company}
                  </p>

                  <ul className="mt-5 space-y-3">
                    {internship.description.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-600">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-300" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            )}

            {/* 2 & 3. Experience Items (Assistant in Toll Operations pehle, Chargeback last me) */}
            {experience.map((job, i) => (
              <motion.article
                key={job.id}
                custom={i + 1}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                className="group relative grid gap-6 rounded-[1.5rem] border border-gray-100 bg-white p-7 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lift md:grid-cols-[auto_1fr] md:gap-8 md:p-8"
              >
                {/* Node */}
                <div className="hidden md:block">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-purple-600 shadow-[0_8px_20px_-8px_rgba(79,70,229,0.6)]">
                    <Briefcase size={16} className="text-white" />
                  </div>
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-indigo-600">
                      <CalendarDays size={12} />
                      {job.period}
                    </span>
                    {job.current && (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-emerald-600">
                        <span className="h-1.5 w-1.5 animate-soft-pulse rounded-full bg-emerald-500" />
                        Current
                      </span>
                    )}
                    <span className="inline-flex items-center gap-1.5 text-xs text-gray-400">
                      <MapPin size={12} />
                      {job.location}
                    </span>
                  </div>

                  <h3 className="mt-4 text-2xl font-bold text-gray-900 transition-colors group-hover:text-indigo-700 md:text-3xl">
                    {job.role}
                  </h3>
                  <p className="mt-1.5 inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-sm font-semibold uppercase tracking-[0.15em] text-transparent">
                    <Building2 size={14} className="text-indigo-500" />
                    {job.company}
                  </p>

                  <ul className="mt-5 space-y-3">
                    {job.description.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-600">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Education & Certification row */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {education.map((edu, i) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group rounded-[1.25rem] border border-gray-100 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lift"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-purple-600">
                  <GraduationCap size={18} className="text-white" />
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gray-400">
                  Education
                </span>
              </div>
              <h3 className="mt-4 text-lg font-bold text-gray-900">{edu.degree}</h3>
              <a
                href={edu.link}
                target="_blank"
                rel="noopener noreferrer"
                className="link-sweep mt-1 inline-block text-sm text-indigo-600"
              >
                {edu.institution}
              </a>
              <p className="mt-3 inline-flex items-center gap-1.5 text-xs text-gray-400">
                <CalendarDays size={12} />
                {edu.period}
              </p>
            </motion.div>
          ))}

          {certifications.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              className="group rounded-[1.25rem] border border-gray-100 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-purple-200 hover:shadow-lift"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600">
                  <Award size={18} className="text-white" />
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gray-400">
                  Certification
                </span>
              </div>
              <h3 className="mt-4 text-lg font-bold text-gray-900">{cert.title}</h3>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="link-sweep mt-1 inline-block text-sm text-indigo-600"
              >
                {cert.issuer}
              </a>
              <p className="mt-3 inline-flex items-center gap-1.5 text-xs text-gray-400">
                <CalendarDays size={12} />
                {cert.period}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;