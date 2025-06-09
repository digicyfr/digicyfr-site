// Fixed src/app/[locale]/layout.tsx

import { notFound } from 'next/navigation';

const locales = ['en', 'pl', 'de', 'fr'];

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  if (!locales.includes(locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <head>
        <title>Digicyfr - Digital Solutions ({locale.toUpperCase()})</title>
        <meta name="description" content="Professional digital marketing and web development services" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}