import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function CTA() {
  return (
    <section id="contact" className="relative py-40 bg-brand-black overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-brand-black/70 z-10" />
        <img 
          src="/southernlongviewsectionimage2.jpg" 
          alt="Southern Longview Auto Shop" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
        <motion.h2 
          className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tighter leading-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          READY TO EXPERIENCE UNPARALLELED AUTOMOTIVE EXCELLENCE?
        </motion.h2>
        
        <motion.p 
          className="text-xl md:text-2xl text-brand-yellow font-medium mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Precision is just a click away.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative inline-block group"
        >
          <Link to="/contact" className="relative bg-brand-yellow text-black px-10 py-5 text-lg font-bold tracking-wide hover:bg-brand-red hover:text-white hover:outline hover:outline-2 hover:outline-offset-4 hover:outline-brand-red transition-all duration-300 flex items-center gap-3">
            BOOK YOUR APPOINTMENT NOW
            <svg className="w-5 h-5 transform group-hover:rotate-45 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
