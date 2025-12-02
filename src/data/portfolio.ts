// src/data/portfolio.ts
import { PortfolioProject } from '@/types/portfolio';

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'kebab-superking',
    clientName: 'Kebab SuperKing',
    industry: 'restaurant',
    services: ['web', 'erp', 'integration'],
    shortDescription: 'Full digital transformation including POS system, delivery platform integration, and online ordering system.',
    results: [
      '60% increase in online orders',
      'Reduced order errors by 85%',
      'Integrated 4 delivery platforms'
    ],
    technologies: ['Odoo', 'React', 'Next.js'],
    featured: true,
    challenge: 'Manual order management across multiple delivery platforms causing errors and delays.',
    solution: 'Implemented a unified POS system with automated integration to Glovo, Pyszne, UberEats, and Bolt Food.',
    testimonial: {
      quote: 'Digicyfr transformed our entire operation. Order errors are almost zero, and our online sales have skyrocketed.',
      author: 'Restaurant Owner',
      position: 'Kebab SuperKing'
    },
    metrics: [
      { value: '60%', label: 'Online Order Increase' },
      { value: '85%', label: 'Error Reduction' },
      { value: '4', label: 'Platforms Integrated' }
    ]
  },
  {
    id: 'oceanpro',
    clientName: 'OceanPro',
    industry: 'b2b',
    services: ['erp', 'web'],
    shortDescription: 'B2B portal and ERP system for import/export business with multi-currency support.',
    results: [
      'Streamlined inventory management',
      'Reduced paperwork by 70%',
      'Improved order accuracy'
    ],
    technologies: ['Odoo ERP', 'Custom Modules'],
    featured: true,
    challenge: 'Complex inventory tracking across multiple countries with different currencies and regulations.',
    solution: 'Custom Odoo ERP implementation with B2B portal, multi-currency support, and automated documentation.',
    testimonial: {
      quote: 'The B2B portal and ERP system have revolutionized how we do international business.',
      author: 'Operations Manager',
      position: 'OceanPro'
    },
    metrics: [
      { value: '70%', label: 'Paperwork Reduction' },
      { value: '99%', label: 'Order Accuracy' },
      { value: '5', label: 'Currencies Supported' }
    ]
  },
  {
    id: 'kebab-gold',
    clientName: 'Kebab Gold',
    industry: 'restaurant',
    services: ['web', 'integration'],
    shortDescription: 'Modern website with online ordering system and delivery platform integration.',
    results: [
      '40% increase in online sales',
      'Mobile orders doubled',
      'Improved customer experience'
    ],
    technologies: ['Next.js', 'Tailwind CSS'],
    featured: true,
    challenge: 'Outdated website with no mobile optimization and limited online ordering options.',
    solution: 'Modern responsive website with integrated online ordering and delivery platform connections.',
    metrics: [
      { value: '40%', label: 'Sales Increase' },
      { value: '2x', label: 'Mobile Orders' },
      { value: '<3s', label: 'Page Load Time' }
    ]
  },
  {
    id: 'kebab-saad',
    clientName: 'Kebab Saad',
    industry: 'restaurant',
    services: ['seo', 'google-business'],
    shortDescription: 'Digital marketing and SEO optimization for local restaurant visibility.',
    results: [
      '#1 Google ranking for local keywords',
      '200% increase in online visibility',
      'Higher review ratings'
    ],
    technologies: ['Google Analytics', 'SEO Tools'],
    featured: false
  },
  {
    id: 'art-kebab',
    clientName: 'Art Kebab',
    industry: 'restaurant',
    services: ['web', 'integration'],
    shortDescription: 'Website development and delivery integration for premium restaurant.',
    results: [
      'Modern brand presentation',
      'Seamless delivery integration',
      'Increased online reservations'
    ],
    featured: false
  },
  {
    id: 'kebab-abdullah',
    clientName: 'Kebab Abdullah',
    industry: 'restaurant',
    services: ['erp'],
    shortDescription: 'Complete business management system with POS and inventory control.',
    results: [
      'Real-time inventory tracking',
      'Automated reordering system',
      'Staff management improvements'
    ],
    featured: false
  },
  {
    id: 'kebab-ayman',
    clientName: 'Kebab Ayman',
    industry: 'restaurant',
    services: ['web'],
    shortDescription: 'Professional website development for restaurant chain.',
    results: [
      'Modern online presence',
      'Mobile-optimized design',
      'Easy content management'
    ],
    featured: false
  },
  {
    id: 'kwiaciarnia-milosc',
    clientName: 'Kwiaciarnia Miłość',
    industry: 'retail',
    services: ['web', 'seo', 'google-business'],
    shortDescription: 'Florist shop website with SEO optimization and Google Business management.',
    results: [
      'Improved local search rankings',
      'Increased online orders',
      'Better customer engagement'
    ],
    featured: false
  }
];

export const industryStats = {
  restaurant: { count: 6, description: 'Restaurants & Food Service' },
  retail: { count: 1, description: 'Retail & E-commerce' },
  service: { count: 0, description: 'Service Businesses' },
  b2b: { count: 1, description: 'Import/Export & B2B' }
};

export const portfolioStats = [
  { value: '10+', label: 'Clients Served', description: 'Across various industries' },
  { value: '8', label: 'Projects Completed', description: 'With measurable results' },
  { value: '4', label: 'Industries Served', description: 'Restaurant, Retail, B2B, Service' },
  { value: '95%', label: 'Client Satisfaction', description: 'Based on client feedback' }
];