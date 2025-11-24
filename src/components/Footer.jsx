import React from 'react';
import { personalInfo } from '../data/resume';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              RP
            </a>
            <p className="text-gray-400 mt-2 max-w-xs">
              Building digital experiences with passion and precision.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <p className="text-gray-400 text-sm mb-2">
              &copy; {currentYear} {personalInfo.name}. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs flex items-center gap-1">
              Made with <Heart size={12} className="text-red-500 fill-red-500" /> using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
