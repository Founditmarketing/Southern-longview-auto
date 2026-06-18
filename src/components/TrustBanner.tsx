export default function TrustBanner() {
  const points = [
    'TOP OF THE LINE HUNTER MACHINES',
    'ROADFORCE BALANCING OFFERED',
    'ASE CERTIFIED TECHNICIANS',
  ];

  return (
    <div className="w-full bg-brand-red bg-opacity-100 py-6 md:py-8 border-y border-white/10 overflow-hidden shadow-[0_0_40px_rgba(255,0,0,0.15)] relative z-20">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay pointer-events-none" />
      <div className="w-full px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 lg:gap-10 w-full">
          {points.map((point, idx) => (
            <div key={idx} className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 lg:gap-10 group cursor-default">
              <span className="text-white group-hover:text-black transition-colors duration-300 font-display font-bold tracking-widest text-sm md:text-base lg:text-lg text-center whitespace-nowrap">
                {point}
              </span>
              {/* Desktop specific thin-line separator */}
              {idx < points.length - 1 && (
                <div className="hidden md:block w-[1px] h-6 bg-black/60 shadow-sm" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
