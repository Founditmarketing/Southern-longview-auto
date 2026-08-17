import { useParams, Navigate } from 'react-router-dom';
import ServicePageTemplate from '../components/ServicePageTemplate';
import PageSEO from '../components/PageSEO';
import JsonLd from '../components/JsonLd';

const seoData: Record<string, { title: string; description: string }> = {
  'things-we-do': {
    title: 'Comprehensive Auto Repair | Southern Longview Automotive',
    description: 'Bumper-to-bumper maintenance and repair for gas and diesel vehicles — diagnostics, repair, and scheduled maintenance in Longview, TX.',
  },
  'gas-engines': {
    title: 'Gas Engine Service & Repair | Southern Longview Automotive',
    description: 'Gas engine diagnostics, tune-ups, and complete engine replacements for all makes and models in Longview, TX.',
  },
  'diesels': {
    title: 'Diesel Performance & Repair | Southern Longview Automotive',
    description: 'Specialized diesel diagnostics, repair, and engine replacements for heavy-duty trucks in Longview, TX.',
  },
  'fleet-work': {
    title: 'Fleet Vehicle Maintenance | Southern Longview Automotive',
    description: 'Priority fleet scheduling and preventative maintenance programs to keep your commercial vehicles on the road in Longview, TX.',
  },
  'specialty': {
    title: 'Specialty & Performance Services | Southern Longview Automotive',
    description: 'Custom fabrication, restoration, and performance upgrades for classic and modified vehicles in Longview, TX.',
  },
};

