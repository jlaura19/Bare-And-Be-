export interface Article {
    id: string;
    title: string;
    excerpt: string;
    category: string;
    img: string;
    content?: string;
    createdAt: string;
    updatedAt: string;
}

const ARTICLES_KEY = 'podcast_articles';

/**
 * Article store for managing blog articles
 * Uses localStorage for persistence
 */
class ArticleStore {
    /**
     * Get all articles
     */
    getArticles(): Article[] {
        try {
            const stored = localStorage.getItem(ARTICLES_KEY);
            if (!stored) {
                return this.getDefaultArticles();
            }
            return JSON.parse(stored);
        } catch {
            return this.getDefaultArticles();
        }
    }

    /**
     * Get a single article by ID
     */
    getArticleById(id: string): Article | undefined {
        const articles = this.getArticles();
        return articles.find(a => a.id === id);
    }

    /**
     * Create a new article
     */
    createArticle(article: Omit<Article, 'id' | 'createdAt' | 'updatedAt'>): Article {
        const articles = this.getArticles();
        const newArticle: Article = {
            ...article,
            id: Date.now().toString(),
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        };

        articles.unshift(newArticle);
        this.saveArticles(articles);
        return newArticle;
    }

    /**
     * Update an existing article
     */
    updateArticle(id: string, updates: Partial<Omit<Article, 'id' | 'createdAt'>>): Article | null {
        const articles = this.getArticles();
        const index = articles.findIndex(a => a.id === id);

        if (index === -1) return null;

        articles[index] = {
            ...articles[index],
            ...updates,
            updatedAt: new Date().toISOString(),
        };

        this.saveArticles(articles);
        return articles[index];
    }

    /**
     * Delete an article
     */
    deleteArticle(id: string): boolean {
        const articles = this.getArticles();
        const filtered = articles.filter(a => a.id !== id);

        if (filtered.length === articles.length) return false;

        this.saveArticles(filtered);
        return true;
    }

    /**
     * Save articles to localStorage
     */
    private saveArticles(articles: Article[]): void {
        try {
            localStorage.setItem(ARTICLES_KEY, JSON.stringify(articles));
        } catch (err) {
            console.error('Failed to save articles:', err);
        }
    }

    /**
     * Get default articles (fallback)
     */
    private getDefaultArticles(): Article[] {
        return [
            {
                id: '1',
                title: "The Silent Language of Space",
                excerpt: "Exploring how our physical environment dictates our internal peace and the neurobiology of minimalism.",
                category: "LIFESTYLE",
                img: "https://images.unsplash.com/photo-1594359640393-160e1cfeef0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg",
                content: "Full article content here...",
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
            },
            {
                id: '2',
                title: "Neuroplasticity & Forgiveness",
                excerpt: "Why letting go is a physical act of brain restructuring, and how to start the process today.",
                category: "PSYCHOLOGY",
                img: "https://images.unsplash.com/photo-1643324896137-f0928e76202a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg",
                content: "Full article content here...",
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
            }
        ];
    }
}

// Export singleton instance
export const articleStore = new ArticleStore();
