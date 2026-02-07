import React, { useState } from 'react';
import { Navbar } from '@/app/components/Navbar';
import { HomeView } from '@/app/components/HomeView';
import { EpisodesView } from '@/app/components/EpisodesView';
import { ArticlesView } from '@/app/components/ArticlesView';
import { AboutView } from '@/app/components/AboutView';
import { AudioPlayer } from '@/app/components/AudioPlayer';
import { JoinEditModal } from '@/app/components/JoinEditModal';
import { SeasonOverview } from '@/app/components/SeasonOverview';
import '@/styles/fonts.css';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [isSeasonOverviewOpen, setIsSeasonOverviewOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomeView 
          onJoinClick={() => setIsJoinModalOpen(true)} 
          onOverviewClick={() => setIsSeasonOverviewOpen(true)}
        />;
      case 'episodes':
        return <EpisodesView />;
      case 'articles':
        return <ArticlesView onJoinClick={() => setIsJoinModalOpen(true)} />;
      case 'about':
        return <AboutView />;
      default:
        return <HomeView onJoinClick={() => setIsJoinModalOpen(true)} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#1A1A1A] font-sans selection:bg-[#FFC83D] selection:text-[#1A1A1A] text-white">
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onJoinClick={() => setIsJoinModalOpen(true)} 
      />
      
      <main className="transition-all duration-500 ease-in-out">
        {renderContent()}
      </main>

      {/* Shared Footer for all "pages" */}
      <footer className="py-20 px-6 border-t border-white/5 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-center md:text-left">
            <h2 className="font-serif text-2xl tracking-tight text-white flex flex-col leading-none">
              <span className="text-[24px]">BARE <span className="italic font-light text-[#FFC83D]">&</span> BE</span>
              <span className="font-['Pinyon_Script'] text-[#FFC83D] text-xl -mt-1 lowercase">Healing Edit</span>
            </h2>
          </div>
          
          <div className="flex flex-col items-center gap-6">
            <div className="flex gap-12 text-[10px] uppercase tracking-widest font-bold text-white/40">
              <a 
                href="https://open.spotify.com/show/72yL8tGQk1vsTNh3br8AW0?si=eFb3nFCwSnuHzA_jh0471A" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-[#FFC83D] transition-colors"
              >
                Spotify
              </a>
              <a 
                href="https://youtube.com/@bareandbecomingpodcast?si=S4RGqNFapIUbuWyh" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-[#FFC83D] transition-colors"
              >
                YouTube
              </a>
              <a 
                href="https://www.instagram.com/bareandbepod?igsh=dTB5b3J1MnYwb2c4" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-[#FFC83D] transition-colors"
              >
                Instagram
              </a>
            </div>
            <button 
              onClick={() => setIsJoinModalOpen(true)}
              className="text-[#FFC83D] text-[10px] uppercase tracking-[0.4em] font-bold border-b border-[#FFC83D]/20 pb-1 hover:border-[#FFC83D] transition-all"
            >
              Join the community
            </button>
          </div>

          <p className="text-white/20 text-[10px] uppercase tracking-[0.3em]">© 2026 THE HEALING EDIT</p>
        </div>
      </footer>

      <AudioPlayer />
      <JoinEditModal isOpen={isJoinModalOpen} onClose={() => setIsJoinModalOpen(false)} />
      <SeasonOverview isOpen={isSeasonOverviewOpen} onClose={() => setIsSeasonOverviewOpen(false)} />
    </div>
  );
}
