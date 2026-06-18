import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X, Phone, Facebook, MapPin, Clock, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export default function Header() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const headerBg = useTransform(
    scrollY,
    [0, 50],
    ['rgba(10, 10, 10, 0)', 'rgba(10, 10, 10, 0.85)']
  );

  const headerBackdrop = useTransform(
    scrollY,
    [0, 50],
    ['blur(0px)', 'blur(12px)']
  );

  const headerTop = useTransform(
    scrollY,
    [0, 32],
    [32, 0]
  );

  useEffect(() => {
    const updateScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', updateScroll);
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) {
      setTimeout(() => setMobileServicesOpen(false), 300);
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '/#', isHash: true, isExternal: false },
    { name: 'About Us', href: '/about', isHash: false, isExternal: false },
    { name: 'Services', href: '/services', isHash: false, isExternal: false },
    { name: 'Financing', href: '/financing', isHash: false, isExternal: false },
    { name: 'Reviews', href: '/reviews', isHash: false, isExternal: false },
    { name: 'Leave A Review', href: '/leave-review', isHash: false, isExternal: false },
    { name: 'Meet The Techs', href: '/team', isHash: false, isExternal: false },
    { name: 'Contact Us', href: '/contact', isHash: false, isExternal: false },
  ];

  const serviceDropdown = [
    { name: 'Things We Do', href: '/services/things-we-do' },
    { name: 'Gas Engines', href: '/services/gas-engines' },
    { name: 'Diesels', href: '/services/diesels' },
    { name: 'Fleet Work', href: '/services/fleet-work' },
    { name: 'Specialty Services', href: '/services/specialty' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="absolute top-0 left-0 right-0 z-[60] h-8 flex items-center justify-between px-6 lg:px-12 text-[10px] sm:text-[11px] font-bold tracking-[0.15em] text-white/90 bg-gradient-to-r from-[#6b0000] via-brand-red to-[#6b0000] border-b border-black/50 uppercase shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-2 group">
            <MapPin size={12} className="text-white/60 group-hover:text-brand-yellow transition-colors" /> 
            <span className="group-hover:text-white transition-colors">415 W Marshall Ave, Longview, TX</span>
          </div>
          <div className="flex items-center gap-2 group">
            <Clock size={12} className="text-white/60 group-hover:text-brand-yellow transition-colors" /> 
            <span className="group-hover:text-white transition-colors">Mon-Fri: 8:00 - 5:00</span>
          </div>
        </div>
        <div className="flex items-center gap-6 w-full md:w-auto justify-center md:justify-end">
          <a href="tel:9036534901" className="flex items-center gap-2 hover:text-white transition-colors group">
            <Phone size={12} className="text-brand-yellow group-hover:animate-pulse" /> 
            <span className="text-white/80 group-hover:text-white transition-colors">Call: (903) 653-4901</span>
          </a>
          <a href="https://www.facebook.com/SouthernLongviewAutomotive" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors group">
            <Facebook size={12} className="text-brand-yellow group-hover:animate-pulse transition-all" /> 
            <span className="text-white/80 group-hover:text-white transition-colors">Follow Us</span>
          </a>
        </div>
      </div>

      <motion.header
        style={{ backgroundColor: headerBg, backdropFilter: headerBackdrop, top: headerTop }}
        className="fixed left-0 right-0 z-[60] border-b border-white/5 transition-colors duration-300"
      >
        <div className="w-full px-6 lg:px-12 h-24 flex items-center justify-between">
      {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group z-50">
            <img 
              src="/southernlongviewlogowhite.png" 
              alt="Southern Longview Automotive" 
              className={`w-auto object-contain transition-all duration-500 ease-in-out hover:opacity-80 relative z-50 ${
                mobileMenuOpen ? 'h-8 opacity-50' : isScrolled ? 'h-10 md:h-12' : 'h-16 md:h-[72px]'
              }`} 
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              if (link.name === 'Services') {
                return (
                  <div key={link.name} className="relative group py-6">
                    <span className="cursor-pointer text-sm font-medium uppercase tracking-widest text-white/70 hover:text-white transition-colors duration-300 flex items-center gap-1 group-hover:text-white relative">
                      {link.name}
                      <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                      <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand-yellow transition-all duration-300 group-hover:w-full" />
                    </span>
                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-0 w-64 pt-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 z-50">
                      <div className="bg-[#0a0a0a] border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.8)] py-2 flex flex-col">
                        {serviceDropdown.map((service) => (
                          <Link 
                            key={service.name} 
                            to={service.href}
                            className="px-6 py-3 text-xs text-white/70 hover:text-white hover:bg-white/5 hover:pl-8 transition-all duration-300 uppercase tracking-widest font-medium border-b border-white/5 last:border-0"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              if (link.isExternal) {
                 return (
                   <a
                     key={link.name}
                     href={link.href}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-sm font-medium uppercase tracking-widest text-white/70 hover:text-white transition-colors duration-300 relative group"
                   >
                     {link.name}
                     <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand-yellow transition-all duration-300 group-hover:w-full" />
                   </a>
                 );
              }
              return link.isHash ? (
                <HashLink
                  key={link.name}
                  to={link.href}
                  smooth
                  className="text-sm font-medium uppercase tracking-widest text-white/70 hover:text-white transition-colors duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand-yellow transition-all duration-300 group-hover:w-full" />
                </HashLink>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-sm font-medium uppercase tracking-widest text-white/70 hover:text-white transition-colors duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand-yellow transition-all duration-300 group-hover:w-full" />
                </Link>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Link
              to="/contact"
              className="bg-brand-yellow text-black px-6 py-2.5 text-sm font-semibold tracking-wide hover:bg-brand-red hover:text-white hover:outline hover:outline-2 hover:outline-offset-4 hover:outline-brand-red transition-all duration-300 flex items-center gap-2 group"
            >
              MAKE AN APPOINTMENT
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-red"></span>
              </span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white p-2 focus:outline-none relative z-[70]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} className="text-white hover:text-brand-yellow transition-colors" /> : <Menu size={28} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <motion.div
        className={`fixed inset-0 z-50 bg-[#050505]/98 backdrop-blur-2xl md:hidden pt-[96px] px-6 flex flex-col overflow-y-auto pb-6 shadow-[inset_0_0_100px_rgba(255,0,0,0.02)] ${
          mobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: mobileMenuOpen ? 1 : 0, x: mobileMenuOpen ? 0 : -20 }}
        transition={{ duration: 0.3 }}
      >
        <nav className="flex flex-col border-t border-white/10 font-medium mt-2">
          {navLinks.map((link) => {
             if (link.name === 'Services') {
               return (
                 <div key={link.name} className="flex flex-col border-b border-white/10">
                   <button 
                     onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                     className="text-white uppercase tracking-widest hover:text-brand-yellow transition-colors text-left flex items-center justify-between py-4 text-sm"
                   >
                     {link.name}
                     <ChevronDown size={18} className={`transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180 text-brand-yellow' : 'text-white/40'}`} />
                   </button>
                   <AnimatePresence>
                     {mobileServicesOpen && (
                       <motion.div 
                         initial={{ height: 0, opacity: 0 }}
                         animate={{ height: 'auto', opacity: 1 }}
                         exit={{ height: 0, opacity: 0 }}
                         className="flex flex-col pl-4 border-l-2 border-brand-red/30 ml-2 overflow-hidden"
                       >
                         {serviceDropdown.map((service) => (
                           <Link
                             key={service.name}
                             to={service.href}
                             className="text-white/60 uppercase tracking-widest text-xs hover:text-white transition-colors py-3 border-t border-white/5 first:border-0"
                             onClick={() => setMobileMenuOpen(false)}
                           >
                             {service.name}
                           </Link>
                         ))}
                       </motion.div>
                     )}
                   </AnimatePresence>
                 </div>
               );
             }

             if (link.isExternal) {
               return (
                 <a
                   key={link.name}
                   href={link.href}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="text-white uppercase tracking-widest hover:text-brand-yellow transition-colors py-4 border-b border-white/10 text-sm"
                   onClick={() => setMobileMenuOpen(false)}
                 >
                   {link.name}
                 </a>
               );
             }
             return link.isHash ? (
               <HashLink
                 key={link.name}
                 to={link.href}
                 smooth
                 className="text-white uppercase tracking-widest hover:text-brand-yellow transition-colors py-4 border-b border-white/10 text-sm"
                 onClick={() => setMobileMenuOpen(false)}
               >
                 {link.name}
               </HashLink>
             ) : (
               <Link
                 key={link.name}
                 to={link.href}
                 className="text-white uppercase tracking-widest hover:text-brand-yellow transition-colors py-4 border-b border-white/10 text-sm"
                 onClick={() => setMobileMenuOpen(false)}
               >
                 {link.name}
               </Link>
             );
          })}
        </nav>

        {/* Contact Hub Insert */}
        <div className="mt-8 mb-8 p-6 bg-white/5 border border-white/10 flex flex-col gap-4">
          <div className="flex items-center gap-3">
             <MapPin size={16} className="text-brand-yellow" />
             <span className="text-white/70 text-xs tracking-wider">415 W Marshall Ave</span>
          </div>
          <div className="flex items-center gap-3">
             <Clock size={16} className="text-brand-yellow" />
             <span className="text-white/70 text-xs tracking-wider">Mon-Fri: 8:00 to 5:00</span>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <Link
            to="/contact"
            className="border border-white/20 text-white px-6 py-4 text-center font-bold font-mono tracking-widest text-sm hover:bg-brand-red hover:border-brand-red transition-all duration-300"
            onClick={() => setMobileMenuOpen(false)}
          >
            MAKE AN APPOINTMENT
          </Link>

        <a
          href="tel:9036534901"
          className="bg-brand-yellow text-black px-6 py-4 text-center font-bold font-mono tracking-widest text-sm mt-auto hover:bg-brand-red hover:text-white hover:outline hover:outline-2 hover:outline-offset-4 hover:outline-brand-red transition-all duration-300"
          onClick={() => setMobileMenuOpen(false)}
        >
          CALL NOW
        </a>
        </div>
      </motion.div>
    </>
  );
}
