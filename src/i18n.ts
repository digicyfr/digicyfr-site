import { notFound } from 'next/navigation';

export const locales = ['en', 'pl', 'de', 'fr'];
export const defaultLocale = 'en';

export function isValidLocale(locale: string): boolean {
  return locales.includes(locale);
}

export function validateLocale(locale: string): void {
  if (!isValidLocale(locale)) {
    notFound();
  }
}