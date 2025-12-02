// src/components/blog/BlogHero.tsx
'use client';

import '@/styles/components/blog/blog-hero.css';

interface BlogHeroProps {
  title: string;
  subtitle: string;
}

export default function BlogHero({ title, subtitle }: BlogHeroProps) {
  return (
    <section className="blog-hero">
      <div className="blog-hero-container">
        <div className="blog-hero-content">
          <h1 className="blog-hero-title">{title}</h1>
          <p className="blog-hero-subtitle">{subtitle}</p>
        </div>

        {/* Decorative elements */}
        <div className="blog-hero-decoration">
          <div className="blog-hero-circle blog-hero-circle-1"></div>
          <div className="blog-hero-circle blog-hero-circle-2"></div>
          <div className="blog-hero-circle blog-hero-circle-3"></div>
        </div>
      </div>
    </section>
  );
}
