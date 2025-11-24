import React from 'react';
import { motion } from 'framer-motion';
import { skills, certifications } from '../data/resume';
import { Code, Database, Server, Wrench, Award } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    { title: 'Frontend', icon: <Code size={20} />, skills: skills.frontend, color: 'blue' },
    { title: 'Backend', icon: <Server size={20} />, skills: skills.backend, color: 'purple' },
    { title: 'Database', icon: <Database size={20} />, skills: skills.database, color: 'green' },
    { title: 'Tools', icon: <Wrench size={20} />, skills: skills.tools, color: 'orange' },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Skills & Certifications
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto">

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100"
              >
                <div className={`w-12 h-12 rounded-lg bg-${category.color}-100 text-${category.color}-600 flex items-center justify-center mb-4`}>
                  {category.icon}
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <Award className="text-yellow-500" size={28} />
              <h3 className="text-2xl font-bold text-gray-800">
                Certifications
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <motion.a
                  key={cert.id}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100"
                >
                  <div className="mt-1 p-2 bg-yellow-100 text-yellow-600 rounded-lg">
                    <Award size={20} />
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-gray-800">
                      {cert.title}
                    </h4>
                    <p className="text-blue-600 font-medium text-sm">
                      {cert.issuer}
                    </p>
                    <p className="text-gray-500 text-sm mt-1">
                      {cert.period}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
