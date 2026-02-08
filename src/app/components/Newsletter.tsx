import { useState, FormEvent } from 'react';
import { subscribeToNewsletter } from '../../lib/newsletter-api';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Reset message
    setMessage(null);

    // Don't submit if already loading or email is empty
    if (isLoading || !email.trim()) {
      return;
    }

    setIsLoading(true);

    try {
      const result = await subscribeToNewsletter(email);

      setMessage({
        type: result.success ? 'success' : 'error',
        text: result.message,
      });

      // Clear form on success
      if (result.success) {
        setEmail('');
      }
    } catch (error) {
      setMessage({
        type: 'error',
        text: 'An unexpected error occurred. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-24 px-6 bg-[#9AAB94]/10">
      <div className="max-w-4xl mx-auto text-center space-y-10">
        <div className="space-y-4">
          <h2 className="font-serif text-3xl md:text-5xl text-[#2D2D2D]">Join the Sunday Edit</h2>
          <p className="text-[#717171] font-light text-lg">
            Weekly reflections, episode highlights, and curated tools for your healing journey.
          </p>
        </div>

        <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
              className="flex-grow px-6 py-4 bg-[#FFFFFF] border border-[#717171]/20 rounded-full text-[#2D2D2D] text-sm focus:outline-none focus:border-[#9AAB94] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <button
              type="submit"
              disabled={isLoading || !email.trim()}
              className="px-8 py-4 bg-[#2D2D2D] text-[#FDFCF8] rounded-full text-[12px] font-medium tracking-widest uppercase hover:bg-[#9AAB94] transition-all duration-300 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#2D2D2D]"
            >
              {isLoading ? 'Subscribing...' : 'Subscribe'}
            </button>
          </div>

          {/* Success/Error Message */}
          {message && (
            <p
              className={`text-sm mt-4 font-medium ${message.type === 'success' ? 'text-[#9AAB94]' : 'text-red-600'
                }`}
            >
              {message.text}
            </p>
          )}

          <p className="text-[11px] text-[#717171] mt-4 italic font-light">
            Respecting your inbox. Unsubscribe at any time.
          </p>
        </form>
      </div>
    </section>
  );
}
