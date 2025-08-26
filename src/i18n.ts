import { getRequestConfig } from 'next-intl/server';

export const locales = ['en', 'pl', 'de', 'fr'] as const;
export const defaultLocale = 'en';

export default getRequestConfig(async ({ locale }) => {
  // Validate locale parameter
  const validLocale = locale && locales.includes(locale as typeof locales[number]) 
    ? locale 
    : defaultLocale;
  
  return {
    locale: validLocale,
    messages: (await import(`../messages/${validLocale}.json`)).default
  };
});