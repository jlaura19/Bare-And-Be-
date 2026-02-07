import { useState } from 'react';
import { Lock, LogOut } from 'lucide-react';
import podcastLogo from '@/assets/podcast-logo.jpg';

const ADMIN_PASSWORD = 'bareandbe2026'; // Change this to a secure password

interface AdminLayoutProps {
    children: React.ReactNode;
}

export function AdminLayout({ children }: AdminLayoutProps) {
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        return sessionStorage.getItem('admin_authenticated') === 'true';
    });
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        if (password === ADMIN_PASSWORD) {
            setIsAuthenticated(true);
            sessionStorage.setItem('admin_authenticated', 'true');
            setError('');
        } else {
            setError('Invalid password');
            setPassword('');
        }
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        sessionStorage.removeItem('admin_authenticated');
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-[#1A1A1A] flex items-center justify-center px-6">
                <div className="w-full max-w-md">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-10 space-y-8">
                        <div className="text-center space-y-4">
                            <div className="w-16 h-16 bg-[#FFC83D]/10 border border-[#FFC83D] rounded-full flex items-center justify-center mx-auto">
                                <Lock className="text-[#FFC83D]" size={32} />
                            </div>
                            <h1 className="font-serif text-3xl text-white">Admin Access</h1>
                            <p className="text-white/60 text-sm">Enter password to continue</p>
                        </div>

                        <form onSubmit={handleLogin} className="space-y-6">
                            <div>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Password"
                                    className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-[#FFC83D] transition-colors placeholder:text-white/20"
                                    autoFocus
                                />
                                {error && (
                                    <p className="text-red-400 text-xs mt-2">{error}</p>
                                )}
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#FFC83D] text-[#1A1A1A] py-4 text-[10px] uppercase tracking-[0.3em] font-bold rounded-[4px] hover:bg-white transition-all"
                            >
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#1A1A1A]">
            {/* Admin Header */}
            <header className="bg-[#0D0D0D] border-b border-white/5 px-6 py-4">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <img src={podcastLogo} alt="Bare & Be Podcast" className="w-14 h-14 rounded-full object-cover border-2 border-[#FFC83D]/30" />
                        <div>
                            <h1 className="font-serif text-2xl text-white">Admin Dashboard</h1>
                            <p className="text-white/40 text-xs uppercase tracking-widest">Bare & Be Healing Edit</p>
                        </div>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-2 px-4 py-2 text-white/60 hover:text-white text-xs uppercase tracking-widest transition-colors"
                    >
                        <LogOut size={16} />
                        Logout
                    </button>
                </div>
            </header>

            {/* Admin Content */}
            <main className="max-w-7xl mx-auto px-6 py-10">
                {children}
            </main>
        </div>
    );
}
