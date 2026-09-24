import { useState } from "react";
import { motion } from "motion/react";
import { sfx } from "../utils/sound";

import podiumImg from "../assets/images/tier_podium_steps_1789984715925.jpg";
import sportsCarImg from "../assets/images/tier_sports_car_1789984728069.jpg";
import sphereImg from "../assets/images/tier_geodesic_sphere_1789984742470.jpg";

interface RankProgressionProps {
  onOpenSignUp: () => void;
}

export default function RankProgression({
  onOpenSignUp,
}: RankProgressionProps) {
  // Interactive XP & Level state
  const [xp, setXp] = useState(2450);
  const [userLevel, setUserLevel] = useState(14);
  const [activeTierTab, setActiveTierTab] = useState<number>(1); // 0, 1, 2

  const tiers = [
    {
      id: "initiate",
      levelRange: "Level 1 – 10",
      minLevel: 1,
      title: "Your Journey Begins",
      subtitle: "The Gateway to Kashy",
      multiplier: "1.0x",
      feeDiscount: "Standard Rates",
      image: podiumImg.src,
      badge: "// FRONTLINE",
      badgeColor: "border-neutral-700 bg-neutral-900 text-neutral-300",
      accentColor: "#a3a3a3",
      perks: [
        "Zero gas fees on first 10 monthly swaps",
        "Standard APY staking in public liquidity pools",
        "Community Discord access & badge",
        "Daily login streak rewards (up to 50 XP/day)",
      ],
    },
    {
      id: "apex",
      levelRange: "Level 11 – 50",
      minLevel: 11,
      title: "Prove Your Commitment",
      subtitle: "High-Velocity Alpha Guild",
      multiplier: "2.5x",
      feeDiscount: "50% Off Swap Fees",
      image: sportsCarImg.src,
      badge: "// OG",
      badgeColor: "border-[#9ae600]/40 bg-[#162213] text-[#a3e635]",
      accentColor: "#9ae600",
      perks: [
        "Permanent 2.5x XP multiplier on all transactions",
        "50% discount on DEX execution fees",
        "Priority routing with MEV front-run shielding",
        "Early whitelist allocation for partner token launches",
        "Custom animated neon avatar frame",
      ],
    },
    {
      id: "grandmaster",
      levelRange: "Level 51 – 100",
      minLevel: 51,
      title: "Master Your Network",
      subtitle: "Whale Council & Protocol Sovereign",
      multiplier: "5.0x",
      feeDiscount: "0% Platform Fees Forever",
      image: sphereImg.src,
      badge: "// OOG",
      badgeColor: "border-amber-500/40 bg-amber-950/40 text-amber-400",
      accentColor: "#f59e0b",
      perks: [
        "Max 5.0x yield multiplier on treasury vaults",
        "Perpetual 0% platform swap fee",
        "Direct DAO proposal creation & emergency quorum rights",
        "Concierge 1-on-1 private telegram alpha feed",
        "Heavyweight laser-engraved metal Kashy card",
      ],
    },
  ];

  const handleAddXp = (amount: number) => {
    sfx.playClick();
    const newXp = xp + amount;
    setXp(newXp);
    const calculatedLevel = Math.min(100, Math.floor(newXp / 200) + 1);
    if (calculatedLevel > userLevel) {
      sfx.playLevelUp();
    }
    setUserLevel(calculatedLevel);

    if (calculatedLevel >= 51) {
      setActiveTierTab(2);
    } else if (calculatedLevel >= 11) {
      setActiveTierTab(1);
    } else {
      setActiveTierTab(0);
    }
  };

  const currentTier =
    userLevel >= 51 ? tiers[2] : userLevel >= 11 ? tiers[1] : tiers[0];
  const nextLevelXp = userLevel * 200;
  const currentLevelBaseXp = (userLevel - 1) * 200;
  const progressPercent = Math.min(
    100,
    Math.max(
      0,
      ((xp - currentLevelBaseXp) / (nextLevelXp - currentLevelBaseXp)) * 100,
    ),
  );

  return (
    <section
      id="ranks"
      aria-label="Climb the Ranks"
      className="relative w-full bg-black"
    >
      <div className="mx-auto max-w-[1600px] border-t border-white/15">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {tiers.map((tier, idx) => (
            <motion.article
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative flex min-h-[720px] flex-col overflow-hidden bg-black ${
                idx !== tiers.length - 1
                  ? "border-b border-white/20 md:border-b-0 md:border-r md:border-white/20"
                  : "border-b border-white/20"
              }`}
            >
              <div className="relative flex h-full flex-col px-5 pb-7 pt-8 sm:px-7">
                <div className="mb-5">
                  <div className="font-sans text-[10px] font-semibold uppercase tracking-[0.24em] text-white/80">
                    {tier.badge}
                  </div>
                  <h3 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
                    {tier.title}
                  </h3>
                </div>

                <div className="relative mt-auto flex-1">
                  <ul className="space-y-2.5 text-sm leading-relaxed text-white/80 sm:text-[15px]">
                    {tier.perks.map((perk, perkIdx) => (
                      <li key={perkIdx} className="flex items-start gap-2.5">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
                        <span>{perk}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pointer-events-none absolute bottom-0 right-0 h-[260px] w-[280px] sm:h-[300px] sm:w-[330px]">
                <img
                  src={tier.image}
                  alt={tier.title}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-contain object-bottom-right"
                />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
