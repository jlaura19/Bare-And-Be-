import { useState } from 'react';
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
  const [currentEpisode, setCurrentEpisode] = useState<any | null>(null);

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomeView
          onJoinClick={() => setIsJoinModalOpen(true)}
          onOverviewClick={() => setIsSeasonOverviewOpen(true)}
          setActiveTab={setActiveTab}
          onPlayEpisode={setCurrentEpisode}
        />;
      case 'episodes':
        return <EpisodesView onPlayEpisode={setCurrentEpisode} />;
      case 'articles':
        return <ArticlesView onJoinClick={() => setIsJoinModalOpen(true)} />;
      case 'about':
        return <AboutView />;
      default:
        return <HomeView
          onJoinClick={() => setIsJoinModalOpen(true)}
          onOverviewClick={() => setIsSeasonOverviewOpen(true)}
          setActiveTab={setActiveTab}
          onPlayEpisode={setCurrentEpisode}
        />;
    }
  };

  return (
    <div className="min-h-screen bg-[#1A1A1A] font-sans selection:bg-[#FFC83D] selection:text-[#1A1A1A] text-white">
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onJoinClick={() => setIsJoinModalOpen(true)}
      />

      {renderContent()}

      {currentEpisode && <AudioPlayer episode={currentEpisode} />}

      <JoinEditModal
        isOpen={isJoinModalOpen}
        onClose={() => setIsJoinModalOpen(false)}
      />

      <SeasonOverview
        isOpen={isSeasonOverviewOpen}
        onClose={() => setIsSeasonOverviewOpen(false)}
        setActiveTab={setActiveTab}
      />

      {/* Footer */}
      <footer className="bg-[#0D0D0D] border-t border-white/5 px-6 py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h3 className="font-serif text-2xl text-white">BARE & BE</h3>
            <p className="text-white/40 text-sm leading-relaxed">
              A podcast exploring the intersection of healing, growth, and authentic living.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-white/60 text-xs uppercase tracking-widest font-bold">Quick Links</h4>
            <div className="flex flex-col gap-2 text-white/40 text-sm">
              <button onClick={() => setActiveTab('episodes')} className="text-left hover:text-[#FFC83D] transition-colors">Episodes</button>
              <button onClick={() => setActiveTab('articles')} className="text-left hover:text-[#FFC83D] transition-colors">Articles</button>
              <button onClick={() => setActiveTab('about')} className="text-left hover:text-[#FFC83D] transition-colors">About</button>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-white/60 text-xs uppercase tracking-widest font-bold">Connect</h4>
            <div className="flex gap-4">
              <a href="https://open.spotify.com/show/yourshow" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#FFC83D] transition-colors">
                Spotify
              </a>
              <a href="https://youtube.com/@yourchannel" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#FFC83D] transition-colors">
                YouTube
              </a>
              <a href="https://instagram.com/yourhandle" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#FFC83D] transition-colors">
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 text-center text-white/40 text-xs">
          <p>© 2026 Bare & Be Podcast. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
