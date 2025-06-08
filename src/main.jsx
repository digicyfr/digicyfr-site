/**
 * main.jsx - Application Entry Point
 * 
 * Features:
 * - Clean, working setup
 * - Error boundaries
 * - Performance monitoring
 * - Production ready
 * - No missing dependencies
 */

import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// Only import existing files
import './index.css';
import App from './App.jsx';

// Optional i18n - only if file exists
let i18nLoaded = false;
try {
  // Try to import i18n
  await import('./i18n.js');
  i18nLoaded = true;
  console.log('✅ i18n loaded successfully');
} catch (error) {
  console.log('ℹ️ i18n.js not found - continuing without internationalization');
}

// ============================================
// ERROR BOUNDARY COMPONENT
// ============================================

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Application Error:', error, errorInfo);
    
    // In production, send to error tracking service
    if (process.env.NODE_ENV === 'production') {
      // Example: Sentry.captureException(error);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
          <div className="max-w-md w-full text-center">
            <div className="mb-8">
              <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                Oops! Something went wrong
              </h1>
              <p className="text-gray-600 mb-6">
                We're sorry for the inconvenience. Please try refreshing the page.
              </p>
            </div>
            
            <div className="space-y-3">
              <button
                onClick={() => window.location.reload()}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Reload Page
              </button>
              <button
                onClick={() => window.location.href = '/'}
                className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Go to Homepage
              </button>
            </div>
            
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-6 text-left">
                <summary className="cursor-pointer text-sm text-gray-500 hover:text-gray-700">
                  Show Error Details
                </summary>
                <pre className="mt-2 p-4 bg-red-50 border border-red-200 rounded-lg text-xs text-red-800 overflow-auto">
                  {this.state.error.stack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// ============================================
// PERFORMANCE MONITORING (SIMPLE)
// ============================================

const initializeBasicMonitoring = () => {
  if (typeof window !== 'undefined') {
    // Basic performance logging
    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0];
      if (navigation) {
        console.log(`🚀 Page loaded in ${Math.round(navigation.loadEventEnd - navigation.loadEventStart)}ms`);
      }
    });

    // Memory monitoring (if available)
    if ('memory' in performance) {
      const logMemoryUsage = () => {
        const memory = performance.memory;
        const used = Math.round(memory.usedJSHeapSize / 1048576);
        const limit = Math.round(memory.jsHeapSizeLimit / 1048576);
        console.log(`💾 Memory: ${used}MB / ${limit}MB`);
        
        if (used > limit * 0.9) {
          console.warn('⚠️ High memory usage detected');
        }
      };
      
      // Check memory every 30 seconds in development
      if (process.env.NODE_ENV === 'development') {
        setInterval(logMemoryUsage, 30000);
      }
    }
  }
};

// ============================================
// BASIC PWA SETUP
// ============================================

const initializeBasicPWA = () => {
  // Service worker registration (production only)
  if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('✅ Service Worker registered:', registration);
        })
        .catch(error => {
          console.log('❌ Service Worker registration failed:', error);
        });
    });
  }

  // PWA install prompt
  let deferredPrompt;
  
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    console.log('📱 PWA install prompt ready');
  });

  window.addEventListener('appinstalled', () => {
    console.log('🎉 PWA was installed');
    deferredPrompt = null;
  });
};

// ============================================
// BASIC ACCESSIBILITY
// ============================================

const initializeBasicAccessibility = () => {
  // Keyboard navigation for main content
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      const main = document.querySelector('main, [role="main"]');
      if (main) {
        main.focus();
        main.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });

  // Basic route change announcements
  let lastTitle = document.title;
  const observer = new MutationObserver(() => {
    if (document.title !== lastTitle) {
      lastTitle = document.title;
      // Simple accessibility announcement
      const announcement = document.createElement('div');
      announcement.setAttribute('aria-live', 'polite');
      announcement.setAttribute('aria-atomic', 'true');
      announcement.className = 'sr-only';
      announcement.textContent = `Page changed to ${document.title}`;
      
      document.body.appendChild(announcement);
      setTimeout(() => document.body.removeChild(announcement), 1000);
    }
  });
  
  const titleElement = document.querySelector('title');
  if (titleElement) {
    observer.observe(titleElement, { childList: true });
  }
};

// ============================================
// DEVELOPMENT HELPERS
// ============================================

const initializeDevelopmentFeatures = () => {
  if (process.env.NODE_ENV === 'development') {
    // Make React available globally for dev tools
    window.React = React;
    
    // Enhanced console logging
    const originalLog = console.log;
    console.log = (...args) => {
      const timestamp = new Date().toLocaleTimeString();
      originalLog(`[${timestamp}]`, ...args);
    };

    // Warn about potential performance issues
    const originalWarn = console.warn;
    console.warn = (...args) => {
      if (args[0]?.includes?.('deprecated')) {
        console.error('🚨 DEPRECATED API DETECTED:', ...args);
      } else {
        originalWarn(...args);
      }
    };

    console.log('🛠️ Development mode enabled');
  }
};

// ============================================
// MAIN APP INITIALIZATION
// ============================================

const initializeApp = () => {
  try {
    initializeBasicMonitoring();
    initializeBasicPWA();
    initializeBasicAccessibility();
    initializeDevelopmentFeatures();
    
    console.log('✅ Digicyfr application initialized successfully');
    
    // Log app info
    console.log(`🚀 App Version: ${import.meta.env?.VITE_APP_VERSION || 'development'}`);
    console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log(`🗣️ i18n Status: ${i18nLoaded ? 'Loaded' : 'Not Available'}`);
    
  } catch (error) {
    console.error('❌ App initialization error:', error);
  }
};

// ============================================
// ROOT APP COMPONENT
// ============================================

const RootApp = () => {
  React.useEffect(() => {
    // Initialize app features after mount
    initializeApp();
  }, []);

  return (
    <StrictMode>
      <ErrorBoundary>
        <BrowserRouter
          future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true
          }}
        >
          <App />
        </BrowserRouter>
      </ErrorBoundary>
    </StrictMode>
  );
};

// ============================================
// GLOBAL ERROR HANDLERS
// ============================================

// Unhandled promise rejections
window.addEventListener('unhandledrejection', (event) => {
  console.error('🚨 Unhandled promise rejection:', event.reason);
  event.preventDefault();
  
  if (process.env.NODE_ENV === 'production') {
    // Send to error tracking service
    // Example: Sentry.captureException(event.reason);
  }
});

// Global JavaScript errors
window.addEventListener('error', (event) => {
  console.error('🚨 Global JavaScript error:', event.error);
  
  if (process.env.NODE_ENV === 'production') {
    // Send to error tracking service
    // Example: Sentry.captureException(event.error);
  }
});

// ============================================
// RENDER APPLICATION
// ============================================

const renderApp = () => {
  const rootElement = document.getElementById('root');
  
  if (!rootElement) {
    throw new Error('❌ Root element not found. Ensure you have <div id="root"></div> in your HTML.');
  }

  // Set accessibility attributes
  rootElement.setAttribute('role', 'application');
  rootElement.setAttribute('aria-label', 'Digicyfr Business Solutions');

  const root = createRoot(rootElement);
  root.render(<RootApp />);
};

// ============================================
// APP STARTUP
// ============================================

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderApp);
} else {
  renderApp();
}

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
  console.log('🧹 Cleaning up application...');
});

// Export for potential testing
export default RootApp;