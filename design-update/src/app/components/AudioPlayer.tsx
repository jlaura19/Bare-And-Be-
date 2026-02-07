import React from 'react';
import { Play, SkipBack, SkipForward, Volume2, ListMusic } from 'lucide-react';

export function AudioPlayer() {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl z-[100]">
      <div className="bg-[#0A0A0A]/80 backdrop-blur-xl border border-[#FFC83D]/30 rounded-2xl px-6 py-4 flex items-center justify-between shadow-2xl shadow-black">
        <div className="flex items-center gap-4 w-1/3">
          <div className="w-12 h-12 bg-[#FFC83D] rounded-lg flex-shrink-0 flex items-center justify-center">
            <Play size={20} fill="#1A1A1A" stroke="#1A1A1A" />
          </div>
          <div className="hidden sm:block overflow-hidden">
            <h4 className="text-white text-sm font-medium truncate">Navigating the Quiet</h4>
            <p className="text-[#FFC83D] text-[10px] uppercase tracking-widest font-medium">Playing Now • Ep. 142</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2 w-1/3">
          <div className="flex items-center gap-6">
            <button className="text-white/60 hover:text-[#FFC83D] transition-colors">
              <SkipBack size={20} />
            </button>
            <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-105 transition-transform">
              <Play size={20} fill="#1A1A1A" className="ml-1" />
            </button>
            <button className="text-white/60 hover:text-[#FFC83D] transition-colors">
              <SkipForward size={20} />
            </button>
          </div>
          <div className="w-full max-w-md h-1 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full w-1/3 bg-[#FFC83D]" />
          </div>
        </div>

        <div className="flex items-center justify-end gap-6 w-1/3 text-white/60">
          <button className="hidden md:block hover:text-[#FFC83D] transition-colors">
            <ListMusic size={20} />
          </button>
          <div className="hidden md:flex items-center gap-2">
            <Volume2 size={20} />
            <div className="w-20 h-1 bg-white/10 rounded-full">
              <div className="h-full w-2/3 bg-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
