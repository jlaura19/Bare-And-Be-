
import { ImageWithFallback } from '@/app/components/ui/ImageWithFallback';
import aboutHostImage from '@/assets/about-host.jpg';

export function AboutView() {
  return (
    <section className="pt-32 pb-40 px-6 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative order-2 lg:order-1 group">
            <div className="aspect-[4/5] overflow-hidden rounded-[4px] border border-white/10 shadow-2xl bg-zinc-900">
              <ImageWithFallback
                src={aboutHostImage}
                alt="Juliet Lauranne - Host"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 hidden md:block">
              <span className="font-['Pinyon_Script'] text-[#FFC83D] text-6xl opacity-40">Juliet Lauranne</span>
            </div>
          </div>

          <div className="space-y-12 order-1 lg:order-2">
            <div className="space-y-4">
              <h2 className="text-[#FFC83D] font-bold uppercase tracking-[0.4em] text-xs">Our Genesis</h2>
              <h3 className="font-serif text-5xl md:text-7xl text-white leading-tight">
                Why We <br /> <span className="text-[#FFC83D]">Started.</span>
              </h3>
            </div>

            <div className="space-y-6 text-white/60 font-light leading-loose text-lg">
              <p>
                Bare & Be was born from a simple observation: our culture celebrates the arrival, but rarely the process of unbecoming the versions of ourselves that no longer serve us.
              </p>
              <p>
                As a host, I wanted to create a sanctuary where the "healing journey" wasn't just a buzzword, but a lived, editorial experience. We combine the depth of psychological research with the aesthetic of high-end mindful living.
              </p>
              <p>
                Every episode is a letter to your future self. A reminder that you are not broken—you are under construction.
              </p>
            </div>

            <div className="pt-8">
              <p className="font-serif text-white text-xl mb-4 italic italic text-white/80">With gratitude,</p>
              <span className="font-['Pinyon_Script'] text-[#FFC83D] text-5xl">Juliet Lauranne</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
