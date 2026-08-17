import React from 'react';
import PageSEO from '../components/PageSEO';
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
      <PageSEO
        title="Southern Longview Automotive | Auto Repair in Longview, TX"
        description="Expert auto service, repair, performance tuning, and restoration in Longview, Texas. Honest, full-service auto repair for gas and diesel vehicles."
        path="/"
      />
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
