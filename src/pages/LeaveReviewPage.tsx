import { motion } from 'motion/react';
import { Star, MessageSquare, Facebook, MessagesSquare } from 'lucide-react';

export default function LeaveReviewPage() {
  return (
    <div className="bg-brand-black min-h-screen text-white pt-0 pb-0">
      
      {/* Sleek Banner Hero */}
      <section className="relative h-[40vh] min-h-[300px] w-full border-b border-brand-red/30 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/80 to-transparent z-10" />
        <img 
          src="/southernlongviewdesktophero3.jpeg" 
          alt="Leave a Review" 
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
              <span className="text-brand-red font-mono text-sm tracking-widest uppercase">Community Feedback</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter uppercase mb-2">
              Leave A<br />Review.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Review Options Grid */}
      <section className="max-w-4xl mx-auto px-6 py-24 md:py-32 flex flex-col items-center">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 tracking-tight">HOW DID WE DO?</h2>
          <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto">
            Your feedback means the world to us. As a local business, online reviews help us continue to grow and serve the Longview community. Please take a moment to share your experience on your preferred platform below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {/* Google */}
          <a href="https://search.google.com/local/writereview?placeid=ChIJ-3eR-5jINYYR-P_m0K6X1W4" target="_blank" rel="noopener noreferrer" className="group relative bg-[#0a0a0a] border border-white/10 p-8 flex flex-col items-center text-center hover:border-brand-yellow/50 transition-colors duration-300 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-brand-yellow/5 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 z-0" />
            <div className="relative z-10 flex flex-col items-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="h-12 w-12 mb-6" />
              <h3 className="text-xl font-bold font-display uppercase tracking-widest mb-2">Google Reviews</h3>
              <p className="text-sm text-white/50 mb-6 group-hover:text-white/80 transition-colors">Help others find us by leaving a 5-star review on Google.</p>
              <div className="flex gap-1 text-brand-yellow mb-2"><Star size={16} className="fill-current" /><Star size={16} className="fill-current" /><Star size={16} className="fill-current" /><Star size={16} className="fill-current" /><Star size={16} className="fill-current" /></div>
            </div>
          </a>

          {/* Facebook */}
          <a href="https://www.facebook.com/SouthernLongviewAutomotive/reviews" target="_blank" rel="noopener noreferrer" className="group relative bg-[#0a0a0a] border border-white/10 p-8 flex flex-col items-center text-center hover:border-blue-500/50 transition-colors duration-300 shadow-2xl overflow-hidden">
             <div className="absolute inset-0 bg-blue-500/5 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 z-0" />
             <div className="relative z-10 flex flex-col items-center">
               <Facebook size={48} className="text-[#1877F2] mb-6" />
               <h3 className="text-xl font-bold font-display uppercase tracking-widest mb-2">Facebook</h3>
               <p className="text-sm text-white/50 mb-6 group-hover:text-white/80 transition-colors">Share your experience with friends and family on Facebook.</p>
               <span className="text-blue-400 text-xs font-mono tracking-widest uppercase">Leave Feedback</span>
             </div>
          </a>

          {/* Yelp */}
          <a href="https://www.yelp.com/biz/southern-longview-automotive-longview" target="_blank" rel="noopener noreferrer" className="group relative bg-[#0a0a0a] border border-white/10 p-8 flex flex-col items-center text-center hover:border-red-600/50 transition-colors duration-300 shadow-2xl overflow-hidden md:col-span-2 lg:col-span-1">
             <div className="absolute inset-0 bg-red-600/5 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 z-0" />
             <div className="relative z-10 flex flex-col items-center">
               <MessageSquare size={48} className="text-[#FF1A1A] mb-6" />
               <h3 className="text-xl font-bold font-display uppercase tracking-widest mb-2">Yelp</h3>
               <p className="text-sm text-white/50 mb-6 group-hover:text-white/80 transition-colors">Active on Yelp? We'd love your honest feedback there.</p>
               <span className="text-red-500 text-xs font-mono tracking-widest uppercase">Write a Review</span>
             </div>
          </a>

          {/* Contact Us Directly */}
          <a href="/contact" className="group relative bg-brand-red/10 border border-brand-red/30 p-8 flex flex-col items-center text-center hover:border-brand-red transition-colors duration-300 shadow-2xl overflow-hidden md:col-span-2 lg:col-span-1">
             <div className="absolute inset-0 bg-brand-red/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 z-0" />
             <div className="relative z-10 flex flex-col items-center">
               <MessagesSquare size={48} className="text-brand-red mb-6" />
               <h3 className="text-xl font-bold font-display uppercase tracking-widest mb-2 text-white">Something Not Right?</h3>
               <p className="text-sm text-white/70 mb-6 group-hover:text-white/90 transition-colors">If your experience wasn't 100% satisfactory, please contact us directly so we can make it right.</p>
               <span className="text-brand-yellow font-bold tracking-widest text-xs uppercase border-b border-brand-yellow">Contact Us</span>
             </div>
          </a>
        </div>
      </section>

    </div>
  );
}
