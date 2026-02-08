import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import podcastLogo from '@/assets/podcast-logo.jpg';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onJoinClick: () => void;
}

export function Navbar({ activeTab, setActiveTab, onJoinClick }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const tabs = ['home', 'episodes', 'articles', 'about'];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#1A1A1A]/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex-1 flex items-center gap-8">
          <button onClick={() => setActiveTab('home')} className="cursor-pointer flex items-center gap-3 group">
            <img src={podcastLogo} alt="Bare & Be" className="w-10 h-10 rounded-full object-cover border-2 border-[#FFC83D]/30 group-hover:border-[#FFC83D] transition-colors" />
            <div className="flex flex-col items-start leading-none">
              <span className="font-serif text-xl tracking-tight text-white">
                BARE <span className="italic font-light text-[#FFC83D]">&</span> BE
              </span>
              <span className="font-['Pinyon_Script'] text-[#FFC83D] text-sm -mt-1 lowercase">Healing Edit</span>
            </div>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-8 text-[11px] uppercase tracking-[0.2em] font-medium text-white/60">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`hover:text-[#FFC83D] transition-colors cursor-pointer relative py-2 ${activeTab === tab ? 'text-[#FFC83D]' : ''
                  }`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 w-full h-px bg-[#FFC83D]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>

          <button
            onClick={onJoinClick}
            className="px-6 py-2.5 bg-[#FFC83D] text-[#1A1A1A] text-[10px] uppercase tracking-[0.2em] font-bold rounded-[3px] hover:bg-white transition-colors"
          >
            Join the Edit
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-white/80 hover:text-[#FFC83D] transition-colors p-2"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#1A1A1A] border-b border-white/5 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setIsMenuOpen(false);
                  }}
                  className={`text-left text-sm uppercase tracking-[0.2em] font-medium py-3 border-b border-white/5 ${activeTab === tab ? 'text-[#FFC83D]' : 'text-white/60'
                    }`}
                >
                  {tab}
                </button>
              ))}
              <button
                onClick={() => {
                  onJoinClick();
                  setIsMenuOpen(false);
                }}
                className="w-full py-4 bg-[#FFC83D] text-[#1A1A1A] text-[10px] uppercase tracking-[0.2em] font-bold rounded-[3px] hover:bg-white transition-colors mt-4"
              >
                Join the Edit
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
