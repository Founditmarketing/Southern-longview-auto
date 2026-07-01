import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    // Compressed, snappier presentation timeline
    const shimmerTimer = setTimeout(() => setStage(1), 1100);   // Shimmer sweeps at 1.1s
    const exitTimer = setTimeout(() => setStage(2), 2000);      // Gate slide-up triggers at 2.0s
    const completeTimer = setTimeout(() => onComplete(), 3000); // Component unmounts at 3.0s

    return () => {
      clearTimeout(shimmerTimer);
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#000000]"
      initial={{ y: 0 }}
      animate={{ y: stage === 2 ? '-100vh' : 0 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }} 
    >
      {/* Container carefully sized to match the logo proportions for perfect masking */}
      <div className="relative w-full max-w-[280px] md:max-w-lg px-8 py-4 h-32 md:h-40 flex justify-center items-center">
        <div className="relative w-full h-full">
          {/* Core Image Fade In Layer */}
          <motion.img
            src="/southernlongviewlogowhite.png"
            alt="Southern Longview Automotive"
            className="w-full h-full object-contain opacity-90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} 
          />

          {/* CSS Mask Layer to ensure glare ONLY hits the opaque pixels of the PNG */}
          {stage >= 1 && (
            <motion.div
              className="absolute inset-0 z-10 pointer-events-none"
              style={{
                WebkitMaskImage: 'url(/southernlongviewlogowhite.png)',
                maskImage: 'url(/southernlongviewlogowhite.png)',
                WebkitMaskSize: 'contain',
                maskSize: 'contain',
                WebkitMaskRepeat: 'no-repeat',
                maskRepeat: 'no-repeat',
                WebkitMaskPosition: 'center',
                maskPosition: 'center',
              }}
            >
              {/* The actual moving white laser/glare */}
              <motion.div 
                 className="w-[200%] h-[200%] absolute top-[-50%]"
                 initial={{ left: '-150%' }}
                 animate={{ left: '100%' }}
                 transition={{ duration: 0.7, ease: "easeInOut" }}
              >
                <div className="w-1/4 h-full bg-gradient-to-r from-transparent via-white to-transparent skew-x-[-25deg]" />
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
