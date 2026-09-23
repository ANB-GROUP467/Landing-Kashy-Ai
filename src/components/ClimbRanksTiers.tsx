"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, X, CheckCircle2 } from "lucide-react";
import { Gasoek_One } from "next/font/google";
import { sfx } from "../utils/sound";
import tierStyles from "./ClimbRanksTiers.module.css";

// 3D Sculpture Assets
import sportsCarImg from "../assets/images/tier_sports_car_1789984728069.jpg";
import liferGoldImg from "../assets/images/lifer_gold_3d_text_1789991613774.png";
import liferGold3dTextImg from "../assets/images/lifer_gold_3d_text_1789991613774.png";

const gasoekOne = Gasoek_One({ weight: "400", subsets: ["latin"] });

// Static utility strings remain discoverable by Tailwind.
const cards = {
  cards:
    "grid w-full max-w-none grid-cols-3 gap-0 bg-white p-0 max-[700px]:grid-cols-1 max-[700px]:bg-black",
  card: "group relative isolate block box-border aspect-[506.6667/642] w-full min-w-0 cursor-pointer appearance-none overflow-hidden rounded-[1.18421vw] border-0 border-r border-solid border-[#202020] bg-[#131313] p-0 text-left font-['DM_Sans',Arial,sans-serif] text-white transition-colors duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none first:rounded-l-none last:border-r-0 hover:bg-[#0a0a0a] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-[-4px] focus-visible:outline-[#b5e764] max-[700px]:rounded-[18px] max-[700px]:first:rounded-l-[18px] max-[700px]:border-r-0 max-[700px]:border-b",
  cardHeading: "absolute left-[16.1842105%] right-[5%] top-[12.7725857%] z-[2]",
  cardTag:
    "block m-0 font-medium leading-[1.12447] tracking-normal transition-[font-size] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none group-hover:text-[1.644737vw] group-focus-visible:text-[1.644737vw] max-[700px]:group-hover:text-[5.5vw] max-[700px]:group-focus-visible:text-[5.5vw] text-[1.447368vw] max-[700px]:text-[5.2vw]",
  cardTitle:
    "block m-0 font-medium leading-[1.12447] tracking-normal transition-[font-size] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none group-hover:text-[1.644737vw] group-focus-visible:text-[1.644737vw] max-[700px]:group-hover:text-[5.5vw] max-[700px]:group-focus-visible:text-[5.5vw] text-[0.921053vw] max-[700px]:text-[3.7vw]",
  // LIFER-only heading treatment: starts slightly muted, turns fully white on hover/focus.
  liferHeadingText:
    "text-white/70 transition-colors duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none group-hover:text-white group-focus-visible:text-white",
  artwork: "pointer-events-none absolute inset-0 z-0",
  frontline: "[&>img]:w-[65.328947%]",
  og: "[&>img]:w-[55.5%]",
  oog: "[&>img]:w-[40.4%]",
  lifer: "[&>img]:w-[65%]",
  cardBullets:
    "absolute bottom-[12.7725857%] left-[19.342105%] right-[3%] z-[2] m-0 list-outside list-disc p-0 text-[1.052632vw] font-light leading-[1.28] tracking-[-0.01em] text-[#bcc5d0] transition-[color,transform] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none group-hover:-translate-y-[1.052632vw] group-hover:text-white group-focus-visible:-translate-y-[1.052632vw] group-focus-visible:text-white max-[700px]:text-[3.7vw] max-[700px]:group-hover:-translate-y-2 max-[700px]:group-focus-visible:-translate-y-2 motion-reduce:!transform-none",
};

