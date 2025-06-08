/**
 * App.jsx - Main Application Component
 * 
 * Features:
 * - Lazy loading with performance optimization
 * - Error boundaries for graceful error handling
 * - Loading states with progress indicators
 * - SEO-ready meta management
 * - Accessibility features
 * - Performance monitoring
 */

import React, { Suspense, lazy, useEffect, useState } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import ErrorBoundary from './components/shared/ErrorBoundary';
import LoadingSpinner from './components/ui/LoadingSpinner';
import ScrollToTop from './components/ui/ScrollToTop';
import PerformanceMonitor from './utils/PerformanceMonitor';

// ============================================
// LAZY LOADED COMPONENTS
// ============================================

// Home page with preloading
const HomePage = lazy(() => 
  import('./pages/Home/HomePage').then(module => {
    // Preload critical resources
    if (typeof window !== 'undefined') {
      // Preload other pages for better UX
      import('./pages/Services/ServicesPage');
      import('./pages/About/AboutPage');
    }
    return module;
  })
);

// Other pages with error handling
const ServicesPage = lazy(() => 
  import('./pages/Services/ServicesPage').catch(() => 
    import('./pages/Placeholder/PlaceholderPage').then(module => ({
      default: () => module.default({ title: 'Services', message: 'Coming Soon' })
    }))
  )
);

const AboutPage = lazy(() => 
  import('./pages/About/AboutPage').catch(() => 
    import('./pages/Placeholder/PlaceholderPage').then(module => ({
      default: () => module.default({ title: 'About Us', message: 'Coming Soon' })
    }))
  )
);

const ContactPage = lazy(() => 
  import('./pages/Contact/ContactPage').catch(() => 
    import('./pages/Placeholder/PlaceholderPage').then(module => ({
      default: () => module.default({ title: 'Contact', message: 'Coming Soon' })
    }))
  )
);

// Fallback placeholder component
const PlaceholderPage = lazy(() => import('./pages/Placeholder/PlaceholderPage'));

// ============================================
// LOADING COMPONENT WITH PROGRESS
// ============================================

const EnhancedLoadingSpinner = ({ route }) => {
  const [loadingTime, setLoadingTime] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      setLoadingTime(Date.now() - startTime);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="text-center">
        <LoadingSpinner />
        <div className="mt-6 space-y-2">
          <p className="text-lg font-semibold text-gray-700">
            {t('loading.title', 'Loading...')}
          </p>
          <p className="text-sm text-gray-500">
            {t('loading.subtitle', 'Preparing your experience')}
          </p>
          {loadingTime > 2000 && (
            <p className="text-xs text-gray-400">
              {t('loading.slowConnection', 'Slow connection detected...')}
            </p>
          )}
        </div>
        
        {/* Loading progress bar */}
        <div className="mt-4 w-64 bg-gray-200 rounded-full h-1 mx-auto">
          <div 
            className="bg-gradient-to-r from-blue-600 to-cyan-600 h-1 rounded-full transition-all duration-300"
            style={{ width: `${Math.min((loadingTime / 3000) * 100, 90)}%` }}
          />
        </div>
      </div>
    </div>
  );
};

// ============================================
// ROUTE CONFIGURATION
// ============================================

const routes = [
  {
    path: '/',
    component: HomePage,
    title: 'Digital Growth Solutions for Polish Businesses',
    description: 'Boost your business with comprehensive digital solutions: SEO, Google Ads, e-commerce, and ERP systems.',
    keywords: 'digital marketing Poland, SEO Warsaw, Google Ads, e-commerce development'
  },
  {
    path: '/services',
    component: ServicesPage,
    title: 'Our Digital Services',
    description: 'Comprehensive digital solutions: SEO, Google Ads, e-commerce development, and ERP systems for Polish businesses.',
    keywords: 'SEO services, Google Ads management, e-commerce development, ERP systems'
  },
  {
    path: '/about',
    component: AboutPage,
    title: 'About Digicyfr',
    description: 'Learn about our mission to help Polish businesses grow through innovative digital solutions and expert support.',
    keywords: 'about Digicyfr, digital agency Poland, business growth experts'
  },
  {
    path: '/contact',
    component: ContactPage,
    title: 'Contact Us',
    description: 'Get in touch with our digital experts. Free consultation available. Warsaw, Poland based digital agency.',
    keywords: 'contact Digicyfr, free consultation, Warsaw digital agency'
  }
];

// ============================================
// SEO COMPONENT
// ============================================

