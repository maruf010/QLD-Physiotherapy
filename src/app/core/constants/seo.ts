export const DEFAULT_SEO_CONFIG = {
  title: 'QEP - Queensland Exercise Physiology | Stronger for Every Stage of Life',
  description: 'Specialising in women\'s health, pregnancy and postnatal care, menopause, healthy ageing and rehabilitation through personalised, evidence-based exercise physiology.',
  keywords: 'Exercise Physiology, Brisbane Exercise Physiologist, QEP, Queensland Exercise Physiology, Women\'s Health, Pregnancy Care, Menopause, Bone Health, Healthy Ageing, Rehabilitation, Melissa Murphy',
  ogImage: '/assets/images/what is section.png'
};

export const HEALTHCARE_JSON_LD_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  'name': 'Queensland Exercise Physiology (QEP)',
  'image': 'https://qld-physiotherapy.com.au/assets/images/hero-demo.webp',
  '@id': 'https://qld-physiotherapy.com.au/#medical-business',
  'url': 'https://qld-physiotherapy.com.au',
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