const styles = {
  section: "relative w-full max-w-none bg-black text-white",
  rankHeader:
    "relative flex flex-col items-center overflow-hidden px-5 pb-[min(5.208vw,100px)] pt-[min(6.25vw,120px)] text-center max-[700px]:py-14",
  coinGlow:
    "pointer-events-none absolute left-1/2 top-10 h-48 w-48 -translate-x-1/2 rounded-full bg-[#b5e764]/10 blur-3xl",
  coin: "relative z-10 mb-6 block h-[min(12vw,230px)] w-[min(12vw,230px)] cursor-pointer border-0 bg-transparent p-0 max-[700px]:h-28 max-[700px]:w-28",
  headingCopy: "relative z-10",
  progression:
    "flex flex-col items-center px-5 pt-[min(5.263vw,100px)] pb-[min(3.158vw,60px)] text-center max-[700px]:py-14",
  mascot:
    "mb-[min(4.21vw,80px)] w-[min(12vw,230px)] cursor-pointer border-0 bg-transparent p-0 max-[700px]:w-28",
  mascotImage: "block h-auto w-full object-contain",
  progressionCopy:
    "flex flex-col items-center gap-[min(0.842vw,16px)] text-[min(0.9474vw,18px)] leading-[1.5] text-white [&>p]:m-0 max-[700px]:gap-3 max-[700px]:text-sm",
  owners: "w-full pt-[min(3.125vw,60px)] max-[700px]:pt-10",
};

export interface TierItem {
  id: string;
  tag: string;
  title: string;
  bullets: string[];
  image: string;
  imageAlt: string;
  feeRate: string;
  volumeRange: string;
  referrals: string;
  perks: string[];
  accentColor: string;
}

export interface LiferCardItem {
  id: string;
  tag: string;
  title: string;
  bullets: string[];
  image: string;
  imageAlt: string;
  perks: string[];
}

const allTiers: TierItem[] = [
  {
    id: "frontline",
    tag: "// FRONTLINE",
    title: "Your Journey Begins",
    bullets: [
      "1 referral to start",
      "5 logins daily",
      "3 shares daily",
      "5 transactions daily",
      "3.25% fee",
      "$1-$49K volume range",
    ],
    image: "https://kashy.ai/assets/FRONTLINE_bg_image-CCG86M_i.svg",
    imageAlt: "Frontline Tier Minimalist Steps",
    feeRate: "3.25%",
    volumeRange: "$1 - $49,000",
    referrals: "1 Referral",
    perks: [
      "Base 1.0x ecosystem reward multiplier",
      "Instant access to all multi-chain payment rails",
      "Standard liquidity pool yield access",
      "Community Discord member access",
    ],
    accentColor: "#9ae600",
  },
  {
    id: "og",
    tag: "// OG",
    title: "Prove Your Commitment",
    bullets: [
      "100+ referrals required",
      "10 logins daily",
      "5 shares daily",
      "10 transactions daily",
      "3.15% fee",
      "$50K-$499K volume range",
    ],
    image: "https://kashy.ai/assets/OG_bg_image-CSrF6bQY.png",
    imageAlt: "OG Tier Liquid Chrome Cubes",
    feeRate: "3.15%",
    volumeRange: "$50,000 - $499,000",
    referrals: "100+ Referrals",
    perks: [
      "1.75x boosted yield reward multiplier",
      "Priority transaction queue processing",
      "Discounted swap fees on cross-chain routing",
      "Access to private alpha research feeds",
    ],
    accentColor: "#aaff00",
  },
  {
    id: "oog",
    tag: "// OOG",
    title: "Master Your Network",
    bullets: [
      "500+ referrals required",
      "15 logins daily",
      "10 shares daily",
      "15 transactions daily",
      "3.10% fee",
      "$500K-$4.99M volume range",
    ],
    image: "https://kashy.ai/assets/OOG_bg_image-C7FqLodK.png",
    imageAlt: "OOG Tier Geodesic Sphere",
    feeRate: "3.10%",
    volumeRange: "$500,000 - $4.99M",
    referrals: "500+ Referrals",
    perks: [
      "2.5x high-velocity APY multiplier",
      "Sub-second algorithmic slippage protection",
      "Dedicated institutional gateway support",
      "Custom vanity Web3 receipt signatures",
    ],
    accentColor: "#38bdf8",
  },
  {
    id: "whale",
    tag: "// WHALE",
    title: "Dominate the Flow",
    bullets: [
      "2,500+ referrals",
      "25 logins daily",
      "20 shares daily",
      "50 transactions daily",
      "2.50% fee",
      "$5M-$25M volume range",
    ],
    image: sportsCarImg.src,
    imageAlt: "Whale Tier Stealth Hypercar",
    feeRate: "2.50%",
    volumeRange: "$5M - $25,000,000",
    referrals: "2,500+ Referrals",
    perks: [
      "3.5x maximum volume incentive multiplier",
      "Direct dark-pool OTC routing with zero impact",
      "Bespoke institutional smart contract deployment",
      "VIP passes to all global Kashy gatherings",
    ],
    accentColor: "#f59e0b",
  },
  {
    id: "lifer",
    tag: "// LIFER",
    title: "The Sovereign Realm",
    bullets: [
      "10,000+ referrals or DAO token",
      "Unlimited logins daily",
      "Unlimited shares",
      "Unlimited transactions",
      "0.00% perpetual fee",
      "$25M+ volume range",
    ],
    image: liferGoldImg.src,
    imageAlt: "LIFER Tier Gold Emblem",
    feeRate: "0.00%",
    volumeRange: "$25,000,000+",
    referrals: "10,000+ Referrals",
    perks: [
      "5.0x ultimate guild sovereign multiplier",
      "0.00% absolute zero lifetime swap fees",
      "Quadratic DAO vote weighting & council veto",
      "Revenue share dividend stream from all protocol transactions",
    ],
    accentColor: "#fbbf24",
  },
];

