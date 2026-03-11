import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';

const Hero = ({ data }) => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-purple-500/10 blur-[120px] rounded-full" />

      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium mb-6 uppercase tracking-widest"
          >
            Available for new opportunities
          </motion.span>
          
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-8 leading-[1.1]">
            Experience design for the <br /> 
            <span className="text-gradient">modern cloud.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12 leading-relaxed">
            I'm {data.name}, a {data.title}. 
            Over 13 years of architecting scalable distributed systems that move businesses forward.
          </p>

          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-white text-black font-semibold rounded-full glow-on-hover flex items-center group"
            >
              View Projects
              <ArrowDownRight className="ml-2 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" size={20} />
            </motion.a>
            <a 
              href="#contact" 
              className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-full border border-white/10 transition-all text-sm"
            >
              Let's talk
            </a>
            <a 
              href={data.contact.appointment}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-sm font-medium underline underline-offset-8 decoration-primary/30 hover:decoration-primary transition-all"
            >
              Book a Meeting
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 text-sm hidden md:block"
      >
        Scroll to discover
      </motion.div>
    </section>
  );
};

export default Hero;
