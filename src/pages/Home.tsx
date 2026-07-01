import React from 'react';
import Hero from '../components/Hero';
import SnapFinanceBanner from '../components/SnapFinanceBanner';
import TrustBanner from '../components/TrustBanner';
import Services from '../components/Services';
import ShopPerks from '../components/ShopPerks';
import About from '../components/About';
import BrandsServiced from '../components/BrandsServiced';
import Partners from '../components/Partners';
import CTA from '../components/CTA';

interface HomeProps {
  isReady: boolean;
}

export default function Home({ isReady }: HomeProps) {
  return (
    <>
      <Hero isReady={isReady} />
      <SnapFinanceBanner />
      <TrustBanner />
      <Services />
      <ShopPerks />
      <About />
      <BrandsServiced />
      <Partners />
      <CTA />
    </>
  );
}
