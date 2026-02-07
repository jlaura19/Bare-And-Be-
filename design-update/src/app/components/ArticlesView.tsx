import React from 'react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { Book, ArrowRight } from 'lucide-react';

const articles = [
  {
    id: 1,
    title: "The Silent Language of Space",
    excerpt: "Exploring how our physical environment dictates our internal peace and the neurobiology of minimalism.",
    category: "LIFESTYLE",
    img: "https://images.unsplash.com/photo-1594359640393-160e1cfeef0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZGFyayUyMG9mZmljZSUyMGRlc2slMjBwb2RjYXN0JTIwbWljfGVufDF8fHx8MTc2OTgwMTQxN3ww"
  },
  {
    id: 2,
    title: "Neuroplasticity & Forgiveness",
    excerpt: "Why letting go is a physical act of brain restructuring, and how to start the process today.",
    category: "PSYCHOLOGY",
    img: "https://images.unsplash.com/photo-1643324896137-f0928e76202a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdvbGQlMjBhbmQlMjBibGFjayUyMHRleHR1cmUlMjBlZGl0b3JpYWx8ZW58MXx8fHwxNzY5ODAxNDE3fDA"
  }
];

export function ArticlesView({ onJoinClick }: { onJoinClick: () => void }) {
  return (
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
                <div key={article.id} className="group grid md:grid-cols-2 gap-10 items-center">
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
                      src="https://images.unsplash.com/photo-1656055449458-b5da9d3bb8b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXN0aGV0aWMlMjBibGFjayUyMGJvb2slMjBjb3ZlciUyMGdvbGQlMjBmb2lsfGVufDF8fHx8MTc2OTgwMTQxN3ww"
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

                <div className="pt-10 border-t border-white/5 space-y-6">
                  <div className="space-y-2">
                    <h4 className="font-serif text-xl text-white">Join the Edit</h4>
                    <p className="text-white/40 text-sm leading-relaxed">Get the weekly newsletter and early access to all new edits.</p>
                  </div>
                  <button 
                    onClick={onJoinClick}
                    className="w-full py-4 border border-[#FFC83D] text-[#FFC83D] text-[10px] uppercase tracking-widest font-bold rounded-[4px] hover:bg-[#FFC83D] hover:text-[#1A1A1A] transition-all"
                  >
                    Subscribe Now
                  </button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
