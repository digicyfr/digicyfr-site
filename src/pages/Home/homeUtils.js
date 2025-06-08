// homeUtils.js - Utility functions and components for Home Page

import { useState, useEffect } from 'react';

/**
 * Animated Counter Component
 * Creates a smooth counting animation from 0 to end value
 */
export const AnimatedCounter = ({ end, suffix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Use easing function for smoother animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    const timer = setTimeout(() => {
      requestAnimationFrame(animate);
    }, 500); // Delay start for better UX

    return () => clearTimeout(timer);
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
};

/**
 * Intersection Observer Hook
 * Tracks when elements come into viewport for animations
 */
export const useIntersectionObserver = (options = {}) => {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
        ...options
      }
    );

    // Observe all elements with IDs
    const elementsToObserve = document.querySelectorAll('[id]');
    elementsToObserve.forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return isVisible;
};

/**
 * Smooth scroll to section
 */
export const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const offsetTop = element.offsetTop - 80; // Account for fixed navbar
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  }
};

/**
 * Debounce function for performance optimization
 */
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

/**
 * Check if element is in viewport
 */
export const isInViewport = (element) => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

/**
 * Format phone number for different locales
 */
export const formatPhoneNumber = (phone, locale = 'pl') => {
  const phoneFormats = {
    pl: '+48 123 456 789',
    en: '+1 (555) 123-4567',
    de: '+49 123 456 7890'
  };
  
  return phoneFormats[locale] || phoneFormats.pl;
};

/**
 * Get localized contact email
 */
export const getLocalizedEmail = (locale = 'en') => {
  const emails = {
    pl: 'kontakt@digicyfr.com',
    en: 'hello@digicyfr.com',
    de: 'hallo@digicyfr.com'
  };
  
  return emails[locale] || emails.en;
};

/**
 * Performance monitoring utilities
 */
export const trackPerformance = {
  // Track component render time
  startRender: (componentName) => {
    performance.mark(`${componentName}-start`);
  },
  
  endRender: (componentName) => {
    performance.mark(`${componentName}-end`);
    performance.measure(
      `${componentName}-render`,
      `${componentName}-start`,
      `${componentName}-end`
    );
  },
  
  // Get performance metrics
  getMetrics: () => {
    return performance.getEntriesByType('measure');
  }
};

/**
 * Local storage utilities with error handling
 */
export const storage = {
  set: (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.warn('Failed to save to localStorage:', error);
    }
  },
  
  get: (key, defaultValue = null) => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.warn('Failed to read from localStorage:', error);
      return defaultValue;
    }
  },
  
  remove: (key) => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.warn('Failed to remove from localStorage:', error);
    }
  }
};

/**
 * Device detection utilities
 */
export const device = {
  isMobile: () => {
    return window.innerWidth <= 768;
  },
  
  isTablet: () => {
    return window.innerWidth > 768 && window.innerWidth <= 1024;
  },
  
  isDesktop: () => {
    return window.innerWidth > 1024;
  },
  
  hasTouch: () => {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  }
};

/**
 * Animation utilities
 */
export const animations = {
  // Stagger animation delays for lists
  getStaggerDelay: (index, baseDelay = 100) => {
    return `${index * baseDelay}ms`;
  },
  
  // Random animation delay for organic feel
  getRandomDelay: (min = 0, max = 500) => {
    return `${Math.floor(Math.random() * (max - min + 1)) + min}ms`;
  },
  
  // Easing functions
  easing: {
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    spring: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)'
  }
};

/**
 * Form validation utilities
 */
export const validation = {
  email: (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },
  
  phone: (phone) => {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  },
  
  required: (value) => {
    return value && value.trim().length > 0;
  },
  
  minLength: (value, min) => {
    return value && value.length >= min;
  }
};

/**
 * SEO utilities
 */
export const seo = {
  updateTitle: (title, locale = 'en') => {
    const siteName = 'Digicyfr';
    document.title = title ? `${title} | ${siteName}` : siteName;
  },
  
  updateMetaDescription: (description) => {
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
  },
  
  updateCanonical: (url) => {
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;
  }
};

export default {
  AnimatedCounter,
  useIntersectionObserver,
  scrollToSection,
  debounce,
  isInViewport,
  formatPhoneNumber,
  getLocalizedEmail,
  trackPerformance,
  storage,
  device,
  animations,
  validation,
  seo
};