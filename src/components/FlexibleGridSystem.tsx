import { useState } from 'react';
import { 
  Cpu, 
  Sparkles, 
  ShieldCheck, 
  Layers, 
  TrendingUp, 
  LayoutGrid, 
  Smartphone, 
  Flame, 
  SlidersHorizontal,
  ChevronRight,
  Bot,
  Zap,
  Globe
} from 'lucide-react';
import { sfx } from '../utils/sound';
import InteractiveCalculator from './InteractiveCalculator';
import LiveLeaderboard from './LiveLeaderboard';
import PaymentFlowSimulator from './PaymentFlowSimulator';

interface FlexibleGridSystemProps {
  onOpenSignUp: () => void;
}

type LayoutMode = 'bento' | 'uniform' | 'spotlight';
type CategoryFilter = 'all' | 'ai' | 'gaming' | 'payments' | 'security';

export default function FlexibleGridSystem({ onOpenSignUp }: FlexibleGridSystemProps) {
  const [layoutMode, setLayoutMode] = useState<LayoutMode>('bento');
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');

  const categories = [
    { id: 'all', label: 'All Modules' },
    { id: 'ai', label: 'AI Intelligence' },
    { id: 'gaming', label: 'Gamification' },
    { id: 'payments', label: 'Zero-Gas Rails' },
    { id: 'security', label: 'Vault Security' },
  ];

  return (
    <section
      id="grid-system"
      aria-label="Flexible Grid System"
      className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#182615] border border-[#a3e635]/30 text-[#a3e635] text-xs font-sans font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FLEXIBLE MODULAR ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight font-display">
            The Kashy Ecosystem Grid
          </h2>
          <p className="mt-2 text-sm sm:text-base text-neutral-400 max-w-xl">
            A flexible, responsive grid designed for high-frequency trading, AI routing, and instant gamified rewards.
          </p>
        </div>

        {/* Grid System Controls: Layout Mode & Filtering */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Layout Mode Toggles */}
          <div className="flex items-center bg-neutral-900/90 border border-neutral-800 p-1 rounded-2xl">
            <button
              type="button"
              onClick={() => {
                sfx.playClick();
                setLayoutMode('bento');
              }}
              title="Bento Grid Layout"
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                layoutMode === 'bento'
                  ? 'bg-[#9ae600] text-black shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Bento Layout</span>
            </button>

            <button
              type="button"
              onClick={() => {
                sfx.playClick();
                setLayoutMode('uniform');
              }}
              title="Uniform Columns Layout"
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                layoutMode === 'uniform'
                  ? 'bg-[#9ae600] text-black shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Uniform</span>
            </button>

            <button
              type="button"
              onClick={() => {
                sfx.playClick();
                setLayoutMode('spotlight');
              }}
              title="Spotlight View"
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                layoutMode === 'spotlight'
                  ? 'bg-[#9ae600] text-black shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Spotlight</span>
            </button>
          </div>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => {
              sfx.playClick();
              setActiveCategory(cat.id as CategoryFilter);
            }}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
              activeCategory === cat.id
                ? 'bg-neutral-200 text-black shadow-md'
                : 'bg-neutral-900/60 border border-neutral-800 text-neutral-400 hover:text-neutral-200 hover:border-neutral-700'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Dynamic Grid Layout Implementation */}
      {layoutMode === 'bento' ? (
        /* Bento Grid: Varied spans with responsive mobile-first flexibility */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6">
          {/* Card 1: Interactive Calculator (Wide 7 cols on desktop) */}
          <div className="lg:col-span-7">
            <InteractiveCalculator onOpenSignUp={onOpenSignUp} />
          </div>

          {/* Card 2: Gamified Quests & Leaderboard (5 cols on desktop) */}
          <div className="lg:col-span-5">
            <LiveLeaderboard />
          </div>

          {/* Card 3: Zero-Gas Settlement Simulator (5 cols on desktop) */}
          <div className="lg:col-span-5">
            <PaymentFlowSimulator />
          </div>

          {/* Card 4: AI Neural Router Card (7 cols on desktop) */}
          <div className="lg:col-span-7 p-5 sm:p-7 rounded-3xl bg-[#111613] border border-neutral-800/90 shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-[#182216] border border-[#9ae600]/30 text-[#9ae600]">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white font-display">
                      Neural AI Yield Arbitrage
                    </h3>
                    <p className="text-xs text-neutral-400">Autonomous multi-chain routing</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-[#9ae600]/15 border border-[#9ae600]/30 text-[#9ae600] text-[11px] font-sans font-bold">
                  +18.4% APY
                </span>
              </div>

              {/* Dynamic Route Spread Chart / Visual */}
              <div className="p-4 rounded-2xl bg-black/40 border border-neutral-800/80 my-3">
                <div className="flex justify-between items-center text-xs mb-3">
                  <span className="text-neutral-400">Real-Time Routing Spread:</span>
                  <span className="text-[#a3e635] font-sans font-bold">14 Liquidity Venues</span>
                </div>

                {/* Animated visual bars */}
                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between text-[11px] mb-1">
                      <span className="text-neutral-300">Base / Solana Micro-Pool</span>
                      <span className="text-[#9ae600] font-sans font-bold">99.4% Efficiency</span>
                    </div>
                    <div className="w-full h-2 bg-neutral-800 rounded-full overflow-hidden">
                      <div className="h-full bg-[#9ae600] rounded-full w-[94%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[11px] mb-1">
                      <span className="text-neutral-300">Arbitrum Zero-Gas Relayer</span>
                      <span className="text-purple-400 font-sans font-bold">97.8% Efficiency</span>
                    </div>
                    <div className="w-full h-2 bg-neutral-800 rounded-full overflow-hidden">
                      <div className="h-full bg-purple-400 rounded-full w-[88%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[11px] mb-1">
                      <span className="text-neutral-300">Polygon zkEVM Instant Rails</span>
                      <span className="text-emerald-400 font-sans font-bold">98.9% Efficiency</span>
                    </div>
                    <div className="w-full h-2 bg-neutral-800 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-400 rounded-full w-[91%]" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 mt-4 text-center">
                <div className="p-2.5 rounded-xl bg-neutral-900/60 border border-neutral-800">
                  <span className="text-base font-bold text-white font-sans block">0.02s</span>
                  <span className="text-[10px] text-neutral-400">Route Finding</span>
                </div>
                <div className="p-2.5 rounded-xl bg-neutral-900/60 border border-neutral-800">
                  <span className="text-base font-bold text-[#a3e635] font-sans block">$0.00</span>
                  <span className="text-[10px] text-neutral-400">Trader Gas</span>
                </div>
                <div className="p-2.5 rounded-xl bg-neutral-900/60 border border-neutral-800">
                  <span className="text-base font-bold text-white font-sans block">100%</span>
                  <span className="text-[10px] text-neutral-400">MEV Protected</span>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
              <span>Audited by Trail of Bits & CertiK</span>
              <button
                type="button"
                onClick={onOpenSignUp}
                className="text-[#9ae600] font-bold hover:underline flex items-center gap-1"
              >
                Connect API <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 5: Institutional MPC Vault (4 cols) */}
          <div className="lg:col-span-4 p-5 sm:p-7 rounded-3xl bg-[#111613] border border-neutral-800/90 shadow-xl flex flex-col justify-between">
            <div>
              <div className="p-2.5 w-fit rounded-xl bg-[#182216] border border-[#9ae600]/30 text-[#9ae600] mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white font-display">
                Institutional MPC Vault
              </h3>
              <p className="text-xs text-neutral-400 mt-1">
                Zero-knowledge threshold signatures. Your private keys never exist in a single location.
              </p>

              <div className="my-4 space-y-2 text-xs">
                <div className="flex items-center gap-2 text-neutral-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9ae600]" />
                  <span>$250,000,000 Insured Collateral</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9ae600]" />
                  <span>Hardware Secure Enclave Enforced</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9ae600]" />
                  <span>Instant biometric sign-in via Passkeys</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-neutral-800 text-[11px] font-sans text-[#a3e635]">
              ISO 27001 & SOC 2 TYPE II CERTIFIED
            </div>
          </div>

          {/* Card 6: Mobile First Ecosystem & SDK (4 cols) */}
          <div className="lg:col-span-4 p-5 sm:p-7 rounded-3xl bg-[#111613] border border-neutral-800/90 shadow-xl flex flex-col justify-between">
            <div>
              <div className="p-2.5 w-fit rounded-xl bg-[#182216] border border-[#9ae600]/30 text-[#9ae600] mb-3">
                <Smartphone className="w-5 h-5" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white font-display">
                Mobile-First Everywhere
              </h3>
              <p className="text-xs text-neutral-400 mt-1">
                Trade on Telegram mini-app, iOS & Android widgets, or direct browser PWA with 60 FPS haptics.
              </p>

              <div className="my-4 p-3 rounded-2xl bg-black/40 border border-neutral-800/80 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-white block">Telegram Mini-Bot</span>
                  <span className="text-[10px] text-neutral-400">@KashyPayBot</span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-[#9ae600]/20 text-[#9ae600] font-bold">
                  ACTIVE
                </span>
              </div>
            </div>

            <div className="pt-3 border-t border-neutral-800 text-[11px] text-neutral-400 flex justify-between">
              <span>SDK: React / Next.js / Swift</span>
              <span className="text-[#a3e635] font-bold">v2.4.0</span>
            </div>
          </div>

          {/* Card 7: Global Guild Network (4 cols) */}
          <div className="lg:col-span-4 p-5 sm:p-7 rounded-3xl bg-[#111613] border border-neutral-800/90 shadow-xl flex flex-col justify-between">
            <div>
              <div className="p-2.5 w-fit rounded-xl bg-[#182216] border border-[#9ae600]/30 text-[#9ae600] mb-3">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white font-display">
                Global Guild Network
              </h3>
              <p className="text-xs text-neutral-400 mt-1">
                Form clans, pool liquidity with guild members, and unlock squad streak multiplier bonuses.
              </p>

              <div className="my-4 flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-pink-500/80 border-2 border-black flex items-center justify-center text-xs">
                    🐰
                  </div>
                  <div className="w-8 h-8 rounded-full bg-amber-500/80 border-2 border-black flex items-center justify-center text-xs">
                    🦊
                  </div>
                  <div className="w-8 h-8 rounded-full bg-emerald-500/80 border-2 border-black flex items-center justify-center text-xs">
                    🐼
                  </div>
                  <div className="w-8 h-8 rounded-full bg-purple-500/80 border-2 border-black flex items-center justify-center text-xs">
                    🦁
                  </div>
                </div>
                <span className="text-xs font-bold text-white">+1,400 Guilds Active</span>
              </div>
            </div>

            <div className="pt-3 border-t border-neutral-800 text-[11px] text-neutral-400 flex justify-between">
              <span>Weekly Prize Pool</span>
              <span className="text-[#a3e635] font-sans font-bold">$125,000</span>
            </div>
          </div>
        </div>
      ) : layoutMode === 'uniform' ? (
        /* Uniform Grid: Strict 3-column responsive layout */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <InteractiveCalculator onOpenSignUp={onOpenSignUp} />
          <LiveLeaderboard />
          <PaymentFlowSimulator />
          
          <div className="p-6 rounded-3xl bg-[#111613] border border-neutral-800 flex flex-col justify-between">
            <div>
              <Cpu className="w-6 h-6 text-[#9ae600] mb-3" />
              <h3 className="text-lg font-bold text-white">AI Yield Arbitrage</h3>
              <p className="text-xs text-neutral-400 mt-1">Continuous algorithmic micro-rebalancing across 14 networks.</p>
            </div>
            <div className="text-xs font-sans text-[#a3e635] mt-4 pt-3 border-t border-neutral-800">99.4% ACCURACY</div>
          </div>

          <div className="p-6 rounded-3xl bg-[#111613] border border-neutral-800 flex flex-col justify-between">
            <div>
              <ShieldCheck className="w-6 h-6 text-[#9ae600] mb-3" />
              <h3 className="text-lg font-bold text-white">Institutional MPC Vault</h3>
              <p className="text-xs text-neutral-400 mt-1">Multi-party computation with passkey biometric authentication.</p>
            </div>
            <div className="text-xs font-sans text-[#a3e635] mt-4 pt-3 border-t border-neutral-800">$250M INSURED</div>
          </div>

          <div className="p-6 rounded-3xl bg-[#111613] border border-neutral-800 flex flex-col justify-between">
            <div>
              <Smartphone className="w-6 h-6 text-[#9ae600] mb-3" />
              <h3 className="text-lg font-bold text-white">Mobile-First SDK</h3>
              <p className="text-xs text-neutral-400 mt-1">Ready-to-deploy React, Next.js, and Telegram mini-app integrations.</p>
            </div>
            <div className="text-xs font-sans text-[#a3e635] mt-4 pt-3 border-t border-neutral-800">TELEGRAM + PWA</div>
          </div>
        </div>
      ) : (
        /* Spotlight Mode: Focus on the interactive simulator & live flow with deep dive details */
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <InteractiveCalculator onOpenSignUp={onOpenSignUp} />
            <PaymentFlowSimulator />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <LiveLeaderboard />
            <div className="lg:col-span-2 p-6 rounded-3xl bg-[#111613] border border-neutral-800">
              <h3 className="text-xl font-bold text-white mb-2">Autonomous Multi-Chain Network</h3>
              <p className="text-sm text-neutral-400 mb-4">
                Kashy combines deep neural liquidity routing with zero-gas relayer pools, eliminating Ethereum gas spikes while boosting your trading XP.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                <div className="p-3 rounded-2xl bg-black/40 border border-neutral-800">
                  <div className="text-lg font-bold text-white font-sans">0.03s</div>
                  <div className="text-[11px] text-neutral-400">Finality</div>
                </div>
                <div className="p-3 rounded-2xl bg-black/40 border border-neutral-800">
                  <div className="text-lg font-bold text-[#a3e635] font-sans">$0.00</div>
                  <div className="text-[11px] text-neutral-400">Trader Fees</div>
                </div>
                <div className="p-3 rounded-2xl bg-black/40 border border-neutral-800">
                  <div className="text-lg font-bold text-white font-sans">2.5X</div>
                  <div className="text-[11px] text-neutral-400">XP Boost</div>
                </div>
                <div className="p-3 rounded-2xl bg-black/40 border border-neutral-800">
                  <div className="text-lg font-bold text-purple-400 font-sans">14</div>
                  <div className="text-[11px] text-neutral-400">Chains</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
