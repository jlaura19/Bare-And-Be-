import { Play, ArrowRight, Sparkles } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/ui/ImageWithFallback';
import { FeaturedEpisode } from '@/app/components/FeaturedEpisode';
import seasonImage from '@/assets/season-cover-new.png';
import hostImage from '@/assets/host-image.png';

export function HomeView({ onJoinClick, onOverviewClick, setActiveTab, onPlayEpisode }: { onJoinClick: () => void; onOverviewClick: () => void; setActiveTab?: (tab: string) => void; onPlayEpisode?: (episode: any) => void }) {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1594359640393-160e1cfeef0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZGFyayUyMG9mZmljZSUyMGRlc2slMjBwb2RjYXN0JTIwbWljfGVufDF8fHx8MTc2OTgwMTQxN3ww"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-5xl space-y-12">
          <h2 className="font-['Pinyon_Script'] text-[#FFC83D] text-4xl md:text-5xl">The Edit</h2>
          <h1 className="font-serif text-6xl md:text-8xl lg:text-8xl text-white leading-none tracking-tight">
            <span className="italic font-light">BOLD & UNFILTERED.</span>
          </h1>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <a
              href="https://open.spotify.com/show/72yL8tGQk1vsTNh3br8AW0?si=eFb3nFCwSnuHzA_jh0471A"
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-5 bg-[#FFC83D] text-[#1A1A1A] text-sm font-bold uppercase tracking-[0.2em] hover:bg-white transition-all duration-500 shadow-2xl shadow-[#FFC83D]/20 rounded-[4px] flex items-center gap-3"
            >
              <Play size={18} fill="currentColor" />
              Listen on Spotify
            </a>
            <button
              onClick={() => setActiveTab?.('episodes')}
              className="px-12 py-5 border border-white/20 text-white text-sm font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-[#1A1A1A] transition-all duration-500 rounded-[4px]"
            >
              Browse Episodes
            </button>
          </div>
        </div>
      </section>

      {/* Featured Episode Section */}
      <FeaturedEpisode onPlayEpisode={onPlayEpisode} />

      {/* New Season Announcement Section */}
      <section className="py-24 px-6 relative overflow-hidden bg-gradient-to-b from-[#1A1A1A] to-[#0D0D0D]">
        <div className="max-w-7xl mx-auto">
          <div className="relative group bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2 items-center">
              <div className="p-10 lg:p-20 space-y-8 z-10">
                <div className="flex items-center gap-3 text-[#FFC83D] animate-pulse">
                  <Sparkles size={20} />
                  <span className="text-[10px] uppercase tracking-[0.4em] font-bold">New Season Now Live</span>
                </div>

                <h2 className="font-serif text-4xl md:text-6xl text-white leading-tight">
                  Season 02: <br />
                  <span className="italic font-light">The Healing Edit</span>
                </h2>

                <p className="text-white/60 leading-relaxed text-lg font-light max-w-md">
                  A deeper dive into the architecture of self. Join us for brand new conversations exploring the boundaries of healing and being.
                </p>

                <div className="flex items-center gap-8 pt-4">
                  <a
                    href="https://open.spotify.com/show/72yL8tGQk1vsTNh3br8AW0?si=eFb3nFCwSnuHzA_jh0471A"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 px-8 py-4 bg-white text-[#1A1A1A] text-[10px] uppercase tracking-widest font-bold hover:bg-[#FFC83D] transition-all rounded-[4px]"
                  >
                    Listen to Season 02
                  </a>
                  <button
                    onClick={onOverviewClick}
                    className="text-white/60 hover:text-white transition-colors text-[10px] uppercase tracking-widest font-bold border-b border-white/10 pb-1"
                  >
                    Season Overview
                  </button>
                </div>
              </div>

              <div className="relative h-[400px] lg:h-[600px] overflow-hidden">
                <ImageWithFallback
                  src={seasonImage}
                  alt="New Season Art"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/80 lg:from-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Guest Section */}
      <section className="py-32 px-6 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 border border-[#FFC83D]/20 rounded-full animate-pulse" />
            <div className="relative aspect-square max-w-md mx-auto overflow-hidden rounded-full border-2 border-[#FFC83D]">
              <ImageWithFallback
                src={hostImage}
                alt="Juliet Lauranne"
                className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-1000"
              />
            </div>
            <a
              href="https://youtube.com/@bareandbecomingpodcast?si=S4RGqNFapIUbuWyh"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute -bottom-6 -right-6 bg-[#FFC83D] p-8 rounded-full shadow-2xl hover:scale-110 transition-transform"
            >
              <Play size={32} fill="#1A1A1A" />
            </a>
          </div>

          <div className="space-y-8">
            <div className="inline-block px-4 py-1 bg-[#FFC83D]/10 border border-[#FFC83D]/30 text-[#FFC83D] text-[10px] uppercase tracking-[0.3em] font-bold">
              Current Spotlight
            </div>
            <h2 className="font-serif text-5xl md:text-6xl text-white">Juliet Lauranne</h2>
            <p className="font-['Pinyon_Script'] text-[#FFC83D] text-3xl">On Conscious Evolution</p>
            <p className="text-white/60 leading-loose text-lg font-light max-w-xl">
              "We aren't just healing from the past; we are becoming who we were meant to be before the world told us who we should be."
            </p>
            <button className="group flex items-center gap-4 text-[#FFC83D] text-sm font-bold uppercase tracking-[0.2em]">
              View Full Interview
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </section>
      {/* Join the Edit Section */}
      <section className="py-32 px-6 bg-[#0D0D0D]">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h2 className="font-serif text-5xl md:text-7xl text-white italic font-light">Join the Edit.</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
              Become part of a community dedicated to the art of unbecoming. Receive curated reflections, early episode access, and exclusive wisdom directly in your inbox.
            </p>
          </div>

          <button
            onClick={onJoinClick}
            className="group relative inline-flex items-center gap-4 px-12 py-6 bg-[#FFC83D] text-[#1A1A1A] text-xs uppercase tracking-[0.4em] font-bold rounded-[4px] hover:bg-white transition-all duration-500 overflow-hidden"
          >
            <span className="relative z-10">Subscribe to the Edit</span>
            <ArrowRight size={18} className="relative z-10 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
}
