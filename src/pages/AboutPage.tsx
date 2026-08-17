import { motion } from 'motion/react';
import PageSEO from '../components/PageSEO';

export default function AboutPage() {
  return (
    <div className="bg-brand-black min-h-screen text-white pt-0 pb-0">
      <PageSEO
        title="About Us | Southern Longview Automotive"
        description="A small, family-oriented auto repair shop in Longview, TX offering honest, bumper-to-bumper service on gas and diesel vehicles, hot rods, and restorations."
        path="/about"
      />

      {/* Sleek Banner Hero */}
      <section className="relative h-[40vh] min-h-[300px] w-full border-b border-brand-red/30 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/80 to-transparent z-10" />
        <img 
          src="/New photos/Team_1.jpeg" 
          alt="Southern Longview Auto Shop" 
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="relative z-20 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center pt-24 md:pt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-[1px] bg-brand-red" />
              <span className="text-brand-red font-mono text-sm tracking-widest uppercase">Our Story</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter uppercase mb-2">
              Between the<br />Bumpers.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Content Region */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        
        {/* Top Row: Owner & Manifesto */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-24">
          
          {/* Matt Ryan Card */}
          <motion.div 
            className="lg:col-span-1 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-display font-bold text-white tracking-tight mb-1">Matt Ryan</h3>
            <p className="text-brand-yellow font-mono text-sm tracking-widest uppercase mb-8">Owner / Technician</p>
            <div className="relative w-full max-w-[400px] lg:max-w-full aspect-square overflow-hidden border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.5)] group">
              <div className="absolute inset-0 bg-brand-yellow/0 group-hover:bg-brand-red/20 transition-colors duration-500 z-10 mix-blend-overlay" />
              <img 
                src="/New photos/Matt_Ryan_1.jpeg" 
                alt="Matt Ryan" 
                className="absolute inset-0 w-full h-full object-cover object-top transform group-hover:scale-110 transition-transform duration-700 filter grayscale group-hover:grayscale-0" 
              />
            </div>
          </motion.div>

          {/* Main Manifesto */}
          <motion.div 
            className="lg:col-span-2 space-y-8 flex flex-col justify-center order-1 lg:order-2"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight leading-tight">
              Welcome to Southern Longview Automotive.
            </h2>
            <div className="text-white/70 text-lg leading-relaxed flex flex-col gap-6 font-medium">
              <p>
                We are a small auto repair shop in Longview, Texas. We are part of a dying breed of full-service auto repair shops that offer a wide range of services for all car repair needs. If it's between the bumpers, we fix it.
              </p>
              <p>
                Fix it right the first time and offer good service at reasonable rates. We firmly believe the key to a successful business is gaining lifetime customers with honesty, quality service, and fair business practices. We are the one-stop shop with a vested interest in every repair and every vehicle. We are honor bound.
              </p>
              <p>
                We offer bumper-to-bumper auto repair on all early and late model vehicles, from general auto maintenance to major repair. For you hot rodders we offer a full line of maintenance and repair, as well as custom fabrication and good ol' fashion restoration.
              </p>
            </div>
          </motion.div>

        </div>


      </section>



    </div>
  );
}
