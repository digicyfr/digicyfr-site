// src/components/blog/BlogPost.tsx
'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { BlogPost as BlogPostType } from '@/types/blog';
import { getCategoryName } from '@/data/blogCategories';
import '@/styles/components/blog/blog-post.css';

interface BlogPostProps {
  post: BlogPostType;
  locale: string;
}

export default function BlogPost({ post, locale }: BlogPostProps) {
  const t = useTranslations('blog');
  const content = post.translations[locale as keyof typeof post.translations];
  const categoryName = getCategoryName(post.category, locale as 'en' | 'pl' | 'de' | 'fr');

  // Format date
  const publishDate = new Date(post.publishedAt).toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // Convert markdown-style content to HTML-safe format
  const formatContent = (text: string) => {
    return text
      .split('\n')
      .map((line, index) => {
        // Handle headings
        if (line.startsWith('# ')) {
          return `<h1 key="${index}">${line.substring(2)}</h1>`;
        } else if (line.startsWith('## ')) {
          return `<h2 key="${index}">${line.substring(3)}</h2>`;
        } else if (line.startsWith('### ')) {
          return `<h3 key="${index}">${line.substring(4)}</h3>`;
        } else if (line.startsWith('#### ')) {
          return `<h4 key="${index}">${line.substring(5)}</h4>`;
        }
        // Handle bold text
        line = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        // Handle italic text
        line = line.replace(/\*(.*?)\*/g, '<em>$1</em>');
        // Handle inline code
        line = line.replace(/`([^`]+)`/g, '<code>$1</code>');
        // Handle list items
        if (line.startsWith('- ')) {
          return `<li key="${index}">${line.substring(2)}</li>`;
        }
        // Handle empty lines
        if (line.trim() === '') {
          return `<br key="${index}" />`;
        }
        // Regular paragraph
        return `<p key="${index}">${line}</p>`;
      })
      .join('');
  };

  return (
    <article className="blog-post">
      <div className="blog-post-container">
        {/* Header */}
        <header className="blog-post-header">
          {/* Category */}
          <div className="blog-post-category">{categoryName}</div>

          {/* Title */}
          <h1 className="blog-post-title">{content.title}</h1>

          {/* Meta */}
          <div className="blog-post-meta">
            <div className="blog-post-meta-item">
              <svg className="blog-post-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              {post.author.name}
            </div>
            <div className="blog-post-meta-item">
              <svg className="blog-post-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {publishDate}
            </div>
            <div className="blog-post-meta-item">
              <svg className="blog-post-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {t('readingTime', { minutes: post.readingTime })}
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="blog-post-image">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="blog-post-img"
            priority
          />
        </div>

        {/* Content */}
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: formatContent(content.content) }}
        />

        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="blog-post-tags">
            <span className="blog-post-tags-label">Tags:</span>
            {post.tags.map((tag) => (
              <span key={tag} className="blog-post-tag">
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Author Info */}
        <div className="blog-post-author">
          <div className="blog-post-author-avatar">
            {post.author.name.charAt(0)}
          </div>
          <div className="blog-post-author-info">
            <div className="blog-post-author-name">{post.author.name}</div>
            <div className="blog-post-author-role">{post.author.role}</div>
          </div>
        </div>
      </div>
    </article>
  );
}
