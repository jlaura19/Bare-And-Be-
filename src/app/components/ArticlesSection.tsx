
import { ImageWithFallback } from '@/app/components/ui/ImageWithFallback';
import { ArrowRight, BookOpen } from 'lucide-react';

const articles = [
  {
    id: 1,
    title: "Morning Rituals for Mental Clarity",
    excerpt: "Discover the simple practices that can transform your outlook before the day even begins...",
    date: "Jan 12, 2026"
  },
  {
    id: 2,
    title: "The Japanese Art of Ma",
    excerpt: "Exploring the concept of 'the space between' and why emptiness is essential for creativity...",
    date: "Jan 05, 2026"
  },
  {
    id: 3,
    title: "Seasonal Eating in Winter",
    excerpt: "Nourishing your body with root vegetables and warming spices as the temperature drops...",
    date: "Dec 28, 2025"
  }
];

export function ArticlesSection() {
  return (
    <section className="py-20 px-6 bg-[#FDFCF8]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Recent Articles */}
          <div className="lg:col-span-8 space-y-12">
            <div className="space-y-4">
              <h2 className="font-serif text-3xl md:text-4xl text-[#2D2D2D]">Journal & Reflections</h2>
              <div className="h-px w-20 bg-[#9AAB94]" />
            </div>

            <div className="space-y-10">
              {articles.map((article) => (
                <article key={article.id} className="group border-b border-[#717171]/10 pb-10">
                  <span className="text-[12px] text-[#9AAB94] uppercase tracking-widest mb-3 block">{article.date}</span>
                  <h3 className="font-serif text-2xl md:text-3xl text-[#2D2D2D] mb-4 hover:text-[#9AAB94] transition-colors cursor-pointer">
                    {article.title}
                  </h3>
                  <p className="text-[#717171] font-light leading-relaxed mb-6 max-w-2xl">
                    {article.excerpt}
                  </p>
                  <button className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-widest text-[#2D2D2D] hover:gap-4 transition-all">
                    Read Article <ArrowRight size={14} />
                  </button>
                </article>
              ))}
            </div>
          </div>

          {/* Book Recommendation Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 bg-[#FFFFFF] border border-[#717171]/10 p-8 rounded-xl">
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-[#9AAB94] font-semibold mb-6">
                <BookOpen size={14} />
                <span>The Healing Library</span>
              </div>

              <div className="aspect-[3/4] overflow-hidden rounded-lg mb-6 bg-[#FDFCF8]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1766250533363-01b974b2ba32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXN0aGV0aWMlMjBib29rJTIwb24lMjB0YWJsZSUyMGNyZWFtfGVufDF8fHx8MTc2OTgwMDk3M3ww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Book Cover"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-4">
                <h4 className="font-serif text-2xl text-[#2D2D2D]">The Art of Stillness</h4>
                <p className="text-[13px] text-[#717171] font-light italic">by Pico Iyer</p>
                <p className="text-sm text-[#717171] leading-relaxed">
                  A beautiful exploration of why we need to step back from the rush of modern life.
                </p>
                <a href="#" className="block w-full text-center py-4 border border-[#2D2D2D] rounded-full text-[12px] font-medium tracking-widest uppercase hover:bg-[#2D2D2D] hover:text-[#FDFCF8] transition-all duration-300">
                  Shop Recommendation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
