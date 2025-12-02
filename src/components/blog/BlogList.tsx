// src/components/blog/BlogList.tsx
'use client';

import { BlogPost } from '@/types/blog';
import BlogCard from './BlogCard';
import '@/styles/components/blog/blog-list.css';

interface BlogListProps {
  posts: BlogPost[];
  locale: string;
}

export default function BlogList({ posts, locale }: BlogListProps) {
  if (posts.length === 0) {
    return (
      <div className="blog-list-empty">
        <div className="blog-list-empty-icon">📝</div>
        <h3 className="blog-list-empty-title">No posts found</h3>
        <p className="blog-list-empty-text">
          Check back soon for new content!
        </p>
      </div>
    );
  }

  return (
    <div className="blog-list">
      <div className="blog-list-grid">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} locale={locale} />
        ))}
      </div>
    </div>
  );
}
