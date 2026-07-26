import React from "react";
import { motion } from "framer-motion";
import { personalInfo } from "../data/resume.js";
import { User, MapPin, Phone, Mail } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-20 blur-lg"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Who am I?</h3>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {personalInfo.about}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 text-gray-700">
                    <User className="text-blue-600" size={20} />
                    <span>{personalInfo.name}</span>
                  </div>

                  <div className="flex items-center gap-3 text-gray-700">
                    <MapPin className="text-blue-600" size={20} />
                    <span>{personalInfo.location}</span>
                  </div>

                  <div className="flex items-center gap-3 text-gray-700">
                    <Phone className="text-blue-600" size={20} />
                    <span>{personalInfo.phone}</span>
                  </div>

                  <div className="flex items-center gap-3 text-gray-700">
                    <Mail className="text-blue-600" size={20} />
                    <span className="text-sm">{personalInfo.email}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2 grid grid-cols-2 gap-6"
          >
            <div className="bg-blue-50 p-6 rounded-xl text-center hover:shadow-md transition-shadow">
              <h4 className="text-4xl font-bold text-blue-600 mb-2">7+</h4>
              <p className="text-gray-600 font-medium">Years Experience</p>
            </div>

            <div className="bg-purple-50 p-6 rounded-xl text-center hover:shadow-md transition-shadow">
              <h4 className="text-4xl font-bold text-purple-600 mb-2">2</h4>
              <p className="text-gray-600 font-medium">Projects</p>
            </div>

            <div className="bg-pink-50 p-6 rounded-xl text-center hover:shadow-md transition-shadow">
              <h4 className="text-4xl font-bold text-pink-600 mb-2">2</h4>
              <p className="text-gray-600 font-medium">Certifications</p>
            </div>

            <div className="bg-indigo-50 p-6 rounded-xl text-center hover:shadow-md transition-shadow">
              <h4 className="text-4xl font-bold text-indigo-600 mb-2">MCA</h4>
              <p className="text-gray-600 font-medium">Master's Degree</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
