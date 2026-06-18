import { motion } from 'motion/react';
import { KeyRound, CarFront, ShieldCheck, ClipboardCheck, Wrench } from 'lucide-react';

const perks = [
  { icon: KeyRound, title: '24 Hour Key Drop', description: 'Convenient after hours vehicle drop-off and pickup.' },
  { icon: CarFront, title: 'Courtesy Shuttle', description: 'Available for rides to and from in town.' },
  { icon: Wrench, title: 'Milestone Service', description: '30/60/90/120k mile scheduled maintenance performed.' },
  { icon: ClipboardCheck, title: 'Courtesy Inspection', description: 'Complimentary full inspection with every oil change.' },
  { icon: ShieldCheck, title: 'Parts Warranty', description: '12-month / 12,000 mile warranty on installed parts.' },
];

export default function ShopPerks() {
  return (
    <section className="bg-[#111111] border-y border-white/5 py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-red/5 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {perks.map((perk, index) => (
            <motion.div 
              key={perk.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`flex flex-col items-center text-center group ${index === 4 ? 'col-span-2 md:col-span-1' : ''}`}
            >
              <div className="w-16 h-16 bg-black rounded-sm border border-white/10 flex items-center justify-center mb-6 overflow-hidden relative shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-red/10 to-transparent group-hover:from-brand-yellow/20 transition-all duration-500" />
                <perk.icon className="w-6 h-6 text-brand-red group-hover:text-brand-yellow group-hover:scale-110 transition-all duration-300 relative z-10" />
              </div>
              <h4 className="text-white font-display font-bold uppercase tracking-wide mb-3 text-sm lg:text-base group-hover:text-brand-yellow transition-colors">{perk.title}</h4>
              <p className="text-white/60 font-medium text-xs md:text-sm leading-relaxed max-w-[200px]">{perk.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
