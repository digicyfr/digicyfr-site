/**
 * homeTranslations.js - Comprehensive multilingual content for Home Page
 * 
 * Features:
 * - Professional, conversion-focused copy
 * - SEO-optimized content for each language
 * - Culturally adapted messaging
 * - Consistent brand voice across languages
 * - Business-focused value propositions
 * - Local market adaptation for Poland
 */

// ============================================
// UTILITY FUNCTIONS FOR TRANSLATIONS
// ============================================

/**
 * Translation utilities for consistent formatting
 */
const TranslationUtils = {
  // Format business statistics
  formatStat: (number, suffix = '', locale = 'en') => {
    const formatters = {
      en: new Intl.NumberFormat('en-US'),
      pl: new Intl.NumberFormat('pl-PL'),
      de: new Intl.NumberFormat('de-DE')
    };
    return `${formatters[locale]?.format(number) || number}${suffix}`;
  },

  // Get currency symbol for locale
  getCurrency: (locale = 'en') => {
    const currencies = {
      en: '$',
      pl: 'zł',
      de: '€'
    };
    return currencies[locale] || '$';
  },

  // Get phone format for locale
  getPhoneFormat: (locale = 'en') => {
    const formats = {
      en: '+1 (555) 123-4567',
      pl: '+48 123 456 789',
      de: '+49 123 456 7890'
    };
    return formats[locale] || formats.en;
  },

  // Get business hours format
  getBusinessHours: (locale = 'en') => {
    const formats = {
      en: 'Mon-Fri 9:00-18:00',
      pl: 'Pon-Pt 9:00-18:00',
      de: 'Mo-Fr 9:00-18:00'
    };
    return formats[locale] || formats.en;
  }
};

// ============================================
// MAIN TRANSLATIONS OBJECT
// ============================================

