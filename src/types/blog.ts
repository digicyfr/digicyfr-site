/**
 * Blog Type Definitions
 *
 * Following the structure defined in BLOG.md
 * All blog posts support 4 languages: EN, PL, DE, FR
 */

/**
 * Available blog categories
 */
export type BlogCategory =
  | 'industry-insights'
  | 'how-to-guides'
  | 'success-stories'
  | 'company-news';

/**
 * Supported locales for blog content
 */
export type BlogLocale = 'en' | 'pl' | 'de' | 'fr';

/**
 * Blog post content in a specific language
 */
export interface BlogPostContent {
  /** Post title */
  title: string;

  /** Short excerpt/summary (150-200 characters) */
  excerpt: string;

  /** Full post content (supports Markdown) */
  content: string;

  /** SEO meta description (150-160 characters) */
  metaDescription: string;

  /** SEO keywords */
  metaKeywords: string[];
}

/**
 * Blog post author information
 */
export interface BlogAuthor {
  /** Author name */
  name: string;

  /** Author role/title */
  role: string;

  /** Optional author avatar URL */
  avatar?: string;
}

/**
 * Complete blog post with all metadata and translations
 */
export interface BlogPost {
  /** Unique identifier */
  id: string;

  /** URL-friendly slug */
  slug: string;

  /** Post category */
  category: BlogCategory;

  /** Post tags for filtering/search */
  tags: string[];

  /** Featured image URL */
  image: string;

  /** Image alt text for accessibility */
  imageAlt: string;

  /** Post author */
  author: BlogAuthor;

  /** Publication date (ISO 8601 format) */
  publishedAt: string;

  /** Last update date (optional, ISO 8601 format) */
  updatedAt?: string;

  /** Estimated reading time in minutes */
  readingTime: number;

  /** Whether this post is featured */
  featured: boolean;

  /** Translations for all supported languages */
  translations: {
    en: BlogPostContent;
    pl: BlogPostContent;
    de: BlogPostContent;
    fr: BlogPostContent;
  };
}

/**
 * Blog category definition with translations
 */
export interface BlogCategoryDefinition {
  /** Category ID */
  id: BlogCategory;

  /** Icon name (lucide-react icon) */
  icon: string;

  /** Translations for category name and description */
  translations: {
    en: { name: string; description: string; };
    pl: { name: string; description: string; };
    de: { name: string; description: string; };
    fr: { name: string; description: string; };
  };
}

/**
 * Blog list filter options
 */
export interface BlogFilters {
  /** Selected category (null = all categories) */
  category?: BlogCategory | null;

  /** Search query */
  search?: string;

  /** Selected tags */
  tags?: string[];

  /** Sort order */
  sortBy?: 'newest' | 'oldest' | 'popular';
}

/**
 * Blog post preview for cards/lists
 * Lighter version without full content
 */
export interface BlogPostPreview extends Omit<BlogPost, 'translations'> {
  /** Content for current locale only */
  title: string;
  excerpt: string;
}
