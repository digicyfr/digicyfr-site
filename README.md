# Digicyfr - Digital Solutions Platform

## 🌐 Project Overview

Digicyfr is a modern, multilingual digital solutions website built with Next.js 15, TypeScript, and Tailwind CSS. The platform offers digital marketing, web development, SEO optimization, and business management solutions.

### Key Technologies
- **Framework**: Next.js 15.3.3 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4 with PostCSS
- **Internationalization**: next-intl 4.1.0
- **Email Service**: EmailJS
- **UI Components**: Lucide React Icons
- **Animation**: Framer Motion 12.16.0

## 📁 Complete Directory Structure

```
/workspaces/cyfr/
├── 📄 Configuration Files
│   ├── package.json              # Project dependencies and scripts
│   ├── tsconfig.json            # TypeScript configuration
│   ├── next.config.ts           # Next.js configuration with i18n
│   ├── postcss.config.mjs       # PostCSS configuration
│   ├── eslint.config.mjs        # ESLint configuration
│   └── tailwind.config.ts       # Tailwind CSS configuration
│
├── 📂 messages/                 # Internationalization files
│   ├── en.json                  # English translations
│   ├── pl.json                  # Polish translations
│   ├── de.json                  # German translations
│   └── fr.json                  # French translations
│
├── 📂 public/                   # Static assets
│   ├── images/logo/            # Company logos and branding
│   │   ├── digicyfr-logo.png
│   │   ├── digicyfr-logo.svg
│   │   └── digicyfr-favicon.ico
│   └── partners/               # Partner company images
│       ├── art-kebab.jpg
│       ├── kebab-gold.png
│       ├── kebab-saad.png
│       ├── kebab-superking.png
│       ├── kwiaciarnia-milosc.png
│       └── oceanpro.png
│
└── 📂 src/                      # Source code
    ├── 📂 app/                  # Next.js App Router
    │   ├── globals.css          # Global styles
    │   └── [locale]/           # Dynamic locale routing
    │       ├── layout.tsx       # Root layout with i18n provider
    │       ├── page.tsx         # Homepage
    │       ├── about/page.tsx   # About page
    │       ├── services/page.tsx # Services page
    │       ├── portfolio/page.tsx # Portfolio page
    │       ├── blog/page.tsx    # Blog page
    │       └── contact/page.tsx # Contact page
    │
    ├── 📂 components/           # React components
    │   ├── index.ts            # Component exports
    │   ├── LanguageSwitcher.tsx # Language selector component
    │   │
    │   ├── 📂 common/          # Shared components
    │   │   ├── Header.tsx      # Navigation header with mobile menu
    │   │   └── Footer.tsx      # Site footer
    │   │
    │   └── 📂 home/            # Homepage components
    │       ├── HeroCarousel.tsx    # Hero section with carousel
    │       ├── ServicesSection.tsx # Services showcase
    │       ├── PartnersSection.tsx # Partners/clients section
    │       ├── ContactSection.tsx  # Contact form with EmailJS
    │       │
    │       └── 📂 [locale]/    # Locale-specific components
    │           ├── de/         # German components
    │           ├── fr/         # French components
    │           └── pl/         # Polish components
    │
    ├── 📂 styles/              # CSS modules and styles
    │   └── components/         # Component-specific styles
    │       ├── header.css
    │       ├── footer.css
    │       ├── hero-carousel.css
    │       ├── services-section.css
    │       ├── partners-section.css
    │       ├── contact-section.css
    │       └── homepage.css
    │
    ├── 📂 types/               # TypeScript type definitions
    │   └── index.ts
    │
    ├── i18n.ts                 # Internationalization configuration
    └── middleware.ts           # Next.js middleware for locale routing
```

## 🚀 Available Scripts

```bash
npm run dev        # Start development server on http://localhost:3000
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Run ESLint
npm run type-check # TypeScript type checking
npm run clean      # Clean build cache
```

## 🌍 Internationalization (i18n)

The website supports 4 languages:
- **English** (en) - Default
- **Polish** (pl)
- **German** (de)
- **French** (fr)

### i18n Implementation:
- **Routing**: Automatic locale-based routing with `next-intl/middleware`
- **Translations**: JSON files in `/messages` directory
- **Components**: Language-aware components using `useTranslations` hook
- **URL Structure**: `/{locale}/page` (e.g., `/en/services`, `/pl/kontakt`)

## 🎨 Component Architecture

