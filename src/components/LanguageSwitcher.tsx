'use client';
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';

const locales = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'pl', name: 'Polski', flag: '🇵🇱' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' }
];

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    router.push(segments.join('/'));
  };

  return (
    <div className="relative group">
      <button className="flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-gray-100">
        <span>{locales.find(l => l.code === locale)?.flag}</span>
        <span>{locales.find(l => l.code === locale)?.code.toUpperCase()}</span>
      </button>
      <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        {locales.map((loc) => (
          <button
            key={loc.code}
            onClick={() => switchLocale(loc.code)}
            className="flex items-center space-x-3 px-4 py-2 hover:bg-gray-100 first:rounded-t-md last:rounded-b-md w-full text-left"
          >
            <span>{loc.flag}</span>
            <span>{loc.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
