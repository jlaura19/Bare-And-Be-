/**
 * EmailOctopus API Integration
 * Handles newsletter subscription functionality via serverless function
 */

export interface NewsletterResponse {
    success: boolean;
    message: string;
}

/**
 * Subscribe an email address to the newsletter
 * Uses serverless API endpoint to avoid CORS issues
 * @param email - The email address to subscribe
 * @returns Promise with success status and message
 */
export async function subscribeToNewsletter(email: string): Promise<NewsletterResponse> {
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return {
            success: false,
            message: 'Please enter a valid email address.',
        };
    }

    try {
        const response = await fetch('/api/subscribe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        });

        const data = await response.json();

        return {
            success: data.success || false,
            message: data.message || 'An error occurred. Please try again.',
        };
    } catch (error) {
        console.error('Newsletter subscription error:', error);
        return {
            success: false,
            message: 'Network error. Please check your connection and try again.',
        };
    }
}
