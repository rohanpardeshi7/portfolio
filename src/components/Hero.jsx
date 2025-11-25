import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/resume';

const roles = [
  "React JS Frontend Developer",
  "MERN Stack Developer",
  "Full Stack Developer",
  "Web Developer"
];

export default function Hero() {

  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = deleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!deleting) {
        if (charIndex < currentRole.length) {
          setText(currentRole.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setDeleting(true), 1200); // pause before deleting
        }
      } else {
        if (charIndex > 0) {
          setText(currentRole.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://public.youware.com/users-website-assets/prod/f56deba9-bc6e-4c8c-83e9-1137a4eaf366/fa040d797ee74a5482ba40e4f9ff53e4.jpg"
          alt="Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/80 to-white"></div>
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-3xl mx-auto text-center">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
              Welcome to my portfolio
            </span>

            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </h1>

            {/* 🔥 Animated Role */}
            <h2 className="text-2xl md:text-3xl text-gray-700 mb-6 font-light">
              {text}
              <span className="border-r-2 border-gray-700 ml-1 animate-pulse"></span>
            </h2>

            <p className="text-xl text-gray-500 mb-8 max-w-2xl mx-auto">
              {personalInfo.tagline}. {personalInfo.about.split('.')[0]}.
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#contact"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:shadow-lg hover:scale-105 transition-all flex items-center gap-2"
            >
              Contact Me <ArrowRight size={18} />
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full bg-white border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 hover:shadow-md transition-all flex items-center gap-2"
            >
              Download Resume <Download size={18} />
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 flex justify-center gap-6"
          >
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-colors"
            >
              <Github size={24} />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 hover:text-blue-700 transition-colors"
            >
              <Linkedin size={24} />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="p-3 rounded-full bg-purple-50 text-purple-600 hover:bg-purple-100 hover:text-purple-700 transition-colors"
            >
              <Mail size={24} />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
