import { motion } from 'motion/react';

export default function DeepDive() {
  return (
    <section className="relative bg-gradient-to-r from-brand-red via-brand-red to-[#4a0005] border-t border-white/10 py-16 md:py-20 flex items-center overflow-hidden">
      {/* Dark Depth Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />

      <div className="relative z-20 w-full px-6 md:px-12 flex flex-col lg:grid lg:grid-cols-3 gap-10 lg:gap-8 xl:gap-16 items-center">
        
        {/* Text Header - Appears first on mobile, center on desktop */}
        <motion.div 
          className="text-center w-full lg:col-start-2 lg:col-end-3 order-1 lg:order-2 flex flex-col items-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-6 h-[2px] bg-brand-yellow hidden sm:block" />
            <span className="text-brand-yellow font-mono text-xs sm:text-sm tracking-widest uppercase">Video Spotlight</span>
            <div className="w-6 h-[2px] bg-brand-yellow hidden sm:block" />
          </div>
          <h2 className="text-4xl md:text-5xl xl:text-6xl font-display font-bold tracking-tighter text-white mb-6 uppercase">
            Inside the<br />Shop.
          </h2>
          <p className="text-white/70 text-base md:text-lg max-w-md mx-auto">
            Experience the raw dedication behind Southern Longview Automotive. From daily routines to specialized tooling.
          </p>
        </motion.div>

        {/* Video 1 - Appears second on mobile, left on desktop */}
        <motion.div 
          className="relative w-full pb-[56.25%] overflow-hidden border border-white/10 shadow-2xl bg-black order-2 lg:order-1 lg:col-start-1 lg:col-end-2 rounded-sm"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Absolute positioning handles keeping the 16:9 ratio fluid */}
          <iframe 
            className="absolute top-0 left-0 w-full h-full outline-none"
            src="https://www.youtube.com/embed/XpWFF_ZmkEY" 
            title="WE ARE A TRIBE" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
          />
        </motion.div>

        {/* Video 2 - Appears last on mobile, right on desktop */}
        <motion.div 
          className="relative w-full pb-[56.25%] overflow-hidden border border-white/10 shadow-2xl bg-black order-3 lg:order-3 lg:col-start-3 lg:col-end-4 rounded-sm"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <iframe 
             className="absolute top-0 left-0 w-full h-full outline-none"
             src="https://www.youtube.com/embed/SEDV8V7Wd-c" 
             title="Tool Tuesday hose clamp pliers" 
             frameBorder="0" 
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
             referrerPolicy="strict-origin-when-cross-origin" 
             allowFullScreen
          />
        </motion.div>

      </div>
    </section>
  );
}
