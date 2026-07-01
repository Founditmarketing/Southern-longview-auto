import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MessageCircle } from 'lucide-react';

export default function FloatingContactMenu() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Prevent background scrolling when modal is open on mobile
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.8) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        if (window.scrollY < 100) setIsOpen(false); 
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
             className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm sm:hidden"
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-4 sm:right-8 z-50 w-[calc(100vw-2rem)] sm:w-[450px] h-[500px] sm:h-[650px] max-h-[75vh] sm:max-h-[85vh] bg-brand-black border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.05)] flex flex-col origin-bottom-right rounded-none overflow-hidden"
            initial={{ scale: 0.8, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 30 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* Friendly Header */}
            <div className="p-4 border-b border-white/10 bg-[#0a0a0a] flex justify-between items-center shrink-0">
              <h3 className="text-lg font-display font-bold text-white flex items-center gap-3">
                <span className="w-2.5 h-2.5 bg-brand-red rounded-full shadow-[0_0_10px_rgba(190,28,45,0.8)] animate-pulse shrink-0" />
                <span className="truncate">Book an Appointment <span className="text-[10px] sm:text-xs text-white/50 font-mono ml-1 font-normal tracking-wide">(Scroll)</span></span>
              </h3>
              <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white sm:hidden transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Iframe Container */}
            <div className="flex-1 w-full relative bg-white overflow-y-auto" style={{ WebkitOverflowScrolling: 'touch' }}>
              <iframe 
                src="https://booking.tekmetric.com/?shop=7f037757-80ee-4104-a912-1ae7ab5abf58"
                className="absolute inset-0 w-full h-full border-0"
                title="Tekmetric Booking"
                scrolling="yes"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isVisible && (
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className={`fixed bottom-6 right-4 sm:right-8 z-50 w-14 h-14 md:w-16 md:h-16 rounded-none flex items-center justify-center transition-all duration-300 backdrop-blur-md ${
              isOpen 
                ? 'bg-black/40 border border-white/20 text-white/50 hover:text-white hover:bg-black/60' 
                : 'bg-brand-red/40 border border-white/20 text-white hover:bg-brand-red/60 hover:scale-105'
            }`}
            initial={{ opacity: 0, y: 50, scale: 0.5 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
          >
            <motion.div
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              {isOpen ? (
                <X size={26} strokeWidth={1} />
              ) : (
                <MessageCircle size={28} strokeWidth={1} />
              )}
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
