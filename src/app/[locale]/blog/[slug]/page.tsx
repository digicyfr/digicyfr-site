// src/app/[locale]/blog/[slug]/page.tsx

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug } from '@/data/blogPosts';
import BlogPost from '@/components/blog/BlogPost';
import ShareButtons from '@/components/blog/ShareButtons';
import RelatedPosts from '@/components/blog/RelatedPosts';
import ReadingProgress from '@/components/blog/ReadingProgress';
import BackToTop from '@/components/blog/BackToTop';

/**
 * Individual Blog Post Page
 *
 * Phase 4: Enhancement Components Complete
 * - ReadingProgress: Shows scroll progress at top
 * - ShareButtons: Social media sharing
 * - RelatedPosts: Related content recommendations
 * - BackToTop: Floating scroll-to-top button
 */

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

// Generate static params for all blog posts
export function generateStaticParams() {
  const locales = ['en', 'pl', 'de', 'fr'];
  const posts = getAllPosts();
  const params = [];

  for (const locale of locales) {
    for (const post of posts) {
      params.push({ locale, slug: post.slug });
    }
  }

  return params;
}

// Generate metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found | Digicyfr',
    };
  }

  const content = post.translations[locale as keyof typeof post.translations];

  return {
    title: `${content.title} | Digicyfr Blog`,
    description: content.metaDescription,
    keywords: content.metaKeywords,
    authors: [{ name: post.author.name }],
    alternates: {
      canonical: `/${locale}/blog/${post.slug}`,
      languages: {
        en: `/en/blog/${post.slug}`,
        pl: `/pl/blog/${post.slug}`,
        de: `/de/blog/${post.slug}`,
        fr: `/fr/blog/${post.slug}`,
      },
    },
    openGraph: {
      title: content.title,
      description: content.excerpt,
      type: 'article',
      locale,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.imageAlt,
        },
      ],
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      authors: [post.author.name],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: content.title,
      description: content.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { locale, slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const content = post.translations[locale as keyof typeof post.translations];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const postUrl = `${siteUrl}/${locale}/blog/${post.slug}`;

  return (
    <>
      <ReadingProgress />
      <BlogPost post={post} locale={locale} />
      <ShareButtons title={content.title} url={postUrl} locale={locale} />
      <RelatedPosts currentPost={post} locale={locale} />
      <BackToTop />
    </>
  );
}
