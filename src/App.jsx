import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from './data/portfolioData';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-white selection:bg-primary/30 antialiased">
      <Navbar />
      
      <main>
        <Hero data={portfolioData} />
        
        <section id="about" className="py-24 px-6 border-y border-white/5">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight italic">
                Driven by curiosity, <br />
                <span className="text-gradient not-italic">defined by results.</span>
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed mb-8">
                {portfolioData.bio} I specialize in bridging the gap between complex backend architectures 
                and high-fidelity frontend experiences.
              </p>
            </motion.div>
          </div>
        </section>

        <Experience data={portfolioData.experience} />
        <Projects data={portfolioData.projects} />
        <Skills data={portfolioData.skills} />
        <Contact data={portfolioData.contact} />
      </main>

      <Footer data={portfolioData} />
    </div>
  );
}

export default App;