const homeTranslations = {
  // ============================================
  // ENGLISH TRANSLATIONS
  // ============================================
  en: {
    // Meta information for SEO
    meta: {
      title: 'Digital Growth Solutions for Polish Businesses | Digicyfr',
      description: 'Boost your business with our comprehensive digital solutions: SEO, Google Ads, e-commerce websites, and ERP systems. Trusted by 200+ Polish companies.',
      keywords: [
        'digital marketing Poland',
        'SEO services Warsaw',
        'Google Ads management',
        'e-commerce development',
        'ERP systems Poland',
        'business growth solutions',
        'digital transformation',
        'online marketing Poland'
      ],
      author: 'Digicyfr Digital Solutions',
      ogTitle: 'Grow Your Polish Business with Digital Excellence | Digicyfr',
      ogDescription: 'Professional digital solutions for Polish SMEs: SEO, Google Ads, e-commerce, and ERP systems. Start growing today!',
      twitterTitle: 'Digital Growth Solutions for Polish Businesses',
      twitterDescription: 'Comprehensive digital marketing and business solutions for Polish companies. Get started today!'
    },

    // Navigation
    nav: {
      home: 'Home',
      services: 'Services',
      about: 'About Us',
      contact: 'Contact',
      getStarted: 'Get Started',
      getQuote: 'Get Free Quote',
      login: 'Client Portal'
    },

    // Hero Section
    hero: {
      badge: '🏆 Trusted by 200+ Polish Businesses',
      badgeAlt: 'Trusted by over 200 Polish companies',
      preTitle: 'Digital Excellence for',
      title: 'Polish Businesses',
      titleHighlight: 'Ready to Grow',
      subtitle: 'We specialize in helping Polish retail shops and SMEs skyrocket their sales through proven SEO strategies, high-converting Google & Meta Ads, professional e-commerce solutions, and streamlined ERP systems.',
      subtitleHighlight: 'Your digital transformation starts here.',
      cta: 'Start Growing Today',
      ctaSecondary: 'See Success Stories',
      ctaTertiary: 'Free Consultation',
      valueProposition: 'Average client sees 150% revenue growth within 6 months',
      trustSignals: [
        'No long-term contracts',
        'Money-back guarantee',
        'Local Polish support',
        '24/7 monitoring'
      ]
    },

    // Statistics
    stats: {
      clients: {
        number: 200,
        suffix: '+',
        label: 'Happy Clients',
        description: 'Polish businesses we\'ve helped grow'
      },
      growth: {
        number: 150,
        suffix: '%',
        label: 'Average Growth',
        description: 'Revenue increase within 6 months'
      },
      projects: {
        number: 500,
        suffix: '+',
        label: 'Projects Delivered',
        description: 'Successful digital transformations'
      },
      support: {
        text: '24/7',
        label: 'Expert Support',
        description: 'Always here when you need us'
      },
      retention: {
        number: 95,
        suffix: '%',
        label: 'Client Retention',
        description: 'Clients who stay and grow with us'
      },
      experience: {
        number: 5,
        suffix: '+',
        label: 'Years Experience',
        description: 'In the Polish digital market'
      }
    },

    // Services Section
    services: {
      title: 'How We Accelerate Your Business Growth',
      subtitle: 'Comprehensive digital solutions specifically designed for Polish small and medium enterprises',
      description: 'We understand the unique challenges of the Polish market and deliver tailored solutions that drive real results.',
      
      seo: {
        title: 'SEO & Local Search Optimization',
        subtitle: 'Dominate Google Search Results',
        description: 'Rank #1 on Google for your target keywords and attract high-quality local customers with our proven SEO strategies and Google My Business optimization.',
        features: [
          'Local SEO for Polish market',
          'Google My Business optimization',
          'Keyword research & strategy',
          'Technical SEO audit',
          'Content marketing',
          'Link building campaigns'
        ],
        results: 'Average 300% increase in organic traffic',
        icon: '🔍',
        price: 'Starting from 1,500 zł/month'
      },

      ads: {
        title: 'Google & Meta Advertising',
        subtitle: 'Targeted Campaigns That Convert',
        description: 'Drive qualified traffic and maximize ROI with our expertly managed Google Ads, Facebook Ads, and Instagram campaigns tailored for the Polish market.',
        features: [
          'Google Ads management',
          'Facebook & Instagram ads',
          'Conversion optimization',
          'A/B testing & analytics',
          'Local market targeting',
          'Budget optimization'
        ],
        results: 'Average 400% return on ad spend',
        icon: '📊',
        price: '15% of ad spend (min. 1,000 zł/month)'
      },

      ecommerce: {
        title: 'E-commerce & Website Development',
        subtitle: 'Websites That Sell While You Sleep',
        description: 'Beautiful, fast, and conversion-optimized online stores with seamless payment integration and mobile-first design for the Polish market.',
        features: [
          'Custom e-commerce development',
          'Mobile-responsive design',
          'Payment gateway integration',
          'Inventory management',
          'SEO-optimized structure',
          'Performance optimization'
        ],
        results: 'Average 250% increase in online sales',
        icon: '🛒',
        price: 'Starting from 5,000 zł'
      },

      erp: {
        title: 'ERP & Business Automation',
        subtitle: 'Streamline Your Operations',
        description: 'Custom ERP solutions and business automation tools designed specifically for Polish industries to improve efficiency and reduce costs.',
        features: [
          'Custom ERP development',
          'Process automation',
          'Inventory management',
          'Financial reporting',
          'CRM integration',
          'Multi-location support'
        ],
        results: 'Average 40% reduction in operational costs',
        icon: '⚙️',
        price: 'Starting from 10,000 zł'
      }
    },

    // Industries Section
    industries: {
      title: 'Industries We Specialize In',
      subtitle: 'Tailored solutions for diverse Polish business sectors',
      description: 'Deep industry expertise combined with local market knowledge to deliver solutions that work.',
      
      retail: {
        title: 'Retail & Fashion',
        description: 'Omnichannel retail solutions',
        clients: '50+ clients',
        icon: '🛍️'
      },
      food: {
        title: 'Food & Restaurants',
        description: 'Online ordering & delivery systems',
        clients: '30+ clients',
        icon: '🍕'
      },
      health: {
        title: 'Health & Wellness',
        description: 'Patient management & booking systems',
        clients: '25+ clients',
        icon: '💊'
      },
      automotive: {
        title: 'Automotive',
        description: 'Inventory & service management',
        clients: '40+ clients',
        icon: '🚗'
      },
      manufacturing: {
        title: 'Manufacturing',
        description: 'Production & supply chain optimization',
        clients: '35+ clients',
        icon: '🏭'
      },
      construction: {
        title: 'Construction',
        description: 'Project management & scheduling',
        clients: '20+ clients',
        icon: '🏗️'
      }
    },

    // ERP Section
    erp: {
      title: 'Complete ERP Solutions for Polish Businesses',
      subtitle: 'Transform your entire business operation with our comprehensive ERP services built specifically for the Polish market',
      description: 'From small local shops to growing enterprises, our ERP solutions scale with your business.',
      
      modules: 'Core Business Modules',
      modulesList: [
        {
          name: 'Sales Management',
          description: 'Complete sales pipeline and customer tracking',
          icon: '💰'
        },
        {
          name: 'Inventory Control',
          description: 'Real-time stock management and forecasting',
          icon: '📦'
        },
        {
          name: 'Financial Management',
          description: 'Accounting, invoicing, and financial reporting',
          icon: '📊'
        },
        {
          name: 'CRM Integration',
          description: 'Customer relationship management and support',
          icon: '👥'
        },
        {
          name: 'Project Management',
          description: 'Task tracking and team collaboration',
          icon: '📋'
        },
        {
          name: 'E-commerce Integration',
          description: 'Seamless online store connectivity',
          icon: '🔗'
        }
      ],

      benefits: 'Why Choose Our ERP Solutions?',
      benefitsList: [
        {
          title: 'Built for Polish Market',
          description: 'Compliance with Polish tax laws and regulations',
          icon: '🇵🇱'
        },
        {
          title: 'Affordable & Transparent Pricing',
          description: 'No hidden costs, flexible payment plans',
          icon: '💎'
        },
        {
          title: 'Local Polish Support',
          description: 'Dedicated support team in your language',
          icon: '🤝'
        },
        {
          title: 'Rapid Implementation',
          description: 'Get up and running in 2-4 weeks',
          icon: '⚡'
        },
        {
          title: 'Scalable Architecture',
          description: 'Grows with your business needs',
          icon: '📈'
        }
      ],

      roi: {
        title: 'Return on Investment',
        timeToROI: '3-6 months',
        avgSavings: '40% cost reduction',
        productivity: '60% efficiency increase'
      }
    },

    // Testimonials
    testimonials: {
      title: 'What Our Clients Say',
      subtitle: 'Real results from real Polish businesses',
      
      items: [
        {
          name: 'Anna Kowalski',
          company: 'Bella Fashion Boutique',
          position: 'Owner',
          content: 'Digicyfr transformed our online presence. Our sales increased by 200% in just 4 months!',
          avatar: '/testimonials/anna-k.jpg',
          rating: 5,
          results: '+200% sales increase'
        },
        {
          name: 'Piotr Nowak',
          company: 'TechMed Solutions',
          position: 'CEO',
          content: 'The ERP system they built streamlined all our operations. We save 15 hours per week!',
          avatar: '/testimonials/piotr-n.jpg',
          rating: 5,
          results: '15h/week saved'
        },
        {
          name: 'Maria Wiśniewska',
          company: 'Green Garden Restaurant',
          position: 'Manager',
          content: 'Our Google ranking improved dramatically. We\'re now #1 for "restaurant Warsaw"!',
          avatar: '/testimonials/maria-w.jpg',
          rating: 5,
          results: '#1 Google ranking'
        }
      ]
    },

    // Call to Action
    cta: {
      title: 'Ready to Transform Your Business?',
      subtitle: 'Join hundreds of successful Polish businesses that trust Digicyfr with their digital growth and transformation',
      description: 'Don\'t let your competition get ahead. Start your digital transformation today.',
      button: 'Get Free Consultation',
      buttonSecondary: 'View Pricing',
      phoneText: 'Or call us directly:',
      phone: '+1 (555) 123-4567',
      urgency: 'Limited spots available this month',
      guarantee: '30-day money-back guarantee',
      features: [
        'Free initial consultation',
        'Custom strategy development',
        'No long-term contracts',
        'Guaranteed results or refund'
      ]
    },

    // Footer
    footer: {
      description: 'Digicyfr is Poland\'s leading digital transformation partner, helping businesses grow through innovative SEO, advertising, e-commerce, and ERP solutions.',
      location: 'Warsaw, Poland',
      rights: 'All rights reserved.',
      
      company: {
        title: 'Company',
        links: [
          { text: 'About Us', href: '/about' },
          { text: 'Our Team', href: '/team' },
          { text: 'Careers', href: '/careers' },
          { text: 'Partners', href: '/partners' }
        ]
      },

      services: {
        title: 'Our Services',
        links: [
          { text: 'SEO Optimization', href: '/services/seo' },
          { text: 'Google & Meta Ads', href: '/services/ads' },
          { text: 'E-commerce Development', href: '/services/ecommerce' },
          { text: 'ERP Systems', href: '/services/erp' },
          { text: 'Website Development', href: '/services/websites' },
          { text: 'Digital Consulting', href: '/services/consulting' }
        ]
      },

      resources: {
        title: 'Resources',
        links: [
          { text: 'Blog', href: '/blog' },
          { text: 'Case Studies', href: '/case-studies' },
          { text: 'Free Tools', href: '/tools' },
          { text: 'Knowledge Base', href: '/knowledge' },
          { text: 'Webinars', href: '/webinars' }
        ]
      },

      contact: {
        title: 'Contact Information',
        address: 'ul. Marszałkowska 100, 00-026 Warsaw, Poland',
        phone: '+1 (555) 123-4567',
        email: 'hello@digicyfr.com',
        businessHours: 'Mon-Fri 9:00-18:00',
        socialMedia: {
          facebook: 'https://facebook.com/digicyfr',
          linkedin: 'https://linkedin.com/company/digicyfr',
          instagram: 'https://instagram.com/digicyfr',
          youtube: 'https://youtube.com/digicyfr'
        }
      },

      legal: {
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
        cookies: 'Cookie Policy',
        gdpr: 'GDPR Compliance'
      },

      newsletter: {
        title: 'Stay Updated',
        subtitle: 'Get digital marketing tips and industry insights',
        placeholder: 'Enter your email address',
        button: 'Subscribe',
        privacy: 'We respect your privacy. Unsubscribe anytime.'
      }
    }
  },

  // ============================================
  // POLISH TRANSLATIONS
  // ============================================
  pl: {
    // Meta information for SEO
    meta: {
      title: 'Cyfrowy Rozwój dla Polskich Firm | Digicyfr',
      description: 'Rozwijaj swoją firmę z naszymi kompleksowymi rozwiązaniami cyfrowymi: SEO, Google Ads, sklepy internetowe i systemy ERP. Zaufało nam 200+ polskich firm.',
      keywords: [
        'marketing cyfrowy Polska',
        'usługi SEO Warszawa',
        'zarządzanie Google Ads',
        'tworzenie sklepów internetowych',
        'systemy ERP Polska',
        'rozwiązania rozwoju biznesu',
        'transformacja cyfrowa',
        'marketing online Polska'
      ],
      author: 'Digicyfr Rozwiązania Cyfrowe',
      ogTitle: 'Rozwijaj Polską Firmę z Cyfrową Doskonałością | Digicyfr',
      ogDescription: 'Profesjonalne rozwiązania cyfrowe dla polskich MŚP: SEO, Google Ads, e-commerce i systemy ERP. Zacznij rosnąć już dziś!',
      twitterTitle: 'Rozwiązania Cyfrowego Rozwoju dla Polskich Firm',
      twitterDescription: 'Kompleksowe rozwiązania marketingu cyfrowego i biznesowe dla polskich firm. Rozpocznij już dziś!'
    },

    // Navigation
    nav: {
      home: 'Strona główna',
      services: 'Usługi',
      about: 'O nas',
      contact: 'Kontakt',
      getStarted: 'Rozpocznij',
      getQuote: 'Bezpłatna wycena',
      login: 'Panel klienta'
    },

    // Hero Section
    hero: {
      badge: '🏆 Zaufało nam 200+ polskich firm',
      badgeAlt: 'Zaufało nam ponad 200 polskich firm',
      preTitle: 'Cyfrowa doskonałość dla',
      title: 'Polskich Firm',
      titleHighlight: 'Gotowych na Rozwój',
      subtitle: 'Specjalizujemy się w pomaganiu polskim sklepom detalicznym i MŚP w gwałtownym wzroście sprzedaży poprzez sprawdzone strategie SEO, wysokokonwertujące reklamy Google i Meta, profesjonalne rozwiązania e-commerce oraz usprawnione systemy ERP.',
      subtitleHighlight: 'Twoja transformacja cyfrowa zaczyna się tutaj.',
      cta: 'Zacznij rosnąć już dziś',
      ctaSecondary: 'Zobacz historie sukcesu',
      ctaTertiary: 'Bezpłatna konsultacja',
      valueProposition: 'Średni klient odnotowuje 150% wzrost przychodów w ciągu 6 miesięcy',
      trustSignals: [
        'Bez długoterminowych umów',
        'Gwarancja zwrotu pieniędzy',
        'Lokalne polskie wsparcie',
        'Monitoring 24/7'
      ]
    },

    // Statistics
    stats: {
      clients: {
        number: 200,
        suffix: '+',
        label: 'Zadowolonych Klientów',
        description: 'Polskich firm, którym pomogliśmy rosnąć'
      },
      growth: {
        number: 150,
        suffix: '%',
        label: 'Średni Wzrost',
        description: 'Wzrost przychodów w ciągu 6 miesięcy'
      },
      projects: {
        number: 500,
        suffix: '+',
        label: 'Zrealizowanych Projektów',
        description: 'Udanych transformacji cyfrowych'
      },
      support: {
        text: '24/7',
        label: 'Wsparcie Ekspertów',
        description: 'Zawsze tutaj, gdy nas potrzebujesz'
      },
      retention: {
        number: 95,
        suffix: '%',
        label: 'Utrzymanie Klientów',
        description: 'Klienci, którzy zostają i rosną z nami'
      },
      experience: {
        number: 5,
        suffix: '+',
        label: 'Lat Doświadczenia',
        description: 'Na polskim rynku cyfrowym'
      }
    },

    // Services Section
    services: {
      title: 'Jak Przyspieszamy Rozwój Twojego Biznesu',
      subtitle: 'Kompleksowe rozwiązania cyfrowe specjalnie zaprojektowane dla polskich małych i średnich przedsiębiorstw',
      description: 'Rozumiemy unikalne wyzwania polskiego rynku i dostarczamy dostosowane rozwiązania, które przynoszą prawdziwe rezultaty.',
      
      seo: {
        title: 'SEO i Optymalizacja Wyszukiwania Lokalnego',
        subtitle: 'Zdominuj Wyniki Wyszukiwania Google',
        description: 'Zajmij #1 pozycję w Google dla swoich docelowych słów kluczowych i przyciągnij wysokiej jakości lokalnych klientów dzięki naszym sprawdzonym strategiom SEO i optymalizacji Google Moja Firma.',
        features: [
          'Lokalne SEO dla polskiego rynku',
          'Optymalizacja Google Moja Firma',
          'Badanie i strategia słów kluczowych',
          'Audyt techniczny SEO',
          'Marketing treści',
          'Kampanie budowania linków'
        ],
        results: 'Średnio 300% wzrost ruchu organicznego',
        icon: '🔍',
        price: 'Od 1 500 zł/miesiąc'
      },

      ads: {
        title: 'Reklamy Google i Meta',
        subtitle: 'Ukierunkowane Kampanie Które Konwertują',
        description: 'Kieruj wykwalifikowany ruch i maksymalizuj ROI dzięki naszym ekspertom zarządzającym kampaniami Google Ads, Facebook Ads i Instagram dostosowanymi do polskiego rynku.',
        features: [
          'Zarządzanie Google Ads',
          'Reklamy Facebook i Instagram',
          'Optymalizacja konwersji',
          'Testy A/B i analityka',
          'Targetowanie lokalnego rynku',
          'Optymalizacja budżetu'
        ],
        results: 'Średnio 400% zwrot z wydatków na reklamy',
        icon: '📊',
        price: '15% budżetu reklamowego (min. 1 000 zł/miesiąc)'
      },

      ecommerce: {
        title: 'E-commerce i Tworzenie Stron',
        subtitle: 'Strony Które Sprzedają Gdy Śpisz',
        description: 'Piękne, szybkie i zoptymalizowane pod kątem konwersji sklepy internetowe z płynną integracją płatności i designem mobile-first dla polskiego rynku.',
        features: [
          'Niestandardowe tworzenie e-commerce',
          'Responsywny design mobilny',
          'Integracja bramek płatniczych',
          'Zarządzanie magazynem',
          'Struktura zoptymalizowana pod SEO',
          'Optymalizacja wydajności'
        ],
        results: 'Średnio 250% wzrost sprzedaży online',
        icon: '🛒',
        price: 'Od 5 000 zł'
      },

      erp: {
        title: 'ERP i Automatyzacja Biznesowa',
        subtitle: 'Usprawnij Swoje Operacje',
        description: 'Niestandardowe rozwiązania ERP i narzędzia automatyzacji biznesowej zaprojektowane specjalnie dla polskich branż w celu poprawy efektywności i redukcji kosztów.',
        features: [
          'Niestandardowe tworzenie ERP',
          'Automatyzacja procesów',
          'Zarządzanie magazynem',
          'Raportowanie finansowe',
          'Integracja CRM',
          'Wsparcie wielu lokalizacji'
        ],
        results: 'Średnio 40% redukcja kosztów operacyjnych',
        icon: '⚙️',
        price: 'Od 10 000 zł'
      }
    },

    // Industries Section
    industries: {
      title: 'Branże w Których się Specjalizujemy',
      subtitle: 'Dostosowane rozwiązania dla różnorodnych polskich sektorów biznesowych',
      description: 'Głęboka wiedza branżowa połączona z znajomością lokalnego rynku w celu dostarczania rozwiązań, które działają.',
      
      retail: {
        title: 'Handel i Moda',
        description: 'Rozwiązania omnichannel dla handlu',
        clients: '50+ klientów',
        icon: '🛍️'
      },
      food: {
        title: 'Żywność i Restauracje',
        description: 'Systemy zamówień online i dostaw',
        clients: '30+ klientów',
        icon: '🍕'
      },
      health: {
        title: 'Zdrowie i Wellness',
        description: 'Zarządzanie pacjentami i systemy rezerwacji',
        clients: '25+ klientów',
        icon: '💊'
      },
      automotive: {
        title: 'Motoryzacja',
        description: 'Zarządzanie magazynem i serwisem',
        clients: '40+ klientów',
        icon: '🚗'
      },
      manufacturing: {
        title: 'Produkcja',
        description: 'Optymalizacja produkcji i łańcucha dostaw',
        clients: '35+ klientów',
        icon: '🏭'
      },
      construction: {
        title: 'Budownictwo',
        description: 'Zarządzanie projektami i harmonogramowanie',
        clients: '20+ klientów',
        icon: '🏗️'
      }
    },

    // ERP Section
    erp: {
      title: 'Kompleksowe Rozwiązania ERP dla Polskich Firm',
      subtitle: 'Przekształć całą swoją działalność biznesową dzięki naszym kompleksowym usługom ERP stworzonym specjalnie dla polskiego rynku',
      description: 'Od małych lokalnych sklepów po rozwijające się przedsiębiorstwa, nasze rozwiązania ERP skalują się wraz z Twoim biznesem.',
      
      modules: 'Główne Moduły Biznesowe',
      modulesList: [
        {
          name: 'Zarządzanie Sprzedażą',
          description: 'Kompletny pipeline sprzedaży i śledzenie klientów',
          icon: '💰'
        },
        {
          name: 'Kontrola Magazynu',
          description: 'Zarządzanie stanem w czasie rzeczywistym i prognozowanie',
          icon: '📦'
        },
        {
          name: 'Zarządzanie Finansami',
          description: 'Księgowość, fakturowanie i raportowanie finansowe',
          icon: '📊'
        },
        {
          name: 'Integracja CRM',
          description: 'Zarządzanie relacjami z klientami i wsparcie',
          icon: '👥'
        },
        {
          name: 'Zarządzanie Projektami',
          description: 'Śledzenie zadań i współpraca zespołowa',
          icon: '📋'
        },
        {
          name: 'Integracja E-commerce',
          description: 'Płynne połączenie ze sklepem internetowym',
          icon: '🔗'
        }
      ],

      benefits: 'Dlaczego Wybrać Nasze Rozwiązania ERP?',
      benefitsList: [
        {
          title: 'Stworzone dla Polskiego Rynku',
          description: 'Zgodność z polskim prawem podatkowym i przepisami',
          icon: '🇵🇱'
        },
        {
          title: 'Przystępne i Przejrzyste Ceny',
          description: 'Bez ukrytych kosztów, elastyczne plany płatności',
          icon: '💎'
        },
        {
          title: 'Lokalne Polskie Wsparcie',
          description: 'Dedykowany zespół wsparcia w Twoim języku',
          icon: '🤝'
        },
        {
          title: 'Szybka Implementacja',
          description: 'Uruchomienie w ciągu 2-4 tygodni',
          icon: '⚡'
        },
        {
          title: 'Skalowalna Architektura',
          description: 'Rośnie wraz z potrzebami Twojego biznesu',
          icon: '📈'
        }
      ],

      roi: {
        title: 'Zwrot z Inwestycji',
        timeToROI: '3-6 miesięcy',
        avgSavings: '40% redukcja kosztów',
        productivity: '60% wzrost efektywności'
      }
    },

    // Testimonials
    testimonials: {
      title: 'Co Mówią Nasi Klienci',
      subtitle: 'Prawdziwe rezultaty od prawdziwych polskich firm',
      
      items: [
        {
          name: 'Anna Kowalska',
          company: 'Bella Fashion Boutique',
          position: 'Właścicielka',
          content: 'Digicyfr przekształciło naszą obecność online. Nasza sprzedaż wzrosła o 200% w ciągu zaledwie 4 miesięcy!',
          avatar: '/testimonials/anna-k.jpg',
          rating: 5,
          results: '+200% wzrost sprzedaży'
        },
        {
          name: 'Piotr Nowak',
          company: 'TechMed Solutions',
          position: 'CEO',
          content: 'System ERP, który stworzyli, usprawnił wszystkie nasze operacje. Oszczędzamy 15 godzin tygodniowo!',
          avatar: '/testimonials/piotr-n.jpg',
          rating: 5,
          results: '15h/tydzień oszczędności'
        },
        {
          name: 'Maria Wiśniewska',
          company: 'Green Garden Restaurant',
          position: 'Menedżerka',
          content: 'Nasza pozycja w Google dramatycznie się poprawiła. Jesteśmy teraz #1 dla "restauracja Warszawa"!',
          avatar: '/testimonials/maria-w.jpg',
          rating: 5,
          results: '#1 pozycja w Google'
        }
      ]
    },

    // Call to Action
    cta: {
      title: 'Gotowy na Transformację Swojego Biznesu?',
      subtitle: 'Dołącz do setek odnoszących sukcesy polskich firm, które powierzają Digicyfr swój cyfrowy rozwój i transformację',
      description: 'Nie pozwól konkurencji wyprzedzić się. Rozpocznij swoją transformację cyfrową już dziś.',
      button: 'Otrzymaj Bezpłatną Konsultację',
      buttonSecondary: 'Zobacz Cennik',
      phoneText: 'Lub zadzwoń bezpośrednio:',
      phone: '+48 123 456 789',
      urgency: 'Ograniczona liczba miejsc w tym miesiącu',
      guarantee: '30-dniowa gwarancja zwrotu pieniędzy',
      features: [
        'Bezpłatna wstępna konsultacja',
        'Opracowanie niestandardowej strategii',
        'Bez długoterminowych umów',
        'Gwarantowane rezultaty lub zwrot'
      ]
    },

    // Footer
    footer: {
      description: 'Digicyfr to wiodący polski partner transformacji cyfrowej, pomagający firmom rosnąć poprzez innowacyjne rozwiązania SEO, reklamowe, e-commerce i ERP.',
      location: 'Warszawa, Polska',
      rights: 'Wszelkie prawa zastrzeżone.',
      
      company: {
        title: 'Firma',
        links: [
          { text: 'O nas', href: '/about' },
          { text: 'Nasz zespół', href: '/team' },
          { text: 'Kariera', href: '/careers' },
          { text: 'Partnerzy', href: '/partners' }
        ]
      },

      services: {
        title: 'Nasze Usługi',
        links: [
          { text: 'Optymalizacja SEO', href: '/services/seo' },
          { text: 'Reklamy Google i Meta', href: '/services/ads' },
          { text: 'Tworzenie E-commerce', href: '/services/ecommerce' },
          { text: 'Systemy ERP', href: '/services/erp' },
          { text: 'Tworzenie Stron', href: '/services/websites' },
          { text: 'Konsultacje Cyfrowe', href: '/services/consulting' }
        ]
      },

      resources: {
        title: 'Zasoby',
        links: [
          { text: 'Blog', href: '/blog' },
          { text: 'Studia Przypadków', href: '/case-studies' },
          { text: 'Darmowe Narzędzia', href: '/tools' },
          { text: 'Baza Wiedzy', href: '/knowledge' },
          { text: 'Webinaria', href: '/webinars' }
        ]
      },

      contact: {
        title: 'Informacje Kontaktowe',
        address: 'ul. Marszałkowska 100, 00-026 Warszawa, Polska',
        phone: '+48 123 456 789',
        email: 'kontakt@digicyfr.com',
        businessHours: 'Pon-Pt 9:00-18:00',
        socialMedia: {
          facebook: 'https://facebook.com/digicyfr',
          linkedin: 'https://linkedin.com/company/digicyfr',
          instagram: 'https://instagram.com/digicyfr',
          youtube: 'https://youtube.com/digicyfr'
        }
      },

      legal: {
        privacy: 'Polityka Prywatności',
        terms: 'Regulamin Usług',
        cookies: 'Polityka Cookies',
        gdpr: 'Zgodność z RODO'
      },

      newsletter: {
        title: 'Bądź na Bieżąco',
        subtitle: 'Otrzymuj porady dotyczące marketingu cyfrowego i wiadomości branżowe',
        placeholder: 'Wprowadź swój adres e-mail',
        button: 'Zapisz się',
        privacy: 'Szanujemy Twoją prywatność. Wypisz się w każdej chwili.'
      }
    }
  },

  // ============================================
  // GERMAN TRANSLATIONS
  // ============================================
  de: {
    // Meta information for SEO
    meta: {
      title: 'Digitale Wachstumslösungen für Polnische Unternehmen | Digicyfr',
      description: 'Steigern Sie Ihr Unternehmen mit unseren umfassenden digitalen Lösungen: SEO, Google Ads, E-Commerce-Websites und ERP-Systeme. Vertraut von 200+ polnischen Unternehmen.',
      keywords: [
        'digitales Marketing Polen',
        'SEO-Dienstleistungen Warschau',
        'Google Ads Management',
        'E-Commerce-Entwicklung',
        'ERP-Systeme Polen',
        'Unternehmenswachstumslösungen',
        'digitale Transformation',
        'Online-Marketing Polen'
      ],
      author: 'Digicyfr Digitale Lösungen',
      ogTitle: 'Lassen Sie Ihr Polnisches Unternehmen mit Digitaler Exzellenz Wachsen | Digicyfr',
      ogDescription: 'Professionelle digitale Lösungen für polnische KMU: SEO, Google Ads, E-Commerce und ERP-Systeme. Beginnen Sie heute zu wachsen!',
      twitterTitle: 'Digitale Wachstumslösungen für Polnische Unternehmen',
      twitterDescription: 'Umfassende digitale Marketing- und Unternehmenslösungen für polnische Firmen. Starten Sie heute!'
    },

    // Navigation
    nav: {
      home: 'Startseite',
      services: 'Dienstleistungen',
      about: 'Über uns',
      contact: 'Kontakt',
      getStarted: 'Loslegen',
      getQuote: 'Kostenloses Angebot',
      login: 'Kundenportal'
    },

    // Hero Section
    hero: {
      badge: '🏆 Vertraut von 200+ polnischen Unternehmen',
      badgeAlt: 'Vertraut von über 200 polnischen Unternehmen',
      preTitle: 'Digitale Exzellenz für',
      title: 'Polnische Unternehmen',
      titleHighlight: 'Bereit zu Wachsen',
      subtitle: 'Wir spezialisieren uns darauf, polnischen Einzelhändlern und KMU zu helfen, ihren Umsatz durch bewährte SEO-Strategien, hochkonvertierende Google & Meta Ads, professionelle E-Commerce-Lösungen und optimierte ERP-Systeme in die Höhe zu treiben.',
      subtitleHighlight: 'Ihre digitale Transformation beginnt hier.',
      cta: 'Heute mit dem Wachstum beginnen',
      ctaSecondary: 'Erfolgsgeschichten sehen',
      ctaTertiary: 'Kostenlose Beratung',
      valueProposition: 'Durchschnittlicher Kunde sieht 150% Umsatzwachstum innerhalb von 6 Monaten',
      trustSignals: [
        'Keine langfristigen Verträge',
        'Geld-zurück-Garantie',
        'Lokaler polnischer Support',
        '24/7 Überwachung'
      ]
    },

    // Statistics
    stats: {
      clients: {
        number: 200,
        suffix: '+',
        label: 'Zufriedene Kunden',
        description: 'Polnische Unternehmen, denen wir beim Wachstum geholfen haben'
      },
      growth: {
        number: 150,
        suffix: '%',
        label: 'Durchschnittliches Wachstum',
        description: 'Umsatzsteigerung innerhalb von 6 Monaten'
      },
      projects: {
        number: 500,
        suffix: '+',
        label: 'Abgeschlossene Projekte',
        description: 'Erfolgreiche digitale Transformationen'
      },
      support: {
        text: '24/7',
        label: 'Experten-Support',
        description: 'Immer da, wenn Sie uns brauchen'
      },
      retention: {
        number: 95,
        suffix: '%',
        label: 'Kundenbindung',
        description: 'Kunden, die bleiben und mit uns wachsen'
      },
      experience: {
        number: 5,
        suffix: '+',
        label: 'Jahre Erfahrung',
        description: 'Im polnischen digitalen Markt'
      }
    },

    // Services Section
    services: {
      title: 'Wie Wir Ihr Unternehmenswachstum Beschleunigen',
      subtitle: 'Umfassende digitale Lösungen speziell für polnische kleine und mittlere Unternehmen entwickelt',
      description: 'Wir verstehen die einzigartigen Herausforderungen des polnischen Marktes und liefern maßgeschneiderte Lösungen, die echte Ergebnisse erzielen.',
      
      seo: {
        title: 'SEO & Lokale Suchoptimierung',
        subtitle: 'Dominieren Sie die Google-Suchergebnisse',
        description: 'Ranken Sie auf Platz #1 bei Google für Ihre Zielkeywords und gewinnen Sie hochwertige lokale Kunden mit unseren bewährten SEO-Strategien und Google My Business-Optimierung.',
        features: [
          'Lokales SEO für den polnischen Markt',
          'Google My Business-Optimierung',
          'Keyword-Recherche & Strategie',
          'Technisches SEO-Audit',
          'Content-Marketing',
          'Link-Building-Kampagnen'
        ],
        results: 'Durchschnittlich 300% Steigerung des organischen Traffics',
        icon: '🔍',
        price: 'Ab 1.500 zł/Monat'
      },

      ads: {
        title: 'Google & Meta Werbung',
        subtitle: 'Gezielte Kampagnen Die Konvertieren',
        description: 'Lenken Sie qualifizierten Traffic und maximieren Sie den ROI mit unseren fachmännisch verwalteten Google Ads, Facebook Ads und Instagram-Kampagnen, die für den polnischen Markt maßgeschneidert sind.',
        features: [
          'Google Ads-Management',
          'Facebook & Instagram-Anzeigen',
          'Conversion-Optimierung',
          'A/B-Testing & Analytics',
          'Lokales Markt-Targeting',
          'Budget-Optimierung'
        ],
        results: 'Durchschnittlich 400% Return on Ad Spend',
        icon: '📊',
        price: '15% der Werbeausgaben (min. 1.000 zł/Monat)'
      },

      ecommerce: {
        title: 'E-Commerce & Website-Entwicklung',
        subtitle: 'Websites Die Verkaufen Während Sie Schlafen',
        description: 'Schöne, schnelle und conversion-optimierte Online-Shops mit nahtloser Zahlungsintegration und Mobile-First-Design für den polnischen Markt.',
        features: [
          'Individuelle E-Commerce-Entwicklung',
          'Mobile-responsives Design',
          'Payment-Gateway-Integration',
          'Lagerverwaltung',
          'SEO-optimierte Struktur',
          'Performance-Optimierung'
        ],
        results: 'Durchschnittlich 250% Steigerung der Online-Verkäufe',
        icon: '🛒',
        price: 'Ab 5.000 zł'
      },

      erp: {
        title: 'ERP & Geschäftsautomatisierung',
        subtitle: 'Optimieren Sie Ihre Abläufe',
        description: 'Maßgeschneiderte ERP-Lösungen und Geschäftsautomatisierungstools, die speziell für polnische Branchen entwickelt wurden, um die Effizienz zu verbessern und Kosten zu senken.',
        features: [
          'Individuelle ERP-Entwicklung',
          'Prozessautomatisierung',
          'Lagerverwaltung',
          'Finanzberichterstattung',
          'CRM-Integration',
          'Multi-Standort-Unterstützung'
        ],
        results: 'Durchschnittlich 40% Reduzierung der Betriebskosten',
        icon: '⚙️',
        price: 'Ab 10.000 zł'
      }
    },

    // Industries Section
    industries: {
      title: 'Branchen in Denen Wir uns Spezialisieren',
      subtitle: 'Maßgeschneiderte Lösungen für verschiedene polnische Geschäftssektoren',
      description: 'Tiefe Branchenexpertise kombiniert mit lokalem Marktwissen zur Lieferung von Lösungen, die funktionieren.',
      
      retail: {
        title: 'Einzelhandel & Mode',
        description: 'Omnichannel-Einzelhandelslösungen',
        clients: '50+ Kunden',
        icon: '🛍️'
      },
      food: {
        title: 'Lebensmittel & Restaurants',
        description: 'Online-Bestell- & Liefersysteme',
        clients: '30+ Kunden',
        icon: '🍕'
      },
      health: {
        title: 'Gesundheit & Wellness',
        description: 'Patientenverwaltung & Buchungssysteme',
        clients: '25+ Kunden',
        icon: '💊'
      },
      automotive: {
        title: 'Automobil',
        description: 'Lager- & Serviceverwaltung',
        clients: '40+ Kunden',
        icon: '🚗'
      },
      manufacturing: {
        title: 'Fertigung',
        description: 'Produktions- & Lieferkettenoptimierung',
        clients: '35+ Kunden',
        icon: '🏭'
      },
      construction: {
        title: 'Bauwesen',
        description: 'Projektmanagement & Terminplanung',
        clients: '20+ Kunden',
        icon: '🏗️'
      }
    },

    // ERP Section
    erp: {
      title: 'Komplette ERP-Lösungen für Polnische Unternehmen',
      subtitle: 'Transformieren Sie Ihren gesamten Geschäftsbetrieb mit unseren umfassenden ERP-Services, die speziell für den polnischen Markt entwickelt wurden',
      description: 'Von kleinen lokalen Geschäften bis hin zu wachsenden Unternehmen - unsere ERP-Lösungen wachsen mit Ihrem Geschäft mit.',
      
      modules: 'Kern-Geschäftsmodule',
      modulesList: [
        {
          name: 'Vertriebsmanagement',
          description: 'Vollständige Verkaufspipeline und Kundenverfolgung',
          icon: '💰'
        },
        {
          name: 'Lagerkontrolle',
          description: 'Echtzeit-Bestandsverwaltung und Prognosen',
          icon: '📦'
        },
        {
          name: 'Finanzmanagement',
          description: 'Buchhaltung, Rechnungsstellung und Finanzberichterstattung',
          icon: '📊'
        },
        {
          name: 'CRM-Integration',
          description: 'Kundenbeziehungsmanagement und Support',
          icon: '👥'
        },
        {
          name: 'Projektmanagement',
          description: 'Aufgabenverfolgung und Teamzusammenarbeit',
          icon: '📋'
        },
        {
          name: 'E-Commerce-Integration',
          description: 'Nahtlose Online-Shop-Konnektivität',
          icon: '🔗'
        }
      ],

      benefits: 'Warum Unsere ERP-Lösungen Wählen?',
      benefitsList: [
        {
          title: 'Für den Polnischen Markt Gebaut',
          description: 'Konformität mit polnischen Steuergesetzen und Vorschriften',
          icon: '🇵🇱'
        },
        {
          title: 'Erschwingliche & Transparente Preise',
          description: 'Keine versteckten Kosten, flexible Zahlungspläne',
          icon: '💎'
        },
        {
          title: 'Lokaler Polnischer Support',
          description: 'Dediziertes Support-Team in Ihrer Sprache',
          icon: '🤝'
        },
        {
          title: 'Schnelle Implementierung',
          description: 'Betriebsbereit in 2-4 Wochen',
          icon: '⚡'
        },
        {
          title: 'Skalierbare Architektur',
          description: 'Wächst mit Ihren Geschäftsanforderungen',
          icon: '📈'
        }
      ],

      roi: {
        title: 'Return on Investment',
        timeToROI: '3-6 Monate',
        avgSavings: '40% Kostenreduzierung',
        productivity: '60% Effizienzsteigerung'
      }
    },

    // Testimonials
    testimonials: {
      title: 'Was Unsere Kunden Sagen',
      subtitle: 'Echte Ergebnisse von echten polnischen Unternehmen',
      
      items: [
        {
          name: 'Anna Kowalska',
          company: 'Bella Fashion Boutique',
          position: 'Inhaberin',
          content: 'Digicyfr hat unsere Online-Präsenz transformiert. Unser Umsatz stieg in nur 4 Monaten um 200%!',
          avatar: '/testimonials/anna-k.jpg',
          rating: 5,
          results: '+200% Umsatzsteigerung'
        },
        {
          name: 'Piotr Nowak',
          company: 'TechMed Solutions',
          position: 'CEO',
          content: 'Das ERP-System, das sie entwickelt haben, hat alle unsere Abläufe optimiert. Wir sparen 15 Stunden pro Woche!',
          avatar: '/testimonials/piotr-n.jpg',
          rating: 5,
          results: '15h/Woche gespart'
        },
        {
          name: 'Maria Wiśniewska',
          company: 'Green Garden Restaurant',
          position: 'Managerin',
          content: 'Unser Google-Ranking hat sich dramatisch verbessert. Wir sind jetzt #1 für "Restaurant Warschau"!',
          avatar: '/testimonials/maria-w.jpg',
          rating: 5,
          results: '#1 Google-Ranking'
        }
      ]
    },

    // Call to Action
    cta: {
      title: 'Bereit, Ihr Unternehmen zu Transformieren?',
      subtitle: 'Schließen Sie sich Hunderten erfolgreicher polnischer Unternehmen an, die Digicyfr ihr digitales Wachstum und ihre Transformation anvertrauen',
      description: 'Lassen Sie nicht zu, dass Ihre Konkurrenz vorausgeht. Beginnen Sie heute Ihre digitale Transformation.',
      button: 'Kostenlose Beratung Erhalten',
      buttonSecondary: 'Preise Ansehen',
      phoneText: 'Oder rufen Sie uns direkt an:',
      phone: '+49 123 456 7890',
      urgency: 'Begrenzte Plätze verfügbar in diesem Monat',
      guarantee: '30-Tage Geld-zurück-Garantie',
      features: [
        'Kostenlose Erstberatung',
        'Individuelle Strategieentwicklung',
        'Keine langfristigen Verträge',
        'Garantierte Ergebnisse oder Rückerstattung'
      ]
    },

    // Footer
    footer: {
      description: 'Digicyfr ist Polens führender Partner für digitale Transformation und hilft Unternehmen durch innovative SEO-, Werbe-, E-Commerce- und ERP-Lösungen zu wachsen.',
      location: 'Warschau, Polen',
      rights: 'Alle Rechte vorbehalten.',
      
      company: {
        title: 'Unternehmen',
        links: [
          { text: 'Über uns', href: '/about' },
          { text: 'Unser Team', href: '/team' },
          { text: 'Karriere', href: '/careers' },
          { text: 'Partner', href: '/partners' }
        ]
      },

      services: {
        title: 'Unsere Dienstleistungen',
        links: [
          { text: 'SEO-Optimierung', href: '/services/seo' },
          { text: 'Google & Meta Anzeigen', href: '/services/ads' },
          { text: 'E-Commerce-Entwicklung', href: '/services/ecommerce' },
          { text: 'ERP-Systeme', href: '/services/erp' },
          { text: 'Website-Entwicklung', href: '/services/websites' },
          { text: 'Digitale Beratung', href: '/services/consulting' }
        ]
      },

      resources: {
        title: 'Ressourcen',
        links: [
          { text: 'Blog', href: '/blog' },
          { text: 'Fallstudien', href: '/case-studies' },
          { text: 'Kostenlose Tools', href: '/tools' },
          { text: 'Wissensdatenbank', href: '/knowledge' },
          { text: 'Webinare', href: '/webinars' }
        ]
      },

      contact: {
        title: 'Kontaktinformationen',
        address: 'ul. Marszałkowska 100, 00-026 Warschau, Polen',
        phone: '+49 123 456 7890',
        email: 'hallo@digicyfr.com',
        businessHours: 'Mo-Fr 9:00-18:00',
        socialMedia: {
          facebook: 'https://facebook.com/digicyfr',
          linkedin: 'https://linkedin.com/company/digicyfr',
          instagram: 'https://instagram.com/digicyfr',
          youtube: 'https://youtube.com/digicyfr'
        }
      },

      legal: {
        privacy: 'Datenschutzrichtlinie',
        terms: 'Nutzungsbedingungen',
        cookies: 'Cookie-Richtlinie',
        gdpr: 'DSGVO-Konformität'
      },

      newsletter: {
        title: 'Bleiben Sie Informiert',
        subtitle: 'Erhalten Sie Digital-Marketing-Tipps und Brancheneinblicke',
        placeholder: 'Geben Sie Ihre E-Mail-Adresse ein',
        button: 'Abonnieren',
        privacy: 'Wir respektieren Ihre Privatsphäre. Jederzeit abbestellbar.'
      }
    }
  }
};

