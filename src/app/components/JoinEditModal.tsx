import React, { useState } from 'react';
import { X, Check, Mail, Sparkles, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ImageWithFallback } from '@/app/components/ui/ImageWithFallback';
import logoImg from '@/assets/host-image.png';

interface JoinEditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function JoinEditModal({ isOpen, onClose }: JoinEditModalProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        onClose();
        setIsSuccess(false);
        setEmail('');
      }, 3000);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-xl"
          />

          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-4xl bg-[#1A1A1A] border border-white/10 overflow-hidden rounded-2xl shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-20 text-white/40 hover:text-white transition-colors p-2"
            >
              <X size={24} />
            </button>

            <div className="grid md:grid-cols-2">
              <div className="relative hidden md:block h-full min-h-[500px]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1594359640393-160e1cfeef0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg"
                  alt="Minimalist Desktop"
                  className="w-full h-full object-cover grayscale opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent" />
                <div className="absolute bottom-12 left-12 right-12 space-y-4">
                  <div className="w-16 h-16 rounded-full border border-[#FFC83D] p-1">
                    <ImageWithFallback src={logoImg} alt="Logo" className="w-full h-full object-cover rounded-full" />
                  </div>
                  <h3 className="font-serif text-3xl text-white">The Weekly <br /><span className="text-[#FFC83D] italic">Reflections.</span></h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    A curated collection of psychological insights, mindfulness practices, and behind-the-scenes stories from the Healing Edit.
                  </p>
                </div>
              </div>

              <div className="p-10 md:p-16 flex flex-col justify-center space-y-8">
                {isSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center space-y-6"
                  >
                    <div className="w-20 h-20 bg-[#FFC83D]/10 border border-[#FFC83D] rounded-full flex items-center justify-center mx-auto">
                      <Check className="text-[#FFC83D]" size={32} />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-serif text-3xl text-white">Welcome to the Edit</h4>
                      <p className="text-white/60 text-sm">Your first reflection will arrive in your inbox shortly.</p>
                    </div>
                  </motion.div>
                ) : (
                  <>
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-[#FFC83D]">
                        <Sparkles size={16} />
                        <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Community</span>
                      </div>
                      <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight">Join the <br /><span className="italic font-light">Edit.</span></h2>
                      <p className="text-white/60 text-sm leading-relaxed font-light">
                        Subscribe to receive exclusive episode notes, early access to new seasons, and our weekly Sunday newsletter designed for your healing journey.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="relative">
                        <Mail className="absolute left-0 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Your email address"
                          className="w-full bg-transparent border-b border-white/10 py-4 pl-8 text-white focus:outline-none focus:border-[#FFC83D] transition-colors placeholder:text-white/20 text-sm"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[#FFC83D] text-[#1A1A1A] py-5 text-[10px] uppercase tracking-[0.3em] font-bold rounded-[4px] hover:bg-white transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                            className="w-4 h-4 border-2 border-[#1A1A1A] border-t-transparent rounded-full"
                          />
                        ) : (
                          <>
                            Become a Member
                            <ArrowRight size={14} />
                          </>
                        )}
                      </button>
                    </form>

                    <p className="text-[10px] text-white/20 uppercase tracking-widest text-center">
                      Respecting your space. No spam, ever.
                    </p>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
