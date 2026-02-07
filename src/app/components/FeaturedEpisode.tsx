import { useState, useEffect } from 'react';
import { Play, Clock, Share2, Loader2 } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/ui/ImageWithFallback';
import { episodeStore } from '@/lib/episode-store';
import hostImage from '@/assets/host-image.png';

interface FeaturedEpisodeProps {
  onPlayEpisode?: (episode: any) => void;
}

export function FeaturedEpisode({ onPlayEpisode }: FeaturedEpisodeProps) {
  const [latestEpisode, setLatestEpisode] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadLatestEpisode();
  }, []);

  const loadLatestEpisode = async () => {
    try {
      setLoading(true);
      const episodes = await episodeStore.getEpisodes();
      // Get the first episode (most recent)
      if (episodes && episodes.length > 0) {
        setLatestEpisode(episodes[0]);
      }
    } catch (err) {
      console.error('Failed to load latest episode:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section className="py-12 px-6 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center py-12">
            <Loader2 className="w-8 h-8 text-[#FFC83D] animate-spin" />
          </div>
        </div>
      </section>
    );
  }

  if (!latestEpisode) {
    return null;
  }

  // Extract duration from episode if available
  const duration = latestEpisode.duration || '45 mins';
  const episodeNumber = latestEpisode.episodeNumber || latestEpisode.id || '1';

  return (
    <section className="py-12 px-6 bg-[#1A1A1A]">
      <div className="max-w-6xl mx-auto">
        <div className="relative group overflow-hidden rounded-lg border border-white/10 bg-white/5 shadow-xl shadow-black/20">
          <div className="grid lg:grid-cols-2">
            <div className="relative aspect-video lg:aspect-auto h-full overflow-hidden">
              <ImageWithFallback
                src={latestEpisode.img || latestEpisode.imageUrl || hostImage}
                alt={latestEpisode.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
            </div>

            <div className="p-6 lg:p-10 flex flex-col justify-center space-y-4">
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#FFC83D] font-semibold">
                <span>Ep. {episodeNumber}</span>
                <span className="w-1 h-1 bg-[#FFC83D] rounded-full" />
                <span>Latest Episode</span>
              </div>

              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-white leading-tight">
                {latestEpisode.title}
              </h2>

              {latestEpisode.description && (
                <p className="text-white/60 leading-relaxed font-light line-clamp-2 text-sm">
                  {latestEpisode.description}
                </p>
              )}

              <div className="flex items-center gap-4 pt-2">
                <button
                  onClick={() => onPlayEpisode?.(latestEpisode)}
                  className="h-12 w-12 rounded-full bg-[#FFC83D] text-[#1A1A1A] flex items-center justify-center hover:bg-white transition-colors duration-300 shadow-lg shadow-[#FFC83D]/20"
                >
                  <Play size={20} fill="currentColor" />
                </button>
                <div className="flex flex-col">
                  <span className="text-[11px] uppercase tracking-widest text-white/60">Listen Now</span>
                  {latestEpisode.audioUrl && (
                    <div className="h-1 w-32 bg-white/10 rounded-full mt-1.5 overflow-hidden">
                      <div className="h-full w-0 bg-[#FFC83D] rounded-full" />
                    </div>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <div className="flex items-center gap-2 text-[12px] text-white/60">
                  <Clock size={14} />
                  <span>{duration}</span>
                </div>
                <div className="flex items-center gap-2 text-[12px] text-white/60 cursor-pointer hover:text-[#FFC83D] transition-colors">
                  <Share2 size={14} />
                  <span>Share</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
