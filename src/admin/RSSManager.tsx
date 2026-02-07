import { useState, useEffect } from 'react';
import { RefreshCw, CheckCircle, AlertCircle, Radio } from 'lucide-react';
import { episodeStore } from '@/lib/episode-store';
import { Episode } from '@/lib/rss-parser';

export function RSSManager() {
    const [episodes, setEpisodes] = useState<Episode[]>([]);
    const [loading, setLoading] = useState(false);
    const [lastSync, setLastSync] = useState<string>('');
    const [error, setError] = useState<string>('');

    useEffect(() => {
        loadEpisodes();
    }, []);

    const loadEpisodes = async () => {
        try {
            setLoading(true);
            const data = await episodeStore.getEpisodes();
            setEpisodes(data);
            setLastSync(new Date().toLocaleString());
            setError('');
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to load episodes');
        } finally {
            setLoading(false);
        }
    };

    const handleSync = async () => {
        try {
            setLoading(true);
            setError('');
            const data = await episodeStore.refresh();
            setEpisodes(data);
            setLastSync(new Date().toLocaleString());
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to sync episodes');
        } finally {
            setLoading(false);
        }
    };

    const handleClearCache = () => {
        episodeStore.clearCache();
        setLastSync('');
        loadEpisodes();
    };

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="font-serif text-3xl text-white">RSS Feed Manager</h2>
                    <p className="text-white/60 text-sm mt-2">Manage podcast episodes from RSS feed</p>
                </div>
                <button
                    onClick={handleSync}
                    disabled={loading}
                    className="flex items-center gap-2 px-6 py-3 bg-[#FFC83D] text-[#1A1A1A] text-[10px] uppercase tracking-widest font-bold rounded-[4px] hover:bg-white transition-all disabled:opacity-50"
                >
                    <RefreshCw size={16} className={loading ? 'animate-spin' : ''} />
                    Sync Now
                </button>
            </div>

            {/* RSS Feed Info */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
                <div className="flex items-center gap-3">
                    <Radio className="text-[#FFC83D]" size={20} />
                    <h3 className="text-white font-bold uppercase tracking-widest text-xs">Feed Configuration</h3>
                </div>

                <div className="space-y-3">
                    <div>
                        <label className="text-white/40 text-xs uppercase tracking-widest block mb-1">RSS Feed URL</label>
                        <input
                            type="text"
                            value="https://anchor.fm/s/103676c00/podcast/rss"
                            readOnly
                            className="w-full bg-white/5 border border-white/10 rounded px-4 py-2 text-white text-sm"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="text-white/40 text-xs uppercase tracking-widest block mb-1">Total Episodes</label>
                            <p className="text-white text-2xl font-bold">{episodes.length}</p>
                        </div>
                        <div>
                            <label className="text-white/40 text-xs uppercase tracking-widest block mb-1">Last Synced</label>
                            <p className="text-white/60 text-sm">{lastSync || 'Never'}</p>
                        </div>
                    </div>
                </div>

                {error && (
                    <div className="flex items-center gap-2 p-4 bg-red-500/10 border border-red-500/20 rounded text-red-400 text-sm">
                        <AlertCircle size={16} />
                        {error}
                    </div>
                )}

                {!error && episodes.length > 0 && (
                    <div className="flex items-center gap-2 p-4 bg-green-500/10 border border-green-500/20 rounded text-green-400 text-sm">
                        <CheckCircle size={16} />
                        RSS feed synced successfully
                    </div>
                )}

                <button
                    onClick={handleClearCache}
                    className="text-white/40 hover:text-white text-xs uppercase tracking-widest transition-colors"
                >
                    Clear Cache
                </button>
            </div>

            {/* Episodes Preview */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Episodes Preview</h3>

                <div className="space-y-4 max-h-96 overflow-y-auto">
                    {loading ? (
                        <p className="text-white/40 text-center py-8">Loading episodes...</p>
                    ) : episodes.length === 0 ? (
                        <p className="text-white/40 text-center py-8">No episodes found. Click "Sync Now" to fetch episodes.</p>
                    ) : (
                        episodes.slice(0, 10).map((ep) => (
                            <div key={ep.id} className="flex items-start gap-4 p-4 bg-white/5 rounded-lg">
                                <div className="w-12 h-12 bg-[#FFC83D]/10 border border-[#FFC83D] rounded flex items-center justify-center shrink-0">
                                    <span className="text-[#FFC83D] font-bold text-sm">{ep.id}</span>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="text-white font-medium text-sm truncate">{ep.title}</h4>
                                    <div className="flex items-center gap-2 mt-1">
                                        <span className="text-[#FFC83D] text-xs">{ep.season}</span>
                                        <span className="text-white/20">•</span>
                                        <span className="text-white/40 text-xs">{ep.category}</span>
                                        <span className="text-white/20">•</span>
                                        <span className="text-white/40 text-xs">{(ep as any).date || ep.pubDate}</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}
