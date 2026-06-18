import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 'things-we-do',
    title: 'THINGS WE DO',
    image: '/New photos/IMG_5871.jpeg',
    subtitle: 'BUMPER TO BUMPER — GAS & DIESEL',
    description: [
      'Comprehensive Diagnostics — Every System',
      'Gas & Diesel Engine Repair & Replacement',
      'Transmission Service & Replacement',
      'Electrical, A/C & Heating Systems',
      'Brakes, Steering & Suspension',
      'Scheduled Maintenance & Oil Changes',
      'Tires, Alignments & Road Force Balancing',
      'All Makes & Models — Dealer-Level Service'
    ]
  },
  {
    id: 'gas-engines',
    title: 'GAS ENGINES',
    image: '/gas-engine-bay.jpeg',
    subtitle: 'DAILY DRIVERS TO V8 POWER',
    description: [
      'Gas Engine & Drivability Diagnostics',
      'Tune Ups & Spark Plugs',
      'Timing Belts & Chains',
      'Fuel Injection & Induction Service',
      'Cooling System Repairs',
      'Engine Repair & Full Replacements'
    ]
  },
  {
    id: 'diesels',
    title: 'DIESELS',
    image: '/New photos/IMG_5887.jpeg',
    subtitle: 'HEAVY DUTY POWER',
    description: [
      'Diesel Engine Diagnostics & Repair',
      'Diesel Engine Replacements',
      'S&S Disaster Prevention Kits',
      'S&B Air Filters',
      'S&B Body Mounts',
      'Diesel Preventative Maintenance'
    ]
  },
  {
    id: 'fleet',
    title: 'FLEET WORK',
    image: '/fleet.png',
    subtitle: 'KEEP YOUR FLEET RELIABLE',
    description: [
      'Priority Fleet Scheduling',
      'Preventative Maintenance',
      'Comprehensive Service Records',
      'Quick Turnaround Times'
    ]
  },
  {
    id: 'specialty',
    title: 'SPECIALTY SERVICES',
    image: '/specialitycar.jpg',
    subtitle: 'CLASSIC, CUSTOM & MODIFIED',
    description: [
      'Holley & Sniper EFI Install, Tuning & Repair',
      'Carburetor Replacement & Tuning',
      'Vintage Air Installs',
      'Dakota Digital Instrument Clusters',
      'ProCharger Supercharger Kits',
      'Air Ride Suspensions & Lift Kits',
      'LS Swap Solutions',
      '1234YF A/C Refrigerant Service'
    ]
  }
];

export default function Services() {
  const [activeTab, setActiveTab] = useState(services[0].id);

  return (
    <section id="services" className="pt-32 pb-32 bg-brand-black relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 
          className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          COMPREHENSIVE<br />SERVICES.
        </motion.h2>

        {/* Segmented Controls */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 md:mb-12 md:border-b md:border-white/10 md:pb-4">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveTab(service.id)}
              className={`px-3 py-2 md:px-6 md:py-3 text-[10px] sm:text-xs md:text-sm font-bold tracking-widest uppercase transition-all duration-300 ${
                activeTab === service.id 
                  ? 'bg-white text-black shadow-lg shadow-white/10' 
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              {service.title}
            </button>
          ))}
        </div>

        {/* Visual Cards */}
        <div className="w-full overflow-hidden bg-brand-black border border-white/5">
          <AnimatePresence mode="wait">
            {services.map((service) => (
              service.id === activeTab && (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col-reverse md:flex-row w-full h-auto md:min-h-[600px]"
                >
                  {/* Image Side */}
                  <div className="w-full md:w-1/2 h-[350px] md:h-auto relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10 md:hidden" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-transparent z-10 hidden md:block" />
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  {/* Text Side */}
                  <div className="w-full md:w-1/2 py-10 px-6 sm:p-10 md:p-12 flex flex-col justify-center bg-[#0a0a0a] z-20 relative">
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2, duration: 0.4 }}
                    >
                      <div className="text-brand-red font-mono text-[10px] sm:text-xs tracking-widest mb-3 uppercase flex items-center gap-3">
                        <div className="w-4 h-[1px] bg-brand-red" />
                        {service.subtitle}
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-display font-bold mb-6 tracking-tight">{service.title}</h3>
                      
                      <div className={`grid gap-3 mb-10 ${service.description.length > 6 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'}`}>
                        {service.description.map((item, i) => (
                           <div key={i} className="flex items-start gap-2">
                             <span className="text-brand-red mt-1">▹</span>
                             <span className="text-white/80 font-medium text-sm leading-snug">{item}</span>
                           </div>
                        ))}
                      </div>

                      <Link to={`/contact`} className="text-brand-yellow font-bold tracking-widest text-xs flex items-center gap-3 group px-6 py-3 border border-brand-yellow/30 hover:bg-brand-red hover:text-white hover:border-brand-red transition-all duration-300 w-max shadow-xl">
                        BOOK AN APPOINTMENT
                        <span className="transform transition-transform group-hover:translate-x-1">→</span>
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
