import JsonLd from './JsonLd';

export default function LocalBusinessSchema() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'AutomotiveBusiness',
        name: 'Southern Longview Automotive',
        image: 'https://www.southernlongviewauto.com/southernlongviewlogowhite.png',
        url: 'https://www.southernlongviewauto.com/',
        telephone: '+19036534901',
        email: 'soloautomotive@hotmail.com',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '415 W Marshall Ave',
          addressLocality: 'Longview',
          addressRegion: 'TX',
          postalCode: '75601',
          addressCountry: 'US',
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '08:00',
            closes: '17:00',
          },
        ],
        sameAs: [
          'https://www.facebook.com/SouthernLongviewAutomotive',
          'https://www.yelp.com/biz/southern-longview-automotive-longview',
        ],
      }}
    />
  );
}