const liferShowcaseCards: LiferCardItem[] = [
  {
    id: "lifer-freedom",
    tag: "// LIFER",
    title: "Unmatched Freedom",
    bullets: [
      "Zero monthly requirements",
      "2% platform fee",
      "Unlimited transactions",
      "Unlimited referral earnings",
    ],
    image: "https://kashy.ai/assets/LIFER_bg_image-A_jdEQ0v.png",
    imageAlt: "LIFER Unmatched Freedom Black Chrome Fist",
    perks: [
      "Zero monthly volume quotas or holding lockups",
      "Flat 2% preferential protocol fee cap",
      "Unlimited sub-second transactions on all networks",
      "Direct perpetual referral earnings without tier resets",
    ],
  },
  {
    id: "lifer-treatment",
    tag: "// LIFER",
    title: "Elite Treatment",
    bullets: [
      "Dedicated account manager",
      "Private Slack channel",
      "Priority support",
      "Security Protection",
    ],
    image: "https://kashy.ai/assets/LIFER_ELITE_bg_image-D-KE7Ncn.png",
    imageAlt: "LIFER Elite Treatment Chrome Chess Knight",
    perks: [
      "Personal 24/7 dedicated institutional account manager",
      "Private direct Slack & Telegram team channel",
      "Sub-minute expedited priority concierge support",
      "Institutional multi-sig vault security protection",
    ],
  },
  {
    id: "lifer-ownership",
    tag: "// LIFER",
    title: "True Ownership",
    bullets: [
      "Owners Club equity option",
      "Co-branded debit card",
      "Stock options",
      "Grants",
    ],
    image: "https://kashy.ai/assets/LIFER_OWNER_bg_image-zwWDqDbB.png",
    imageAlt: "LIFER True Ownership Chrome Chess King",
    perks: [
      "Direct Owners Club protocol equity pool participation",
      "Bespoke matte metal co-branded global debit card",
      "Tokenized equity participation rights & stock options",
      "Ecosystem governance council veto & builder grants",
    ],
  },
];

interface ClimbRanksTiersProps {
  onOpenSignUp: () => void;
}

