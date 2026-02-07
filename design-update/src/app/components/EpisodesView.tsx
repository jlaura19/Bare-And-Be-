import React from 'react';
import { Play, Search, Filter } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import hostImage from 'figma:asset/4dadc749371545dfaa717f63881e0f372cea65db.png';

const categories = ['All', 'Healing', 'Growth', 'Guest Interviews', 'Mindfulness'];
const seasons = ['All Seasons', 'Season 2', 'Season 1'];

const episodes = [
  {
    id: 1,
    title: "Navigating the Quiet",
    category: "Healing",
    date: "JAN 30, 2026",
    season: "S02",
    img: "https://images.unsplash.com/photo-1594359640393-160e1cfeef0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZGFyayUyMG9mZmljZSUyMGRlc2slMjBwb2RjYXN0JTIwbWljfGVufDF8fHx8MTc2OTgwMTQxN3ww"
  },
  {
    id: 2,
    title: "The Architecture of Self",
    category: "Growth",
    date: "JAN 23, 2026",
    season: "S02",
    img: "https://images.unsplash.com/photo-1643324896137-f0928e76202a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdvbGQlMjBhbmQlMjBibGFjayUyMHRleHR1cmUlMjBlZGl0b3JpYWx8ZW58MXx8fHwxNzY5ODAxNDE3fDA"
  },
  {
    id: 3,
    title: "Conscious Evolution",
    category: "Guest Interviews",
    date: "JAN 16, 2026",
    season: "S02",
    img: hostImage
  },
  {
    id: 4,
    title: "The First Breath",
    category: "Healing",
    date: "AUG 12, 2025",
    season: "S01",
    img: "https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxtaW5pbWFsaXN0JTIwbmF0dXJlJTIwZGFya3xlbnwwfHx8fDE3Njk4MTgxNzF8MA"
  },
  {
    id: 5,
    title: "Boundaries as Love",
    category: "Growth",
    date: "SEP 05, 2025",
    season: "S01",
    img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtZWRpdGF0aW9uJTIwZGFya3xlbnwwfHx8fDE3Njk4MTgxNzF8MA"
  }
];

export function EpisodesView() {
  const [activeCategory, setActiveCategory] = React.useState('All');
  const [activeSeason, setActiveSeason] = React.useState('All Seasons');

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

        <div className="space-y-8 mb-12">
          <div className="flex flex-wrap gap-4">
            <span className="w-full text-[10px] uppercase tracking-widest text-white/40 font-bold mb-2 block">Filter by Theme</span>
            {categories.map((cat) => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-2 rounded-full text-[10px] uppercase tracking-widest font-bold transition-all border ${
                  activeCategory === cat 
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
                className={`px-8 py-2 rounded-full text-[10px] uppercase tracking-widest font-bold transition-all border ${
                  activeSeason === s 
                    ? 'bg-white border-white text-[#1A1A1A]' 
                    : 'bg-transparent border-white/20 text-white hover:border-white hover:text-white'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredEpisodes.map((ep) => (
            <div key={ep.id} className="group cursor-pointer">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[4px] mb-6">
                <ImageWithFallback 
                  src={ep.img}
                  alt={ep.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-20 h-20 bg-[#FFC83D] rounded-full flex items-center justify-center scale-90 group-hover:scale-100 transition-transform shadow-2xl">
                    <Play size={32} fill="#1A1A1A" />
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-[#FFC83D] text-[10px] uppercase tracking-widest font-bold">{ep.season}</span>
                  <span className="w-1 h-1 bg-white/20 rounded-full" />
                  <span className="text-[#FFC83D] text-[10px] uppercase tracking-widest font-bold">{ep.category}</span>
                  <span className="w-1 h-1 bg-white/20 rounded-full" />
                  <span className="text-white/40 text-[10px] uppercase tracking-widest">{ep.date}</span>
                </div>
                <h3 className="font-serif text-2xl text-white group-hover:text-[#FFC83D] transition-colors">{ep.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
