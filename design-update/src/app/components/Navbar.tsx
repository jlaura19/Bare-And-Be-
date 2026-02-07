import React from 'react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onJoinClick: () => void;
}

export function Navbar({ activeTab, setActiveTab, onJoinClick }: NavbarProps) {
  const tabs = ['home', 'episodes', 'articles', 'about'];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#1A1A1A]/90 backdrop-blur-md border-b border-white/5 px-6 py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex-1 flex items-center gap-8">
          <button onClick={() => setActiveTab('home')} className="cursor-pointer">
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
              className={`hover:text-[#FFC83D] transition-all cursor-pointer relative py-2 ${
                activeTab === tab ? 'text-[#FFC83D]' : ''
              }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute bottom-0 left-0 w-full h-px bg-[#FFC83D]" />
              )}
            </button>
          ))}
        </div>

        <div className="flex-1 flex justify-end">
          <button 
            onClick={onJoinClick}
            className="px-6 py-2 border border-[#FFC83D] text-[#FFC83D] text-[10px] uppercase tracking-widest font-bold hover:bg-[#FFC83D] hover:text-[#1A1A1A] transition-all duration-300"
          >
            Join the Edit
          </button>
        </div>
      </div>
    </nav>
  );
}
