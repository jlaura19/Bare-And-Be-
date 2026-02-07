import { Play, Pause, SkipBack, SkipForward, Volume2 } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

interface Episode {
  id: number;
  title: string;
  audioUrl: string;
  imageUrl?: string;
  img?: string;
}

interface AudioPlayerProps {
  episode: Episode | null;
  onNext?: () => void;
  onPrevious?: () => void;
}

export function AudioPlayer({ episode, onNext, onPrevious }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);

  useEffect(() => {
    if (episode && audioRef.current) {
      audioRef.current.src = episode.audioUrl;
      audioRef.current.load();
      if (isPlaying) {
        audioRef.current.play();
      }
    }
  }, [episode]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => {
      setIsPlaying(false);
      if (onNext) onNext();
    };

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [onNext]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    setCurrentTime(time);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const vol = parseFloat(e.target.value);
    setVolume(vol);
    if (audioRef.current) {
      audioRef.current.volume = vol;
    }
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  if (!episode) return null;

  const coverImage = episode.imageUrl || episode.img || '';

  return (
    <>
      <audio ref={audioRef} />
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl z-[100]">
        <div className="bg-[#0A0A0A]/95 backdrop-blur-xl border border-[#FFC83D]/30 rounded-2xl px-6 py-4 flex items-center justify-between shadow-2xl shadow-black">
          <div className="flex items-center gap-4 w-1/3">
            <div className="w-14 h-14 bg-[#FFC83D] rounded-lg flex-shrink-0 overflow-hidden">
              {coverImage ? (
                <img src={coverImage} alt={episode.title} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <Play size={20} fill="#1A1A1A" stroke="#1A1A1A" />
                </div>
              )}
            </div>
            <div className="hidden sm:block overflow-hidden">
              <h4 className="text-white text-sm font-medium truncate">{episode.title}</h4>
              <p className="text-[#FFC83D] text-[10px] uppercase tracking-widest font-medium">
                Playing Now • EP {episode.id}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-2 w-1/3">
            <div className="flex items-center gap-6">
              <button
                onClick={onPrevious}
                disabled={!onPrevious}
                className="text-white/60 hover:text-[#FFC83D] transition-colors disabled:opacity-30"
              >
                <SkipBack size={20} />
              </button>
              <button
                onClick={togglePlay}
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-105 transition-transform"
              >
                {isPlaying ? (
                  <Pause size={20} fill="#1A1A1A" />
                ) : (
                  <Play size={20} fill="#1A1A1A" className="ml-1" />
                )}
              </button>
              <button
                onClick={onNext}
                disabled={!onNext}
                className="text-white/60 hover:text-[#FFC83D] transition-colors disabled:opacity-30"
              >
                <SkipForward size={20} />
              </button>
            </div>
            <div className="w-full max-w-md flex items-center gap-2">
              <span className="text-white/40 text-xs">{formatTime(currentTime)}</span>
              <input
                type="range"
                min="0"
                max={duration || 0}
                value={currentTime}
                onChange={handleSeek}
                className="flex-1 h-1 bg-white/10 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#FFC83D]"
              />
              <span className="text-white/40 text-xs">{formatTime(duration)}</span>
            </div>
          </div>

          <div className="flex items-center justify-end gap-4 w-1/3 text-white/60">
            <div className="hidden md:flex items-center gap-2">
              <Volume2 size={20} />
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
                className="w-20 h-1 bg-white/10 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-2 [&::-webkit-slider-thumb]:h-2 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
