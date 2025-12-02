import { BlogCategoryDefinition } from '@/types/blog';

/**
 * Blog category definitions with multilingual support
 *
 * Categories based on company document Section 8:
 * - Industry Insights
 * - How-to Guides
 * - Success Stories
 * - Company News
 */
export const blogCategories: BlogCategoryDefinition[] = [
  {
    id: 'industry-insights',
    icon: 'TrendingUp', // lucide-react icon
    translations: {
      en: {
        name: 'Industry Insights',
        description: 'Latest trends and insights in digital transformation',
      },
      pl: {
        name: 'Trendy branżowe',
        description: 'Najnowsze trendy i spostrzeżenia w transformacji cyfrowej',
      },
      de: {
        name: 'Brancheneinblicke',
        description: 'Neueste Trends und Einblicke in die digitale Transformation',
      },
      fr: {
        name: 'Perspectives sectorielles',
        description: 'Dernières tendances et perspectives de la transformation numérique',
      },
    },
  },
  {
    id: 'how-to-guides',
    icon: 'BookOpen', // lucide-react icon
    translations: {
      en: {
        name: 'How-to Guides',
        description: 'Step-by-step tutorials and practical guides',
      },
      pl: {
        name: 'Poradniki',
        description: 'Samouczki krok po kroku i praktyczne przewodniki',
      },
      de: {
        name: 'Anleitungen',
        description: 'Schritt-für-Schritt-Anleitungen und praktische Leitfäden',
      },
      fr: {
        name: 'Guides pratiques',
        description: 'Tutoriels étape par étape et guides pratiques',
      },
    },
  },
  {
    id: 'success-stories',
    icon: 'Award', // lucide-react icon
    translations: {
      en: {
        name: 'Success Stories',
        description: 'Real results from our clients and case studies',
      },
      pl: {
        name: 'Historie sukcesu',
        description: 'Rzeczywiste rezultaty naszych klientów i studia przypadków',
      },
      de: {
        name: 'Erfolgsgeschichten',
        description: 'Echte Ergebnisse unserer Kunden und Fallstudien',
      },
      fr: {
        name: 'Histoires de succès',
        description: 'Résultats réels de nos clients et études de cas',
      },
    },
  },
  {
    id: 'company-news',
    icon: 'Newspaper', // lucide-react icon
    translations: {
      en: {
        name: 'Company News',
        description: 'Latest updates and announcements from Digicyfr',
      },
      pl: {
        name: 'Aktualności firmy',
        description: 'Najnowsze aktualizacje i ogłoszenia z Digicyfr',
      },
      de: {
        name: 'Unternehmensnachrichten',
        description: 'Neueste Updates und Ankündigungen von Digicyfr',
      },
      fr: {
        name: 'Actualités de l\'entreprise',
        description: 'Dernières mises à jour et annonces de Digicyfr',
      },
    },
  },
];

/**
 * Get category definition by ID
 */
export function getCategoryById(id: string): BlogCategoryDefinition | undefined {
  return blogCategories.find((cat) => cat.id === id);
}

/**
 * Get category name for a specific locale
 */
export function getCategoryName(
  categoryId: string,
  locale: 'en' | 'pl' | 'de' | 'fr'
): string {
  const category = getCategoryById(categoryId);
  return category?.translations[locale]?.name || categoryId;
}

/**
 * Get category description for a specific locale
 */
export function getCategoryDescription(
  categoryId: string,
  locale: 'en' | 'pl' | 'de' | 'fr'
): string {
  const category = getCategoryById(categoryId);
  return category?.translations[locale]?.description || '';
}
