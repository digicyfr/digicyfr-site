import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { getMessages } from 'next-intl/server';
import { ThemeProvider } from '@/lib/theme-context';
import '../globals.css';
const locales = ['en', 'pl', 'de', 'fr'];

// Required for static optimization
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Validate locale
  if (!locales.includes(locale)) {
    notFound();
  }

  // Load messages for current locale
  const messages = await getMessages({ locale });
  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <title>{`Digicyfr - Digital Solutions (${locale.toUpperCase()})`}</title>
        <meta name="description" content="Professional digital marketing and web development services" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <ThemeProvider>
          <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}