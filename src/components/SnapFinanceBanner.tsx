import React from 'react';

export default function SnapFinanceBanner() {
  return (
    <div className="w-full bg-brand-black">
      {/* Desktop Banner */}
      <a 
        href="https://snapf.in/zo0Hxmp" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="hidden md:block w-full hover:opacity-90 transition-opacity duration-300"
      >
        <img 
          src="https://merchant-banners-s3.snapfinance.com/Loans/EN/A1280x158.jpeg" 
          alt="Snap Finance - Apply Here" 
          style={{ border: 'none' }}
          className="w-full block object-cover"
        />
      </a>

      {/* Mobile Banner */}
      <a 
        href="https://snapf.in/bTvkKmO" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="block md:hidden w-full hover:opacity-90 transition-opacity duration-300"
      >
        <img 
          src="https://merchant-banners-s3.snapfinance.com/Loans/EN/A250x250.jpeg" 
          alt="Snap Finance - Apply Here" 
          style={{ boxShadow: '4px 2px 6px #010101', border: 'none' }}
          className="w-full block object-cover"
        />
      </a>
    </div>
  );
}
