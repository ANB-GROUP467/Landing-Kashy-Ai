import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Sparkles,
  ArrowRight,
  X,
  Shield,
  Zap,
  Flame,
  Crown,
  CheckCircle2,
} from "lucide-react";
import { sfx } from "../utils/sound";

// 3D Sculpture Assets
import silverCoinImg from "../assets/images/silver_coin_spotlight_1789984593674.jpg";
import emeraldTwoImg from "../assets/images/emerald_number_two_1789984608987.jpg";
import chromeFistImg from "../assets/images/chrome_fist_sculpture_1789984660699.jpg";
import liferGoldImg from "../assets/images/lifer_gold_emblem_1789984627395.jpg";
import chromeKnightImg from "../assets/images/chrome_chess_knight_1789984640174.jpg";

export interface SculptureItem {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  badgeColor: string;
  statValue: string;
  statLabel: string;
  image: string;
  description: string;
  perks: string[];
  ctaLabel: string;
}

const sculptures: SculptureItem[] = [
  {
    id: "vaults",
    title: "Automated Yield Vaults",
    subtitle: "Dynamic Staking & Compounding",
    badge: "HIGH APY",
    badgeColor: "border-emerald-500/30 bg-emerald-950/40 text-emerald-400",
    statValue: "28.4%",
    statLabel: "Base Staking APY",
    image: silverCoinImg.src,
    description:
      "Instant liquidity pairing with zero lockup penalties. Every block automatically reinvests your yields into high-performance algorithmic vaults.",
    perks: [
      "Compounded per-block yield distribution",
      "Zero withdrawal fee after 24-hour warm-up",
      "Gas-free staking using account abstraction rails",
      "Audited by CertiK & OpenZeppelin",
    ],
    ctaLabel: "Explore Vaults",
  },
  {
    id: "multipliers",
    title: "2X Reward Multipliers",
    subtitle: "Synergy Level Boosts",
    badge: "2X ACTIVE",
    badgeColor: "border-lime-500/30 bg-lime-950/40 text-[#a3e635]",
    statValue: "2.0x",
    statLabel: "Current Season Boost",
    image: emeraldTwoImg.src,
    description:
      "Level up your trader profile and stack synergy boosters. Earn twice the XP and reward tokens across all liquidity swaps and payment checkouts.",
    perks: [
      "Double XP across all payment checkouts",
      "Bonus airdrop allocation for tier 2+ holders",
      "Referral synergy boost: earn 15% of referee XP",
      "Seasonal leaderboard prize pools",
    ],
    ctaLabel: "Activate Boost",
  },
  {
    id: "governance",
    title: "Community Power & DAO",
    subtitle: "Decentralized Sovereign Voice",
    badge: "QUADRATIC VOTING",
    badgeColor: "border-cyan-500/30 bg-cyan-950/40 text-cyan-400",
    statValue: "100%",
    statLabel: "Treasury Transparency",
    image: chromeFistImg.src,
    description:
      "True decentralized governance. Submit proposals, vote with quadratic weight to prevent whale domination, and guide protocol parameters.",
    perks: [
      "Propose fee splits and reward pool additions",
      "Quadratic voting eliminates single-whale dominance",
      "On-chain execution of approved protocol changes",
      "Direct revenue share from protocol treasury",
    ],
    ctaLabel: "Vote on Proposals",
  },
  {
    id: "lifer",
    title: "LIFER Status & VIP Privileges",
    subtitle: "Perpetual Zero-Fee Club",
    badge: "LEGENDARY TIER",
    badgeColor: "border-amber-500/30 bg-amber-950/40 text-amber-400",
    statValue: "0.00%",
    statLabel: "Platform Trading Fee",
    image: liferGoldImg.src,
    description:
      "The pinnacle of the Kashy ecosystem. A strictly capped membership offering perpetual zero platform fees, private concierge, and founder round access.",
    perks: [
      "Perpetual 0% swap and checkout fees forever",
      "Direct phone concierge and 1-on-1 account manager",
      "Guaranteed allocation in partner seed rounds",
      "Exclusive physical engraved titanium Kashy Card",
    ],
    ctaLabel: "Claim LIFER Pass",
  },
  {
    id: "strategy",
    title: "Strategic AI Smart Routing",
    subtitle: "Autonomous Deep Order Books",
    badge: "NEURAL ROUTING",
    badgeColor: "border-purple-500/30 bg-purple-950/40 text-purple-400",
    statValue: "<0.01%",
    statLabel: "Average Slippage",
    image: chromeKnightImg.src,
    description:
      "Advanced machine learning models continuously monitor order books across 40+ decentralized liquidity pools, splitting orders to eliminate slippage.",
    perks: [
      "Multi-hop pathfinding across DEXs and bridges",
      "MEV sandwich attack protection by default",
      "Predictive gas timing to execute trades at lowest gas",
      "Sub-second settlement confirmation",
    ],
    ctaLabel: "View AI Metrics",
  },
];

interface FeatureSculpturesProps {
  onOpenSignUp: () => void;
}

