// src/components/blog/BlogListClient.tsx
'use client';

import { useState } from 'react';
import { BlogPost, BlogCategory } from '@/types/blog';
import BlogCategories from './BlogCategories';
import BlogList from './BlogList';

interface BlogListClientProps {
  posts: BlogPost[];
  locale: string;
}

export default function BlogListClient({ posts, locale }: BlogListClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory | 'all'>('all');

  // Filter posts by category
  const filteredPosts = selectedCategory === 'all'
    ? posts
    : posts.filter(post => post.category === selectedCategory);

  return (
    <>
      <BlogCategories
        locale={locale}
        onCategoryChange={setSelectedCategory}
        currentCategory={selectedCategory}
      />
      <BlogList posts={filteredPosts} locale={locale} />
    </>
  );
}
