import { useState, useEffect } from 'react';
import { Play, Search, Loader2 } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/ui/ImageWithFallback';
import { episodeStore } from '@/lib/episode-store';
import hostImage from '@/assets/host-image.png';

const categories = ['All', 'Healing', 'Growth', 'Guest Interviews', 'Mindfulness'];
const seasons = ['All Seasons', 'Season 2', 'Season 1'];

interface EpisodesViewProps {
  onPlayEpisode?: (episode: any) => void;
}

export function EpisodesView({ onPlayEpisode }: EpisodesViewProps) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeSeason, setActiveSeason] = useState('All Seasons');
  const [episodes, setEpisodes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    loadEpisodes();
  }, []);

  const loadEpisodes = async () => {
    try {
      setLoading(true);
      const data = await episodeStore.getEpisodes();
      setEpisodes(data);
      setError('');
    } catch (err) {
      console.error('Failed to load episodes:', err);
      setError('Failed to load episodes. Using fallback data.');
      // Fallback to hardcoded episodes
      setEpisodes([
        {
          id: 1,
          title: "Navigating the Quiet",
          category: "Healing",
          date: "JAN 30, 2026",
          season: "S02",
          img: "https://images.unsplash.com/photo-1594359640393-160e1cfeef0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=3000&h=3000"
        },
        {
          id: 2,
          title: "The Architecture of Self",
          category: "Growth",
          date: "JAN 23, 2026",
          season: "S02",
          img: "https://images.unsplash.com/photo-1643324896137-f0928e76202a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=3000&h=3000"
        },
        {
          id: 3,
          title: "Conscious Evolution",
          category: "Guest Interviews",
          date: "JAN 16, 2026",
          season: "S02",
          img: hostImage
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const filteredEpisodes = episodes.filter(ep => {
    const categoryMatch = activeCategory === 'All' || ep.category === activeCategory;
    const seasonMatch = activeSeason === 'All Seasons' || (activeSeason === 'Season 2' ? ep.season === 'S02' : ep.season === 'S01');
    return categoryMatch && seasonMatch;
  });

  return (
    <section className="pt-32 pb-40 px-6 bg-[#1A1A1A] min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-4">
            <h2 className="font-serif text-5xl md:text-7xl text-white">The Archive</h2>
            <p className="font-['Pinyon_Script'] text-[#FFC83D] text-3xl">Explore every conversation</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex items-center gap-4 bg-white/5 border border-white/10 px-6 py-3 rounded-full">
              <Search size={18} className="text-white/40" />
              <input
                type="text"
                placeholder="Search conversations..."
                className="bg-transparent border-none outline-none text-white text-sm w-48"
              />
            </div>
          </div>
        </div>

        {error && (
          <div className="mb-8 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded text-yellow-400 text-sm">
            {error}
          </div>
        )}

        <div className="space-y-8 mb-12">
          <div className="flex flex-wrap gap-4">
            <span className="w-full text-[10px] uppercase tracking-widest text-white/40 font-bold mb-2 block">Filter by Theme</span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-2 rounded-full text-[10px] uppercase tracking-widest font-bold transition-all border ${activeCategory === cat
                  ? 'bg-[#FFC83D] border-[#FFC83D] text-[#1A1A1A]'
                  : 'bg-transparent border-white/20 text-white hover:border-[#FFC83D] hover:text-[#FFC83D]'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <span className="w-full text-[10px] uppercase tracking-widest text-white/40 font-bold mb-2 block">Select Season</span>
            {seasons.map((s) => (
              <button
                key={s}
                onClick={() => setActiveSeason(s)}
                className={`px-8 py-2 rounded-full text-[10px] uppercase tracking-widest font-bold transition-all border ${activeSeason === s
                  ? 'bg-white border-white text-[#1A1A1A]'
                  : 'bg-transparent border-white/20 text-white hover:border-white hover:text-white'
                  }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="w-12 h-12 text-[#FFC83D] animate-spin mb-4" />
            <p className="text-white/60">Loading episodes from RSS feed...</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredEpisodes.map((ep) => (
              <div
                key={ep.id}
                className="group cursor-pointer grid md:grid-cols-[150px_1fr] gap-4 items-center p-3 bg-white/5 border border-white/10 rounded-[4px] hover:bg-white/10 hover:border-[#FFC83D]/30 transition-all duration-500"
                onClick={() => onPlayEpisode && onPlayEpisode(ep)}
              >
                <div className="relative aspect-square overflow-hidden rounded-[4px]">
                  <ImageWithFallback
                    src={ep.img || ep.imageUrl || hostImage}
                    alt={ep.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-10 h-10 bg-[#FFC83D] rounded-full flex items-center justify-center scale-90 group-hover:scale-100 transition-transform shadow-2xl">
                      <Play size={16} fill="#1A1A1A" />
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[#FFC83D] text-[9px] uppercase tracking-widest font-bold">{ep.season}</span>
                    <span className="w-1 h-1 bg-white/20 rounded-full" />
                    <span className="text-[#FFC83D] text-[9px] uppercase tracking-widest font-bold">{ep.category}</span>
                    <span className="w-1 h-1 bg-white/20 rounded-full" />
                    <span className="text-white/40 text-[9px] uppercase tracking-widest">{ep.date}</span>
                  </div>
                  <h3 className="font-serif text-xl md:text-2xl text-white group-hover:text-[#FFC83D] transition-colors">{ep.title}</h3>
                  {ep.description && (
                    <p className="text-white/60 leading-relaxed line-clamp-2 text-xs">{ep.description}</p>
                  )}
                  <div className="flex items-center gap-2 text-white/40 group-hover:text-[#FFC83D] transition-colors">
                    <Play size={12} />
                    <span className="text-[9px] uppercase tracking-widest font-bold">Play Episode</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {!loading && filteredEpisodes.length === 0 && (
          <div className="text-center py-20">
            <p className="text-white/40 text-lg">No episodes found matching your filters.</p>
          </div>
        )}
      </div>
    </section>
  );
}
