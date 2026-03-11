import React from 'react';
import { motion } from 'framer-motion';

const Skills = ({ data }) => {
  return (
    <section id="skills" className="py-24 px-6 bg-[#080808]">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-white">Technical Arsenal</h2>
          <p className="text-gray-500">The tools I use to turn ideas into digital reality.</p>
        </motion.div>

        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-4">
          {data.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ 
                scale: 1.1, 
                backgroundColor: "rgba(59, 130, 246, 0.1)",
                borderColor: "rgba(59, 130, 246, 0.4)"
              }}
              transition={{ 
                type: "spring", 
                stiffness: 260, 
                damping: 20,
                scale: { duration: 0.2 }
              }}
              viewport={{ once: true }}
              className="px-6 py-3 rounded-2xl border border-white/5 bg-white/[0.02] text-gray-300 font-medium cursor-default"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
