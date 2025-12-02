// src/app/[locale]/blog/page.tsx

import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { getAllPosts } from '@/data/blogPosts';
import BlogHero from '@/components/blog/BlogHero';
import BlogList from '@/components/blog/BlogList';

/**
 * Blog Listing Page
 *
 * Phase 3: Complete with BlogHero and BlogList components
 */

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'blog' });

  return {
    title: `${t('title')} | Digicyfr`,
    description: t('subtitle'),
    alternates: {
      canonical: `/${locale}/blog`,
      languages: {
        en: '/en/blog',
        pl: '/pl/blog',
        de: '/de/blog',
        fr: '/fr/blog',
      },
    },
    openGraph: {
      title: `${t('title')} | Digicyfr`,
      description: t('subtitle'),
      type: 'website',
      locale,
    },
  };
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'blog' });
  const posts = getAllPosts();

  return (
    <main className="blog-page">
      <BlogHero title={t('title')} subtitle={t('subtitle')} />
      <BlogList posts={posts} locale={locale} />
    </main>
  );
}
