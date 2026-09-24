import { useState } from "react";
import { Zap, Check, ArrowRight, RefreshCw, Cpu } from "lucide-react";
import { sfx } from "../utils/sound";

export default function PaymentFlowSimulator() {
  const [status, setStatus] = useState<
    "idle" | "routing" | "relaying" | "success"
  >("idle");
  const [txHash, setTxHash] = useState<string>("0x7f...a92e");
  const [selectedToken, setSelectedToken] = useState<"USDC" | "SOL" | "ETH">(
    "USDC",
  );

  const handleSimulate = () => {
    sfx.playClick();
    setStatus("routing");
    setTimeout(() => {
      setStatus("relaying");
      setTimeout(() => {
        setStatus("success");
        sfx.playLevelUp();
        setTxHash(
          "0x" +
            Math.random().toString(16).substring(2, 8) +
            "..." +
            Math.random().toString(16).substring(2, 6),
        );
      }, 700);
    }, 600);
  };

  const handleReset = () => {
    sfx.playClick();
    setStatus("idle");
  };

  return (
    <div className="p-5 sm:p-7 rounded-3xl bg-[#111613] border border-neutral-800/90 shadow-xl flex flex-col justify-between h-full relative overflow-hidden">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-[#182216] border border-[#9ae600]/30 text-[#9ae600]">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white font-display">
                Zero-Gas Settlement Flow
              </h3>
              <p className="text-xs text-neutral-400">
                0.03s AI optimized cross-chain rail
              </p>
            </div>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-[#182615] border border-[#a3e635]/30 text-[#a3e635] text-[10px] font-sans font-bold">
            99.98% UPTIME
          </span>
        </div>
        <div className="flex items-center gap-2 mb-4">
          {(["USDC", "SOL", "ETH"] as const).map((token) => (
            <button
              key={token}
              type="button"
              onClick={() => {
                sfx.playClick();
                setSelectedToken(token);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors ${
                selectedToken === token
                  ? "bg-[#9ae600] text-black shadow-sm"
                  : "bg-neutral-900 border border-neutral-800 text-neutral-300"
              }`}
            >
              {token}
            </button>
          ))}
          <span className="text-[11px] text-neutral-400 ml-auto font-sans">
            Amount: $250.00
          </span>
        </div>
        <div className="p-4 rounded-2xl bg-black/40 border border-neutral-800/80 space-y-3 my-3">
          <div className="flex items-center justify-between text-xs">
            <span className="text-neutral-400">Payment Routing:</span>
            <span className="font-sans text-[#a3e635] font-bold">
              Kashy AI Quantum Relayer
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2 text-center text-[11px]">
            <div
              className={`p-2 rounded-xl border transition-all ${
                status === "routing"
                  ? "bg-[#9ae600]/20 border-[#9ae600] text-white animate-pulse"
                  : status === "relaying" || status === "success"
                    ? "bg-neutral-900 border-neutral-700 text-neutral-300"
                    : "bg-neutral-900/50 border-neutral-800 text-neutral-500"
              }`}
            >
              <Cpu className="w-3.5 h-3.5 mx-auto mb-1 text-[#9ae600]" />
              <span>AI Route</span>
            </div>

            <div
              className={`p-2 rounded-xl border transition-all ${
                status === "relaying"
                  ? "bg-[#9ae600]/20 border-[#9ae600] text-white animate-pulse"
                  : status === "success"
                    ? "bg-neutral-900 border-neutral-700 text-neutral-300"
                    : "bg-neutral-900/50 border-neutral-800 text-neutral-500"
              }`}
            >
              <Zap className="w-3.5 h-3.5 mx-auto mb-1 text-[#a3e635]" />
              <span>Gasless Relay</span>
            </div>

            <div
              className={`p-2 rounded-xl border transition-all ${
                status === "success"
                  ? "bg-[#9ae600]/30 border-[#9ae600] text-[#9ae600] font-bold"
                  : "bg-neutral-900/50 border-neutral-800 text-neutral-500"
              }`}
            >
              <Check className="w-3.5 h-3.5 mx-auto mb-1 text-[#9ae600]" />
              <span>Settled</span>
            </div>
          </div>
          <div className="pt-2 border-t border-neutral-800/80 flex justify-between items-center text-[11px]">
            <span className="text-neutral-400 font-sans">Tx: {txHash}</span>
            <span className="text-[#a3e635] font-sans font-bold">
              Latency: 0.034s
            </span>
          </div>
        </div>
        <div className="p-3 rounded-xl bg-[#141d13] border border-[#9ae600]/20 flex items-center justify-between">
          <div className="text-xs">
            <span className="text-white font-bold block">
              Gas Covered By Kashy Protocol
            </span>
            <span className="text-[11px] text-neutral-400">
              Network fee: $0.00 (Saved $4.80)
            </span>
          </div>
          <span className="text-xs font-sans font-bold text-[#9ae600]">
            +35 XP
          </span>
        </div>
      </div>
      <div className="mt-5 pt-3">
        {status === "success" ? (
          <button
            type="button"
            onClick={handleReset}
            className="w-full py-2.5 rounded-xl border border-neutral-700 bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5 text-[#9ae600]" />
            <span>Reset Test</span>
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSimulate}
            disabled={status !== "idle"}
            className="w-full py-3 rounded-xl bg-[#9ae600] hover:bg-[#aaff00] active:scale-98 text-black font-extrabold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all shadow-md shadow-[#9ae600]/20 cursor-pointer disabled:opacity-50"
          >
            {status === "idle" ? (
              <>
                <span>Simulate Instant Micropayment</span>
                <ArrowRight className="w-4 h-4" />
              </>
            ) : (
              <span>Routing Through Neural Relayer...</span>
            )}
          </button>
        )}
      </div>
    </div>
  );
}
