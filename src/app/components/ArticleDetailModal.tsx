import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/ui/ImageWithFallback';
import { Article } from '@/lib/article-store';

interface ArticleDetailModalProps {
    article: Article | null;
    isOpen: boolean;
    onClose: () => void;
}

export function ArticleDetailModal({ article, isOpen, onClose }: ArticleDetailModalProps) {
    if (!article) return null;

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
                        className="fixed inset-0 bg-[#0A0A0A]/95 backdrop-blur-sm z-[100]"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed inset-0 m-auto w-full max-w-4xl h-fit max-h-[90vh] overflow-y-auto bg-[#1A1A1A] z-[101] rounded-2xl border border-white/5 shadow-2xl"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 text-white/60 hover:text-white z-10 transition-colors"
                        >
                            <X size={24} />
                        </button>

                        {/* Article Header Image */}
                        <div className="relative h-64 md:h-96 overflow-hidden rounded-t-2xl">
                            <ImageWithFallback
                                src={article.img}
                                alt={article.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent" />
                        </div>

                        {/* Article Content */}
                        <div className="p-8 md:p-12 space-y-6">
                            <div className="space-y-4">
                                <span className="text-[#FFC83D] text-[10px] uppercase tracking-[0.3em] font-bold">
                                    {article.category}
                                </span>
                                <h1 className="font-serif text-4xl md:text-5xl text-white leading-tight">
                                    {article.title}
                                </h1>
                                <p className="text-white/60 text-lg font-light italic">
                                    {article.excerpt}
                                </p>
                            </div>

                            <div className="h-px bg-white/10 my-8" />

                            <div className="prose prose-invert prose-lg max-w-none">
                                <div className="text-white/80 leading-relaxed whitespace-pre-wrap">
                                    {article.content || 'Article content coming soon...'}
                                </div>
                            </div>

                            <div className="h-px bg-white/10 my-8" />

                            <div className="flex items-center justify-between text-white/40 text-xs">
                                <span>Published: {new Date(article.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                                {article.updatedAt !== article.createdAt && (
                                    <span>Updated: {new Date(article.updatedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
