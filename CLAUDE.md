# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Digicyfr is a multilingual Next.js 15 website for a digital solutions company, supporting English, Polish, German, and French. The site uses the App Router with next-intl for internationalization, TypeScript for type safety, and Tailwind CSS 4 for styling.

## Essential Commands

### Development
```bash
npm run dev         # Start development server at http://localhost:3000
npm run build       # Production build - ALWAYS run before deploying
npm run start       # Start production server
npm run type-check  # TypeScript validation - use to catch type errors
npm run lint        # ESLint checks
npm run clean       # Clean .next cache if build issues occur
```

### Testing Changes
- Always test all 4 languages when modifying content or layout
- URLs follow pattern: `/{locale}/path` (e.g., `/en/services`, `/pl/kontakt`)
- Access different languages: `http://localhost:3000/en`, `/pl`, `/de`, `/fr`

## Architecture

### Internationalization System
The entire i18n system is built on three critical files that must stay synchronized:

1. **src/i18n.ts** - Central configuration
   - Defines `locales` array: `['en', 'pl', 'de', 'fr']`
   - Sets `defaultLocale: 'en'`
   - Loads translation files from `/messages`

2. **src/middleware.ts** - Request handling
   - Uses `next-intl/middleware` with `localePrefix: 'always'`
   - All URLs MUST include locale prefix (enforced by middleware)
   - Matcher excludes: `/api`, `/_next`, `/_vercel`, static files

3. **src/app/[locale]/layout.tsx** - Root layout
   - Validates locale parameter against valid locales
   - Wraps app in `NextIntlClientProvider` with locale-specific messages
   - Returns 404 for invalid locales

**CRITICAL**: When adding/removing languages, update ALL THREE files plus `LanguageSwitcher.tsx` and create/remove corresponding JSON in `/messages`.

### Component Structure

#### Locale-Aware Components Pattern
Components use `useTranslations()` hook from next-intl:
```typescript
import { useTranslations } from 'next-intl';

const t = useTranslations('navigation');  // Loads 'navigation' key from messages/{locale}.json
const text = t('home');  // Gets 'navigation.home' value
```

Translation files in `/messages/{locale}.json` are deeply nested:
```json
{
  "navigation": { "home": "Home", "about": "About" },
  "home": {
    "hero": {
      "title": "Welcome"
    }
  }
}
```

#### Legacy Locale-Specific Components
**WARNING**: There are legacy locale-specific component files in:
- `src/components/home/de/` - German versions
- `src/components/home/fr/` - French versions
- `src/components/home/pl/` - Polish versions

These exist for historical reasons but are **NOT** the preferred pattern. When creating new components, use the `useTranslations()` hook pattern instead. Do not create new locale-specific component directories.

#### Client vs Server Components
- Components with hooks (`useState`, `useEffect`, `useTranslations`) need `'use client'` directive
- Header, Footer, LanguageSwitcher, ContactSection, HeroCarousel = client components
- Page components can be server components if they only render other components
- EmailJS initialization must happen client-side in `useEffect`

### Routing Structure
```
src/app/[locale]/
├── layout.tsx          # Root layout with NextIntlClientProvider
├── page.tsx            # Homepage (imports home components)
├── about/page.tsx      # About page
├── services/page.tsx   # Services listing
├── portfolio/page.tsx  # Portfolio/projects
├── blog/page.tsx       # Blog posts
└── contact/page.tsx    # Contact page
```

All pages automatically inherit locale from URL parameter via [locale] dynamic segment.

### Component Organization
```
src/components/
├── index.ts                    # Central export file
├── LanguageSwitcher.tsx        # Dropdown for language selection
├── common/
│   ├── Header.tsx              # Navigation with mobile menu
│   └── Footer.tsx              # Site footer
└── home/
    ├── HeroCarousel.tsx        # Auto-rotating hero (3 slides)
    ├── ServicesSection.tsx     # 4 services grid
    ├── PartnersSection.tsx     # Partner logos
    ├── ContactSection.tsx      # EmailJS contact form
    ├── AnimatedBanner.tsx      # Animated banner
    └── ManagementSection.tsx   # Management info
```

### Styling Architecture (UPDATED - December 2024)

**PRIMARY APPROACH**: Plain CSS in dedicated files

#### File Structure:
```
src/
├── components/
│   └── common/
│       └── Header.tsx              # Component
└── styles/
    └── components/
        └── header.css              # Dedicated CSS file
```

#### Implementation Pattern:

**1. In Component (Header.tsx):**
```tsx
import '@/styles/components/header.css';

export default function Header() {
  return (
    <header className="header">
      <nav className="header-nav">
        {/* Content */}
      </nav>
    </header>
  );
}
```

