'use client';
import { usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import { useState, useEffect } from 'react';

const locales = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'pl', name: 'Polski', flag: '🇵🇱' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' }
];

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();
  const pathname = usePathname();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('[data-language-switcher]')) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [isOpen]);

  const switchLanguage = (newLocale: string) => {
    if (newLocale === locale) {
      setIsOpen(false);
      return;
    }

    // Replace the locale in the current path
    const segments = pathname.split('/');
    segments[1] = newLocale;
    const newPath = segments.join('/');
    
    // Force navigation
    window.location.href = newPath;
  };

  const currentLocale = locales.find(l => l.code === locale);

  return (
    <div className="relative inline-block" data-language-switcher>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-14 h-14 rounded-full bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-blue-400 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
      >
        <span className="text-3xl">{currentLocale?.flag}</span>
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 z-50 p-2 animate-slideDown">
          <div className="flex flex-col gap-1">
            {locales.map((loc) => (
              <button
                key={loc.code}
                onClick={() => switchLanguage(loc.code)}
                className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110 ${
                  loc.code === locale 
                    ? 'bg-blue-100 dark:bg-blue-900/50 ring-2 ring-blue-400' 
                    : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
                title={loc.name}
              >
                <span className="text-3xl">{loc.flag}</span>
              </button>
            ))}
          </div>
        </div>
      )}
      
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
        
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
        
        .animate-pulse {
          animation: pulse 2s infinite;
        }
      `}</style>
    </div>
  );
}