// ============================================
// ADVANCED TRANSLATION UTILITIES
// ============================================

const AdvancedTranslationUtils = {
  // Get localized date formats
  getDateFormat: (locale = 'en') => {
    const formats = {
      en: 'MM/DD/YYYY',
      pl: 'DD.MM.YYYY',
      de: 'DD.MM.YYYY'
    };
    return formats[locale] || formats.en;
  },

  // Get localized number formats
  getNumberFormat: (number, locale = 'en') => {
    const formatters = {
      en: new Intl.NumberFormat('en-US'),
      pl: new Intl.NumberFormat('pl-PL'),
      de: new Intl.NumberFormat('de-DE')
    };
    return formatters[locale]?.format(number) || number;
  },

  // Get localized currency formats
  getCurrencyFormat: (amount, locale = 'en') => {
    const currencies = {
      en: { currency: 'USD', locale: 'en-US' },
      pl: { currency: 'PLN', locale: 'pl-PL' },
      de: { currency: 'EUR', locale: 'de-DE' }
    };
    
    const config = currencies[locale] || currencies.en;
    return new Intl.NumberFormat(config.locale, {
      style: 'currency',
      currency: config.currency
    }).format(amount);
  },

  // Validate translation completeness
  validateTranslations: (translations) => {
    const issues = [];
    const languages = Object.keys(translations);
    
    languages.forEach(lang => {
      const langData = translations[lang];
      
      // Check for missing required sections
      const requiredSections = ['meta', 'nav', 'hero', 'services', 'cta', 'footer'];
      requiredSections.forEach(section => {
        if (!langData[section]) {
          issues.push(`Missing section '${section}' in language '${lang}'`);
        }
      });
    });
    
    return {
      isValid: issues.length === 0,
      issues
    };
  }
};

// ============================================
// TRANSLATION CONFIGURATION
// ============================================

const TranslationConfig = {
  // Supported languages with metadata
  supportedLanguages: {
    en: {
      name: 'English',
      nativeName: 'English',
      flag: '🇺🇸',
      dir: 'ltr',
      currency: 'USD',
      dateFormat: 'MM/DD/YYYY'
    },
    pl: {
      name: 'Polish',
      nativeName: 'Polski',
      flag: '🇵🇱',
      dir: 'ltr',
      currency: 'PLN',
      dateFormat: 'DD.MM.YYYY'
    },
    de: {
      name: 'German',
      nativeName: 'Deutsch',
      flag: '🇩🇪',
      dir: 'ltr',
      currency: 'EUR',
      dateFormat: 'DD.MM.YYYY'
    }
  },

  // Default configuration
  defaults: {
    fallbackLanguage: 'en',
    enableLogging: false,
    cacheTranslations: true
  }
};

// ============================================
// EXPORTS
// ============================================

export default homeTranslations;
export { TranslationUtils, AdvancedTranslationUtils, TranslationConfig };