**2. In CSS File (header.css):**
```css
.header {
  position: fixed;
  top: 0;
  background: #ffffff;
  z-index: 1000;
}

.header-nav {
  display: flex;
  justify-content: space-between;
}

/* Responsive design */
@media (max-width: 768px) {
  .header {
    padding: 0.75rem 0;
  }
}
```

#### Available Styling Options:
- ✅ **Plain CSS** - Primary method (used for Header)
- ⚪ **Tailwind CSS 4** - Available but optional for utility classes
- ⚪ **CSS Modules** - Can be used if needed
- Global styles in `src/app/globals.css`

#### Benefits of Plain CSS Approach:
- Cleaner component code (no long className strings)
- Better organization (all styles in one file)
- Easier maintenance and debugging
- Custom animations with @keyframes
- Precise control over styling
- Clear separation of concerns

### EmailJS Integration
ContactSection uses EmailJS for form submissions:

1. Requires environment variables:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
   - `NEXT_PUBLIC_COMPANY_EMAIL` (fallback: info@digicyfr.com)

2. Template parameters sent to EmailJS:
   - `from_name` - Sender name
   - `from_email` - Sender email
   - `message` - Message content
   - `to_email` - Company email
   - `time` - Timestamp in Warsaw timezone

3. EmailJS initialization happens in `useEffect` to avoid SSR issues

### Image Handling
- Static images in `public/images/logo/` and `public/partners/`
- Next.js Image component used for optimization
- Remote images allowed from specific domains in `next.config.ts`:
  - kwiaciarniamilosc.pl
  - kebabsuperking.com
  - www.theoceanpro.com

## Type Definitions

All shared types in `src/types/index.ts`:
- `Service` - Service card data (icon, title, description, features)
- `Partner` - Partner logo data (name, logo path)
- `Slide` - Carousel slide data (title, subtitle, description, image, gradient)
- `ContactFormData` - Form fields (name, email, message)
- `Stat` - Statistics data (number, label)

## Common Development Patterns

### Adding a New Translation Key
1. Add to ALL four language files: `/messages/{en,pl,de,fr}.json`
2. Maintain identical nested structure across all files
3. Use in component: `const t = useTranslations('section'); t('key')`

### Adding a New Page
1. Create `src/app/[locale]/pagename/page.tsx`
2. Add navigation link to Header.tsx with translation key
3. Add translations for page title/content to all 4 message files
4. Update navigation section in all JSON files

### Modifying the Header/Navigation
- Header is a client component with mobile menu state
- Uses `useTranslations('navigation')` for link text
- Mobile menu toggles with hamburger icon (lucide-react `Menu`/`X` icons)
- Language switcher integrated in header

### Working with the HeroCarousel
- Auto-rotates through 3 slides every 5 seconds
- Each slide has: title, subtitle, description, gradient
- Translations in `home.hero.slides.0/1/2` structure
- Uses Framer Motion for animations

## Configuration Files

### next.config.ts
- Wraps config with `createNextIntlPlugin('./src/i18n.ts')`
- Configures allowed remote image domains
- No experimental Turbopack config needed (stable in Next.js 15)

### tsconfig.json
- Path alias: `@/*` maps to `./src/*`
- Use `@/components/Header` instead of relative paths

### tailwind.config.ts
- Content paths include all `src/**/*.{ts,tsx}`
- Custom theme extensions if needed

## Environment Variables

Required for production:
```env
# EmailJS (contact form)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=

# Company info (with fallbacks in code)
NEXT_PUBLIC_COMPANY_EMAIL=info@digicyfr.com
NEXT_PUBLIC_COMPANY_PHONE=+48 695 016 33
NEXT_PUBLIC_COMPANY_ADDRESS=Warsaw, Poland
NEXT_PUBLIC_COMPANY_WEBSITE=https://digicyfr.com
NEXT_PUBLIC_COMPANY_NAME=Digicyfr
NEXT_PUBLIC_SITE_URL=https://digicyfr.com
```

See DEPLOYMENT.md for full setup instructions.

## Important Notes

### Translation File Consistency
The most common source of bugs is missing or mismatched keys across the 4 language files. Always verify all 4 files have identical structure when adding/modifying translations.

### Locale Validation
The app has strict locale validation:
- Invalid locales return 404 (handled in layout.tsx)
- All URLs enforce locale prefix via middleware
- Language switcher intelligently handles path changes

### Mobile Responsiveness
All components designed mobile-first:
- Header has dedicated mobile menu
- Services grid: 1 col mobile → 2 col tablet → 4 col desktop
- Test all breakpoints when modifying layout

### Build Warnings
If you see hydration warnings:
- Check for client-only logic wrapped in `useEffect` with mounted state
- Verify no server-rendered content differs from client render
- ContactSection.tsx shows pattern for fixing this

### Dependencies
- React 19.1.0 and Next.js 15.3.3 (latest stable)
- Framer Motion 12.16.0 for animations
- lucide-react 0.513.0 for icons
- All dependencies pinned with `^` for minor updates only
