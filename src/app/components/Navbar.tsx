import { useState } from 'react';
import { Menu, X } from 'lucide-react';
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
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#1A1A1A]/90 backdrop-blur-md border-b border-white/5 px-6 py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex-1 flex items-center gap-8">
          <button onClick={() => setActiveTab('home')} className="cursor-pointer flex items-center gap-3">
            <img src={podcastLogo} alt="Bare & Be" className="w-12 h-12 rounded-full object-cover border-2 border-[#FFC83D]/30" />
            <h1 className="font-serif text-xl tracking-tight text-white flex flex-col leading-none">
              <span className="text-[22px]">BARE <span className="italic font-light text-[#FFC83D]">&</span> BE</span>
              <span className="font-['Pinyon_Script'] text-[#FFC83D] text-lg -mt-1 lowercase">Healing Edit</span>
            </h1>
          </button>
        </div>

        <div className="hidden lg:flex items-center gap-12 text-[11px] uppercase tracking-[0.2em] font-medium text-white/60">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`hover:text-[#FFC83D] transition-all cursor-pointer relative py-2 ${activeTab === tab ? 'text-[#FFC83D]' : ''
                }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute bottom-0 left-0 w-full h-px bg-[#FFC83D]" />
              )}
            </button>
          ))}

          <button
            onClick={onJoinClick}
            className="px-5 py-2 bg-[#FFC83D] text-[#1A1A1A] text-[9px] uppercase tracking-[0.25em] font-bold rounded-[3px] hover:bg-white transition-all"
          >
            Join the Edit
          </button>
        </div>

        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-white">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
}
