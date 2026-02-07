import { useState, useEffect } from 'react';
import { ImageWithFallback } from '@/app/components/ui/ImageWithFallback';
import { Book, ArrowRight } from 'lucide-react';
import { articleStore, Article } from '@/lib/article-store';
import { ArticleDetailModal } from '@/app/components/ArticleDetailModal';

export function ArticlesView({ onJoinClick: _onJoinClick }: { onJoinClick: () => void }) {
  const [articles, setArticles] = useState<any[]>([]);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const data = articleStore.getArticles();
    setArticles(data);
  }, []);

  const handleArticleClick = (article: Article) => {
    setSelectedArticle(article);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedArticle(null), 300); // Clear after animation
  };

  return (
    <>
      <section className="pt-32 pb-40 px-6 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-20">
            <div className="lg:col-span-8 space-y-20">
              <div className="space-y-4">
                <h2 className="font-serif text-5xl md:text-7xl text-white">The Edit</h2>
                <p className="font-['Pinyon_Script'] text-[#FFC83D] text-3xl">Curated thoughts & literature</p>
              </div>

              <div className="grid gap-16">
                {articles.map((article) => (
                  <div key={article.id} className="group grid md:grid-cols-2 gap-10 items-center cursor-pointer" onClick={() => handleArticleClick(article)}>
                    <div className="aspect-video overflow-hidden rounded-[4px] border border-white/5">
                      <ImageWithFallback
                        src={article.img}
                        alt={article.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                      />
                    </div>
                    <div className="space-y-4">
                      <span className="text-[#FFC83D] text-[10px] uppercase tracking-[0.3em] font-bold">{article.category}</span>
                      <h3 className="font-serif text-3xl text-white group-hover:text-[#FFC83D] transition-colors">{article.title}</h3>
                      <p className="text-white/40 font-light leading-relaxed">{article.excerpt}</p>
                      <button className="flex items-center gap-3 text-white text-[10px] uppercase tracking-widest font-bold border-b border-white/20 pb-1 group-hover:border-[#FFC83D] group-hover:text-[#FFC83D] transition-all">
                        Read Full Edit <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <aside className="lg:col-span-4">
              <div className="sticky top-32 border-2 border-[#FFC83D]/30 p-10 rounded-[4px] bg-black/20">
                <div className="flex items-center gap-3 text-[#FFC83D] mb-8">
                  <Book size={20} />
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold">The Healing Library</span>
                </div>

                <div className="space-y-10">
                  <div className="group cursor-pointer">
                    <div className="aspect-[3/4] overflow-hidden rounded-[4px] mb-6 bg-white/5">
                      <ImageWithFallback
                        src="https://images.unsplash.com/photo-1656055449458-b5da9d3bb8b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg"
                        alt="Book Cover"
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                    <h4 className="font-serif text-xl text-white mb-2">The Architecture of Stillness</h4>
                    <p className="text-white/40 text-[12px] uppercase tracking-widest mb-4">by JULIET LAURANNE</p>
                    <button className="w-full py-4 bg-[#FFC83D] text-[#1A1A1A] text-[10px] uppercase tracking-widest font-bold rounded-[4px] hover:bg-white transition-colors">
                      Shop Recommendation
                    </button>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <ArticleDetailModal
        article={selectedArticle}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}
