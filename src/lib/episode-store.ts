import { Episode, fetchRSSFeed, formatEpisodeDate } from './rss-parser';

const RSS_FEED_URL = 'https://anchor.fm/s/103676c00/podcast/rss';
const CACHE_KEY = 'episode_cache_v2';
const CACHE_TIMESTAMP_KEY = 'podcast_episodes_timestamp';
const CACHE_DURATION = 1000 * 60 * 60; // 1 hour

/**
 * Episode store for managing podcast episodes
 * Uses localStorage for caching to reduce API calls
 */
class EpisodeStore {
    private loading: boolean = false;
    private error: string | null = null;

    /**
     * Get all episodes (from cache or fetch from RSS)
     */
    async getEpisodes(forceRefresh: boolean = false): Promise<Episode[]> {
        // Check cache first
        if (!forceRefresh && this.isCacheValid()) {
            const cached = this.getFromCache();
            if (cached) {
                return cached;
            }
        }

        // Fetch from RSS feed
        try {
            this.loading = true;
            this.error = null;

            const episodes = await fetchRSSFeed(RSS_FEED_URL);

            // Transform episodes for display
            const transformedEpisodes = episodes.map((ep: Episode) => ({
                ...ep,
                date: formatEpisodeDate(ep.pubDate),
                img: ep.imageUrl || 'https://images.unsplash.com/photo-1594359640393-160e1cfeef0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=3000&h=3000',
            }));

            this.saveToCache(transformedEpisodes);
            this.loading = false;

            return transformedEpisodes;
        } catch (err) {
            this.loading = false;
            this.error = err instanceof Error ? err.message : 'Unknown error';
            console.error('Failed to fetch episodes:', err);

            // Return cached data if available, even if expired
            const cached = this.getFromCache();
            if (cached) {
                return cached;
            }

            throw err;
        }
    }

    /**
     * Get a single episode by ID
     */
    async getEpisodeById(id: number): Promise<Episode | undefined> {
        const episodes = await this.getEpisodes();
        return episodes.find(ep => ep.id === id);
    }

    /**
     * Manually refresh episodes from RSS feed
     */
    async refresh(): Promise<Episode[]> {
        return this.getEpisodes(true);
    }

    /**
     * Check if cache is still valid
     */
    private isCacheValid(): boolean {
        const timestamp = localStorage.getItem(CACHE_TIMESTAMP_KEY);
        if (!timestamp) return false;

        const cacheAge = Date.now() - parseInt(timestamp, 10);
        return cacheAge < CACHE_DURATION;
    }

    /**
     * Get episodes from localStorage cache
     */
    private getFromCache(): Episode[] | null {
        try {
            const cached = localStorage.getItem(CACHE_KEY);
            if (!cached) return null;
            return JSON.parse(cached);
        } catch {
            return null;
        }
    }

    /**
     * Save episodes to localStorage cache
     */
    private saveToCache(episodes: Episode[]): void {
        try {
            localStorage.setItem(CACHE_KEY, JSON.stringify(episodes));
            localStorage.setItem(CACHE_TIMESTAMP_KEY, Date.now().toString());
        } catch (err) {
            console.warn('Failed to cache episodes:', err);
        }
    }

    /**
     * Clear the cache
     */
    clearCache(): void {
        localStorage.removeItem(CACHE_KEY);
        localStorage.removeItem(CACHE_TIMESTAMP_KEY);
    }

    /**
     * Get loading state
     */
    isLoading(): boolean {
        return this.loading;
    }

    /**
     * Get error state
     */
    getError(): string | null {
        return this.error;
    }
}

// Export singleton instance
export const episodeStore = new EpisodeStore();
