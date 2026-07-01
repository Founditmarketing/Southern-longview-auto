import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  const [activeMobileCard, setActiveMobileCard] = useState<number | null>(null);

  const handleCardClick = (cardIndex: number) => {
    if (window.innerWidth < 768) {
      setActiveMobileCard(activeMobileCard === cardIndex ? null : cardIndex);
    }
  };

  return (
    <section id="about" className="py-0 bg-brand-black">
      <div className="w-full h-[80vh] flex flex-col md:flex-row">
        
        {/* Card 1: Leave A Review */}
        <div 
          onClick={() => handleCardClick(1)}
          className="relative w-full md:w-1/2 h-1/2 md:h-full group overflow-hidden border-b md:border-b-0 md:border-r border-white/10 cursor-pointer"
        >
          <div className={`absolute inset-0 z-10 transition-colors duration-700 md:group-hover:bg-black/70 ${activeMobileCard === 1 ? 'bg-black/70' : 'bg-black/40'}`} />
          <img 
            src="/New photos/Team_2.jpeg" 
            alt="Customer Feedback" 
            className={`absolute inset-0 w-full h-full object-cover transform origin-center transition-transform duration-1000 md:group-hover:scale-110 ${activeMobileCard === 1 ? 'scale-110' : 'scale-100'}`}
          />
          
          {/* Default State (Fades out on hover/click) */}
          <div className={`absolute bottom-10 left-10 z-20 transition-all duration-500 md:group-hover:opacity-0 md:group-hover:-translate-y-4 ${activeMobileCard === 1 ? 'opacity-0 -translate-y-4' : 'opacity-100 translate-y-0'}`}>
            <div className="flex items-center gap-4 mb-2">
              <div className="w-8 h-[1px] bg-brand-yellow" />
              <span className="text-brand-yellow font-mono text-xs tracking-widest uppercase">Community</span>
            </div>
            <h3 className="text-3xl font-display font-bold tracking-tight text-white">LEAVE A REVIEW</h3>
          </div>

          {/* Hover/Click Reveal State */}
          <div className={`absolute inset-0 z-30 p-10 flex flex-col justify-end transition-all duration-500 bg-gradient-to-t from-brand-red/90 via-black/50 to-transparent md:group-hover:opacity-100 md:group-hover:translate-y-0 ${activeMobileCard === 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="text-3xl font-display font-bold tracking-tight text-white mb-3">SHARE YOUR EXPERIENCE</h3>
            <p className="text-white/90 text-sm md:text-base font-medium max-w-sm mb-8 leading-relaxed">
              We rely on honest feedback from our local community to ensure we are always delivering the highest quality service. Visit our review page to leave your thoughts.
            </p>
            <a href="/leave-review" className="inline-flex items-center gap-3 bg-white text-brand-red px-6 py-4 text-sm font-bold tracking-widest hover:bg-brand-yellow hover:text-black transition-colors w-max shadow-xl pointer-events-auto">
              WRITE A REVIEW
            </a>
          </div>
        </div>

        {/* Card 2: Financing */}
        <div 
          onClick={() => handleCardClick(2)}
          className="relative w-full md:w-1/2 h-1/2 md:h-full group overflow-hidden cursor-pointer"
        >
          <div className={`absolute inset-0 z-10 transition-colors duration-700 md:group-hover:bg-black/70 ${activeMobileCard === 2 ? 'bg-black/70' : 'bg-black/40'}`} />
          <img 
            src="/New photos/IMG_5916.jpeg" 
            alt="Financing Options" 
            className={`absolute inset-0 w-full h-full object-cover object-center transform origin-right transition-transform duration-1000 md:group-hover:scale-[1.25] ${activeMobileCard === 2 ? 'scale-[1.25]' : 'scale-[1.15]'}`}
          />
          
          {/* Default State (Fades out on hover/click) */}
          <div className={`absolute bottom-10 left-10 z-20 transition-all duration-500 md:group-hover:opacity-0 md:group-hover:-translate-y-4 ${activeMobileCard === 2 ? 'opacity-0 -translate-y-4' : 'opacity-100 translate-y-0'}`}>
            <div className="flex items-center gap-4 mb-2">
              <div className="w-8 h-[1px] bg-brand-yellow" />
              <span className="text-brand-yellow font-mono text-xs tracking-widest uppercase">Payment Options</span>
            </div>
            <h3 className="text-3xl font-display font-bold tracking-tight text-white">FINANCING</h3>
          </div>

          {/* Hover/Click Reveal State */}
          <div className={`absolute inset-0 z-30 p-10 flex flex-col justify-end transition-all duration-500 bg-gradient-to-t from-brand-red/90 via-black/50 to-transparent md:group-hover:opacity-100 md:group-hover:translate-y-0 ${activeMobileCard === 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="text-3xl font-display font-bold tracking-tight text-white mb-3">FINANCING</h3>
            <p className="text-white/90 text-sm md:text-base font-medium max-w-sm mb-8 leading-relaxed">
              Major repairs shouldn't break the bank. We offer multiple flexible financing options including Snap Finance, Affirm, and Sunbit to get you back on the road cleanly and safely.
            </p>
            <Link to="/financing" className="inline-flex items-center gap-3 bg-white text-brand-red px-6 py-4 text-sm font-bold tracking-widest hover:bg-brand-yellow hover:text-black transition-colors w-max shadow-xl pointer-events-auto">
              APPLY ON LINE HERE
            </Link>
          </div>
        </div>
        
      </div>
    </section>
  );
}
