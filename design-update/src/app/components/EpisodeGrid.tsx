import React from 'react';
import { Play, ArrowRight } from 'lucide-react';

const episodes = [
  {
    id: 1,
    title: "Breathwork & the Nervous System",
    date: "Jan 28, 2026",
    tag: "Wellness",
    duration: "32 min"
  },
  {
    id: 2,
    title: "The Architecture of a Balanced Life",
    date: "Jan 21, 2026",
    tag: "Lifestyle",
    duration: "54 min"
  },
  {
    id: 3,
    title: "Finding Resonance in Modern Rituals",
    date: "Jan 14, 2026",
    tag: "Mindfulness",
    duration: "41 min"
  }
];

export function EpisodeGrid() {
  return (
    <section className="py-20 px-6 bg-[#FDFCF8]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div className="space-y-4">
            <h2 className="font-serif text-3xl md:text-4xl text-[#2D2D2D]">Recent Episodes</h2>
            <div className="h-px w-20 bg-[#9AAB94]" />
          </div>
          <button className="hidden sm:flex items-center gap-2 text-[13px] uppercase tracking-widest text-[#717171] hover:text-[#9AAB94] transition-colors">
            View Archive <ArrowRight size={16} />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {episodes.map((ep) => (
            <div key={ep.id} className="group bg-[#FFFFFF] border border-[#717171]/10 p-8 rounded-xl hover:shadow-xl hover:shadow-[#717171]/5 transition-all duration-500 flex flex-col h-full">
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 bg-[#FDFCF8] border border-[#9AAB94]/20 rounded-full text-[10px] uppercase tracking-wider text-[#9AAB94] font-medium">
                  {ep.tag}
                </span>
                <span className="text-[12px] text-[#717171] font-light italic">{ep.date}</span>
              </div>
              
              <h3 className="font-serif text-2xl text-[#2D2D2D] mb-4 group-hover:text-[#9AAB94] transition-colors leading-snug flex-grow">
                {ep.title}
              </h3>
              
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-[#717171]/5">
                <span className="text-[12px] text-[#717171] uppercase tracking-widest">{ep.duration}</span>
                <button className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-widest text-[#2D2D2D] hover:text-[#9AAB94] transition-colors group/btn">
                  Listen <Play size={12} className="group-hover/btn:translate-x-1 transition-transform" fill="currentColor" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