const serviceData = {
  'things-we-do': {
    title: 'Comprehensive Repair',
    heroImage: '/southernlongviewdesktophero3.jpeg',
    imgSrc: '/New photos/IMG_5871.jpeg',
    bodyCopy: [
      "We provide comprehensive bumper-to-bumper maintenance and repair solutions for both gas and diesel vehicles. From oil changes to full engine replacements and everything in between, we offer all the services needed to properly maintain your vehicle.",
      "In the unfortunate event you do have a breakdown, we have the tools and expertise to properly diagnose and repair your vehicle accurately and efficiently — dealer-level service without the hassle of the dealer.",
      "We service all makes and models, both gas and diesel."
    ],
    sections: [
      {
        title: 'Diagnostics',
        intro: [
          "Every repair starts with understanding what is wrong, so we can fix the problem accurately the first time and prevent it from occurring again. It begins with the questions our service advisor asks when you drop off. That information is relayed to a technician who verifies your concern, then uses their knowledge, tooling, and information systems to pinpoint the root cause and form a repair plan consistent with industry standards or better.",
          "We offer comprehensive diagnostic services on all vehicle systems. Whatever your concern is, just let our advisors know and we will get it diagnosed."
        ],
        items: [
          "Engine Diagnostics",
          "Transmission Diagnostics",
          "Electrical Diagnostics",
          "Driveability Diagnostics",
          "ABS System Diagnostics",
          "Traction Control Diagnostics",
          "Air Conditioning Diagnostics",
          "Heater Diagnostics",
          "Steering System Diagnostics",
          "Suspension System Diagnostics",
          "Brake System Diagnostics",
          "NVH (Noise, Vibration & Harshness) Diagnostics",
          "Coolant Leak Diagnostics",
          "Oil Leak Diagnostics"
        ]
      },
      {
        title: 'Repair',
        intro: [
          "We offer repair solutions for most all vehicle systems and components, using our vast experience and top-of-the-line tooling to provide the most efficient and effective repairs possible. From minor repairs like sensors and tie rod ends to full engine and transmission replacements, our skilled staff will get you back on the road as efficiently and safely as possible."
        ],
        items: [
          "Gas Engines",
          "Diesel Engines",
          "Engine Replacements",
          "Automatic Transmissions",
          "Manual Transmissions",
          "Transmission Replacements",
          "Air Conditioning (R-134a & R-1234yf)",
          "Heating",
          "Electrical Systems",
          "Starting & Charging Systems",
          "Alternators & Starters",
          "Brakes & ABS Systems",
          "Traction Control Systems",
          "Steering & Suspension",
          "Cooling Systems & Radiators",
          "Differentials & Drive Axles",
          "U-Joints",
          "Power Windows & Power Locks",
          "Theft Deterrent Systems"
        ]
      },
      {
        title: 'Maintenance',
        intro: [
          "Your vehicle is an investment, and regular routine maintenance is the single best way to protect it. Staying on top of fluid changes, inspections, and mileage-based services doesn't just ensure reliability — it prevents costly major repairs down the road and preserves your factory warranty.",
          "We perform digital inspections and text or email a detailed health report of your vehicle with photos, so you see exactly what we see. We also track your vehicle's history and send gentle reminders when your next service is due."
        ],
        items: [
          "Oil Changes",
          "Air Filters",
          "Cabin Air Filters",
          "Fuel Filters",
          "Transmission Service",
          "Transfer Case Service",
          "Differential Service",
          "BG Induction Service",
          "BG Fuel Injection Service",
          "BG Brake Flush",
          "BG Coolant Flush",
          "Power Steering Flush",
          "Spark Plugs & Tune Ups",
          "Timing Belts",
          "Brake Pads & Rotors",
          "Struts & Shocks",
          "Tires & Tire Rotations",
          "Tire Balancing with Road Force",
          "Alignments",
          "30/60/90/120k Mile Scheduled Maintenance"
        ]
      }
    ]
  },
  'gas-engines': {
    title: 'Gas Engine Service',
    heroImage: '/gas-engine-bay.jpeg',
    imgSrc: '/gas-engine-stand.jpeg',
    bodyCopy: [
      "Don't let the diesel trucks fool you — gas engines are a core part of what we do every day. From daily drivers and family SUVs to V8 muscle, we diagnose, service, repair, and replace gas engines on all makes and models.",
      "We handle everything from tune ups, spark plugs, and timing belts to driveability diagnostics, fuel injection service, and cooling system repairs.",
      "Burning oil, losing power, or facing a major failure? We perform complete gas engine replacements and will help you choose the most cost-effective path to get you back on the road."
    ],
    serviceList: [
      "Gas Engine Diagnostics",
      "Driveability Diagnostics",
      "Tune Ups & Spark Plugs",
      "Timing Belts & Chains",
      "Fuel Injection & Induction Service",
      "Cooling System Repairs & Radiators",
      "Starting & Charging Systems",
      "Engine Repair",
      "Complete Engine Replacements",
      "30/60/90/120k Scheduled Maintenance"
    ]
  },
  'diesels': {
    title: 'Diesel Performance',
    heroImage: '/southernlongviewsectionimage3.jpg',
    imgSrc: '/New photos/IMG_5887.jpeg',
    bodyCopy: [
      "Diesel trucks require specialized knowledge and heavy-duty capabilities. We pride ourselves on offering comprehensive solutions for modern diesel engines — from diagnostics and repair to full engine replacements.",
      "Protect your investment with S&S Disaster Prevention Kits and ensure maximum airflow with S&B Air Filters and Body Mounts.",
      "Looking for serious power? We also handle SAC fuel injector upgrades to keep your rig running cooler, stronger, and more reliably under load."
    ]
  },
  'fleet-work': {
    title: 'Fleet Work',
    heroImage: '/fleet.png',
    imgSrc: '/fleet.png',
    bodyCopy: [
      "Keep your commercial fleet reliable and on the road where it belongs. Time spent in the shop is money lost for your business.",
      "We offer priority fleet scheduling and highly organized preventative maintenance programs tailored to the unique demands of your commercial vehicles.",
      "With comprehensive service records and rapid turnaround times, you can trust Southern Longview to act as your dedicated business partner in vehicle management."
    ]
  },
  'specialty': {
    title: 'Specialty Services',
    heroImage: '/specialitycar.jpg',
    imgSrc: '/specialitycar.jpg',
    bodyCopy: [
      "We offer full-service repair and maintenance for your classic and modified vehicles. We work on all your typical aftermarket systems like Vintage Air, Dakota Digital, Holley ignition systems, Holley fuel injection systems, air ride suspensions, and many more.",
      "Whether you have a classic car you're wanting to upgrade or a modern car you're wanting to modify, we have solutions for you. Having trouble with your LS-swapped car? We have solutions for that too.",
      "Wanting to add horsepower? We offer supercharger kits by ProCharger. Call our knowledgeable staff today to discuss your vehicle's needs."
    ],
    serviceList: [
      "Engine Bay Dress-Up Services",
      "Carburetor Replacement & Tuning",
      "Distributor Replacement",
      "Custom-Fit Plug Wires",
      "Sniper EFI Installation, Tuning & Repair",
      "Aftermarket EFI System Repairs",
      "Vintage Air System Installation",
      "Aftermarket HVAC System Repairs",
      "Dakota Digital & Aftermarket Instrument Clusters",
      "Suspension & Brake Upgrades",
      "Air Ride Suspensions",
      "Lift Kits",
      "ProCharger Superchargers",
      "Intakes & Cold Air Intakes",
      "Headers & Cat-Back Exhaust Systems",
      "S&B Filters",
      "Disaster Prevention Kits"
    ]
  }
};

export default function ServicePage() {
  const { id } = useParams();
  
  if (!id || !serviceData[id as keyof typeof serviceData]) {
    // Fallback if someone enters an invalid service ID URL route
    return <Navigate to="/contact" replace />;
  }

  const data = serviceData[id as keyof typeof serviceData];
  const seo = seoData[id];

  return (
    <>
      <PageSEO title={seo.title} description={seo.description} path={`/services/${id}`} />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          serviceType: data.title,
          description: seo.description,
          areaServed: 'Longview, TX',
          provider: {
            '@type': 'AutomotiveBusiness',
            name: 'Southern Longview Automotive',
            url: 'https://www.southernlongviewauto.com/',
          },
        }}
      />
      <ServicePageTemplate {...data} />
    </>
  );
}
