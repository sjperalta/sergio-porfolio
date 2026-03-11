import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = ({ data }) => {
  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-background">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 text-center md:text-left">
        <div className="flex flex-col space-y-2">
          <p className="text-xl font-bold tracking-tighter">SP<span className="text-primary">.</span></p>
          <p className="text-xs text-gray-500 font-medium">© {new Date().getFullYear()} {data.name}. All rights reserved.</p>
        </div>

        <div className="flex items-center space-x-6">
          <a href={data.contact.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
            <Github size={20} />
          </a>
          <a href={data.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
            <Linkedin size={20} />
          </a>
          <a href={`mailto:${data.contact.email}`} className="text-gray-500 hover:text-white transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
