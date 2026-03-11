import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, ArrowRight } from 'lucide-react';

const Contact = ({ data }) => {
  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full -z-10" />
      
      <div className="container mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter leading-tight">
            Ready to build <br /> <span className="text-gradient">something legendary?</span>
          </h2>
          
          <p className="text-xl text-gray-400 mb-12 max-w-xl mx-auto leading-relaxed">
            I'm currently open to new opportunities and interesting collaborations. 
            If you have a challenge, let's solve it together.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8">
            <motion.a
              href={data.appointment}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-primary text-white font-bold rounded-full flex items-center shadow-[0_0_30px_rgba(59,130,246,0.3)] group"
            >
              <Send className="mr-3" size={20} />
              Book a Meeting
              <ArrowRight className="ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" size={20} />
            </motion.a>

            <motion.a
              href={`mailto:${data.email}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-full border border-white/10 flex items-center group transition-all"
            >
              <Mail className="mr-3 text-primary" size={20} />
              Say Hello
            </motion.a>
            
            <div className="flex flex-col items-center md:items-start border-l border-white/10 pl-8">
              <span className="text-[10px] text-gray-500 uppercase tracking-[0.2em] mb-1 font-bold">Direct Call</span>
              <a href={`tel:${data.phone}`} className="text-lg font-medium hover:text-primary transition-colors">{data.phone}</a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
