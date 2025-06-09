# Digicyfr Multilingual Website

## Supported Languages
- 🇺🇸 English (en) - Default
- 🇵🇱 Polish (pl)
- 🇩🇪 German (de)
- 🇫🇷 French (fr)

## URL Structure
- English: `yourdomain.com/en` or `yourdomain.com`
- Polish: `yourdomain.com/pl`
- German: `yourdomain.com/de`
- French: `yourdomain.com/fr`

## Development

### Start Development Server
```bash
./dev-multilingual.sh
```

### Adding New Translations
1. **Manual method**: Edit files in `messages/` folder
2. **Helper script**: 
   ```bash
   ./add-translation.sh "new.key.path" "English Value"
   ```

### File Structure
```
messages/
├── en.json    # English translations
├── pl.json    # Polish translations
├── de.json    # German translations
└── fr.json    # French translations

src/app/[locale]/
├── page.tsx           # Homepage
├── about/page.tsx     # About page
├── services/page.tsx  # Services page
├── portfolio/page.tsx # Portfolio page
├── contact/page.tsx   # Contact page
├── blog/page.tsx      # Blog page
└── layout.tsx         # Locale-specific layout
```

## Usage in Components

### Using Translations
```tsx
'use client';
import { useTranslations } from 'next-intl';

export default function MyComponent() {
  const t = useTranslations('namespace');
  
  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
    </div>
  );
}
```

### Getting Current Locale
```tsx
'use client';
import { useLocale } from 'next-intl';

export default function MyComponent() {
  const locale = useLocale();
  
  return <div>Current language: {locale}</div>;
}
```

### Creating Links
```tsx
import { useLocale } from 'next-intl';
import Link from 'next/link';

export default function MyComponent() {
  const locale = useLocale();
  
  return (
    <Link href={`/${locale}/about`}>
      About Us
    </Link>
  );
}
```

## Adding New Languages

1. **Add locale to configuration**:
   ```ts
   // src/i18n.ts
   export const locales = ['en', 'pl', 'de', 'fr', 'it'] as const;
   ```

2. **Create translation file**:
   ```bash
   touch messages/it.json
   ```

3. **Add translations**: Copy structure from `en.json` and translate

4. **Update language switcher**:
   ```tsx
   // src/components/Header.tsx
   const locales = [
     // ... existing locales
     { code: 'it', name: 'Italiano', flag: '🇮🇹' }
   ];
   ```

## RTL Support

The website uses standard LTR (left-to-right) layout for all supported languages.

## SEO Considerations

- Each language version has its own URL
- Meta tags should be translated
- Use `hreflang` attributes for better SEO
- Consider separate sitemaps for each language

## Deployment

The multilingual setup works with all major hosting platforms:
- Vercel (recommended for Next.js)
- Netlify
- AWS Amplify
- Traditional Node.js hosting

## Translation Management

For larger projects, consider:
- Translation management systems (Lokalise, Crowdin)
- Professional translation services
- Community translation contributions
- Regular translation audits
