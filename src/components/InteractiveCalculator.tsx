import { useState } from 'react';
import { Calculator, Sparkles, TrendingUp, ShieldCheck, ArrowRight } from 'lucide-react';
import { sfx } from '../utils/sound';

interface InteractiveCalculatorProps {
  onOpenSignUp: () => void;
}

export default function InteractiveCalculator({ onOpenSignUp }: InteractiveCalculatorProps) {
  const [monthlyVolume, setMonthlyVolume] = useState<number>(15000);
  const [traderTier, setTraderTier] = useState<number>(2); // 1 = Novice, 2 = Cyber Pro, 3 = Apex Bunny
  const [includeStaking, setIncludeStaking] = useState<boolean>(true);

  // Derived Calculations
  const tierMultipliers = [1.2, 2.0, 3.5];
  const tierNames = ['Novice Bunny', 'Cyber Rabbit', 'Apex Kashy'];
  const currentMultiplier = tierMultipliers[traderTier - 1];

  const estimatedCashback = Math.round((monthlyVolume * 0.022 * currentMultiplier));
  const savedGasFees = Math.round(monthlyVolume * 0.0085);
  const earnedXp = Math.round(monthlyVolume * 1.5 * (includeStaking ? 1.4 : 1.0));
  const mysteryBoxes = Math.floor(monthlyVolume / 5000) * traderTier;

  return (
    <div className="p-5 sm:p-7 rounded-3xl bg-[#111613] border border-neutral-800/90 shadow-xl flex flex-col justify-between h-full relative overflow-hidden group">
      {/* Background soft glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#9ae600]/10 rounded-full blur-3xl pointer-events-none" />

      <div>
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2.5">
            <div className="p-2.5 rounded-xl bg-[#182216] border border-[#9ae600]/30 text-[#9ae600]">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white font-display">
                Yield & Reward Simulator
              </h3>
              <p className="text-xs text-neutral-400">Calculate your monthly gamified payout</p>
            </div>
          </div>
          <span className="px-2.5 py-1 rounded-full bg-[#9ae600]/15 border border-[#9ae600]/30 text-[#9ae600] text-[11px] font-sans font-bold">
            LIVE PREVIEW
          </span>
        </div>

        {/* Volume Slider Control */}
        <div className="space-y-4 my-5">
          <div>
            <div className="flex justify-between items-center text-xs font-semibold mb-2">
              <span className="text-neutral-300">Estimated Monthly Trade Volume:</span>
              <span className="text-base font-sans font-bold text-[#a3e635]">
                ${monthlyVolume.toLocaleString()}
              </span>
            </div>
            <input
              type="range"
              min={1000}
              max={150000}
              step={1000}
              value={monthlyVolume}
              onChange={(e) => {
                setMonthlyVolume(Number(e.target.value));
              }}
              className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-[#9ae600]"
              aria-label="Monthly trade volume slider"
            />
            <div className="flex justify-between text-[10px] font-sans text-neutral-400 mt-1">
              <span>$1,000</span>
              <span>$75,000</span>
              <span>$150,000+</span>
            </div>
          </div>

          {/* Tier Selector */}
          <div>
            <label className="block text-xs font-semibold text-neutral-300 mb-2">
              Select Kashy Trader Level:
            </label>
            <div className="grid grid-cols-3 gap-2">
              {tierNames.map((name, idx) => {
                const tierNum = idx + 1;
                const isSelected = traderTier === tierNum;
                return (
                  <button
                    key={name}
                    type="button"
                    onClick={() => {
                      sfx.playClick();
                      setTraderTier(tierNum);
                    }}
                    className={`py-2 px-2 rounded-xl text-xs font-bold transition-all ${
                      isSelected
                        ? 'bg-[#9ae600] text-black shadow-md shadow-[#9ae600]/25'
                        : 'bg-neutral-900 border border-neutral-800 text-neutral-300 hover:border-neutral-700'
                    }`}
                  >
                    <div>{name}</div>
                    <div className="text-[10px] opacity-80">{tierMultipliers[idx]}x Boost</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Staking Booster Checkbox */}
          <div className="flex items-center justify-between p-3 rounded-xl bg-neutral-900/70 border border-neutral-800">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#9ae600]" />
              <div>
                <div className="text-xs font-bold text-white">Enable Guild Staking Vault</div>
                <div className="text-[11px] text-neutral-400">+40% XP bonus on cross-border payments</div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => {
                sfx.playClick();
                setIncludeStaking(!includeStaking);
              }}
              className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors ${
                includeStaking ? 'bg-[#9ae600]' : 'bg-neutral-700'
              }`}
            >
              <div
                className={`bg-black w-4 h-4 rounded-full shadow-md transform transition-transform ${
                  includeStaking ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
          </div>
        </div>

        {/* Calculated Results Grid */}
        <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-black/40 border border-neutral-800/80 mb-5">
          <div>
            <span className="text-[11px] text-neutral-400 block font-medium">Estimated Cashback</span>
            <div className="flex items-baseline gap-1 mt-0.5">
              <span className="text-xl sm:text-2xl font-black text-white font-sans">
                ${estimatedCashback.toLocaleString()}
              </span>
              <span className="text-[10px] text-[#9ae600] font-bold">/mo</span>
            </div>
          </div>

          <div>
            <span className="text-[11px] text-neutral-400 block font-medium">Saved Network Fees</span>
            <div className="flex items-baseline gap-1 mt-0.5">
              <span className="text-xl sm:text-2xl font-black text-[#a3e635] font-sans">
                ${savedGasFees.toLocaleString()}
              </span>
              <span className="text-[10px] text-neutral-400">zero gas</span>
            </div>
          </div>

          <div className="pt-2 border-t border-neutral-800">
            <span className="text-[11px] text-neutral-400 block font-medium">Gamified XP Gained</span>
            <span className="text-sm sm:text-base font-bold text-purple-300 font-sans">
              +{earnedXp.toLocaleString()} XP
            </span>
          </div>

          <div className="pt-2 border-t border-neutral-800">
            <span className="text-[11px] text-neutral-400 block font-medium">Mystery Loot Crates</span>
            <span className="text-sm sm:text-base font-bold text-amber-300 font-sans">
              🎁 {mysteryBoxes} Unlocked
            </span>
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <button
        type="button"
        onClick={() => {
          sfx.playLevelUp();
          onOpenSignUp();
        }}
        className="w-full py-3 rounded-2xl bg-[#9ae600] hover:bg-[#aaff00] active:scale-98 text-black font-extrabold text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#9ae600]/25 cursor-pointer"
      >
        <span>Lock In Your {currentMultiplier}x Tier Rate</span>
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}
