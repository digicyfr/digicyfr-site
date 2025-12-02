'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import Header from '@/components/common/Header';
import '@/styles/components/not-found.css';

export default function NotFound() {
  const locale = useLocale();
  const t = useTranslations('notFound');

  return (
    <>
      <Header />
      <div className="not-found-page">
        <div className="not-found-container">
          <div className="not-found-content">
            <h1 className="not-found-code">{t('code')}</h1>
            <h2 className="not-found-title">{t('title')}</h2>
            <p className="not-found-description">
              {t('description')}
            </p>
            <div className="not-found-buttons">
              <Link href={`/${locale}`} className="not-found-button-primary">
                {t('buttonHome')}
              </Link>
              <Link href={`/${locale}/contact`} className="not-found-button-secondary">
                {t('buttonContact')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
