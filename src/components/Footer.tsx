import { Facebook, MapPin, Phone, Mail, Clock } from 'lucide-react';
import Affiliations from './Affiliations';

export default function Footer() {
  return (
    <>
      <Affiliations />
      <footer className="bg-[#050505] pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
      {/* Subtle fine-line graphic element */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none z-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <circle cx="80%" cy="50%" r="200" fill="none" stroke="white" strokeWidth="1" />
          <circle cx="80%" cy="50%" r="150" fill="none" stroke="white" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Brand */}
          <div className="col-span-1 lg:col-span-4">
            <img src="/southernlongviewlogowhite.png" alt="Southern Longview Automotive" className="h-12 md:h-16 w-auto object-contain mb-8 origin-left opacity-90" />
            <p className="text-white/50 max-w-sm mb-8 leading-relaxed">
              Premium destination for high-performance and precision auto repair in Southern Longview.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/SouthernLongviewAutomotive" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/50 hover:text-brand-yellow hover:border-brand-yellow transition-colors group">
                <Facebook size={18} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Contact Details */}
          <div className="col-span-1 lg:col-span-4 space-y-8">
            <div>
              <h4 className="text-brand-yellow font-mono tracking-widest mb-3 uppercase text-xs">Location</h4>
              <p className="text-white/70 text-sm flex items-start gap-3">
                 <MapPin className="text-white/30 shrink-0 mt-0.5" size={16} />
                 415 W Marshall Ave<br/>Longview, TX 75601
              </p>
            </div>
            <div>
              <h4 className="text-brand-yellow font-mono tracking-widest mb-3 uppercase text-xs">Contact Info</h4>
              <p className="text-white/70 text-sm flex items-center gap-3 mb-2">
                 <Phone className="text-white/30" size={16} />
                 <a href="tel:9036534901" className="hover:text-white transition-colors">(903) 653-4901</a>
              </p>
              <p className="text-white/70 text-sm flex items-center gap-3">
                 <Mail className="text-white/30" size={16} />
                 <a href="mailto:soloautomotive@hotmail.com" className="hover:text-white transition-colors">soloautomotive@hotmail.com</a>
              </p>
            </div>
            <div>
              <h4 className="text-brand-yellow font-mono tracking-widest mb-3 uppercase text-xs">Business Hours</h4>
              <div className="text-white/70 text-sm flex items-start gap-3">
                 <Clock className="text-white/30 shrink-0 mt-0.5" size={16} />
                 <div className="flex flex-col gap-1">
                   <p>Mon - Fri: <span className="text-white">8:00 AM - 5:00 PM</span></p>
                   <p className="text-white/40">Sat & Sun: Closed</p>
                 </div>
              </div>
            </div>
          </div>

          {/* Interactive Map */}
          <div className="col-span-1 md:col-span-2 lg:col-span-4 min-h-[300px] relative bg-[#050505] border border-white/10 group shadow-2xl">
            {/* Custom Interactive UI overlay to blend the map */}
            <div className="absolute top-4 left-4 z-20 bg-black/80 backdrop-blur-md border border-white/10 px-4 py-2 flex items-center gap-3">
              <span className="w-2 h-2 bg-[#22c55e] animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
              <span className="text-white text-xs font-bold tracking-widest uppercase">Open & Ready</span>
            </div>

            {/* Map Interaction Overlay (disables pointer events until hovered so you don't instantly scroll the map) */}
            <div className="absolute inset-0 bg-brand-red/5 group-hover:bg-transparent transition-colors duration-500 pointer-events-none z-10" />
            <iframe 
              src="https://maps.google.com/maps?q=415%20W%20Marshall%20Ave,%20Longview,%20TX%2075601&t=&z=14&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              className="absolute inset-0 opacity-90 group-hover:opacity-100 transition-all duration-300"
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30">
          <p>&copy; {new Date().getFullYear()} Southern Longview Automotive. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
      </footer>
    </>
  );
}
