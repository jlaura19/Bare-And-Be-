export interface Episode {
    id: number;
    title: string;
    description: string;
    pubDate: string;
    audioUrl: string;
    imageUrl: string;
    duration?: string;
    season?: string;
    category?: string;
}

/**
 * Fetches and parses the RSS feed from the given URL
 * Uses CORS proxy for browser compatibility
 * @param feedUrl - The URL of the RSS feed
 * @returns Array of parsed episodes
 */
export async function fetchRSSFeed(feedUrl: string): Promise<Episode[]> {
    try {
        // Use CORS proxy to fetch the RSS feed
        const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(feedUrl)}`;

        const response = await fetch(proxyUrl);
        if (!response.ok) {
            throw new Error(`Failed to fetch RSS feed: ${response.statusText}`);
        }

        const xmlText = await response.text();

        // Parse XML using DOMParser (browser-native)
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, 'text/xml');

        // Check for parsing errors
        const parserError = xmlDoc.querySelector('parsererror');
        if (parserError) {
            throw new Error('Failed to parse RSS feed XML');
        }

        // Extract items from the feed
        const items = Array.from(xmlDoc.querySelectorAll('item'));

        const episodes: Episode[] = items.map((item, index) => {
            // Extract basic fields
            const title = item.querySelector('title')?.textContent || 'Untitled Episode';
            const description =
                item.querySelector('description')?.textContent ||
                item.querySelector('content\\:encoded')?.textContent ||
                '';
            const pubDate = item.querySelector('pubDate')?.textContent || '';

            // Extract audio URL from enclosure
            const enclosure = item.querySelector('enclosure');
            const audioUrl = enclosure?.getAttribute('url') || '';

            // Extract image URL (try multiple sources with improved selector logic)
            let imageUrl = '';

            // Try itunes:image
            const itunesImage = item.getElementsByTagName('itunes:image')[0] || item.getElementsByTagName('image')[0];
            if (itunesImage) {
                imageUrl = itunesImage.getAttribute('href') || itunesImage.getAttribute('url') || '';
            }

            // Try media:content if no image yet
            if (!imageUrl) {
                const mediaContent = item.getElementsByTagName('media:content')[0];
                if (mediaContent && mediaContent.getAttribute('medium') === 'image') {
                    imageUrl = mediaContent.getAttribute('url') || '';
                }
            }

            // Try media:thumbnail if no image yet
            if (!imageUrl) {
                const mediaThumbnail = item.getElementsByTagName('media:thumbnail')[0];
                if (mediaThumbnail) {
                    imageUrl = mediaThumbnail.getAttribute('url') || '';
                }
            }

            // Try standard enclosure if it's an image
            if (!imageUrl && enclosure) {
                const type = enclosure.getAttribute('type');
                if (type && type.startsWith('image/')) {
                    imageUrl = enclosure.getAttribute('url') || '';
                }
            }

            // Fallback to channel image if item has no image
            if (!imageUrl) {
                const channelImage = xmlDoc.querySelector('channel > itunes\\:image, channel > image > url');
                if (channelImage) {
                    imageUrl = channelImage.getAttribute('href') || channelImage.textContent || '';
                }
            }

            // Extract duration
            let duration = '';
            const durationTag = item.getElementsByTagName('itunes:duration')[0];
            if (durationTag) {
                duration = durationTag.textContent || '';
            }

            // Determine season from pubDate
            const date = new Date(pubDate);
            const year = date.getFullYear();
            const season = year >= 2026 ? 'S02' : 'S01';

            // Auto-categorize based on title keywords
            let category = 'Healing';
            const titleLower = title.toLowerCase();
            if (titleLower.includes('guest') || titleLower.includes('interview')) {
                category = 'Guest Interviews';
            } else if (titleLower.includes('growth') || titleLower.includes('evolv')) {
                category = 'Growth';
            } else if (titleLower.includes('mindful') || titleLower.includes('meditat')) {
                category = 'Mindfulness';
            }

            return {
                id: items.length - index, // Reverse order so newest is #1
                title,
                description: description.replace(/<[^>]*>/g, ''), // Strip HTML tags
                pubDate,
                audioUrl,
                imageUrl,
                duration,
                season,
                category,
            };
        });

        return episodes;
    } catch (error) {
        console.error('Error fetching RSS feed:', error);
        throw new Error('Failed to fetch RSS feed');
    }
}

/**
 * Formats a date string for display
 * @param dateString - ISO date string
 * @returns Formatted date (e.g., "JAN 30, 2026")
 */
export function formatEpisodeDate(dateString: string): string {
    const date = new Date(dateString);
    const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}

/**
 * Formats duration from seconds or HH:MM:SS format
 * @param duration - Duration string or number
 * @returns Formatted duration (e.g., "45:30")
 */
export function formatDuration(duration: string | number): string {
    if (typeof duration === 'number') {
        const minutes = Math.floor(duration / 60);
        const seconds = duration % 60;
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }
    return duration;
}
