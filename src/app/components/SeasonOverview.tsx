import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Heart, Brain, Star } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/ui/ImageWithFallback';
import seasonOverviewImg from '@/assets/season-overview.jpg';

interface SeasonOverviewProps {
  isOpen: boolean;
  onClose: () => void;
  setActiveTab?: (tab: string) => void;
}

export function SeasonOverview({ isOpen, onClose, setActiveTab }: SeasonOverviewProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0A0A0A]/90 backdrop-blur-sm z-[100]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 m-auto w-full max-w-5xl h-fit max-h-[90vh] overflow-y-auto bg-[#1A1A1A] z-[101] rounded-2xl border border-white/5 shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-white/60 hover:text-white z-10 transition-colors"
            >
              <X size={24} />
            </button>

            <div className="grid lg:grid-cols-2">
              {/* Image Side */}
              <div className="relative h-64 lg:h-full min-h-[400px]">
                <ImageWithFallback
                  src={seasonOverviewImg}
                  alt="Season 2 Overview"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#1A1A1A] via-transparent to-transparent" />
              </div>

              {/* Content Side */}
              <div className="p-10 lg:p-12 space-y-8">
                <div className="space-y-2">
                  <span className="text-[#FFC83D] text-xs uppercase tracking-[0.2em] font-bold">Current Season</span>
                  <h2 className="font-serif text-4xl lg:text-5xl text-white">Season 2: The Awakening</h2>
                </div>

                <p className="text-white/80 leading-relaxed text-lg font-light">
                  This season, we're diving deep into the concept of awakening—not just spiritually, but in our everyday lives.
                  We explore how to wake up to our true potential, shed old skins, and embrace authentic living in a modern world.
                </p>

                <div className="space-y-6">
                  <h3 className="text-white font-serif text-2xl">Key Themes</h3>
                  <div className="grid gap-4">
                    <div className="flex items-start gap-4 p-4 bg-white/5 rounded-lg border border-white/5 hover:border-[#FFC83D]/30 transition-colors">
                      <div className="mt-1 p-2 bg-[#FFC83D]/10 rounded-full text-[#FFC83D]">
                        <Heart size={18} />
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-1">Emotional Intelligence</h4>
                        <p className="text-white/60 text-sm">Navigating complex emotions and building resilience.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-white/5 rounded-lg border border-white/5 hover:border-[#FFC83D]/30 transition-colors">
                      <div className="mt-1 p-2 bg-[#FFC83D]/10 rounded-full text-[#FFC83D]">
                        <Brain size={18} />
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-1">Mindset Shift</h4>
                        <p className="text-white/60 text-sm">Rewiring limiting beliefs and embracing growth.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-white/5 rounded-lg border border-white/5 hover:border-[#FFC83D]/30 transition-colors">
                      <div className="mt-1 p-2 bg-[#FFC83D]/10 rounded-full text-[#FFC83D]">
                        <Star size={18} />
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-1">Authentic Living</h4>
                        <p className="text-white/60 text-sm">Aligning your actions with your core values.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => {
                      setActiveTab?.('episodes');
                      onClose();
                    }}
                    className="px-8 py-3 bg-[#FFC83D] text-[#1A1A1A] text-xs uppercase tracking-[0.2em] font-bold rounded-[3px] hover:bg-white transition-all w-full lg:w-auto text-center"
                  >
                    Explore Episodes
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
