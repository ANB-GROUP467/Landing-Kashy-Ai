import { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, CheckCircle2, MessageCircle, Send, Twitter } from 'lucide-react';
import { sfx } from '../utils/sound';

interface CtaCommunityBannerProps {
  onOpenSignUp: () => void;
}

export default function CtaCommunityBanner({ onOpenSignUp }: CtaCommunityBannerProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    sfx.playLevelUp();
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail('');
    }, 3500);
  };

  return (
    <section
      id="community-cta"
      aria-label="Join the Revolution"
      className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24"
    >
      <div className="relative rounded-3xl bg-gradient-to-b from-[#141b14] to-[#0c100d] border border-[#9ae600]/40 p-8 sm:p-14 lg:p-16 overflow-hidden shadow-2xl shadow-black">
        {/* Background Radial Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#9ae600]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#84cc16]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 border border-[#9ae600]/50 text-[#a3e635] text-xs font-sans font-bold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SEASON 4 WHITELIST IS LIVE</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight font-display leading-tight">
            Ready to Join the Revolution?
          </h2>

          <p className="mt-4 text-base sm:text-lg text-neutral-300 max-w-xl leading-relaxed">
            Step into the next era of high-frequency AI payments, zero-gas decentralized routing, and gamified yield multipliers.
          </p>

          {/* Subscription or Get Started Form */}
          <div className="mt-8 w-full max-w-md">
            {subscribed ? (
              <div className="p-4 rounded-2xl bg-[#182615] border border-[#9ae600]/60 text-white flex items-center justify-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#9ae600]" />
                <span className="text-sm font-bold font-sans">You're on the VIP Alpha List!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Enter your email for 500 XP..."
                  className="flex-1 px-5 py-3 rounded-full bg-black/70 border border-neutral-700/80 focus:border-[#9ae600] focus:ring-1 focus:ring-[#9ae600] text-sm text-white placeholder-neutral-500 outline-none transition-all"
                />
                <button
                  type="submit"
                  className="px-8 py-3 rounded-full bg-[#9ae600] hover:bg-[#aaff00] active:scale-95 text-black font-extrabold text-xs uppercase tracking-wider transition-all shadow-lg shadow-[#9ae600]/25 shrink-0 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Claim 500 XP</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

          {/* Community Badges */}
          <div className="mt-10 pt-8 border-t border-neutral-800/80 w-full flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-sans text-neutral-400">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 border border-neutral-800">
              <MessageCircle className="w-4 h-4 text-[#5865F2]" />
              <span className="text-neutral-200 font-bold">Discord</span>
              <span>42,800+ Members</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 border border-neutral-800">
              <Send className="w-4 h-4 text-[#229ED9]" />
              <span className="text-neutral-200 font-bold">Telegram</span>
              <span>18,500+ Traders</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 border border-neutral-800">
              <Twitter className="w-4 h-4 text-[#1DA1F2]" />
              <span className="text-neutral-200 font-bold">X / Twitter</span>
              <span>86,200+ Followers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
