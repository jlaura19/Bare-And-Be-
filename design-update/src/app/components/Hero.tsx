import React from 'react';
import { Play } from 'lucide-react';

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 bg-[#FDFCF8]">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="inline-block px-4 py-1 border border-[#9AAB94]/30 rounded-full text-[#9AAB94] text-[11px] uppercase tracking-[0.2em] font-medium">
          New Season Available
        </div>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] text-[#2D2D2D]">
          The <span className="italic font-light">Healing</span> Edit
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-[#717171] font-light leading-relaxed">
          Conversations on modern wellness, conscious living, and the art of slowing down in a fast-paced world.
        </p>
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="px-10 py-4 bg-[#2D2D2D] text-[#FDFCF8] rounded-full text-sm font-medium tracking-widest uppercase hover:bg-[#9AAB94] transition-all duration-300 shadow-sm flex items-center gap-2">
            <Play size={16} fill="currentColor" />
            Listen to Latest
          </button>
          <button className="text-sm font-medium tracking-widest uppercase border-b border-[#2D2D2D] pb-1 hover:text-[#9AAB94] hover:border-[#9AAB94] transition-all">
            Browse All Episodes
          </button>
        </div>
      </div>
    </section>
  );
}
