import React from "react";
import { motion } from "framer-motion";
import { Code2, Server, Database, Wrench, Sparkles } from "lucide-react";
import { skills } from "../data/resume.js";

const categories = [
  {
    key: "frontend",
    title: "Frontend",
    icon: Code2,
    gradient: "from-blue-500 to-indigo-600",
    chip: "bg-blue-50 text-blue-700 border-blue-100 group-hover:border-blue-300",
  },
  {
    key: "backend",
    title: "Backend",
    icon: Server,
    gradient: "from-indigo-500 to-purple-600",
    chip: "bg-indigo-50 text-indigo-700 border-indigo-100 group-hover:border-indigo-300",
  },
  {
    key: "database",
    title: "Database",
    icon: Database,
    gradient: "from-purple-500 to-fuchsia-600",
    chip: "bg-purple-50 text-purple-700 border-purple-100 group-hover:border-purple-300",
  },
  {
    key: "tools",
    title: "Tools",
    icon: Wrench,
    gradient: "from-slate-600 to-slate-800",
    chip: "bg-slate-50 text-slate-700 border-slate-200 group-hover:border-slate-400",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/70 to-white py-24 md:py-32">
      <div className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-indigo-400/10 blur-[120px]" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-5 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center gap-3 text-center"
        >
          <span className="rounded-full bg-indigo-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-indigo-600">
            Toolkit
          </span>
          <h2 className="max-w-2xl text-3xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
            The stack behind the{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              work
            </span>
            .
          </h2>
          <div className="h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 to-purple-600" />
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            const items = skills[cat.key] || [];
            return (
              <motion.div
                key={cat.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group relative overflow-hidden rounded-[1.25rem] border border-gray-100 bg-white p-7 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift"
              >
                <div
                  className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${cat.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                />
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${cat.gradient} text-white shadow-[0_8px_20px_-8px_rgba(79,70,229,0.5)] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}
                >
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 text-xl font-bold text-gray-900">{cat.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className={`rounded-full border px-3 py-1.5 text-[12px] font-medium transition-colors ${cat.chip}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Highlight strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="group relative mt-10 overflow-hidden rounded-[1.25rem] border border-indigo-100 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 p-7"
        >
          <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-purple-200/40 blur-2xl transition-transform duration-500 group-hover:scale-125" />
          <div className="relative flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-[0_8px_20px_-8px_rgba(79,70,229,0.6)]">
              <Sparkles size={20} />
            </span>
            <p className="text-gray-700">
              <span className="font-semibold text-gray-900">Currently sharpening:</span> MERN Stack
              Development certification at WS Cube Tech — deepening full-stack fundamentals across
              MongoDB, Express, React and Node.js.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