const SEOComponent = ({ route, language }) => {
  const { t } = useTranslation();
  
  const getLocalizedMeta = (key, fallback) => {
    return t(`meta.${key}`, fallback);
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{getLocalizedMeta('title', route?.title || 'Digicyfr')}</title>
      <meta 
        name="description" 
        content={getLocalizedMeta('description', route?.description || '')} 
      />
      <meta 
        name="keywords" 
        content={getLocalizedMeta('keywords', route?.keywords || '')} 
      />
      
      {/* Language and Locale */}
      <html lang={language} />
      <meta name="language" content={language} />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={getLocalizedMeta('title', route?.title || 'Digicyfr')} />
      <meta property="og:description" content={getLocalizedMeta('description', route?.description || '')} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${window.location.origin}${route?.path || ''}`} />
      <meta property="og:site_name" content="Digicyfr" />
      <meta property="og:locale" content={language === 'pl' ? 'pl_PL' : language === 'de' ? 'de_DE' : 'en_US'} />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={getLocalizedMeta('title', route?.title || 'Digicyfr')} />
      <meta name="twitter:description" content={getLocalizedMeta('description', route?.description || '')} />
      
      {/* Technical Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <meta name="author" content="Digicyfr" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={`${window.location.origin}${route?.path || ''}`} />
      
      {/* Alternate Languages */}
      <link rel="alternate" hrefLang="en" href={`${window.location.origin}/en${route?.path || ''}`} />
      <link rel="alternate" hrefLang="pl" href={`${window.location.origin}/pl${route?.path || ''}`} />
      <link rel="alternate" hrefLang="de" href={`${window.location.origin}/de${route?.path || ''}`} />
      <link rel="alternate" hrefLang="x-default" href={`${window.location.origin}${route?.path || ''}`} />
    </Helmet>
  );
};

// ============================================
// MAIN APP COMPONENT
// ============================================

function App() {
  const location = useLocation();
  const { i18n } = useTranslation();
  const [isInitialized, setIsInitialized] = useState(false);

  // Get current route configuration
  const currentRoute = routes.find(route => route.path === location.pathname);

  // Initialize app
  useEffect(() => {
    const initializeApp = async () => {
      try {
        // Performance monitoring
        PerformanceMonitor.mark('app-init-start');
        
        // Initialize i18n if not already done
        if (!i18n.isInitialized) {
          await i18n.init();
        }
        
        // Preload critical resources
        if (typeof window !== 'undefined') {
          // Preload fonts
          const fontLink = document.createElement('link');
          fontLink.rel = 'preload';
          fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap';
          fontLink.as = 'style';
          document.head.appendChild(fontLink);
        }
        
        PerformanceMonitor.mark('app-init-end');
        PerformanceMonitor.measure('app-initialization', 'app-init-start', 'app-init-end');
        
        setIsInitialized(true);
      } catch (error) {
        console.error('App initialization error:', error);
        setIsInitialized(true); // Continue anyway
      }
    };

    initializeApp();
  }, [i18n]);

  // Show loading until app is initialized
  if (!isInitialized) {
    return <EnhancedLoadingSpinner route="initialization" />;
  }

  return (
    <ErrorBoundary>
      <div className="min-h-screen flex flex-col bg-white">
        {/* SEO Component */}
        <SEOComponent route={currentRoute} language={i18n.language} />
        
        {/* Scroll to top on route change */}
        <ScrollToTop />
        
        {/* Main Application Routes */}
        <Suspense 
          fallback={<EnhancedLoadingSpinner route={location.pathname} />}
        >
          <Routes>
            {/* Main Routes */}
            <Route 
              path="/" 
              element={<HomePage />} 
            />
            <Route 
              path="/services" 
              element={<ServicesPage />} 
            />
            <Route 
              path="/about" 
              element={<AboutPage />} 
            />
            <Route 
              path="/contact" 
              element={<ContactPage />} 
            />
            
            {/* Legacy Routes - Redirect */}
            <Route 
              path="/login" 
              element={<Navigate to="/contact" replace />} 
            />
            <Route 
              path="/sign-in" 
              element={<Navigate to="/contact" replace />} 
            />
            
            {/* Language-specific Routes */}
            <Route 
              path="/en/*" 
              element={<Navigate to={location.pathname.replace('/en', '')} replace />} 
            />
            <Route 
              path="/pl/*" 
              element={<Navigate to={location.pathname.replace('/pl', '')} replace />} 
            />
            <Route 
              path="/de/*" 
              element={<Navigate to={location.pathname.replace('/de', '')} replace />} 
            />
            
            {/* 404 Fallback */}
            <Route 
              path="*" 
              element={
                <PlaceholderPage 
                  title="Page Not Found" 
                  message="The page you're looking for doesn't exist." 
                  showBackButton={true}
                />
              } 
            />
          </Routes>
        </Suspense>
      </div>
    </ErrorBoundary>
  );
}

export default App;