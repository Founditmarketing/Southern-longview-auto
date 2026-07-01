import { motion } from 'motion/react';

const partners = [
  { name: 'Amsoil', logo: '/amsoillogo.png' },
  { name: 'BG Products', logo: '/BGproductslogo.png' },
  { name: 'Pro Charger', logo: '/procharger-logo.webp' },
  { name: 'S&B Filters', logo: '/SBFilterslogo.png' },
  { name: 'Jasper Engines', logo: '/jasper-go-logo.webp' },
  { name: 'Tire Rack', logo: '/tireracklogo.png' },
  { name: 'AC Delco', logo: '/acdelco_logo.png' },
  { name: 'Ford Powerstroke', logo: '/ford-powerstroke-sq.png' },
  { name: 'Ford Motorcraft', logo: '/fordmotocraftlogo.jpg' }
];

export default function Partners() {
  return (
    <section className="py-10 md:py-16 bg-[#0a0a0a] border-t border-b border-white/5 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-red/5 via-transparent to-brand-yellow/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-[1px] bg-brand-yellow" />
            <span className="text-brand-yellow font-mono text-xs tracking-widest uppercase">Trusted Products</span>
            <div className="w-8 h-[1px] bg-brand-yellow" />
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight uppercase mb-12">
            Authorized Dealer & Installer
          </h2>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-center justify-center p-2 group min-h-[80px] md:min-h-[100px] relative w-[40%] sm:w-[25%] lg:w-[15%]"
            >
              {/* If no image exists, this will fallback, but we're preparing it for correct src inputs */}
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className={`max-h-24 md:max-h-28 w-auto object-contain transition-transform duration-300 group-hover:scale-110 ${partner.name === 'S&B Filters' ? 'brightness-0 invert' : ''}`}
                onError={(e) => {
                  // Fallback for placeholder
                  (e.target as HTMLImageElement).style.display = 'none';
                  (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                }}
              />
              <span className="hidden font-display font-bold text-white/50 group-hover:text-white/90 text-sm md:text-base tracking-widest uppercase text-center transition-colors">
                {partner.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
