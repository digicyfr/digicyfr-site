// src/components/blog/BlogCategories.tsx
'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { BlogCategory } from '@/types/blog';
import { blogCategories } from '@/data/blogCategories';
import '@/styles/components/blog/blog-categories.css';

interface BlogCategoriesProps {
  locale: string;
  onCategoryChange: (category: BlogCategory | 'all') => void;
  currentCategory?: BlogCategory | 'all';
}

export default function BlogCategories({
  locale,
  onCategoryChange,
  currentCategory = 'all'
}: BlogCategoriesProps) {
  const t = useTranslations('blog.categories');
  const [activeCategory, setActiveCategory] = useState<BlogCategory | 'all'>(currentCategory);

  const handleCategoryClick = (category: BlogCategory | 'all') => {
    setActiveCategory(category);
    onCategoryChange(category);
  };

  return (
    <div className="blog-categories">
      <div className="blog-categories-container">
        <button
          className={`blog-category-btn ${activeCategory === 'all' ? 'active' : ''}`}
          onClick={() => handleCategoryClick('all')}
        >
          {t('all')}
        </button>
        {blogCategories.map((category) => (
          <button
            key={category.id}
            className={`blog-category-btn ${activeCategory === category.id ? 'active' : ''}`}
            onClick={() => handleCategoryClick(category.id as BlogCategory)}
          >
            <span className="blog-category-icon">{category.icon}</span>
            {category.translations[locale as 'en' | 'pl' | 'de' | 'fr'].name}
          </button>
        ))}
      </div>
    </div>
  );
}
