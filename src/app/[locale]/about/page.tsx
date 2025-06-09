//src/app/[locale]/about/page.tsx

'use client';
import { useTranslations } from 'next-intl';

export default function AboutPage() {
  const t = useTranslations('about');

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('title')}
            </h1>
            <p className="text-xl text-gray-600">
              {t('description')}
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <p className="text-lg text-gray-700 leading-relaxed">
              {t('content')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