export default function ClimbRanksTiers({
  onOpenSignUp,
}: ClimbRanksTiersProps) {
  const [selectedTier, setSelectedTier] = useState<TierItem | null>(null);
  const [selectedLiferCard, setSelectedLiferCard] =
    useState<LiferCardItem | null>(null);

  const displayedTiers = allTiers.slice(0, 3);
  const tierArtworkClasses: Record<string, string> = {
    frontline: cards.frontline,
    og: cards.og,
    oog: cards.oog,
  };

  return (
    <section id="features-sculptures" className={styles.section}>
      <div id="ranks" className="absolute top-0" />
      <header className={styles.rankHeader}>
        <div className={styles.coinGlow} aria-hidden="true" />
        <button
          type="button"
          className={styles.coin}
          aria-label="Explore Frontline benefits"
          onClick={() => setSelectedTier(allTiers[0])}
        >
          <video
            src="https://kashy.ai/videos/animatedKSYCoinNew-alpha.webm"
            autoPlay
            loop
            muted
            playsInline
            aria-label="Animated K$Y coin"
            className="h-full w-full object-contain"
          />
        </button>
        <div className={styles.headingCopy}>
          <h2 className="m-0 font-inherit text-[min(4.375vw,84px)] font-bold leading-[1.13] tracking-[-.03em] text-[#b5e764] max-[700px]:text-[clamp(32px,8vw,44px)]">
            Climb the Ranks.
            <br />
            Unlock the Rewards.
          </h2>
          <p className="mx-auto mt-[min(1.05vw,20px)] text-[min(1.303vw,25px)] font-normal leading-[1.28] text-[#999] max-[700px]:mt-4 max-[700px]:text-sm">
            Five tiers from Frontline to LIFER &ndash; each level brings lower
            fees, bigger
            <br className="max-[700px]:hidden" /> opportunities, and elite
            status.
          </p>
        </div>
      </header>
      <div className={cards.cards}>
        {displayedTiers.map((tier) => (
          <button
            type="button"
            key={tier.id}
            className={cards.card}
            onClick={() => {
              sfx.playClick();
              setSelectedTier(tier);
            }}
            aria-label={`Explore ${tier.tag.replace("// ", "")} benefits`}
          >
            <div className={cards.cardHeading}>
              <span className={cards.cardTag}>
                {tier.tag.replace("//", "/ /")}
              </span>
              <h3 className={cards.cardTitle}>{tier.title}</h3>
            </div>
            <div
              className={`${cards.artwork} ${tierArtworkClasses[tier.id] ?? ""}`}
            >
              <img
                src={tier.image}
                alt={tier.imageAlt}
                className="absolute bottom-0 right-0 block h-auto max-w-none origin-center object-contain transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none group-hover:scale-125 group-focus-visible:scale-125 motion-reduce:!transform-none"
                loading="lazy"
                decoding="async"
              />
            </div>
            <ul className={cards.cardBullets}>
              {tier.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </button>
        ))}
      </div>
      <div className={styles.progression}>
        <button
          type="button"
          className={styles.mascot}
          onClick={() => setSelectedTier(allTiers[0])}
          aria-label="Explore the Kashy ranks"
        >
          <img
            src="https://kashy.ai/assets/kashynewavatar-Cj55LjIY.png"
            alt="Kashy bunny mascot"
            className={styles.mascotImage}
          />
        </button>
        <div className={styles.progressionCopy}>
          <p className="m-0">
            Five tiers. One ultimate goal. Begin at{" "}
            <span
              className={`${gasoekOne.className} mx-[5px] inline-block rounded-full bg-[#273f00] px-3.5 text-[min(1.667vw,32px)] leading-[1.4] text-[#b5e764] align-middle max-[700px]:mx-[3px] max-[700px]:px-[9px] max-[700px]:text-lg`}
            >
              FRONTLINE
            </span>
            , level up through{" "}
            <span
              className={`${gasoekOne.className} mx-[5px] inline-block rounded-full bg-[#ff9338] px-3.5 text-[min(1.667vw,32px)] leading-[1.4] text-white align-middle max-[700px]:mx-[3px] max-[700px]:px-[9px] max-[700px]:text-lg`}
            >
              OG
            </span>
          </p>
          <p className="m-0">
            and{" "}
            <span
              className={`${gasoekOne.className} mx-[5px] inline-block rounded-full bg-[#7b6ad4] px-3.5 text-[min(1.667vw,32px)] leading-[1.4] text-white align-middle max-[700px]:mx-[3px] max-[700px]:px-[9px] max-[700px]:text-lg`}
            >
              OOG
            </span>
            , dominate as{" "}
            <span
              className={`${gasoekOne.className} mx-[5px] inline-block rounded-full bg-[#fd2854] px-3.5 text-[min(1.667vw,32px)] leading-[1.4] text-white align-middle max-[700px]:mx-[3px] max-[700px]:px-[9px] max-[700px]:text-lg`}
            >
              OOOG
            </span>{" "}
            and ascend to the legendary{" "}
            <span
              className={`${gasoekOne.className} mx-[5px] inline-block rounded-full bg-[#ad9768] px-3.5 text-[min(1.667vw,32px)] leading-[1.4] text-white align-middle max-[700px]:mx-[3px] max-[700px]:px-[9px] max-[700px]:text-lg`}
            >
              LIFER
            </span>{" "}
            status.
          </p>
          <p>
            Every tier multiplies your rewards, expands your benefits, and
            brings you closer
          </p>
          <p>to owning equity in the platform you helped build.</p>
        </div>
      </div>
      <div id="legends-become-owners" className={styles.owners}>
        <header className="mb-[min(5.208vw,100px)] px-5 text-center max-[700px]:mb-10">
          <h2 className="m-0 bg-[linear-gradient(95deg,#ffe687_15%,#7c6e3a_90%)] bg-clip-text font-inherit text-[min(4.375vw,84px)] font-bold leading-[1.13] tracking-[-.03em] text-transparent max-[700px]:text-[clamp(32px,8vw,44px)]">
            Where Legends Become Owners
          </h2>
          <p className="mx-auto mt-[min(1.05vw,20px)] text-[min(1.563vw,30px)] leading-[1.28] text-[#999] max-[700px]:mt-[18px] max-[700px]:text-base">
            LIFER signifies true ownership, not just a tier. Skip the climb and
            secure your stake in the
            <br className="max-[700px]:hidden" /> platform you're building.
          </p>
        </header>
        <div className={cards.cards}>
          {liferShowcaseCards.map((card) => (
            <button
              type="button"
              key={card.id}
              className={`${cards.card} ${tierStyles.liferCard}`}
              onClick={() => {
                sfx.playClick();
                setSelectedLiferCard(card);
              }}
              aria-label={`Explore LIFER: ${card.title}`}
            >
              <div className={tierStyles.liferHeading}>
                <span className="block">
                  / / LIFER
                </span>
                <h3 className="m-0">
                  {card.title}
                </h3>
              </div>
              <ul className={tierStyles.liferBullets}>
                {card.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <div className={tierStyles.liferArtwork}>
                <img
                  src={card.image}
                  alt={card.imageAlt}
                  className="absolute bottom-0 right-0 block h-[90%] w-auto max-w-none origin-center object-contain transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none group-hover:scale-125 group-focus-visible:scale-125 motion-reduce:!transform-none"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </button>
          ))}
        </div>
        <div className="mx-auto mt-[min(5.73vw,110px)] w-[min(51vw,980px)] pb-[min(6.25vw,120px)] max-[700px]:mt-[52px] max-[700px]:w-4/5 max-[700px]:pb-16">
          <img
            src={liferGold3dTextImg.src}
            alt="LIFER in liquid gold"
            className="block h-auto w-full"
          />
        </div>
      </div>
      {/* 6. Detailed Tier Inspection Modal */}
      <AnimatePresence>
        {selectedTier && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedTier(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative z-10 w-full max-w-2xl bg-[#0e100f] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-start justify-between">
                <div>
                  <span className="font-sans text-xs font-bold text-[#9ae600] tracking-wider">
                    {selectedTier.tag}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                    {selectedTier.title}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1">
                    Volume Range:{" "}
                    <strong className="text-white">
                      {selectedTier.volumeRange}
                    </strong>{" "}
                    • Swap Fee:{" "}
                    <strong className="text-[#9ae600]">
                      {selectedTier.feeRate}
                    </strong>
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedTier(null)}
                  className="p-2 rounded-full bg-neutral-900 border border-white/10 text-neutral-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Visual Showcase */}
              <div className="mt-6 relative h-48 rounded-2xl overflow-hidden border border-white/10 bg-neutral-950 flex items-center justify-center">
                <img
                  src={selectedTier.image}
                  alt={selectedTier.imageAlt}
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full bg-[#9ae600] text-black font-extrabold text-[11px] uppercase tracking-wider">
                      {selectedTier.referrals}
                    </span>
                    <span className="text-xs font-sans text-neutral-300">
                      Tier Verified Rails
                    </span>
                  </div>
                </div>
              </div>

              {/* Perks List */}
              <div className="mt-6 space-y-2.5">
                <h4 className="text-xs font-sans uppercase tracking-wider text-neutral-400">
                  Included Protocol Privileges:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedTier.perks.map((perk, pIdx) => (
                    <div
                      key={pIdx}
                      className="flex items-start gap-2 text-xs text-neutral-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#9ae600] shrink-0 mt-0.5" />
                      <span>{perk}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setSelectedTier(null)}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-full border border-neutral-700 text-neutral-300 hover:text-white text-xs font-bold uppercase tracking-wider"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={() => {
                    sfx.playLevelUp();
                    setSelectedTier(null);
                    onOpenSignUp();
                  }}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#9ae600] hover:bg-[#aaff00] text-black text-xs font-extrabold uppercase tracking-wider shadow-lg shadow-[#9ae600]/25 flex items-center justify-center gap-2"
                >
                  <span>Apply For {selectedTier.tag}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
        {/* 7. Detailed LIFER Inspection Modal */}
        {selectedLiferCard && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedLiferCard(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative z-10 w-full max-w-2xl bg-[#0e100f] border border-[#dfbf72]/25 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-start justify-between">
                <div>
                  <span className="font-sans text-xs font-bold text-[#dfbf72] tracking-wider">
                    {selectedLiferCard.tag} • OWNERSHIP CLASS
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                    {selectedLiferCard.title}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1">
                    Permanent Sovereign Status • Direct Platform Stake
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedLiferCard(null)}
                  className="p-2 rounded-full bg-neutral-900 border border-white/10 text-neutral-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Visual Showcase */}
              <div className="mt-6 relative h-48 rounded-2xl overflow-hidden border border-white/10 bg-neutral-950 flex items-center justify-center">
                <img
                  src={selectedLiferCard.image}
                  alt={selectedLiferCard.imageAlt}
                  className="w-full h-full object-contain p-4"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full bg-[#dfbf72] text-black font-extrabold text-[11px] uppercase tracking-wider">
                      LIFER Founder Stake
                    </span>
                    <span className="text-xs font-sans text-neutral-300">
                      Sovereign DAO Rights
                    </span>
                  </div>
                </div>
              </div>

              {/* Perks List */}
              <div className="mt-6 space-y-2.5">
                <h4 className="text-xs font-sans uppercase tracking-wider text-neutral-400">
                  Included Sovereign Privileges:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedLiferCard.perks.map((perk, pIdx) => (
                    <div
                      key={pIdx}
                      className="flex items-start gap-2 text-xs text-neutral-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#dfbf72] shrink-0 mt-0.5" />
                      <span>{perk}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setSelectedLiferCard(null)}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-full border border-neutral-700 text-neutral-300 hover:text-white text-xs font-bold uppercase tracking-wider"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={() => {
                    sfx.playLevelUp();
                    setSelectedLiferCard(null);
                    onOpenSignUp();
                  }}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#dfbf72] hover:bg-[#ebd59b] text-black text-xs font-extrabold uppercase tracking-wider shadow-lg shadow-[#dfbf72]/25 flex items-center justify-center gap-2"
                >
                  <span>Apply For {selectedLiferCard.title}</span>
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
