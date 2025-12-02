// src/components/blog/RelatedPosts.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { BlogPost } from '@/types/blog';
import { getRelatedPosts } from '@/data/blogPosts';
import { getCategoryName } from '@/data/blogCategories';
import '@/styles/components/blog/related-posts.css';

interface RelatedPostsProps {
  currentPost: BlogPost;
  locale: string;
}

export default function RelatedPosts({ currentPost, locale }: RelatedPostsProps) {
  const t = useTranslations('blog');
  const relatedPosts = getRelatedPosts(currentPost, 3);

  if (relatedPosts.length === 0) {
    return null;
  }

  return (
    <section className="related-posts">
      <div className="related-posts-container">
        <h2 className="related-posts-title">
          {locale === 'en' && 'Related Articles'}
          {locale === 'pl' && 'Powiązane artykuły'}
          {locale === 'de' && 'Verwandte Artikel'}
          {locale === 'fr' && 'Articles connexes'}
        </h2>

        <div className="related-posts-grid">
          {relatedPosts.map((post) => {
            const content = post.translations[locale as keyof typeof post.translations];
            const categoryName = getCategoryName(post.category, locale as 'en' | 'pl' | 'de' | 'fr');

            return (
              <article key={post.id} className="related-post-card">
                <Link href={`/${locale}/blog/${post.slug}`} className="related-post-link">
                  {/* Image */}
                  <div className="related-post-image">
                    <Image
                      src={post.image}
                      alt={post.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="related-post-img"
                    />
                  </div>

                  {/* Content */}
                  <div className="related-post-content">
                    <div className="related-post-category">{categoryName}</div>
                    <h3 className="related-post-title">{content.title}</h3>
                    <div className="related-post-meta">
                      <span>{t('readingTime', { minutes: post.readingTime })}</span>
                    </div>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}