export default function FeatureSculptures({
  onOpenSignUp,
}: FeatureSculpturesProps) {
  const [selectedSculpture, setSelectedSculpture] =
    useState<SculptureItem | null>(null);

  const handleCardClick = (item: SculptureItem) => {
    sfx.playClick();
    setSelectedSculpture(item);
  };

  return (
    <section
      id="features-sculptures"
      aria-label="Features and Perks"
      className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] max-w-5xl h-[400px] bg-[#9ae600]/5 blur-[160px] pointer-events-none rounded-full" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#162013] border border-[#a3e635]/30 text-[#a3e635] text-xs font-sans font-semibold mb-4 tracking-wider uppercase">
          <Sparkles className="w-3.5 h-3.5 text-[#a3e635]" />
          <span>EXCLUSIVE ECOSYSTEM PERKS</span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight font-display">
          Get more out of your Kashy
        </h2>

        <p className="mt-4 text-base sm:text-lg text-neutral-400 font-normal leading-relaxed">
          Engineered with precision. Explore 3D-crafted infrastructure designed
          to reward active traders, liquidity providers, and community
          visionaries.
        </p>
      </div>

      {/* 5-Card High-Craft Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {sculptures.map((item, index) => {
          // Make the first two cards span or have prominent presentation
          const isHighlight = index === 0 || index === 3;
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => handleCardClick(item)}
              onMouseEnter={() => sfx.playHover()}
              className={`group relative rounded-3xl bg-[#111412]/80 hover:bg-[#151a16] border border-neutral-800/90 hover:border-[#9ae600]/50 transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between overflow-hidden cursor-pointer shadow-xl shadow-black/60 hover:shadow-2xl hover:shadow-[#9ae600]/10 hover:-translate-y-1 ${
                index === 3 ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              {/* Top rim highlight */}
              <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent group-hover:via-[#9ae600]/40 transition-colors" />

              <div>
                {/* Header & Badges */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <span
                    className={`px-2.5 py-1 rounded-full text-[11px] font-sans font-bold tracking-wider uppercase border ${item.badgeColor}`}
                  >
                    {item.badge}
                  </span>

                  <div className="text-right">
                    <div className="text-lg sm:text-xl font-extrabold text-white font-sans tracking-tight group-hover:text-[#a3e635] transition-colors">
                      {item.statValue}
                    </div>
                    <div className="text-[10px] text-neutral-400 font-medium uppercase tracking-wider">
                      {item.statLabel}
                    </div>
                  </div>
                </div>

                {/* 3D Sculpture Image Display */}
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-black/80 border border-neutral-800/80 mb-6 group-hover:border-neutral-700 transition-colors">
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  {/* Subtle vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

                  {/* Hover Inspect Pill */}
                  <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-neutral-700/80 text-[11px] font-semibold text-neutral-200 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Inspect</span>
                    <ArrowRight className="w-3 h-3 text-[#9ae600]" />
                  </div>
                </div>

                {/* Titles */}
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight font-display mb-1 group-hover:text-[#a3e635] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider font-sans mb-3">
                  {item.subtitle}
                </p>
                <p className="text-sm text-neutral-300 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Card Footer */}
              <div className="mt-6 pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs font-semibold text-neutral-300 group-hover:text-white">
                <span className="flex items-center gap-1.5 text-[#a3e635]">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>View Perk Blueprint</span>
                </span>
                <span className="text-neutral-400 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Sculpture Detail Modal */}
      <AnimatePresence>
        {selectedSculpture && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl rounded-3xl bg-[#121513] border border-neutral-700/80 p-6 sm:p-8 shadow-2xl shadow-black overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => {
                  sfx.playClick();
                  setSelectedSculpture(null);
                }}
                className="absolute top-5 right-5 p-2 rounded-full bg-neutral-800/80 hover:bg-neutral-700 text-neutral-300 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Content */}
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <div className="w-full sm:w-1/2 aspect-square rounded-2xl overflow-hidden bg-black border border-neutral-700/80 shrink-0">
                  <img
                    src={selectedSculpture.image}
                    alt={selectedSculpture.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                <div className="flex-1">
                  <span
                    className={`inline-block px-2.5 py-1 rounded-full text-[11px] font-sans font-bold tracking-wider uppercase border mb-3 ${selectedSculpture.badgeColor}`}
                  >
                    {selectedSculpture.badge}
                  </span>

                  <h3 className="text-2xl sm:text-3xl font-black text-white font-display">
                    {selectedSculpture.title}
                  </h3>
                  <p className="text-xs font-sans text-[#a3e635] uppercase tracking-wider mt-1 mb-4">
                    {selectedSculpture.subtitle}
                  </p>

                  <div className="p-3 rounded-xl bg-black/50 border border-neutral-800 mb-4 flex items-center justify-between">
                    <span className="text-xs text-neutral-400 font-sans">
                      {selectedSculpture.statLabel}
                    </span>
                    <span className="text-xl font-bold font-sans text-[#a3e635]">
                      {selectedSculpture.statValue}
                    </span>
                  </div>

                  <p className="text-sm text-neutral-300 leading-relaxed mb-5">
                    {selectedSculpture.description}
                  </p>
                </div>
              </div>

              {/* Perks List */}
              <div className="mt-6 pt-6 border-t border-neutral-800">
                <h4 className="text-xs font-sans font-bold text-neutral-400 uppercase tracking-widest mb-3">
                  Included Protocol Advantages
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedSculpture.perks.map((perk, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 text-xs text-neutral-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#9ae600] shrink-0 mt-0.5" />
                      <span>{perk}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedSculpture(null)}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-full border border-neutral-700 text-neutral-300 hover:text-white text-xs font-bold uppercase tracking-wider"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={() => {
                    sfx.playLevelUp();
                    setSelectedSculpture(null);
                    onOpenSignUp();
                  }}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#9ae600] hover:bg-[#aaff00] text-black text-xs font-extrabold uppercase tracking-wider shadow-lg shadow-[#9ae600]/20 flex items-center justify-center gap-2"
                >
                  <span>{selectedSculpture.ctaLabel}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
