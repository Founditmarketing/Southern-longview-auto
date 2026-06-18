import { motion } from 'motion/react';
import { Star, MessageSquare } from 'lucide-react';

const reviews = [
  {
    name: 'Michael T.',
    review: "This shop is as honest as they come. Brought my truck in thinking it was a major transmission issue, turned out to just be a sensor. They could have easily taken me for a ride, but they fixed it right and charged a fair price. Customer for life.",
    rating: 5,
  },
  {
    name: 'Sarah Jenkins',
    review: "Matt and his team are phenomenal. I was passing through Longview when my AC completely died in the middle of July. They prioritized my van and got us back on the road in just a few hours. The pricing was incredibly reasonable compared to the dealership.",
    rating: 5,
  },

  {
    name: 'Amanda Brooks',
    review: "I've been taking all of our fleet vehicles to Southern Longview for over a year now. From routine oil changes to major engine overhauls, they handle it all with extreme professionalism. A true dying breed of honest shops.",
    rating: 5,
  },
  {
     name: "John C.",
     review: "Great local business. You walk in and instantly know you're dealing with professionals who actually care about the cars they work on. Quick turnaround and fair business practices. Highly recommended for any general maintenance.",
     rating: 5,
  },

];

export default function ReviewsPage() {
  return (
    <div className="bg-brand-black min-h-screen text-white pt-0 pb-0">
      
      {/* Sleek Banner Hero */}
      <section className="relative h-[40vh] min-h-[300px] w-full border-b border-brand-red/30 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/80 to-transparent z-10" />
        <img 
          src="/southernlongviewdesktophero3.jpeg" 
          alt="Southern Longview Auto Shop" 
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="relative z-20 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center pt-24 md:pt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-[1px] bg-brand-red" />
              <span className="text-brand-red font-mono text-sm tracking-widest uppercase">Client Testimonials</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter uppercase mb-2">
              Word on the<br />Street.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {reviews.map((item, index) => (
             <motion.div 
               key={index}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: index * 0.1 }}
               className="bg-[#0a0a0a] border border-white/5 p-8 relative group hover:border-brand-yellow/30 transition-colors shadow-[0_15px_30px_rgba(0,0,0,0.5)] flex flex-col"
             >
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="text-brand-yellow fill-brand-yellow" size={16} />
                  ))}
                </div>
                <p className="text-white/70 leading-relaxed italic mb-8 flex-grow">
                  "{item.review}"
                </p>
                <div className="mt-auto border-t border-white/10 pt-4 flex items-center justify-between">
                  <span className="font-bold tracking-wider">{item.name}</span>
                  <span className="text-[10px] text-white/30 font-mono tracking-widest uppercase">Verified Customer</span>
                </div>
             </motion.div>
           ))}
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="relative bg-gradient-to-r from-brand-red via-brand-red to-[#4a0005] border-t border-white/10 overflow-hidden py-12 md:py-16 flex items-center">
        {/* Dark Depth Overlay mirroring the Video Spotlight */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
           <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight uppercase mb-4">Share Your Experience</h2>
           <p className="text-white/80 text-lg mb-8 max-w-2xl leading-relaxed">
             We rely on honest feedback from our local community to ensure we are always delivering the highest quality service. If we've helped keep you on the road, leave us a Google review!
           </p>

           <a 
             href="https://search.google.com/local/writereview?placeid=ChIJ-3eR-5jINYYR-P_m0K6X1W4" 
             target="_blank" 
             rel="noopener noreferrer"
             className="bg-brand-yellow text-black px-8 py-4 font-bold tracking-widest font-mono text-sm hover:bg-black hover:text-brand-yellow hover:outline hover:outline-2 hover:outline-offset-4 hover:outline-brand-yellow transition-all duration-300 inline-block"
           >
             LEAVE A GOOGLE REVIEW
           </a>
        </div>
      </section>

    </div>
  );
}
