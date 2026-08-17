import { motion } from 'motion/react';
import { CreditCard, Rocket, CalendarClock, ExternalLink, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import SnapFinanceBanner from '../components/SnapFinanceBanner';
import PageSEO from '../components/PageSEO';

const financeOptions = [
  {
    provider: 'Snap Finance',
    description: 'Get what you need now with simple, lease-to-own financing. Snap evaluates your entire financial profile, making approvals highly accessible.',
    features: ['High Approval Rates', 'No Credit Needed', 'Flexible Payment Plans'],
    icon: Rocket,
    actionText: 'Apply with Snap',
    actionLink: 'https://snapf.in/zo0Hxmp',
    external: true
  },
  {
    provider: 'Affirm',
    description: 'Pay at your own pace with Affirm. Break big automotive bills into predictable, heavily transparent monthly chunks without hidden fees.',
    features: ['Predictable Payments', 'No Hidden Fees', 'Quick Decisions'],
    icon: CalendarClock,
    actionText: 'Apply with Affirm',
    actionLink: 'https://www.affirm.com/',
    external: true
  },
  {
    provider: 'Sunbit',
    description: 'Lightning fast technology built for local dealerships and auto shops. Gets you back on the road safely with approvals in under 30 seconds.',
    features: ['90% Approval Rate', 'Soft Credit Check', 'Lightning Fast Process'],
    icon: CreditCard,
    actionText: 'Apply with Sunbit',
    actionLink: 'https://sunbit.com/?utm_source=google&utm_medium=cpc&utm_campaign=D-GSN-General-Brand_KW-US&utm_term=&utm_content=&gad_source=1&gad_campaignid=22284077185&gbraid=0AAAAACeit6sw3ffRTrpSlkBwMEovy0VDr&gclid=CjwKCAjwnZfPBhAGEiwAzg-VzBZmeERYxFG4AWoMXuYFA05lRYEp-_ek3iZTsiGkfdjaWGdbS_k6uxoCLM4QAvD_BwE',
    external: true
  }
];

export default function FinancingPage() {
  return (
    <div className="bg-brand-black min-h-screen pt-48 md:pt-56 pb-24 text-white">
      <PageSEO
        title="Financing Options | Southern Longview Automotive"
        description="Flexible financing for auto repairs in Longview, TX. Apply with Snap Finance, Affirm, or Sunbit at Southern Longview Automotive."
        path="/financing"
      />
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Block */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-brand-red" />
            <span className="text-brand-red font-mono text-xs md:text-sm tracking-widest uppercase">Payment Options</span>
            <div className="w-12 h-[1px] bg-brand-red" />
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight mb-6">
            Flexible Financing
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg leading-relaxed">
            Major repairs shouldn't sideline your life. We've partnered with industry-leading financial networks to offer incredibly flexible, easy-to-manage payment options so you can get your vehicle completely fixed right now.
          </p>
        </motion.div>
      </div>

      <SnapFinanceBanner />

      <div className="max-w-7xl mx-auto px-6 mt-16 md:mt-24">
        {/* Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {financeOptions.map((option, index) => (
            <motion.div
              key={option.provider}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="bg-[#111111] border border-white/10 p-8 md:p-10 flex flex-col relative group overflow-hidden shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-red/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <option.icon className="w-10 h-10 text-brand-red mb-6 relative z-10" />
              
              <h3 className="text-2xl font-display font-bold uppercase tracking-wide mb-4 relative z-10">{option.provider}</h3>
              <p className="text-white/60 mb-8 leading-relaxed flex-grow relative z-10 text-sm">{option.description}</p>
              
              <div className="space-y-4 mb-10 relative z-10">
                {option.features.map((feat) => (
                  <div key={feat} className="flex items-center gap-3">
                    <ShieldCheck className="w-4 h-4 text-brand-yellow flex-shrink-0 mt-0.5" />
                    <span className="text-white/90 text-sm font-medium tracking-wide">{feat}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto relative z-10 pt-8 border-t border-white/10">
                {option.external ? (
                  <a 
                    href={option.actionLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center gap-3 w-full bg-brand-yellow text-black font-mono font-bold tracking-widest text-xs py-4 px-4 hover:bg-brand-red hover:text-white transition-colors uppercase"
                  >
                    {option.actionText}
                    <ExternalLink size={14} className="mb-0.5" />
                  </a>
                ) : (
                  <Link 
                    to={option.actionLink}
                    className="flex justify-center items-center gap-3 w-full bg-[#1a1a1a] border border-white/20 text-white font-mono font-bold tracking-widest text-xs py-4 px-4 hover:bg-brand-yellow hover:border-brand-yellow hover:text-black transition-colors uppercase"
                  >
                    {option.actionText}
                  </Link>
                )}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
