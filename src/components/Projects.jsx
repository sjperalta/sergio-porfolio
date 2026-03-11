import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code2 } from 'lucide-react';

const Projects = ({ data }) => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Selected Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto italic">A glimpse into some of the complex systems I've helped craft.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="glass-morphism rounded-3xl p-8 group hover:border-primary/50 transition-colors flex flex-col h-full"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 bg-primary/10 rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Code2 size={24} />
                </div>
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">{project.year}</span>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-8 flex-grow leading-relaxed">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-[10px] text-gray-500 font-medium">#{t}</span>
                ))}
              </div>

              <a 
                href={project.url || "#"} 
                target={project.url && project.url !== "#" ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-semibold text-white group-hover:text-primary transition-colors"
              >
                {project.url && project.url !== "#" ? "Visit Website" : "View Details"} <ExternalLink size={16} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
