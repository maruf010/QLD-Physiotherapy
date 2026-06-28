export const DEFAULT_SEO_CONFIG = {
  title: 'QEP - Queensland Exercise Physiology | Clinical Exercise Rehabilitation',
  description: 'Evidence-based exercise physiology services in Brisbane. Accredited professionals specializing in women\'s health, bone health, cardiovascular recovery, diabetes, and healthy ageing.',
  keywords: 'Exercise Physiology, Brisbane Exercise Physiologist, QEP, Queensland Exercise Physiology, Women\'s Health, Bone Health, Diabetes Management, Arthritis Rehab, Melissa Murphy',
  ogImage: '/assets/images/hero-demo.webp'
};

export const HEALTHCARE_JSON_LD_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  'name': 'Queensland Exercise Physiology (QEP)',
  'image': 'https://qldphysiotherapy.com.au/assets/images/hero-demo.webp',
  '@id': 'https://qldphysiotherapy.com.au/#medical-business',
  'url': 'https://qldphysiotherapy.com.au',
  'telephone': '0410 876 987',
  'priceRange': '$$',
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': '58 St Paul\'s Terrace',
    'addressLocality': 'Spring Hill',
    'addressRegion': 'QLD',
    'postalCode': '4000',
    'addressCountry': 'AU'
  },
  'geo': {
    '@type': 'GeoCoordinates',
    'latitude': -27.4593,
    'longitude': 153.0287
  },
  'openingHoursSpecification': [
    {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday'
      ],
      'opens': '07:00',
      'closes': '18:00'
    }
  ],
  'sameAs': [
    'https://www.facebook.com/queenslandexercisephysiology',
    'https://www.instagram.com/queenslandexercisephysiology'
  ],
  'medicalSpecialty': [
    'Physiotherapy',
    'SportsMedicine'
  ],
  'description': 'Accredited Exercise Physiology clinic in Brisbane offering personalized, evidence-based exercise interventions for clinical conditions, rehabilitation, and athletic preparation.'
};
