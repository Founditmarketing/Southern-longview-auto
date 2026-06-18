import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const heroSlides = [
  { desktop: "/New photos/IMG_5870.jpeg", mobile: "/New photos/IMG_5878.jpeg" },
  { desktop: "/New photos/IMG_5884.jpeg", mobile: "/New photos/IMG_5885.jpeg" },
  { desktop: "/New photos/IMG_5892.jpeg", mobile: "/New photos/IMG_5896.jpeg" }
];

const slideVariants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? "100%" : "-100%",
    };
  },
  center: {
    zIndex: 1,
    x: 0,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
    };
  }
};

export default function Hero({ isReady = true }: { isReady?: boolean }) {
  const [[page, direction], setPage] = useState([0, 0]);
  const currentSlide = ((page % heroSlides.length) + heroSlides.length) % heroSlides.length;

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const nextSlide = () => paginate(1);
  const prevSlide = () => paginate(-1);

  useEffect(() => {
    const timer = setInterval(() => {
      setPage((prev) => [prev[0] + 1, 1]);
    }, 6000);
    return () => clearInterval(timer);
  }, [page]);

  return (
    <section className="relative min-h-[110svh] md:h-screen w-full overflow-hidden bg-brand-black">
      {/* Background Video/Image Parallax */}
      <motion.div 
        className="absolute inset-0 w-full h-full"
        style={{ y, opacity }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent z-10 pointer-events-none" />
        
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="absolute inset-0"
          >
            <img 
              src={heroSlides[currentSlide].desktop} 
              alt="High performance auto repair - Desktop" 
              className="hidden md:block w-full h-full object-cover object-center"
            />
            <img 
              src={heroSlides[currentSlide].mobile} 
              alt="High performance auto repair - Mobile" 
              className="block md:hidden w-full h-full object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Content */}
      <div className="relative z-20 h-full w-full px-6 md:px-12 flex flex-col justify-center pointer-events-none pb-40 md:pb-0 pt-32 md:pt-0">
        <div className="max-w-5xl mt-12 md:mt-20 pointer-events-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-[1px] w-12 bg-brand-red" />
            <span className="text-brand-red font-mono text-sm tracking-widest uppercase">Southern Longview Automotive</span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter leading-[1.1] mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            PRECISION<br />
            PERFORMANCE.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">PROVEN TRUST.</span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="text-xl md:text-2xl font-medium text-white/90 mb-2">
              EXPERT AUTO REPAIR FOR THE DISCERNING DRIVER.
            </p>
            <p className="text-base md:text-lg text-white/60 max-w-xl mb-10">
              Serving Southern Longview with unparalleled care for all makes and models. Where engineering meets passion.
            </p>
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link to="/contact" className="bg-brand-yellow text-black px-8 py-4 font-semibold tracking-wide hover:bg-brand-red hover:text-white hover:outline hover:outline-2 hover:outline-offset-4 hover:outline-brand-red transition-all duration-300 text-center">
              Schedule Service
            </Link>
            <HashLink smooth to="/#services" className="border border-white/30 text-white px-8 py-4 font-semibold tracking-wide hover:bg-brand-red hover:text-white hover:outline hover:outline-2 hover:outline-offset-4 hover:outline-brand-red transition-all duration-300 text-center">
              Our Services
            </HashLink>
          </motion.div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-10 left-0 right-0 z-30 px-6 md:px-12 w-full flex justify-between items-center pointer-events-none">
        <div className="flex gap-2 pointer-events-auto">
          {heroSlides.map((_, i) => (
            <button 
              key={i}
              onClick={() => {
                const newDirection = i > currentSlide ? 1 : -1;
                setPage([i, newDirection]);
              }}
              className={`h-1 transition-all duration-500 ease-out hover:bg-white ${i === currentSlide ? 'w-8 bg-white' : 'w-2 bg-white/30'}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        <div className="flex gap-4 pointer-events-auto">
          <button 
            onClick={prevSlide}
            className="w-12 h-12 border border-white/20 flex items-center justify-center text-white hover:bg-brand-red hover:text-white hover:outline hover:outline-2 hover:outline-offset-4 hover:outline-brand-red transition-all"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={nextSlide}
            className="w-12 h-12 border border-white/20 flex items-center justify-center text-white hover:bg-brand-red hover:text-white hover:outline hover:outline-2 hover:outline-offset-4 hover:outline-brand-red transition-all"
            aria-label="Next slide"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
