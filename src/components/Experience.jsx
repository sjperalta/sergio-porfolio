import React from 'react';
import { motion } from 'framer-motion';

const Experience = ({ data }) => {
  return (
    <section id="experience" className="py-24 px-6 bg-[#080808]">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Professional Experience</h2>
          <p className="text-gray-400">The journey of a thousand lines of code.</p>
        </motion.div>

        <div className="space-y-12">
          {data.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l border-white/10 group pb-4"
            >
              <div className="absolute top-0 -left-[5px] w-[9px] h-[9px] rounded-full bg-primary group-hover:scale-150 transition-transform shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{item.role}</h3>
                  <p className="text-primary font-medium">{item.company}</p>
                </div>
                <span className="text-sm text-gray-500 font-mono mt-2 md:mt-0">{item.period}</span>
              </div>

              <div className="mb-6">
                <ul className="space-y-3">
                  {item.highlights.map((bullet, i) => (
                    <li key={i} className="text-gray-400 text-sm flex items-start">
                      <span className="mr-3 text-primary">•</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {item.tech.map((t, i) => (
                  <span key={i} className="px-3 py-1 bg-white/5 border border-white/5 rounded-md text-[10px] text-gray-400 uppercase tracking-widest">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
