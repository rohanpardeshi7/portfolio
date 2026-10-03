import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, LayoutTemplate } from "lucide-react";
import { projects } from "../data/resume.js";

const Projects = () => {
  return (
    <section id="projects" className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 py-24 md:py-32">
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-purple-400/10 blur-[120px]" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-40 bottom-20 h-96 w-96 rounded-full bg-blue-400/10 blur-[120px]" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-5 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center gap-3 text-center"
        >
          <span className="rounded-full bg-indigo-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-indigo-600">
            Projects
          </span>
          <h2 className="max-w-2xl text-3xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
            Things I've{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              designed &amp; shipped
            </span>
            .
          </h2>
          <div className="h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 to-purple-600" />
          <p className="mt-2 max-w-xl text-gray-500">
            From a full-stack furniture store with an admin control panel to a responsive
            ecommerce frontend — real products, real repositories.
          </p>
        </motion.div>

        <div className="mt-14 space-y-8">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className={`group grid gap-8 overflow-hidden rounded-[1.75rem] border border-gray-100 bg-white shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift lg:grid-cols-2 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Visual */}
              <div
                className={`relative min-h-[260px] overflow-hidden bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-700 lg:min-h-[380px] ${
                  i % 2 === 1 ? "lg:rounded-r-none" : "lg:rounded-l-none"
                }`}
              >
                {project.image ? (
                  <>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </>
                ) : (
                  /* Stylized code-window visual for the full-stack project */
                  <div className="absolute inset-0 flex flex-col p-6 md:p-8">
                    <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
                    <div className="relative flex items-center gap-2">
                      <span className="h-3 w-3 rounded-full bg-red-400/80" />
                      <span className="h-3 w-3 rounded-full bg-amber-400/80" />
                      <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
                      <span className="ml-3 truncate font-mono text-[11px] text-white/50">
                        furniture-store / admin panel
                      </span>
                    </div>
                    <pre className="relative mt-5 flex-1 overflow-hidden font-mono text-[12px] leading-relaxed text-white/80 md:text-[13px]">
{`router.post("/login", auth, async (req, res) => {
  const token = jwt.sign({ id }, JWT_SECRET);
  res.json({ token, user });
});

// Admin: manage categories, sliders,
// materials, colors & total orders
`}
                    </pre>
                    <div className="relative mt-4 grid grid-cols-3 gap-2">
                      {["Products", "Sliders", "Orders"].map((label) => (
                        <div
                          key={label}
                          className="rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-center text-[11px] font-medium uppercase tracking-wider text-white/70 backdrop-blur"
                        >
                          {label}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Index badge */}
                <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/95 shadow-soft backdrop-blur">
                  <span className="text-lg font-extrabold text-gray-900">0{i + 1}</span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center p-7 md:p-10">
                <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-indigo-600">
                  {project.subtitle}
                </p>
                <h3 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 transition-colors group-hover:text-indigo-700 md:text-4xl">
                  {project.title}
                </h3>
                <p className="mt-4 text-gray-600">{project.description}</p>

                {project.bullets && (
                  <ul className="mt-5 space-y-2.5">
                    {project.bullets.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-600">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-indigo-100 bg-indigo-50/70 px-3.5 py-1.5 text-xs font-medium text-indigo-700 transition-colors group-hover:border-indigo-200 group-hover:bg-indigo-50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_25px_-10px_rgba(79,70,229,0.6)] transition-all hover:shadow-[0_14px_32px_-10px_rgba(79,70,229,0.7)] hover:brightness-110"
                >
                  {project.image ? <LayoutTemplate size={15} /> : <Github size={15} />}
                  {project.linkLabel}
                  <ArrowUpRight
                    size={15}
                    className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                  />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
