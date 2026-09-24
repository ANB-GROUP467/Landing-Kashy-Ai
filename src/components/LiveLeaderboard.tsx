import { useState } from "react";
import { Trophy, CheckCircle2, Circle, Flame, Award, Gift } from "lucide-react";
import { sfx } from "../utils/sound";
import { QuestItem, LeaderboardUser } from "../types";

export default function LiveLeaderboard() {
  const [activeTab, setActiveTab] = useState<"quests" | "leaderboard">(
    "quests",
  );
  const [quests, setQuests] = useState<QuestItem[]>([
    {
      id: "q1",
      title: "Execute 3 Instant Gasless Trades",
      reward: "+350 XP",
      progress: 3,
      total: 3,
      completed: true,
    },
    {
      id: "q2",
      title: "Maintain 5-Day Consecutive Trading Streak",
      reward: "2.0x Boost",
      progress: 4,
      total: 5,
      completed: false,
    },
    {
      id: "q3",
      title: "Try AI Auto-Pilot Route on Arbitrum",
      reward: "+500 XP & Mystery Box",
      progress: 0,
      total: 1,
      completed: false,
    },
  ]);

  const [claimedReward, setClaimedReward] = useState<string | null>(null);

  const leaderboardUsers: LeaderboardUser[] = [
    {
      rank: 1,
      name: "SatoshiBunny",
      avatar: "🐰",
      volume: "$1.42M",
      level: 42,
      badge: "Crown Apex",
    },
    {
      rank: 2,
      name: "NeonViper",
      avatar: "⚡",
      volume: "$980K",
      level: 36,
      badge: "Master Trader",
    },
    {
      rank: 3,
      name: "ZeroGasChad",
      avatar: "💎",
      volume: "$840K",
      level: 31,
      badge: "DeFi Legend",
    },
    {
      rank: 4,
      name: "QuantumKash",
      avatar: "🤖",
      volume: "$620K",
      level: 28,
      badge: "AI Strategist",
    },
    {
      rank: 5,
      name: "You (Guest)",
      avatar: "✨",
      volume: "$14.2K",
      level: 7,
      badge: "Rising Star",
    },
  ];

  const handleCompleteQuest = (id: string) => {
    sfx.playLevelUp();
    setQuests((prev) =>
      prev.map((q) => {
        if (q.id === id) {
          const nextVal = Math.min(q.progress + 1, q.total);
          return { ...q, progress: nextVal, completed: nextVal === q.total };
        }
        return q;
      }),
    );
    setClaimedReward("+250 XP Collected! Level Up closer!");
    setTimeout(() => setClaimedReward(null), 3000);
  };

  return (
    <div className="p-5 sm:p-7 rounded-3xl bg-[#111613] border border-neutral-800/90 shadow-xl flex flex-col justify-between h-full relative overflow-hidden">
      <div>
        {/* Top Header & Tab Switcher */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-[#182216] border border-[#9ae600]/30 text-[#9ae600]">
              <Trophy className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white font-display">
                Gamified Quest Hub
              </h3>
              <p className="text-xs text-neutral-400">
                Weekly guild rewards & ranking
              </p>
            </div>
          </div>

          <div className="flex bg-neutral-900 border border-neutral-800 p-1 rounded-xl">
            <button
              type="button"
              onClick={() => {
                sfx.playClick();
                setActiveTab("quests");
              }}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors ${
                activeTab === "quests"
                  ? "bg-[#9ae600] text-black"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              Quests
            </button>
            <button
              type="button"
              onClick={() => {
                sfx.playClick();
                setActiveTab("leaderboard");
              }}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors ${
                activeTab === "leaderboard"
                  ? "bg-[#9ae600] text-black"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              Ranks
            </button>
          </div>
        </div>
        {claimedReward && (
          <div className="mb-3 p-2.5 rounded-xl bg-[#9ae600]/20 border border-[#9ae600]/40 text-[#9ae600] text-xs font-bold text-center animate-bounce">
            🎉 {claimedReward}
          </div>
        )}

        {activeTab === "quests" ? (
          <div className="space-y-3 my-3">
            {quests.map((q) => (
              <div
                key={q.id}
                className="p-3.5 rounded-2xl bg-black/40 border border-neutral-800/80 hover:border-neutral-700 transition-colors"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-start gap-2.5">
                    {q.completed ? (
                      <CheckCircle2 className="w-4 h-4 text-[#9ae600] mt-0.5 shrink-0" />
                    ) : (
                      <Circle className="w-4 h-4 text-neutral-500 mt-0.5 shrink-0" />
                    )}
                    <div>
                      <h4 className="text-xs sm:text-sm font-semibold text-neutral-200">
                        {q.title}
                      </h4>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[11px] font-sans font-bold text-[#a3e635] bg-[#1a2517] px-2 py-0.5 rounded-md">
                          {q.reward}
                        </span>
                        <span className="text-[11px] text-neutral-400">
                          {q.progress}/{q.total} steps
                        </span>
                      </div>
                    </div>
                  </div>

                  {!q.completed && (
                    <button
                      type="button"
                      onClick={() => handleCompleteQuest(q.id)}
                      className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-neutral-800 hover:bg-[#9ae600] hover:text-black text-white transition-colors"
                    >
                      Progress
                    </button>
                  )}
                </div>

                {/* Progress bar */}
                <div className="w-full h-1.5 bg-neutral-800 rounded-full mt-3 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#84cc16] to-[#9ae600] rounded-full transition-all duration-300"
                    style={{ width: `${(q.progress / q.total) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-2 my-3">
            {leaderboardUsers.map((user) => (
              <div
                key={user.rank}
                className={`flex items-center justify-between p-2.5 rounded-xl border transition-colors ${
                  user.name.includes("You")
                    ? "bg-[#182216]/60 border-[#9ae600]/40"
                    : "bg-black/30 border-neutral-800/80"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`w-6 text-center font-sans text-xs font-black ${
                      user.rank === 1
                        ? "text-amber-400"
                        : user.rank === 2
                          ? "text-slate-300"
                          : user.rank === 3
                            ? "text-amber-600"
                            : "text-neutral-500"
                    }`}
                  >
                    #{user.rank}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-neutral-800 flex items-center justify-center text-sm">
                    {user.avatar}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white flex items-center gap-1.5">
                      <span>{user.name}</span>
                      <span className="text-[10px] text-neutral-400 font-normal">
                        LVL {user.level}
                      </span>
                    </div>
                    <span className="text-[10px] text-neutral-400 font-sans">
                      {user.badge}
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-xs font-sans font-bold text-[#a3e635]">
                    {user.volume}
                  </div>
                  <span className="text-[10px] text-neutral-400 font-medium">
                    Vol.
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mt-4 pt-3 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-400">
        <div className="flex items-center gap-1.5">
          <Gift className="w-4 h-4 text-[#9ae600]" />
          <span>Next Crate Drop: in 4h 12m</span>
        </div>
        <span className="text-[#a3e635] font-bold">50,000 $KASHY Pool</span>
      </div>
    </div>
  );
}
