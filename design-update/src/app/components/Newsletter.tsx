import React from 'react';

export function Newsletter() {
  return (
    <section className="py-24 px-6 bg-[#9AAB94]/10">
      <div className="max-w-4xl mx-auto text-center space-y-10">
        <div className="space-y-4">
          <h2 className="font-serif text-3xl md:text-5xl text-[#2D2D2D]">Join the Sunday Edit</h2>
          <p className="text-[#717171] font-light text-lg">
            Weekly reflections, episode highlights, and curated tools for your healing journey.
          </p>
        </div>

        <form className="max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-6 py-4 bg-[#FFFFFF] border border-[#717171]/20 rounded-full text-[#2D2D2D] text-sm focus:outline-none focus:border-[#9AAB94] transition-colors"
            />
            <button className="px-8 py-4 bg-[#2D2D2D] text-[#FDFCF8] rounded-full text-[12px] font-medium tracking-widest uppercase hover:bg-[#9AAB94] transition-all duration-300 whitespace-nowrap">
              Subscribe
            </button>
          </div>
          <p className="text-[11px] text-[#717171] mt-4 italic font-light">
            Respecting your inbox. Unsubscribe at any time.
          </p>
        </form>
      </div>
    </section>
  );
}
