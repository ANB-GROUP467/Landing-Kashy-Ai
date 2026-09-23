import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, Mail, MessageSquare, CheckCircle2, Sparkles } from 'lucide-react';
import { sfx } from '../utils/sound';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('Partnership');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    sfx.playLevelUp();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName('');
      setEmail('');
      setMessage('');
      onClose();
    }, 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            className="relative w-full max-w-lg rounded-3xl bg-[#121513] border border-neutral-700/80 p-6 sm:p-8 shadow-2xl shadow-black overflow-hidden"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => {
                sfx.playClick();
                onClose();
              }}
              className="absolute top-5 right-5 p-2 rounded-full bg-neutral-800/80 hover:bg-neutral-700 text-neutral-300 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="py-12 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-[#9ae600]/20 text-[#9ae600] flex items-center justify-center mb-4 border border-[#9ae600]/40">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white font-display">Transmission Received!</h3>
                <p className="mt-2 text-sm text-neutral-400 max-w-xs">
                  A Kashy Core specialist will dispatch a reply to your inbox within 2 hours.
                </p>
              </div>
            ) : (
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#182615] border border-[#a3e635]/30 text-[#a3e635] text-[11px] font-sans font-semibold mb-3">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>24/7 PROTOCOL SUPPORT</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white font-display">
                  Connect with Kashy
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-neutral-400 mb-6">
                  Have a question about yield vaults, institutional integration, or developer APIs?
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-sans font-semibold text-neutral-300 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={e => setName(e.target.value)}
                      placeholder="e.g. Satoshi Nakamoto"
                      className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-neutral-700/80 focus:border-[#9ae600] focus:ring-1 focus:ring-[#9ae600] text-sm text-white placeholder-neutral-500 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-sans font-semibold text-neutral-300 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="you@domain.xyz"
                      className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-neutral-700/80 focus:border-[#9ae600] focus:ring-1 focus:ring-[#9ae600] text-sm text-white placeholder-neutral-500 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-sans font-semibold text-neutral-300 mb-1">
                      Inquiry Subject
                    </label>
                    <select
                      value={topic}
                      onChange={e => setTopic(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-neutral-700/80 focus:border-[#9ae600] text-sm text-white outline-none cursor-pointer"
                    >
                      <option value="Partnership">Ecosystem & Institutional Partnerships</option>
                      <option value="Vaults">Yield Vaults & APY Staking</option>
                      <option value="APIs">Developer Zero-Gas APIs</option>
                      <option value="Support">Account & Security Support</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-sans font-semibold text-neutral-300 mb-1">
                      Message
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                      placeholder="Detail your request or proposal..."
                      className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-neutral-700/80 focus:border-[#9ae600] focus:ring-1 focus:ring-[#9ae600] text-sm text-white placeholder-neutral-500 outline-none transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-full bg-[#9ae600] hover:bg-[#aaff00] active:scale-98 text-black font-extrabold text-xs uppercase tracking-wider transition-all shadow-lg shadow-[#9ae600]/25 flex items-center justify-center gap-2 cursor-pointer mt-2"
                  >
                    <span>Send Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
