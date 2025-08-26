'use client';
import { usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

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
        className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-all duration-200 border border-gray-300 bg-white shadow-sm"
      >
        <span className="text-lg">{currentLocale?.flag}</span>
        <span className="hidden sm:inline text-sm font-medium">{currentLocale?.name}</span>
        <span className="sm:hidden text-sm font-semibold">{currentLocale?.code.toUpperCase()}</span>
        <ChevronDown 
          size={14} 
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-44 bg-white rounded-lg shadow-xl border border-gray-200 z-50 py-1">
          {locales.map((loc) => (
            <button
              key={loc.code}
              onClick={() => switchLanguage(loc.code)}
              className={`flex items-center gap-3 px-4 py-2 w-full text-left hover:bg-gray-50 transition-colors duration-150 ${
                loc.code === locale ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
              }`}
            >
              <span className="text-lg">{loc.flag}</span>
              <span className="text-sm font-medium">{loc.name}</span>
              {loc.code === locale && (
                <span className="ml-auto text-blue-500 text-sm font-bold">✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}