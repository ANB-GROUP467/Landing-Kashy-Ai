import { useState } from 'react';
import { X, Sparkles, Check, ArrowRight, ShieldCheck, Mail, KeyRound, Wallet, Trophy } from 'lucide-react';
import { sfx } from '../utils/sound';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToSignUp?: () => void;
  onSwitchToSignIn?: () => void;
}

// 1. SIGN IN MODAL
export function SignInModal({ isOpen, onClose, onSwitchToSignUp }: ModalProps) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    sfx.playLevelUp();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full max-w-md rounded-3xl bg-[#0f1410] border border-neutral-800 p-6 sm:p-8 shadow-2xl z-10">
        <button
          type="button"
          onClick={() => {
            sfx.playClick();
            onClose();
          }}
          className="absolute top-5 right-5 p-2 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <div className="w-10 h-10 rounded-2xl bg-[#9ae600]/20 border border-[#9ae600]/40 flex items-center justify-center mb-3">
            <KeyRound className="w-5 h-5 text-[#9ae600]" />
          </div>
          <h3 className="text-2xl font-black text-white font-display">Welcome Back</h3>
          <p className="text-xs text-neutral-400 mt-1">
            Sign in to access your gamified trader portfolio and multipliers.
          </p>
        </div>

        {submitted ? (
          <div className="p-6 rounded-2xl bg-[#142213] border border-[#9ae600]/40 text-center space-y-2">
            <div className="w-10 h-10 rounded-full bg-[#9ae600] text-black mx-auto flex items-center justify-center font-bold">
              <Check className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-white">Sign-in Link Sent!</h4>
            <p className="text-xs text-neutral-300">Check your inbox or biometric prompt to confirm.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                Email or Trader Handle
              </label>
              <div className="relative">
                <input
                  type="text"
                  required
                  placeholder="trader@kashy.network"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-neutral-700 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#9ae600] transition-colors"
                />
                <Mail className="w-4 h-4 text-neutral-500 absolute right-3.5 top-3" />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-[#9ae600] hover:bg-[#aaff00] active:scale-98 text-black font-extrabold text-sm tracking-wide uppercase transition-all shadow-md shadow-[#9ae600]/20 cursor-pointer"
            >
              Sign In with Email
            </button>

            <div className="relative flex py-2 items-center">
              <div className="flex-grow border-t border-neutral-800"></div>
              <span className="flex-shrink mx-3 text-[11px] uppercase font-sans text-neutral-500">
                Or Connect Wallet
              </span>
              <div className="flex-grow border-t border-neutral-800"></div>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              <button
                type="button"
                onClick={() => {
                  sfx.playClick();
                  setEmail('0x9a8b...4f1e');
                  setSubmitted(true);
                  setTimeout(onClose, 1500);
                }}
                className="py-2.5 px-3 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-neutral-200 text-xs font-bold flex items-center justify-center gap-2 transition-colors"
              >
                <Wallet className="w-4 h-4 text-[#9ae600]" />
                <span>Web3 Wallet</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  sfx.playClick();
                  setEmail('passkey_verified');
                  setSubmitted(true);
                  setTimeout(onClose, 1500);
                }}
                className="py-2.5 px-3 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-neutral-200 text-xs font-bold flex items-center justify-center gap-2 transition-colors"
              >
                <ShieldCheck className="w-4 h-4 text-purple-400" />
                <span>Passkey Biometric</span>
              </button>
            </div>

            <div className="pt-3 text-center text-xs text-neutral-400">
              Don't have an account yet?{' '}
              <button
                type="button"
                onClick={() => {
                  sfx.playClick();
                  if (onSwitchToSignUp) onSwitchToSignUp();
                }}
                className="text-[#9ae600] font-bold hover:underline"
              >
                Sign Up Now
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

// 2. SIGN UP MODAL (Gamified Onboarding)
export function SignUpModal({ isOpen, onClose, onSwitchToSignIn }: ModalProps) {
  const [handle, setHandle] = useState('');
  const [selectedAvatar, setSelectedAvatar] = useState('🐰');
  const [step, setStep] = useState<1 | 2>(1);
  const [completed, setCompleted] = useState(false);

  if (!isOpen) return null;

  const avatars = [
    { emoji: '🐰', name: 'Cyber Bunny' },
    { emoji: '⚡', name: 'Volt Rabbit' },
    { emoji: '💎', name: 'Diamond Hare' },
    { emoji: '🤖', name: 'Quantum Bot' },
  ];

  const handleFinish = () => {
    sfx.playLevelUp();
    setCompleted(true);
    setTimeout(() => {
      setCompleted(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full max-w-md rounded-3xl bg-[#0f1410] border border-neutral-800 p-6 sm:p-8 shadow-2xl z-10">
        <button
          type="button"
          onClick={() => {
            sfx.playClick();
            onClose();
          }}
          className="absolute top-5 right-5 p-2 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {completed ? (
          <div className="p-6 rounded-2xl bg-[#142213] border border-[#9ae600]/40 text-center space-y-3">
            <div className="w-14 h-14 rounded-full bg-[#9ae600] text-black mx-auto flex items-center justify-center text-2xl font-bold animate-bounce">
              {selectedAvatar}
            </div>
            <h4 className="text-xl font-black text-white font-display">Level 1 Trader Unlocked!</h4>
            <p className="text-xs text-neutral-300">
              Welcome to the Revolution, <span className="text-[#a3e635] font-bold">@{handle || 'KashyPro'}</span>. Your 2.5X XP boost has been credited.
            </p>
          </div>
        ) : step === 1 ? (
          <div>
            <div className="mb-5">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#9ae600]/15 border border-[#9ae600]/30 text-[#9ae600] text-xs font-sans font-bold mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>STEP 1 OF 2</span>
              </div>
              <h3 className="text-2xl font-black text-white font-display">Create Your Trader ID</h3>
              <p className="text-xs text-neutral-400 mt-1">
                Choose your avatar and handle to start collecting weekly cash drops.
              </p>
            </div>

            {/* Avatar Selector */}
            <div className="mb-4">
              <label className="block text-xs font-semibold text-neutral-300 mb-2">
                Choose Starter Mascot:
              </label>
              <div className="grid grid-cols-4 gap-2">
                {avatars.map((av) => (
                  <button
                    key={av.emoji}
                    type="button"
                    onClick={() => {
                      sfx.playClick();
                      setSelectedAvatar(av.emoji);
                    }}
                    className={`p-3 rounded-2xl border text-center transition-all ${
                      selectedAvatar === av.emoji
                        ? 'bg-[#9ae600]/20 border-[#9ae600] scale-105 shadow-md'
                        : 'bg-neutral-900 border-neutral-800 hover:border-neutral-700'
                    }`}
                  >
                    <span className="text-2xl block">{av.emoji}</span>
                    <span className="text-[10px] text-neutral-400 mt-1 block font-medium truncate">
                      {av.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Handle Input */}
            <div className="mb-6">
              <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                Trader Handle
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-2.5 text-neutral-500 font-sans text-sm">@</span>
                <input
                  type="text"
                  placeholder="BunnyHunter99"
                  value={handle}
                  onChange={(e) => setHandle(e.target.value)}
                  className="w-full pl-8 pr-4 py-2.5 rounded-xl bg-black/50 border border-neutral-700 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#9ae600] font-sans"
                />
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                sfx.playClick();
                setStep(2);
              }}
              className="w-full py-3 rounded-xl bg-[#9ae600] hover:bg-[#aaff00] text-black font-extrabold text-sm tracking-wide uppercase transition-all shadow-md shadow-[#9ae600]/20 cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Next: Connect Access Rail</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="pt-4 text-center text-xs text-neutral-400">
              Already registered?{' '}
              <button
                type="button"
                onClick={() => {
                  sfx.playClick();
                  if (onSwitchToSignIn) onSwitchToSignIn();
                }}
                className="text-[#9ae600] font-bold hover:underline"
              >
                Sign In
              </button>
            </div>
          </div>
        ) : (
          /* Step 2 */
          <div>
            <div className="mb-5">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#9ae600]/15 border border-[#9ae600]/30 text-[#9ae600] text-xs font-sans font-bold mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>STEP 2 OF 2</span>
              </div>
              <h3 className="text-2xl font-black text-white font-display">Claim Sign-Up Perk</h3>
              <p className="text-xs text-neutral-400 mt-1">
                Your starter bundle includes 50 gasless trades & a 2.5X multiplier.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-black/40 border border-neutral-800 space-y-2 mb-5">
              <div className="flex items-center justify-between text-xs">
                <span className="text-neutral-400">Handle:</span>
                <span className="font-sans text-white font-bold">@{handle || 'KashyRider'}</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-neutral-400">Starter Mascot:</span>
                <span>{selectedAvatar} Level 1</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-neutral-400">First Deposit Bonus:</span>
                <span className="text-[#a3e635] font-bold">+250 $KASHY</span>
              </div>
            </div>

            <div className="space-y-2.5">
              <button
                type="button"
                onClick={handleFinish}
                className="w-full py-3 rounded-xl bg-[#9ae600] hover:bg-[#aaff00] active:scale-98 text-black font-extrabold text-sm tracking-wide uppercase transition-all shadow-md shadow-[#9ae600]/25 cursor-pointer flex items-center justify-center gap-2"
              >
                <Trophy className="w-4 h-4" />
                <span>Activate Account & Claim Bonus</span>
              </button>

              <button
                type="button"
                onClick={() => setStep(1)}
                className="w-full py-2.5 text-xs text-neutral-400 hover:text-white"
              >
                ← Back to Handle Selection
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// 3. ABOUT US MODAL
export function AboutUsModal({ isOpen, onClose }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full max-w-lg rounded-3xl bg-[#0f1410] border border-neutral-800 p-6 sm:p-8 shadow-2xl z-10 max-h-[90vh] overflow-y-auto">
        <button
          type="button"
          onClick={() => {
            sfx.playClick();
            onClose();
          }}
          className="absolute top-5 right-5 p-2 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#9ae600]/15 border border-[#9ae600]/30 text-[#9ae600] text-xs font-sans font-bold mb-3">
            <span>ABOUT KASHY PROTOCOL</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-white font-display">
            The Gamified Payment Revolution
          </h3>
          <p className="text-xs sm:text-sm text-neutral-300 mt-2 leading-relaxed">
            Kashy is the next-generation decentralized payment and trading network engineered to turn everyday transactions into an engaging, gamified experience. By combining real-time AI liquidity routing with zero-gas relayer pools, Kashy eliminates traditional crypto transaction friction while rewarding users with XP, streaks, and mystery drops.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 my-6">
          <div className="p-3.5 rounded-2xl bg-black/40 border border-neutral-800">
            <span className="text-[11px] text-neutral-400 font-sans">MISSION</span>
            <h4 className="text-sm font-bold text-white mt-1">Zero Friction</h4>
            <p className="text-[11px] text-neutral-400 mt-1">Make micro-payments sub-second and gasless for everyone worldwide.</p>
          </div>
          <div className="p-3.5 rounded-2xl bg-black/40 border border-neutral-800">
            <span className="text-[11px] text-neutral-400 font-sans">GAMIFICATION</span>
            <h4 className="text-sm font-bold text-white mt-1">Play To Trade</h4>
            <p className="text-[11px] text-neutral-400 mt-1">Level up your mascot avatar to unlock higher cashback yields.</p>
          </div>
        </div>

        <div className="space-y-3 text-xs text-neutral-400">
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#9ae600]" />
            <span>Multi-chain support: Solana, Base, Arbitrum, Ethereum, Polygon</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#9ae600]" />
            <span>Audited institutional smart contracts and MPC key enclaves</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#9ae600]" />
            <span>Seamless SDKs for Next.js, React, iOS, and Telegram mini-apps</span>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-neutral-800 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-bold transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