### Core Components:

#### Header (`/components/common/Header.tsx`)
- Fixed navigation bar with glass morphism effect
- Mobile-responsive hamburger menu
- Integrated language switcher
- Smooth scroll to sections

#### HeroCarousel (`/components/home/HeroCarousel.tsx`)
- Auto-rotating carousel with 3 slides
- Service highlights for SEO, ERP, and Web Development
- Call-to-action buttons
- Responsive design

#### ServicesSection (`/components/home/ServicesSection.tsx`)
- 4 main services displayed in grid:
  1. SEO Optimization
  2. Google Business Management
  3. Web Development
  4. ERP/POS Systems
- Feature lists with checkmarks
- Icon integration with Lucide

#### ContactSection (`/components/home/ContactSection.tsx`)
- EmailJS integration for form submissions
- Contact information display
- Service coverage areas
- "Why Choose Us" section
- Form validation and loading states

#### PartnersSection (`/components/home/PartnersSection.tsx`)
- Partner/client logo showcase
- Responsive grid layout
- Image optimization

## 📧 Email Integration

### EmailJS Configuration:
Required environment variables:
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
NEXT_PUBLIC_COMPANY_EMAIL=contact@digicyfr.com
NEXT_PUBLIC_COMPANY_PHONE=+48 123 456 789
```

## 🎯 Key Features

1. **Responsive Design**: Mobile-first approach with breakpoints for all devices
2. **Performance Optimized**: 
   - Next.js Image optimization
   - Lazy loading components
   - CSS modules for scoped styling
3. **SEO Ready**:
   - Meta tags configuration
   - Structured data support
   - Sitemap generation capability
4. **Type Safety**: Full TypeScript implementation
5. **Modern UI/UX**:
   - Smooth animations with Framer Motion
   - Glass morphism effects
   - Interactive hover states
   - Loading states and error handling

## 🔧 Development Workflow

### File Structure Conventions:
- **Pages**: `/app/[locale]/[page]/page.tsx`
- **Components**: `/components/[category]/ComponentName.tsx`
- **Styles**: `/styles/components/[component-name].css`
- **Types**: `/types/index.ts`
- **Translations**: `/messages/[locale].json`

### Component Patterns:
- Client components use `'use client'` directive
- Server components for static content
- Hooks for state management and translations
- CSS modules for component styling

## 🌐 API Integrations

1. **EmailJS**: Contact form submissions
2. **Next.js Image API**: Image optimization
3. **Internationalization API**: Multi-language support

## 📦 Dependencies

### Production:
- `next`: 15.3.3 - React framework
- `react` & `react-dom`: 19.1.0 - UI library
- `next-intl`: 4.1.0 - Internationalization
- `@emailjs/browser`: 4.4.1 - Email service
- `framer-motion`: 12.16.0 - Animations
- `lucide-react`: 0.513.0 - Icon library

### Development:
- `typescript`: 5.x - Type checking
- `tailwindcss`: 4.x - Utility CSS
- `eslint`: 9.x - Code linting
- Various type definitions

## 🚀 Deployment

The project is configured for deployment on:
- **Vercel** (recommended) - Zero config deployment
- **Netlify** - Static site hosting
- **Any Node.js hosting** - With build and start scripts

### Build Process:
1. `npm install` - Install dependencies
2. `npm run build` - Create production build
3. `npm start` - Start production server

## 🔒 Security Features

- Environment variables for sensitive data
- CORS configuration in Next.js config
- Input validation on contact forms
- XSS protection through React
- HTTPS enforcement ready

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🧪 Testing Commands

```bash
npm run type-check  # TypeScript validation
npm run lint       # ESLint checks
```

## 📝 Git Status Notes

Current uncommitted changes in:
- Translation files (de.json, en.json, fr.json, pl.json)
- Layout and component files
- Middleware configuration

## 🤝 Contributing

When contributing to this project:
1. Follow the existing file structure
2. Maintain TypeScript type safety
3. Add translations for all 4 languages
4. Test responsive design on multiple devices
5. Follow the established CSS naming conventions
6. Update this README for significant changes

## 📞 Support

For development support or questions about the codebase structure, refer to:
- Component documentation in `/components/index.ts`
- Type definitions in `/types/index.ts`
- Configuration files for build settings

---

*This README provides a complete overview of the Digicyfr website structure for Claude or any AI assistant to understand the project comprehensively in the first interaction.*