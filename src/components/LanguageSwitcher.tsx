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
        className="p-2 rounded-lg transition-all duration-200 border border-gray-200 bg-white/90 backdrop-blur-sm hover:bg-white hover:border-gray-300 hover:shadow-md"
        title="Select Language"
      >
        <span className="text-xl">{currentLocale?.flag}</span>
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 z-50 p-2">
          <div className="flex flex-col gap-1">
            {locales.map((loc) => (
              <button
                key={loc.code}
                onClick={() => switchLanguage(loc.code)}
                className={`p-2.5 rounded-md transition-all duration-200 hover:bg-gray-100 ${
                  loc.code === locale 
                    ? 'bg-blue-50 hover:bg-blue-100' 
                    : ''
                }`}
                title={loc.name}
              >
                <span className="text-xl block">{loc.flag}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}