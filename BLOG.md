# BLOG Implementation Plan

**Project**: Digicyfr Website Blog/Resources Section
**Created**: 2025-12-02
**Status**: Planning Phase

---

## Table of Contents
1. [Overview](#overview)
2. [Design System Reference](#design-system-reference)
3. [Architecture](#architecture)
4. [Data Structure](#data-structure)
5. [Components](#components)
6. [Routing Strategy](#routing-strategy)
7. [Internationalization](#internationalization)
8. [Content Strategy](#content-strategy)
9. [Styling Approach](#styling-approach)
10. [SEO & Performance](#seo--performance)
11. [Implementation Phases](#implementation-phases)

---

## Overview

### Purpose
Create a multilingual blog/resources section for Digicyfr that:
- Showcases industry expertise and thought leadership
- Provides valuable content to potential clients
- Improves SEO with fresh, keyword-rich content
- Shares success stories and case studies
- Establishes trust and credibility

### Content Categories
Based on the company document (Section 8), the blog will feature:

1. **Industry Insights** - Trends in digital transformation, technology updates
2. **How-to Guides** - Tutorials for SEO, Google Business, integrations
3. **Success Stories** - Client case studies and testimonials
4. **Company News** - Service updates, new features, announcements

### Key Features
- ✅ Multilingual support (EN, PL, DE, FR)
- ✅ Category filtering
- ✅ Tag system for content discovery
- ✅ Responsive design (mobile-first)
- ✅ SEO optimized with structured data
- ✅ Reading time estimation
- ✅ Related posts suggestions
- ✅ Social sharing capabilities
- ✅ Consistent spacing and typography (following BLOG_SPACING.md)

---

## Design System Reference

### 📐 Spacing System (CRITICAL)

**All blog components MUST follow the spacing guidelines defined in `BLOG_SPACING.md`**

#### Global Spacing Scale
**USE ONLY THESE VALUES** - No custom spacing allowed:
```
4px — 8px — 16px — 24px — 32px — 40px — 48px — 56px — 64px — 80px — 120px
```

In CSS, use these values directly:
```css
/* ✅ CORRECT */
margin-bottom: 24px;
padding: 32px;
gap: 16px;

/* ❌ WRONG - Don't use random values */
margin-bottom: 25px;
padding: 30px;
gap: 15px;
```

#### Typography Rules (From BLOG_SPACING.md)

**Headings:**
- **H1**: 40–48px, bold, line-height 1.2
- **H2**: 28–32px, semibold, line-height 1.3
- **H3**: 20–24px, semibold, line-height 1.35–1.4
- **H4**: 18px, medium

**Body Text:**
- Font size: 16–18px
- Line-height: 1.5–1.65
- Max text width: 70–80 characters (65ch recommended)
- Paragraph spacing: 16–20px between paragraphs

#### Component Spacing Quick Reference

| Component | Key Spacing Rules |
|-----------|------------------|
| **BlogHero** | Top: 96px, Title→Description: 16-24px, Bottom: 48-64px |
| **BlogList** | Grid gap: 32px (desktop), 24px (tablet/mobile) |
| **BlogCard** | Internal padding: 24-32px, Image→Category: 16px |
| **BlogPost** | Top: 64-80px, Content max-width: 720-800px, H2 above: 40px |
| **RelatedPosts** | Title→Cards: 24-32px, Grid gap: 32px |
| **ShareButtons** | Top margin: 32-40px, Button gap: 12-16px |
| **Tags** | Tag→Tag: 8-12px, Tag padding: 8-12px |

#### Mobile Spacing Adjustments
On mobile (< 768px), reduce all vertical spacing by 20-30%:
- 64px → 48px
- 48px → 32px
- 32px → 24px
- 24px → 16px
- 16px → 12px

#### Vertical Rhythm Rules
1. **More space above headings than below**
   - Space ABOVE section titles: 32–48px
   - Space BELOW section titles: 16–24px

2. **Section breathing room**
   - Section top padding: 48–64px
   - Section bottom padding: 48–64px

3. **Content width**
   - Max-width for content: 720–800px
   - For lists & diagrams: max width: 900px

4. **Cards must have equal padding**
   - Internal padding: 24–32px

5. **No color collision**
   - Keep at least 48px padding before background color changes

**📖 Full Spacing Guidelines**: See `BLOG_SPACING.md` for complete component-level specifications.

---

## Architecture

### File Structure
```
src/
├── app/
│   └── [locale]/
│       └── blog/
│           ├── page.tsx                    # Main blog listing
│           ├── loading.tsx                 # Loading state
│           ├── [slug]/
│           │   ├── page.tsx               # Individual blog post
│           │   └── loading.tsx            # Post loading state
│           └── category/
│               └── [category]/
│                   └── page.tsx           # Category filtered view
│
├── components/
│   └── blog/
│       ├── BlogCard.tsx                   # Post preview card
│       ├── BlogList.tsx                   # Posts grid/list
│       ├── BlogHero.tsx                   # Blog page hero
│       ├── BlogPost.tsx                   # Full post display
│       ├── BlogCategories.tsx             # Category filter
│       ├── BlogTags.tsx                   # Tag list
│       ├── BlogSearch.tsx                 # Search functionality
│       ├── RelatedPosts.tsx               # Related posts widget
│       └── ShareButtons.tsx               # Social sharing
│
├── data/
│   ├── blogPosts.ts                       # Blog post data
│   └── blogCategories.ts                  # Category definitions
│
├── types/
│   └── blog.ts                            # TypeScript types
│
└── styles/
    └── components/
        └── blog/
            ├── blog-card.css
            ├── blog-list.css
            ├── blog-post.css
            ├── blog-hero.css
            └── blog-categories.css
```

---

## Data Structure

### TypeScript Types (`src/types/blog.ts`)

```typescript
export type BlogCategory =
  | 'industry-insights'
  | 'how-to-guides'
  | 'success-stories'
  | 'company-news';

export interface BlogPost {
  id: string;
  slug: string;
  category: BlogCategory;
  tags: string[];
  image: string;
  imageAlt: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  publishedAt: string; // ISO date string
  updatedAt?: string;
  readingTime: number; // in minutes
  featured: boolean;
  translations: {
    en: BlogPostContent;
    pl: BlogPostContent;
    de: BlogPostContent;
    fr: BlogPostContent;
  };
}

export interface BlogPostContent {
  title: string;
  excerpt: string;
  content: string; // Markdown or HTML
  metaDescription: string;
  metaKeywords: string[];
}

export interface BlogCategory {
  id: BlogCategory;
  icon: string;
  translations: {
    en: { name: string; description: string; };
    pl: { name: string; description: string; };
    de: { name: string; description: string; };
    fr: { name: string; description: string; };
  };
}
```

### Sample Data Structure

```typescript
// src/data/blogPosts.ts
export const blogPosts: BlogPost[] = [
  {
    id: 'boost-restaurant-online-sales',
    slug: 'boost-restaurant-online-sales-2025',
    category: 'how-to-guides',
    tags: ['restaurants', 'online-ordering', 'sales', 'digital-transformation'],
    image: '/images/blog/restaurant-online-sales.jpg',
    imageAlt: 'Restaurant owner checking online orders',
    author: {
      name: 'Digicyfr Team',
      role: 'Digital Solutions Experts'
    },
    publishedAt: '2025-01-15T10:00:00Z',
    readingTime: 8,
    featured: true,
    translations: {
      en: {
        title: '10 Proven Ways to Boost Your Restaurant\'s Online Sales in 2025',
        excerpt: 'Discover effective strategies to increase your restaurant\'s online orders and revenue through digital optimization.',
        content: '# Full blog content here in markdown...',
        metaDescription: 'Learn 10 proven strategies to boost restaurant online sales...',
        metaKeywords: ['restaurant online sales', 'food delivery', 'digital marketing']
      },
      pl: {
        title: '10 Sprawdzonych Sposobów na Zwiększenie Sprzedaży Online Twojej Restauracji',
        excerpt: 'Odkryj skuteczne strategie zwiększania zamówień online...',
        content: '# Full content in Polish...',
        metaDescription: '...',
        metaKeywords: ['...']
      },
      // de and fr translations...
    }
  },
  // More posts...
];
```

---

## Components

### 1. BlogCard (`src/components/blog/BlogCard.tsx`)

**Purpose**: Display blog post preview in grid/list

**Props**:
```typescript
interface BlogCardProps {
  post: BlogPost;
  locale: string;
  featured?: boolean;
}
```

**Features**:
- Post thumbnail image
- Category badge
- Title and excerpt
- Author info
- Reading time
- Published date
- Hover effects
- "Read more" link

**Styling**: `src/styles/components/blog/blog-card.css`

---

### 2. BlogList (`src/components/blog/BlogList.tsx`)

**Purpose**: Grid layout of blog posts with filtering

**Props**:
```typescript
interface BlogListProps {
  posts: BlogPost[];
  locale: string;
  selectedCategory?: BlogCategory;
  showFeatured?: boolean;
}
```

**Features**:
- Responsive grid (1 col mobile → 2 col tablet → 3 col desktop)
- Featured post highlight
- Pagination or infinite scroll
- Empty state handling
- Loading skeleton

**Styling**: `src/styles/components/blog/blog-list.css`

---

### 3. BlogHero (`src/components/blog/BlogHero.tsx`)

**Purpose**: Hero section for blog landing page

**Props**:
```typescript
interface BlogHeroProps {
  locale: string;
}
```

**Features**:
- Page title and description
- Featured post preview (optional)
- Search bar
- Category quick links

**Styling**: `src/styles/components/blog/blog-hero.css`

---

### 4. BlogPost (`src/components/blog/BlogPost.tsx`)

**Purpose**: Display full blog post content

**Props**:
```typescript
interface BlogPostProps {
  post: BlogPost;
  locale: string;
}
```

**Features**:
- Hero image
- Title, author, date
- Category and tags
- Full content with markdown rendering
- Table of contents (for long posts)
- Share buttons
- Related posts section
- Author bio

**Styling**: `src/styles/components/blog/blog-post.css`

---

### 5. BlogCategories (`src/components/blog/BlogCategories.tsx`)

**Purpose**: Category filter sidebar/menu

**Props**:
```typescript
interface BlogCategoriesProps {
  categories: BlogCategory[];
  selectedCategory?: string;
  locale: string;
  onCategorySelect: (category: BlogCategory | null) => void;
}
```

**Features**:
- List of all categories
- Active category highlight
- Post count per category
- "All posts" option
- Category icons

**Styling**: `src/styles/components/blog/blog-categories.css`

---

### 6. BlogSearch (`src/components/blog/BlogSearch.tsx`)

**Purpose**: Search blog posts by title, content, tags

**Props**:
```typescript
interface BlogSearchProps {
  onSearch: (query: string) => void;
  locale: string;
}
```

**Features**:
- Search input with icon
- Real-time filtering
- Search suggestions
- Clear button

**Implementation**: Client-side filtering initially, can be upgraded to server-side

---

### 7. RelatedPosts (`src/components/blog/RelatedPosts.tsx`)

**Purpose**: Show related posts at bottom of article

**Props**:
```typescript
interface RelatedPostsProps {
  currentPost: BlogPost;
  allPosts: BlogPost[];
  locale: string;
  maxPosts?: number; // default: 3
}
```

**Features**:
- Finds posts by matching category and tags
- Displays 3-4 related posts
- Similar layout to BlogCard

---

### 8. ShareButtons (`src/components/blog/ShareButtons.tsx`)

**Purpose**: Social media sharing

**Props**:
```typescript
interface ShareButtonsProps {
  url: string;
  title: string;
  description: string;
}
```

**Features**:
- Share to: Twitter/X, LinkedIn, Facebook, Email
- Copy link button
- Native share API on mobile

---

## Routing Strategy

### Blog Listing Page
**Route**: `/[locale]/blog`
**File**: `src/app/[locale]/blog/page.tsx`

```typescript
export default function BlogPage({ params }: { params: { locale: string } }) {
  const t = useTranslations('blog');
  const posts = blogPosts; // Filter by locale if needed

  return (
    <main>
      <BlogHero locale={params.locale} />
      <BlogCategories />
      <BlogList posts={posts} locale={params.locale} />
    </main>
  );
}

// Metadata for SEO
export async function generateMetadata({ params }: { params: { locale: string } }) {
  return {
    title: 'Blog & Resources | Digicyfr',
    description: 'Industry insights, how-to guides, and success stories...',
    alternates: {
      canonical: `/${params.locale}/blog`,
      languages: {
        'en': '/en/blog',
        'pl': '/pl/blog',
        'de': '/de/blog',
        'fr': '/fr/blog'
      }
    }
  };
}
```

---

### Individual Post Page
**Route**: `/[locale]/blog/[slug]`
**File**: `src/app/[locale]/blog/[slug]/page.tsx`

```typescript
export default function BlogPostPage({
  params
}: {
  params: { locale: string; slug: string }
}) {
  const post = blogPosts.find(p => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article>
      <BlogPost post={post} locale={params.locale} />
      <RelatedPosts currentPost={post} allPosts={blogPosts} locale={params.locale} />
    </article>
  );
}

// Generate static params for all blog posts
export function generateStaticParams() {
  const locales = ['en', 'pl', 'de', 'fr'];
  const params = [];

  for (const locale of locales) {
    for (const post of blogPosts) {
      params.push({ locale, slug: post.slug });
    }
  }

  return params;
}

// Dynamic metadata per post
export async function generateMetadata({ params }: { params: { locale: string; slug: string } }) {
  const post = blogPosts.find(p => p.slug === params.slug);
  const content = post?.translations[params.locale as keyof typeof post.translations];

  return {
    title: `${content?.title} | Digicyfr Blog`,
    description: content?.metaDescription,
    keywords: content?.metaKeywords,
    openGraph: {
      title: content?.title,
      description: content?.excerpt,
      images: [post?.image],
      type: 'article',
      publishedTime: post?.publishedAt,
      authors: [post?.author.name]
    }
  };
}
```

---

### Category Page (Optional)
**Route**: `/[locale]/blog/category/[category]`
**File**: `src/app/[locale]/blog/category/[category]/page.tsx`

Filters blog posts by category.

---

## Internationalization

### Translation Keys Structure

Add to `messages/{locale}.json`:

```json
{
  "blog": {
    "title": "Blog & Resources",
    "subtitle": "Industry insights, guides, and success stories",
    "readMore": "Read more",
    "readingTime": "{minutes} min read",
    "publishedOn": "Published on",
    "updatedOn": "Updated on",
    "author": "Author",
    "category": "Category",
    "tags": "Tags",
    "relatedPosts": "Related Posts",
    "allPosts": "All Posts",
    "search": "Search articles...",
    "shareArticle": "Share this article",
    "copyLink": "Copy link",
    "linkCopied": "Link copied!",

    "categories": {
      "all": "All Categories",
      "industry-insights": "Industry Insights",
      "how-to-guides": "How-to Guides",
      "success-stories": "Success Stories",
      "company-news": "Company News"
    },

    "filters": {
      "filterBy": "Filter by",
      "sortBy": "Sort by",
      "newest": "Newest First",
      "oldest": "Oldest First",
      "popular": "Most Popular"
    },

    "empty": {
      "title": "No posts found",
      "description": "Try adjusting your filters or search query",
      "button": "View all posts"
    }
  }
}
```

### Per-Locale Considerations

- **Polish (pl)**: Use proper Polish grammar for dates and plurals
- **German (de)**: Consider formal/informal language (use formal "Sie")
- **French (fr)**: Proper accent marks and grammar
- **English (en)**: Clear, professional American/British English

---

## Content Strategy

### Initial Blog Posts (Based on Company Document)

#### 1. **How-to Guides** (Priority: High)
- "10 Proven Ways to Boost Your Restaurant's Online Sales in 2025"
- "Complete Guide to Google Business Profile Optimization"
- "How to Integrate Your Restaurant with Delivery Platforms (Glovo, UberEats, Wolt)"
- "SEO for Local Businesses: A Step-by-Step Guide"
- "Setting Up Your First E-commerce Store: What You Need to Know"

#### 2. **Industry Insights** (Priority: High)
- "Digital Transformation Trends for SMEs in 2025"
- "Why Restaurants Need Business Management Systems (ERP)"
- "The Future of Food Delivery: Trends and Technologies"
- "Mobile-First Design: Why It Matters for Your Business"
- "Cloud vs. On-Premise: Choosing the Right Solution"

#### 3. **Success Stories** (Priority: Medium)
- "How Kebab SuperKing Increased Online Orders by 150%"
- "OceanPro's Digital Transformation Journey: From Manual to Automated"
- "Case Study: Kwiaciarnia Miłość's SEO Success"
- "Behind the Scenes: Building a Multi-Location Restaurant System"

#### 4. **Company News** (Priority: Medium)
- "Introducing Our New System Integration Services"
- "Digicyfr Now Supports 5 Major Delivery Platforms"
- "Meet Our Team: The People Behind Your Digital Solutions"
- "Our Commitment to Affordable Digital Solutions"

### Content Creation Guidelines

1. **Tone & Voice**:
   - Professional but approachable
   - Educational and helpful
   - Results-focused
   - Avoid jargon, explain technical terms

2. **Structure**:
   - Clear headlines and subheadings
   - Short paragraphs (3-4 sentences max)
   - Bullet points and numbered lists
   - Visual content (images, charts, screenshots)
   - Call-to-action at the end

3. **SEO Optimization**:
   - Use keywords from Section 10 of company document
   - Internal links to service pages
   - External links to authoritative sources
   - Image alt text
   - Meta descriptions (150-160 characters)

4. **Length**:
   - How-to guides: 1500-2500 words
   - Industry insights: 1000-1500 words
   - Success stories: 800-1200 words
   - Company news: 500-800 words

---

## Styling Approach

### CSS Architecture (Plain CSS - Following Project Standard)

#### File: `src/styles/components/blog/blog-card.css`
```css
/* Blog Card Styles - Following BLOG_SPACING.md Guidelines */

.blog-card {
  background: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.blog-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.blog-card__image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.blog-card__content {
  padding: 24px; /* BLOG_SPACING: Internal padding 24-32px */
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.blog-card__category {
  display: inline-block;
  padding: 4px 12px;
  background: #2563eb;
  color: #ffffff;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 16px; /* BLOG_SPACING: Image→Category: 16px (applies after image) */
}

.blog-card__title {
  font-size: 20px; /* H3 size: 20-24px */
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 12px; /* BLOG_SPACING: Title→Excerpt: 12-16px */
  line-height: 1.4; /* BLOG_SPACING: H3 line-height: 1.35-1.4 */
}

.blog-card__excerpt {
  color: #666;
  font-size: 16px; /* BLOG_SPACING: Body text 16-18px */
  line-height: 1.6; /* BLOG_SPACING: Body line-height 1.5-1.65 */
  margin-bottom: 16px; /* BLOG_SPACING: Excerpt→Meta: 16-24px */
  flex-grow: 1;
}

.blog-card__meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  color: #999;
  padding-top: 16px;
  border-top: 1px solid #eee;
  gap: 12px; /* BLOG_SPACING: Meta row items gap: 12px */
}

.blog-card__author {
  display: flex;
  align-items: center;
  gap: 8px; /* BLOG_SPACING: Icon→Text gap: 8px */
}

.blog-card__date {
  font-size: 14px;
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  .blog-card {
    background: #1a1a1a;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  }

  .blog-card__title {
    color: #ffffff;
  }

  .blog-card__excerpt {
    color: #cccccc;
  }
}

/* Responsive design - Mobile spacing adjustments */
@media (max-width: 768px) {
  .blog-card__image {
    height: 180px;
  }

  .blog-card__content {
    padding: 16px; /* BLOG_SPACING: Mobile reduction 24px→16px */
  }

  .blog-card__title {
    font-size: 18px; /* BLOG_SPACING: Mobile H3: 18-20px */
  }

  .blog-card__category {
    margin-bottom: 12px; /* BLOG_SPACING: Mobile reduction 16px→12px */
  }

  .blog-card__excerpt {
    margin-bottom: 12px; /* BLOG_SPACING: Mobile reduction 16px→12px */
  }
}
```

#### File: `src/styles/components/blog/blog-list.css`
```css
/* Blog List Grid - Following BLOG_SPACING.md Guidelines */

.blog-list {
  max-width: 1200px;
  margin: 0 auto;
  padding: 48px 16px; /* BLOG_SPACING: Section padding 48-64px */
}

.blog-list__header {
  margin-bottom: 32px; /* BLOG_SPACING: Section title→filters: 24-32px */
}

.blog-list__title {
  font-size: 40px; /* BLOG_SPACING: H1: 40-48px */
  font-weight: 700;
  line-height: 1.2; /* BLOG_SPACING: H1 line-height: 1.2 */
  color: #1a1a1a;
  margin-bottom: 16px; /* BLOG_SPACING: Title→Description spacing */
}

.blog-list__description {
  font-size: 18px; /* BLOG_SPACING: Body text: 16-18px */
  line-height: 1.6;
  color: #666;
  max-width: 65ch; /* BLOG_SPACING: Max text width 70-80 characters */
}

.blog-list__filters {
  display: flex;
  gap: 16px; /* BLOG_SPACING: Global scale */
  margin-bottom: 32px; /* BLOG_SPACING: Filters→grid: 24-32px */
  flex-wrap: wrap;
}

.blog-list__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 32px; /* BLOG_SPACING: Grid gap (desktop): 32px */
  margin-bottom: 64px; /* BLOG_SPACING: Grid→pagination: 48-64px */
}

.blog-list__featured {
  grid-column: 1 / -1;
}

.blog-list__empty {
  text-align: center;
  padding: 64px 32px; /* BLOG_SPACING: Section padding */
}

.blog-list__empty-title {
  font-size: 24px; /* BLOG_SPACING: H3: 20-24px */
  margin-bottom: 16px;
}

.blog-list__empty-description {
  font-size: 16px;
  color: #666;
  margin-bottom: 24px;
}

/* Responsive - Mobile spacing adjustments */
@media (max-width: 768px) {
  .blog-list {
    padding: 32px 16px; /* BLOG_SPACING: Mobile reduction 48px→32px */
  }

  .blog-list__grid {
    grid-template-columns: 1fr;
    gap: 24px; /* BLOG_SPACING: Grid gap (mobile): 24px */
  }

  .blog-list__title {
    font-size: 32px; /* BLOG_SPACING: Mobile H1: 28-32px */
  }

  .blog-list__header {
    margin-bottom: 24px; /* BLOG_SPACING: Mobile reduction 32px→24px */
  }

  .blog-list__filters {
    gap: 12px; /* BLOG_SPACING: Mobile reduction 16px→12px */
    margin-bottom: 24px; /* BLOG_SPACING: Mobile reduction 32px→24px */
  }

  .blog-list__empty {
    padding: 48px 24px; /* BLOG_SPACING: Mobile reduction 64px→48px */
  }
}
```

#### File: `src/styles/components/blog/blog-post.css`
```css
/* Individual Blog Post - Following BLOG_SPACING.md Guidelines */

.blog-post {
  max-width: 800px; /* BLOG_SPACING: Content max-width: 720-800px */
  margin: 0 auto;
  padding: 64px 16px; /* BLOG_SPACING: Top padding: 64-80px */
}

.blog-post__header {
  margin-bottom: 32px; /* BLOG_SPACING: Hero image→content: 32-40px */
}

.blog-post__category {
  display: inline-block;
  padding: 8px 16px;
  background: #2563eb;
  color: #ffffff;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 16px; /* BLOG_SPACING: Category badge→title: 16px */
}

.blog-post__title {
  font-size: 48px; /* BLOG_SPACING: H1: 40-48px */
  font-weight: 800;
  color: #1a1a1a;
  line-height: 1.2; /* BLOG_SPACING: H1 line-height: 1.2 */
  margin-bottom: 16px; /* BLOG_SPACING: Title→meta info: 16-24px */
}

.blog-post__meta {
  display: flex;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
  color: #666;
  font-size: 16px;
  margin-bottom: 24px; /* BLOG_SPACING: Meta info→hero image: 24-32px */
}

.blog-post__author {
  display: flex;
  align-items: center;
  gap: 12px;
}

.blog-post__author-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.blog-post__image {
  width: 100%;
  height: auto;
  border-radius: 12px;
  margin-bottom: 32px; /* BLOG_SPACING: Hero image→content: 32-40px */
}

.blog-post__content {
  font-size: 18px; /* BLOG_SPACING: Body text: 16-18px */
  line-height: 1.65; /* BLOG_SPACING: Body line-height: 1.5-1.65 */
  color: #333;
  max-width: 65ch; /* BLOG_SPACING: Max text width: 70-80 characters */
}

.blog-post__content h2 {
  font-size: 32px; /* BLOG_SPACING: H2: 28-32px */
  font-weight: 700;
  line-height: 1.3; /* BLOG_SPACING: H2 line-height: 1.3 */
  margin-top: 40px; /* BLOG_SPACING: H2 spacing above: 40px */
  margin-bottom: 16px; /* BLOG_SPACING: H2 spacing below: 16px */
  color: #1a1a1a;
}

.blog-post__content h3 {
  font-size: 24px; /* BLOG_SPACING: H3: 20-24px */
  font-weight: 600;
  line-height: 1.4; /* BLOG_SPACING: H3 line-height: 1.35-1.4 */
  margin-top: 32px; /* BLOG_SPACING: H3 spacing above: 32px */
  margin-bottom: 12px; /* BLOG_SPACING: H3 spacing below: 12px */
  color: #1a1a1a;
}

.blog-post__content p {
  margin-bottom: 16px; /* BLOG_SPACING: Paragraph→paragraph: 16-20px */
}

.blog-post__content ul,
.blog-post__content ol {
  margin: 16px 0 24px 24px; /* BLOG_SPACING: List spacing */
}

.blog-post__content li {
  margin-bottom: 12px; /* BLOG_SPACING: List item spacing: 12-16px */
  padding-left: 8px; /* BLOG_SPACING: Bullet/number→text: 8px */
}

.blog-post__content a {
  color: #2563eb;
  text-decoration: underline;
}

.blog-post__content a:hover {
  color: #1d4ed8;
}

.blog-post__content blockquote {
  border-left: 4px solid #2563eb;
  padding: 24px 0 24px 24px; /* BLOG_SPACING: Blockquote vertical padding: 24px */
  margin: 24px 0; /* BLOG_SPACING: Blockquote→next element: 24-32px */
  font-style: italic;
  color: #666;
}

.blog-post__content code {
  background: #f5f5f5;
  padding: 4px 8px;
  border-radius: 4px;
  font-family: monospace;
  font-size: 0.9em;
}

.blog-post__content pre {
  background: #1a1a1a;
  color: #f5f5f5;
  padding: 24px;
  border-radius: 8px;
  overflow-x: auto;
  margin: 24px 0; /* BLOG_SPACING: Code block vertical spacing: 24-32px */
}

.blog-post__content img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin: 24px 0;
}

.blog-post__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px; /* BLOG_SPACING: Tag→next tag: 8-12px */
  margin: 32px 0; /* BLOG_SPACING: Tags section top/bottom: 32px */
  padding-top: 32px;
  border-top: 1px solid #eee;
}

.blog-post__tag {
  padding: 8px 12px; /* BLOG_SPACING: Tag internal padding: 8-12px */
  background: #f5f5f5;
  color: #666;
  border-radius: 20px;
  font-size: 14px;
  text-decoration: none;
}

.blog-post__tag:hover {
  background: #e5e5e5;
}

.blog-post__share {
  margin: 32px 0; /* BLOG_SPACING: ShareButtons section top margin: 32-40px */
  padding: 24px;
  background: #f9f9f9;
  border-radius: 8px;
}

/* Responsive - Mobile spacing adjustments */
@media (max-width: 768px) {
  .blog-post {
    padding: 48px 16px; /* BLOG_SPACING: Mobile reduction 64px→48px */
  }

  .blog-post__title {
    font-size: 32px; /* BLOG_SPACING: Mobile H1: 28-32px */
  }

  .blog-post__content {
    font-size: 16px;
  }

  .blog-post__content h2 {
    font-size: 24px; /* BLOG_SPACING: Mobile H2: 22-26px */
    margin-top: 32px; /* BLOG_SPACING: Mobile reduction 40px→32px */
    margin-bottom: 12px; /* BLOG_SPACING: Mobile reduction 16px→12px */
  }

  .blog-post__content h3 {
    font-size: 20px; /* BLOG_SPACING: Mobile H3: 18-20px */
    margin-top: 24px; /* BLOG_SPACING: Mobile reduction 32px→24px */
  }

  .blog-post__header {
    margin-bottom: 24px; /* BLOG_SPACING: Mobile reduction 32px→24px */
  }

  .blog-post__image {
    margin-bottom: 24px; /* BLOG_SPACING: Mobile reduction 32px→24px */
  }

  .blog-post__meta {
    margin-bottom: 16px; /* BLOG_SPACING: Mobile reduction 24px→16px */
  }

  .blog-post__tags {
    margin: 24px 0; /* BLOG_SPACING: Mobile reduction 32px→24px */
    padding-top: 24px;
  }
}
```

---

## SEO & Performance

### 1. Metadata Strategy

**Per Page**:
- Unique title tags (50-60 characters)
- Meta descriptions (150-160 characters)
- Open Graph tags for social sharing
- Twitter Card tags
- Canonical URLs
- Language alternates (hreflang)

**Example**:
```typescript
export const metadata: Metadata = {
  title: 'How to Boost Restaurant Sales | Digicyfr Blog',
  description: 'Learn 10 proven strategies to increase your restaurant\'s online orders and revenue through digital optimization.',
  keywords: ['restaurant online sales', 'food delivery', 'digital marketing'],
  authors: [{ name: 'Digicyfr Team' }],
  openGraph: {
    title: '10 Proven Ways to Boost Your Restaurant\'s Online Sales',
    description: 'Discover effective strategies to increase your restaurant\'s online orders...',
    type: 'article',
    publishedTime: '2025-01-15T10:00:00Z',
    authors: ['Digicyfr Team'],
    images: [
      {
        url: '/images/blog/restaurant-sales.jpg',
        width: 1200,
        height: 630,
        alt: 'Restaurant online sales dashboard'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: '10 Proven Ways to Boost Your Restaurant\'s Online Sales',
    description: 'Discover effective strategies...',
    images: ['/images/blog/restaurant-sales.jpg']
  },
  alternates: {
    canonical: '/en/blog/boost-restaurant-online-sales',
    languages: {
      'en': '/en/blog/boost-restaurant-online-sales',
      'pl': '/pl/blog/zwieksz-sprzedaz-restauracji',
      'de': '/de/blog/restaurant-umsatz-steigern',
      'fr': '/fr/blog/augmenter-ventes-restaurant'
    }
  }
};
```

### 2. Structured Data (JSON-LD)

Add schema.org markup for articles:

```typescript
// In individual blog post page
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: content.title,
  description: content.excerpt,
  image: post.image,
  datePublished: post.publishedAt,
  dateModified: post.updatedAt || post.publishedAt,
  author: {
    '@type': 'Organization',
    name: post.author.name,
    url: 'https://digicyfr.com'
  },
  publisher: {
    '@type': 'Organization',
    name: 'Digicyfr',
    logo: {
      '@type': 'ImageObject',
      url: 'https://digicyfr.com/images/logo.png'
    }
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `https://digicyfr.com/${locale}/blog/${post.slug}`
  }
};

// Include in page:
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
/>
```

### 3. Performance Optimizations

- **Images**: Use Next.js Image component with lazy loading
- **Code splitting**: Dynamic imports for heavy components
- **Static generation**: Pre-render all blog posts at build time
- **Caching**: Implement proper cache headers
- **Font optimization**: Use next/font for font loading
- **Minimize CSS**: Keep CSS files modular and minimal

### 4. Keywords Integration

Based on Section 10 of company document:

**Primary Keywords to Target**:
- Digital solutions for businesses
- Restaurant website development
- Business management systems
- E-commerce development
- SEO services
- Google Business optimization
- Odoo ERP implementation
- Delivery platform integration

**Long-tail Keywords**:
- How to increase restaurant online sales
- Best POS system for restaurants
- Connect restaurant to UberEats
- Affordable website development for small business
- Complete digital solution for retail business

**Implementation**: Naturally incorporate these keywords in:
- Blog post titles
- Headings (H2, H3)
- First paragraph
- Meta descriptions
- Image alt text
- Internal links

---

## Implementation Phases

### **Phase 1: Foundation** (Day 1-2)
**Priority**: High
**Status**: Pending

**Tasks**:
1. ✅ Create BLOG.md documentation (this file)
2. ⬜ Create TypeScript types (`src/types/blog.ts`)
3. ⬜ Create category definitions (`src/data/blogCategories.ts`)
4. ⬜ Set up basic routing structure (`src/app/[locale]/blog/`)
5. ⬜ Add blog translations to all 4 language files

**Deliverables**:
- Complete type definitions
- Empty route files with basic structure
- Translation keys in place

---

### **Phase 2: Content Creation** (Day 3-4)
**Priority**: High
**Status**: Pending

**Tasks**:
1. ⬜ Write 3-5 initial blog posts in English
2. ⬜ Translate posts to Polish, German, French
3. ⬜ Gather/create blog post images
4. ⬜ Populate `src/data/blogPosts.ts`
5. ⬜ Review and edit content

**Deliverables**:
- Minimum 3 blog posts in all 4 languages
- One post per category initially

**Content Priority Order**:
1. "10 Proven Ways to Boost Restaurant Online Sales" (How-to Guide)
2. "Complete Guide to Google Business Profile Optimization" (How-to Guide)
3. "Digital Transformation Trends for SMEs in 2025" (Industry Insight)

---

### **Phase 3: Core Components** (Day 5-7)
**Priority**: High
**Status**: Pending

**Tasks**:
1. ⬜ Create BlogCard component + CSS
2. ⬜ Create BlogList component + CSS
3. ⬜ Create BlogHero component + CSS
4. ⬜ Create BlogPost component + CSS
5. ⬜ Create BlogCategories component + CSS
6. ⬜ Implement blog listing page (`/[locale]/blog/page.tsx`)
7. ⬜ Implement individual post page (`/[locale]/blog/[slug]/page.tsx`)

**Deliverables**:
- Fully functional blog listing page
- Fully functional individual post pages
- Responsive design across all devices

**Testing Checklist**:
- [ ] Blog list displays correctly in all 4 languages
- [ ] Individual posts open and display properly
- [ ] Images load correctly
- [ ] Category filtering works
- [ ] Responsive on mobile, tablet, desktop
- [ ] Dark mode compatibility (if applicable)

---

### **Phase 4: Enhancement Components** (Day 8-9)
**Priority**: Medium
**Status**: Pending

**Tasks**:
1. ⬜ Create BlogSearch component
2. ⬜ Create RelatedPosts component
3. ⬜ Create ShareButtons component
4. ⬜ Create BlogTags component
5. ⬜ Implement category page (optional)
6. ⬜ Add reading progress indicator
7. ⬜ Add "Back to top" button

**Deliverables**:
- Enhanced user experience features
- Better content discoverability
- Social sharing capabilities

---

### **Phase 5: SEO & Optimization** (Day 10-11)
**Priority**: High
**Status**: Pending

**Tasks**:
1. ⬜ Implement structured data (JSON-LD)
2. ⬜ Add comprehensive metadata to all pages
3. ⬜ Optimize images (compression, proper sizes)
4. ⬜ Implement XML sitemap for blog posts
5. ⬜ Add robots.txt entries
6. ⬜ Set up Open Graph tags
7. ⬜ Add Twitter Card tags
8. ⬜ Implement canonical URLs
9. ⬜ Add hreflang tags for multilingual SEO

**Deliverables**:
- Fully SEO-optimized blog
- Proper social sharing previews
- XML sitemap generated

**SEO Checklist**:
- [ ] All pages have unique titles
- [ ] All pages have meta descriptions
- [ ] All images have alt text
- [ ] Structured data validates (test with Google Rich Results Test)
- [ ] Social sharing works correctly (test with Facebook Debugger, Twitter Card Validator)
- [ ] Internal linking implemented
- [ ] Page speed is optimized (test with PageSpeed Insights)

---

### **Phase 6: Navigation & Integration** (Day 12)
**Priority**: High
**Status**: Pending

**Tasks**:
1. ⬜ Add "Blog" link to Header navigation
2. ⬜ Ensure translations for nav link in all 4 languages
3. ⬜ Add blog CTA to homepage (optional)
4. ⬜ Link blog posts to relevant service pages
5. ⬜ Add blog feed to footer (optional)
6. ⬜ Test all navigation flows

**Deliverables**:
- Blog integrated into site navigation
- Cross-linking with other pages

---

### **Phase 7: Testing & QA** (Day 13)
**Priority**: Critical
**Status**: Pending

**Testing Matrix**:

| Test Category | EN | PL | DE | FR | Mobile | Tablet | Desktop |
|--------------|----|----|----|----|--------|--------|---------|
| Blog listing | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |
| Individual posts | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |
| Category filter | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |
| Search | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |
| Social sharing | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |
| Related posts | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |
| Navigation | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |

**Browser Testing**:
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobile browsers (Safari iOS, Chrome Android)

**Accessibility Testing**:
- [ ] Keyboard navigation works
- [ ] Screen reader compatibility
- [ ] Color contrast meets WCAG standards
- [ ] Focus indicators visible
- [ ] Alt text on all images

---

### **Phase 8: Launch & Monitoring** (Day 14)
**Priority**: Critical
**Status**: Pending

**Pre-launch Checklist**:
- [ ] All content reviewed and approved
- [ ] Translations verified by native speakers
- [ ] All tests passing
- [ ] SEO elements in place
- [ ] Analytics tracking set up
- [ ] Error pages work correctly
- [ ] 404 handling implemented
- [ ] Performance metrics acceptable

**Launch Tasks**:
1. ⬜ Merge feature branch to main
2. ⬜ Deploy to production
3. ⬜ Submit sitemap to Google Search Console
4. ⬜ Test production environment
5. ⬜ Monitor for errors

**Post-launch Monitoring**:
1. ⬜ Set up Google Analytics goals for blog
2. ⬜ Monitor page load times
3. ⬜ Track user engagement
4. ⬜ Monitor search console for indexing
5. ⬜ Collect user feedback

---

## Future Enhancements

### Phase 9+ (Post-Launch)
**Priority**: Low to Medium
**Timeline**: Ongoing

**Content Management**:
- [ ] Admin panel for blog post management (optional)
- [ ] Draft/scheduled post functionality
- [ ] Comment system or integration
- [ ] Newsletter signup integration
- [ ] RSS feed generation

**Features**:
- [ ] Blog post reactions (like, bookmark)
- [ ] Reading history tracking
- [ ] Personalized recommendations
- [ ] Multi-author support with profiles
- [ ] Guest post submissions
- [ ] Podcast/video content integration

**Analytics**:
- [ ] Advanced blog analytics dashboard
- [ ] A/B testing for titles/images
- [ ] Heatmaps for reading behavior
- [ ] Conversion tracking from blog to services

**SEO**:
- [ ] Automatic internal linking suggestions
- [ ] SEO score checker
- [ ] Keyword density analysis
- [ ] Competitor content analysis

---

## Success Metrics

### Key Performance Indicators (KPIs)

**Traffic Metrics**:
- Blog page views per month
- Unique visitors to blog
- Average time on page
- Pages per session
- Bounce rate

**Engagement Metrics**:
- Social shares count
- Comments/reactions (if implemented)
- Click-through rate to service pages
- Newsletter signups from blog
- Contact form submissions from blog

**SEO Metrics**:
- Organic search traffic to blog
- Keyword rankings
- Blog pages indexed
- Backlinks acquired
- Domain authority improvement

**Business Metrics**:
- Leads generated from blog
- Conversion rate (blog visitor → customer)
- Customer acquisition cost via blog
- Revenue attributed to blog content

**Goals** (3 months post-launch):
- 1,000+ monthly blog visitors
- 10+ blog posts published
- Top 10 ranking for 3-5 target keywords
- 5% conversion rate (visitor → lead)
- 50+ social shares per post

---

## Technical Specifications

### Dependencies

**Required** (Already in project):
- Next.js 15.3.3
- React 19.1.0
- next-intl (internationalization)
- TypeScript

**Optional** (May need to add):
- `react-markdown` - For markdown rendering
- `rehype-raw` - For HTML in markdown
- `rehype-sanitize` - For XSS protection
- `reading-time` - Calculate reading time
- `date-fns` - Date formatting

### Installation
```bash
npm install react-markdown rehype-raw rehype-sanitize reading-time
```

### Environment Variables
No new environment variables needed for basic blog.

Optional for future:
```env
# For comment system (if using Disqus, etc.)
NEXT_PUBLIC_DISQUS_SHORTNAME=

# For newsletter integration
NEXT_PUBLIC_NEWSLETTER_API_KEY=

# For analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=
```

---

## Maintenance Plan

### Content Schedule
**Frequency**: 2-4 posts per month

**Monthly Content Mix**:
- 1-2 How-to guides (evergreen content)
- 1 Industry insight (trending topic)
- 1 Success story or company news (as available)

### Review Cycle
- **Weekly**: Check analytics, monitor comments
- **Monthly**: Review top-performing posts, update old content
- **Quarterly**: Comprehensive SEO audit, content refresh

### Content Updates
- Update statistics and data yearly
- Refresh screenshots as UI changes
- Add new sections to evergreen posts
- Fix broken links monthly

---

## Risk Assessment

### Potential Risks & Mitigations

1. **Risk**: Low initial traffic
   - **Mitigation**: Promote on social media, email newsletter, partner sites

2. **Risk**: Content quality concerns
   - **Mitigation**: Editorial review process, professional proofreading

3. **Risk**: Translation accuracy
   - **Mitigation**: Native speaker review for each language

4. **Risk**: SEO competition
   - **Mitigation**: Focus on long-tail keywords, local SEO

5. **Risk**: Maintenance burden
   - **Mitigation**: Create content calendar, batch content creation

6. **Risk**: Performance issues with many posts
   - **Mitigation**: Pagination, static generation, image optimization

---

## Questions & Decisions

### Open Questions
1. ❓ Should we implement a comment system? (Disqus, custom, or none?)
2. ❓ Newsletter signup integration - which service? (Mailchimp, ConvertKit, custom?)
3. ❓ Content approval workflow - who reviews before publishing?
4. ❓ Guest post policy - accept external contributors?
5. ❓ Monetization - ads, sponsored content, or keep ad-free?

### Decisions to Make
- [ ] Final content calendar for first month
- [ ] Social sharing channels (which platforms to prioritize?)
- [ ] Featured post selection criteria
- [ ] Internal linking strategy
- [ ] Image sourcing (stock photos vs custom graphics vs photography)

---

## Resources & References

### Design Inspiration
- [Vercel Blog](https://vercel.com/blog)
- [Stripe Blog](https://stripe.com/blog)
- [Shopify Blog](https://www.shopify.com/blog)

### Technical References
- [Next.js Metadata Docs](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [Schema.org Article](https://schema.org/Article)
- [next-intl Documentation](https://next-intl-docs.vercel.app/)

### Content Strategy
- [HubSpot Blog Guidelines](https://blog.hubspot.com/)
- [Moz SEO Blog Best Practices](https://moz.com/blog)

---

## Contact & Ownership

**Feature Owner**: [Your Name]
**Developer**: [Developer Name]
**Content Manager**: [Content Manager Name]
**Reviewer**: [Reviewer Name]

**Questions?** Contact: [contact email]

---

## Changelog

### Version 1.0 - 2025-12-02
- Initial blog implementation plan created
- Complete architecture defined
- All 8 implementation phases outlined
- SEO strategy documented
- Content strategy based on company document

---

**Document Status**: ✅ Complete and Ready for Implementation

**Next Action**: Review this document with team, then proceed to Phase 1 implementation.

---

*This document will be updated as the blog feature evolves.*
