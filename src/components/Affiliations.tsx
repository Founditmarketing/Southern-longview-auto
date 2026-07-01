import { motion } from 'motion/react';

const affiliations = [
  { name: 'Certified Auto', image: '/certifiedautorepair-logo.png' },
  { name: 'BBB A+ Rating', image: '/BBB-Accreditation.webp' },
  { name: 'ASE Certified', image: '/ASE-Logo.png' },
  { name: 'NFIB', image: '/NFIB_Logo.png' },
  { name: 'Longview Chamber of Commerce', image: '/longviewchamberofcommercelogo.png' }
];

export default function Affiliations() {
  return (
    <section className="relative bg-[#0a0a0a] border-t border-white/10 py-8 md:py-10 flex items-center overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center w-full">
        
        <div className="flex items-center gap-4 mb-8">
          <div className="w-8 h-[1px] bg-brand-yellow" />
          <h3 className="text-brand-yellow font-mono text-sm tracking-widest uppercase">
            Proudly Affiliated With
          </h3>
          <div className="w-8 h-[1px] bg-brand-yellow" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-10 lg:gap-16 items-center justify-items-center w-full opacity-80">
          {affiliations.map((item, index) => (
             <motion.div
               key={item.name}
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: index * 0.1, duration: 0.5 }}
               className={`flex flex-col items-center justify-center relative group flex-shrink-0 ${item.name === 'Longview Chamber of Commerce' ? 'col-span-2 md:col-span-1' : ''}`}
             >
               <img 
                 src={item.image} 
                 alt={item.name} 
                 className={`${item.name === 'ASE Certified' ? 'max-h-16 sm:max-h-20 md:max-h-24' : 'max-h-10 sm:max-h-12 md:max-h-12'} w-auto object-contain group-hover:scale-105 transition-transform duration-300 ${item.name === 'NFIB' ? 'brightness-0 invert' : ''}`}
                 onError={(e) => {
                   // Fallback for placeholder
                   (e.target as HTMLImageElement).style.display = 'none';
                   (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                 }}
               />
               <span className="hidden font-display font-bold text-white text-sm md:text-base tracking-wider uppercase text-center mt-2 group-hover:text-brand-yellow transition-colors">
                 {item.name}
               </span>
             </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
