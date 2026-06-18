import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function Amsoil() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="amsoil" ref={sectionRef} className="relative py-40 bg-[#050505] overflow-hidden">


      <div className="relative z-20 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Content */}
        <div className="flex flex-col items-start text-left">
          {/* Amsoil Logo Integration */}
          <motion.img 
            src="/amsoillogo.png" 
            alt="Amsoil Logo"
            className="h-16 md:h-20 lg:h-24 object-contain mb-8 origin-left"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          />



          <motion.h2 
            className="text-4xl md:text-5xl lg:text-7xl font-display font-bold tracking-tighter mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            PERFORMANCE.<br />
            PROTECTION.<br />
            PROVEN.
          </motion.h2>

          <motion.p 
            className="text-lg md:text-xl text-white/70 max-w-lg mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span className="text-white font-semibold">WE USE ONLY THE BEST.</span> Southern Longview Automotive is your exclusive provider of Amsoil synthetic oils for ultimate engine life and performance.
          </motion.p>


        </div>

        {/* Right Image / Visualization */}
        <motion.div 
          className="relative w-full flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >

          <img 
            src="/amsoilimage.png" 
            alt="Amsoil Synthetic Oil Products"
            className="relative z-10 w-full max-w-sm md:max-w-xl lg:max-w-2xl object-contain drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
