import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import PageSEO from '../components/PageSEO';

export default function ContactPage() {

  return (
    <div className="min-h-[100vh] bg-[#050505] text-white pt-48 md:pt-56 pb-20 relative flex flex-col justify-center">
      <PageSEO
        title="Contact Us | Southern Longview Automotive"
        description="Contact Southern Longview Automotive at (903) 653-4901 or visit us at 415 W Marshall Ave, Longview, TX 75601 to schedule your next service."
        path="/contact"
      />
{/* Background Graphic */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-full opacity-5 pointer-events-none z-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="contactGrid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#contactGrid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left Side: Communication Hub */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-start"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-brand-yellow" />
              <span className="text-brand-yellow font-mono text-sm tracking-widest uppercase">Get in Touch</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter leading-tight mb-8">
              LET'S GET TO<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-900">WORK.</span>
            </h1>

            <p className="text-white/60 text-lg md:text-xl leading-relaxed mb-12 max-w-lg font-medium">
              We're here to keep your vehicle running strong. Reach out to our team of expert mechanics to schedule your next service or repair.
            </p>

            <div className="space-y-6">
              <a href="tel:9036534901" className="bg-[#0a0a0a] border border-white/5 p-6 flex flex-col items-start hover:border-brand-yellow transition-all duration-300 group shadow-xl">
                <div className="flex items-center gap-3 mb-2">
                  <Phone size={18} className="text-brand-yellow group-hover:animate-pulse" />
                  <span className="text-white/50 text-xs font-mono uppercase tracking-[0.2em]">Call the Shop</span>
                </div>
                <span className="text-2xl font-bold tracking-widest group-hover:text-brand-yellow transition-colors">(903) 653-4901</span>
              </a>

              <a href="mailto:soloautomotive@hotmail.com" className="bg-[#0a0a0a] border border-white/5 p-6 flex flex-col items-start hover:border-brand-red transition-all duration-300 group shadow-xl">
                <div className="flex items-center gap-3 mb-2">
                  <Mail size={18} className="text-brand-red group-hover:animate-pulse" />
                  <span className="text-white/50 text-xs font-mono uppercase tracking-[0.2em]">Email the Shop</span>
                </div>
                <span className="text-lg font-bold tracking-widest text-white/80 group-hover:text-white transition-colors break-all">soloautomotive@hotmail.com</span>
              </a>

              <div className="bg-[#0a0a0a] border border-white/5 p-6 flex flex-col items-start shadow-xl">
                <div className="flex items-center gap-3 mb-2">
                  <MapPin size={18} className="text-white/40" />
                  <span className="text-white/50 text-xs font-mono uppercase tracking-[0.2em]">Visit the Shop</span>
                </div>
                <span className="text-lg font-bold tracking-widest text-white/80">415 W Marshall Ave<br/>Longview, TX 75601</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-[#0a0a0a] border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.8)]"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
