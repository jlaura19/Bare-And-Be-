import React from 'react';
import { Play, Clock, Share2 } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function FeaturedEpisode() {
  return (
    <section className="py-20 px-6 bg-[#FDFCF8]">
      <div className="max-w-7xl mx-auto">
        <div className="relative group overflow-hidden rounded-xl border border-[#717171]/10 bg-[#FFFFFF] shadow-xl shadow-[#717171]/5">
          <div className="grid lg:grid-cols-2">
            <div className="relative aspect-video lg:aspect-auto h-full overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1650513737281-882e597ee5e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2RjYXN0JTIwbWljcm9waG9uZSUyMHN0dWRpbyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3Njk2ODI4NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Latest Episode"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#2D2D2D]/10 group-hover:bg-[#2D2D2D]/0 transition-colors duration-500" />
            </div>
            
            <div className="p-8 lg:p-16 flex flex-col justify-center space-y-6">
              <div className="flex items-center gap-3 text-[11px] uppercase tracking-widest text-[#9AAB94] font-semibold">
                <span>Ep. 142</span>
                <span className="w-1 h-1 bg-[#9AAB94] rounded-full" />
                <span>Featured</span>
              </div>
              
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#2D2D2D] leading-tight">
                Navigating the Quiet: Finding Peace in Solitude
              </h2>
              
              <p className="text-[#717171] leading-relaxed font-light">
                In this episode, we dive deep into the restorative power of being alone. We discuss how solitude differs from loneliness and share practical rituals for your morning routine.
              </p>
              
              <div className="flex items-center gap-6 pt-4">
                <button className="h-14 w-14 rounded-full bg-[#9AAB94] text-[#FDFCF8] flex items-center justify-center hover:bg-[#2D2D2D] transition-colors duration-300 shadow-lg shadow-[#9AAB94]/20">
                  <Play size={24} fill="currentColor" />
                </button>
                <div className="flex flex-col">
                  <span className="text-[12px] uppercase tracking-widest text-[#717171]">Listen on Spotify</span>
                  <div className="h-1.5 w-48 bg-[#717171]/10 rounded-full mt-2 overflow-hidden">
                    <div className="h-full w-1/3 bg-[#9AAB94] rounded-full" />
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-6 pt-8 border-t border-[#717171]/5">
                <div className="flex items-center gap-2 text-[13px] text-[#717171]">
                  <Clock size={16} />
                  <span>45 mins</span>
                </div>
                <div className="flex items-center gap-2 text-[13px] text-[#717171] cursor-pointer hover:text-[#9AAB94]">
                  <Share2 size={16} />
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
