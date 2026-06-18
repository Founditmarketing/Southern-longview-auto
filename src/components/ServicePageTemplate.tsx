import { motion } from 'motion/react';
import { PhoneCall, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceSection {
  title: string;
  intro?: string[];
  items: string[];
}

interface ServicePageProps {
  title: string;
  heroImage: string;
  imgSrc: string;
  bodyCopy: string[];
  serviceList?: string[];
  sections?: ServiceSection[];
}

export default function ServicePageTemplate({ title, heroImage, imgSrc, bodyCopy, serviceList, sections }: ServicePageProps) {
  return (
    <div className="bg-brand-black min-h-screen text-white pt-0 pb-0">
      
      {/* Sleek Banner Hero */}
      <section className="relative h-[40vh] min-h-[300px] w-full border-b border-brand-red/30 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/80 to-transparent z-10" />
        
        {/* Desktop Hero Layout */}
        <img 
          src={heroImage} 
          alt={title}
          className="absolute inset-0 w-full h-full object-cover object-center hidden md:block"
        />
        
        {/* Mobile Swap Override Layout */}
        <img 
          src={imgSrc} 
          alt={`${title} mobile hero`}
          className="absolute inset-0 w-full h-full object-cover object-center block md:hidden"
        />

        <div className="relative z-20 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center pt-24 md:pt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-[1px] bg-brand-red" />
              <span className="text-brand-red font-mono text-xs md:text-sm tracking-widest uppercase">Expert Service</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tighter uppercase mb-2">
              {title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Content Region */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Main Copy */}
          <motion.div 
            className="space-y-8 flex flex-col justify-center order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight leading-tight">
              Trusted {title} Solutions.
            </h2>
            <div className="text-white/70 text-lg leading-relaxed flex flex-col gap-6 font-medium">
              {bodyCopy.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Optional Feature Bullet List */}
            {serviceList && serviceList.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-8 border-t border-white/10">
                {serviceList.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                    <span className="text-white/90 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Service Image (Hidden strictly on mobile, pushed to hero instead) */}
          <motion.div 
            className="w-full relative aspect-[4/3] overflow-hidden border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.5)] group order-1 lg:order-2 hidden md:block"
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 bg-brand-yellow/0 group-hover:bg-brand-red/20 transition-colors duration-500 z-10 mix-blend-overlay" />
            <img 
              src={imgSrc} 
              alt={`${title} service layout`} 
              className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
            />
          </motion.div>

        </div>
      </section>

      {/* Optional Detail Sections (Diagnostics / Repair / Maintenance etc.) */}
      {sections && sections.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 pb-20 md:pb-32 flex flex-col gap-20 md:gap-28">
          {sections.map((section) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-[1px] bg-brand-red" />
                <span className="text-brand-red font-mono text-xs md:text-sm tracking-widest uppercase">What We Cover</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight uppercase mb-8">
                {section.title}<span className="text-brand-red">.</span>
              </h2>

              {section.intro && section.intro.length > 0 && (
                <div className="text-white/70 text-lg leading-relaxed flex flex-col gap-6 font-medium max-w-4xl mb-10">
                  {section.intro.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-8 border-t border-white/10">
                {section.items.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                    <span className="text-white/90 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </section>
      )}

      {/* Call to Action Banner (Call or Contact) */}
      <section className="relative bg-gradient-to-r from-brand-red via-brand-red to-[#4a0005] border-t border-white/10 overflow-hidden py-12 md:py-16 flex items-center">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
           <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight uppercase mb-4">Need {title}?</h2>
           <p className="text-white/80 text-lg mb-8 max-w-2xl leading-relaxed">
             Our expert technicians are standing by. Get your vehicle back into top condition with the honest service you deserve.
           </p>
           
           <div className="flex flex-col sm:flex-row items-center gap-6">
             <a 
               href="tel:9036534901" 
               className="bg-brand-yellow text-black px-8 py-4 font-bold tracking-widest font-mono text-sm hover:bg-black hover:text-brand-yellow hover:outline hover:outline-2 hover:outline-offset-4 hover:outline-brand-yellow transition-all duration-300 inline-flex items-center gap-3"
             >
               <PhoneCall size={18} />
               CALL (903) 653-4901
             </a>
             <span className="text-white/80 font-mono text-xs uppercase tracking-widest my-2 sm:my-0 drop-shadow-md">or</span>
             <Link 
               to="/contact" 
               className="text-white tracking-widest font-mono text-sm uppercase hover:text-brand-yellow transition-colors underline underline-offset-8 drop-shadow-md"
             >
               Message us
             </Link>
           </div>
        </div>
      </section>

    </div>
  );
}
