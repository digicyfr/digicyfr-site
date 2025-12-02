// src/components/blog/BlogCard.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { BlogPost } from '@/types/blog';
import { getCategoryName } from '@/data/blogCategories';
import '@/styles/components/blog/blog-card.css';

interface BlogCardProps {
  post: BlogPost;
  locale: string;
}

export default function BlogCard({ post, locale }: BlogCardProps) {
  const t = useTranslations('blog');
  const content = post.translations[locale as keyof typeof post.translations];
  const categoryName = getCategoryName(post.category, locale as 'en' | 'pl' | 'de' | 'fr');

  // Format date
  const publishDate = new Date(post.publishedAt).toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article className="blog-card">
      <Link href={`/${locale}/blog/${post.slug}`} className="blog-card-link">
        {/* Image */}
        <div className="blog-card-image">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="blog-card-img"
          />
          {post.featured && (
            <div className="blog-card-featured-badge">
              ⭐ Featured
            </div>
          )}
        </div>

        {/* Content */}
        <div className="blog-card-content">
          {/* Category */}
          <div className="blog-card-category">{categoryName}</div>

          {/* Title */}
          <h3 className="blog-card-title">{content.title}</h3>

          {/* Excerpt */}
          <p className="blog-card-excerpt">{content.excerpt}</p>

          {/* Meta */}
          <div className="blog-card-meta">
            <span className="blog-card-meta-item">
              <svg className="blog-card-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {publishDate}
            </span>
            <span className="blog-card-meta-item">
              <svg className="blog-card-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {t('readingTime', { minutes: post.readingTime })}
            </span>
          </div>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="blog-card-tags">
              {post.tags.slice(0, 3).map((tag) => (
                <span key={tag} className="blog-card-tag">
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Read more */}
          <div className="blog-card-read-more">
            {t('readMore')} →
          </div>
        </div>
      </Link>
    </article>
  );
}
