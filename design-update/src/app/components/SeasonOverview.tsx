import React from 'react';
import { X, Sparkles, BookOpen, Heart, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function SeasonOverview({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#1A1A1A]/95 backdrop-blur-xl"
          />
          
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            className="relative w-full max-w-4xl bg-[#1A1A1A] border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors z-10"
            >
              <X size={24} />
            </button>

            <div className="grid md:grid-cols-2">
              <div className="p-12 space-y-8">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[#FFC83D]">
                    <Sparkles size={16} />
                    <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Theme Archive</span>
                  </div>
                  <h2 className="font-serif text-5xl text-white italic">The Healing Edit</h2>
                  <p className="text-[#FFC83D] text-[10px] uppercase tracking-widest font-bold">Season 02</p>
                </div>

                <p className="text-white/60 leading-relaxed font-light">
                  Season 2 is an intentional exploration of the "Edit"—the conscious process of removing what no longer serves us to make room for what truly heals.
                </p>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                      <BookOpen size={18} className="text-[#FFC83D]" />
                    </div>
                    <div>
                      <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-1">Radical Honesty</h4>
                      <p className="text-white/40 text-xs">Dismantling the narratives we tell ourselves to maintain comfort.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                      <Heart size={18} className="text-[#FFC83D]" />
                    </div>
                    <div>
                      <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-1">Somatic Wisdom</h4>
                      <p className="text-white/40 text-xs">Learning to listen to the body's intelligence during the healing process.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                      <Shield size={18} className="text-[#FFC83D]" />
                    </div>
                    <div>
                      <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-1">Safe Boundaries</h4>
                      <p className="text-white/40 text-xs">Establishing the emotional perimeters necessary for deep growth.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative hidden md:block">
                <img 
                  src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxtaW5pbWFsaXN0JTIwY2FuZGxlJTIwZGFya3xlbnwwfHx8fDE3Njk4MTgxNzF8MA" 
                  alt="Season 2 Aesthetic"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
