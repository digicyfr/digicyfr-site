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
        className={`px-3 py-1.5 transition-all duration-200 font-medium text-sm tracking-wide ${
          isPending ? 'opacity-75 cursor-wait' : 'hover:opacity-70'
        }`}
        title="Select Language"
        disabled={isPending}
        style={{
          color: 'var(--foreground)',
          background: 'transparent',
          border: 'none',
          letterSpacing: '0.5px'
        }}
      >
        {locale.toUpperCase()}
        {isPending && (
          <span className="ml-2 inline-block w-3 h-3 border-2 border-current border-t-transparent rounded-full animate-spin"></span>
        )}
      </button>

      {isOpen && (
        <div
          className="absolute right-0 mt-2 rounded shadow-lg z-50 py-1 min-w-[120px]"
          style={{
            background: 'var(--card)',
            border: '1px solid var(--border)',
            color: 'var(--foreground)'
          }}
        >
          <div className="flex flex-col">
            {locales.map((loc) => (
              <button
                key={loc.code}
                onClick={() => switchLanguage(loc.code)}
                className={`px-4 py-2 text-left transition-all duration-200 text-sm ${
                  isPending ? 'cursor-wait opacity-75' : ''
                }`}
                style={{
                  background: loc.code === locale ? 'var(--muted)' : 'transparent',
                  color: 'var(--foreground)',
                  fontWeight: loc.code === locale ? 500 : 400
                }}
                onMouseEnter={(e) => {
                  if (loc.code !== locale) {
                    e.currentTarget.style.background = 'var(--muted)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (loc.code !== locale) {
                    e.currentTarget.style.background = 'transparent';
                  }
                }}
                disabled={isPending}
              >
                <span className="mr-2">{loc.flag}</span>
                {loc.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}