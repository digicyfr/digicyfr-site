'use client';
import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { useState, useEffect, useTransition } from 'react';

const locales = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'pl', name: 'Polski', flag: '🇵🇱' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' }
];

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

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

    setIsOpen(false);
    
    startTransition(() => {
      // Handle different pathname scenarios
      let newPath: string;
      
      // Check if pathname starts with a locale
      const pathSegments = pathname.split('/').filter(Boolean);
      const firstSegment = pathSegments[0];
      const currentLocales = ['en', 'pl', 'de', 'fr'];
      
      if (currentLocales.includes(firstSegment)) {
        // Replace existing locale
        pathSegments[0] = newLocale;
        newPath = '/' + pathSegments.join('/');
      } else {
        // Add locale prefix to current path
        newPath = `/${newLocale}${pathname === '/' ? '' : pathname}`;
      }
      
      // Use Next.js router for smooth navigation
      router.push(newPath);
    });
  };

  const currentLocale = locales.find(l => l.code === locale);

  return (
    <div className="relative inline-block" data-language-switcher>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`p-2 rounded-lg transition-all duration-200 border border-gray-200 bg-white/90 backdrop-blur-sm hover:bg-white hover:border-gray-300 hover:shadow-md relative ${
          isPending ? 'opacity-75 cursor-wait' : ''
        }`}
        title="Select Language"
        disabled={isPending}
      >
        <span className="text-xl">{currentLocale?.flag}</span>
        {isPending && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
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
                } ${isPending ? 'cursor-wait opacity-75' : ''}`}
                title={loc.name}
                disabled={isPending}
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