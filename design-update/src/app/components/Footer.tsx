import React from 'react';
import { Instagram, Twitter, Youtube, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="pt-20 pb-12 px-6 bg-[#FDFCF8] border-t border-[#717171]/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2 space-y-6">
            <h2 className="font-serif text-3xl tracking-tight text-[#2D2D2D]">
              Bare <span className="italic font-light text-[#9AAB94]">&</span> Be
            </h2>
            <p className="text-[#717171] font-light leading-relaxed max-w-xs">
              A dedicated space for the curious heart and the mindful soul. Exploring wellness through an editorial lens.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-[#717171] hover:text-[#9AAB94] transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-[#717171] hover:text-[#9AAB94] transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-[#717171] hover:text-[#9AAB94] transition-colors"><Youtube size={20} /></a>
              <a href="#" className="text-[#717171] hover:text-[#9AAB94] transition-colors"><Mail size={20} /></a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#2D2D2D]">Explore</h4>
            <ul className="space-y-4 text-[14px] text-[#717171] font-light">
              <li><a href="#" className="hover:text-[#9AAB94] transition-colors">Latest Episodes</a></li>
              <li><a href="#" className="hover:text-[#9AAB94] transition-colors">Journal Archive</a></li>
              <li><a href="#" className="hover:text-[#9AAB94] transition-colors">Podcast Platforms</a></li>
              <li><a href="#" className="hover:text-[#9AAB94] transition-colors">Shop Recommendations</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#2D2D2D]">Support</h4>
            <ul className="space-y-4 text-[14px] text-[#717171] font-light">
              <li><a href="#" className="hover:text-[#9AAB94] transition-colors">About the Brand</a></li>
              <li><a href="#" className="hover:text-[#9AAB94] transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-[#9AAB94] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#9AAB94] transition-colors">Sponsorships</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-[#717171]/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[12px] text-[#717171] font-light">
            © 2026 Bare & Be. Created with intention.
          </p>
          <div className="flex items-center gap-8 text-[12px] text-[#717171] font-light">
            <span>Powered by Presence</span>
            <span>Crafted for Healing</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
