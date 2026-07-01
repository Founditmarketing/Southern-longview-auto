import { motion } from 'motion/react';
import { CircleDot } from 'lucide-react';

const brands = [
  'Acura', 'Audi', 'BMW', 'Buick', 'Cadillac', 'Chevrolet', 'Chrysler', 'Dodge',
  'Ford', 'GMC', 'Honda', 'Hummer', 'Hyundai', 'Infiniti', 'Jeep', 'Kia', 'Lexus',
  'Lincoln', 'Mazda', 'Mercedes', 'Mercury', 'Mitsubishi', 'Nissan', 'Oldsmobile',
  'Pontiac', 'RAM', 'Saturn', 'Scion', 'Subaru', 'Suzuki', 'Toyota', 'Volkswagen'
];

export default function BrandsServiced() {
  return (
    <section className="py-20 md:py-28 bg-[#050505] border-t border-white/5 relative overflow-hidden">
      
      {/* Dynamic Background Flare */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-red/5 rounded-full blur-[150px] pointer-events-none transform translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-yellow/5 rounded-full blur-[120px] pointer-events-none transform -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left mb-16"
        >
          <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
            <div className="w-8 h-[1px] bg-brand-yellow" />
            <span className="text-brand-yellow font-mono text-xs md:text-sm tracking-widest uppercase">Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-white tracking-tight leading-none uppercase">
            Vehicles We Service<span className="text-brand-red">.</span>
          </h2>
        </motion.div>

        {/* Dense Typography Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-6">
          {brands.map((brand, index) => (
            <motion.div
              key={brand}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.02, duration: 0.4 }}
              className="flex items-center gap-2 group cursor-default"
            >
              <CircleDot className="w-3 h-3 text-brand-red/50 group-hover:text-brand-yellow transition-colors duration-300" />
              <span className="text-white/60 font-medium tracking-wide uppercase text-xs md:text-sm group-hover:text-white transition-colors duration-300">
                {brand}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
