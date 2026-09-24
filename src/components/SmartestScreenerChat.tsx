import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import type { SVGProps } from "react";
import { sfx } from "../utils/sound";

function FiFileText(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M5 3h10l4 4v14H5zM14 3v5h5M8 12h8M8 16h8" />
    </svg>
  );
}
function FiTrendingUp(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="m3 17 6-6 4 3 8-9M15 5h6v6" />
    </svg>
  );
}
function FiClock(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M20 10a8 8 0 1 0 0 5M20 3v6h-6M12 7v5l4 2" />
    </svg>
  );
}
function FiHelpCircle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M9 9a3 3 0 1 1 5 2c-2 1-2 2-2 3M12 17h.01" />
    </svg>
  );
}
function FiBarChart2(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <path d="M8 16v-5M12 16V7M16 16V9" />
    </svg>
  );
}
function Candles(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M7 3v3m0 11v4M17 3v7m0 8v3M4 6h6v11H4zM14 10h6v8h-6z" />
    </svg>
  );
}
function Question(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M8 7a4 4 0 1 1 6 3.5c-2 1-2 2-2 4M12 19h.01" />
    </svg>
  );
}
function FiCompass(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12h8m-4-4 4 4-4 4" />
    </svg>
  );
}
function FiMic(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="9" y="2" width="6" height="13" rx="3" />
      <path d="M5 10v2a7 7 0 0 0 14 0v-2M12 19v3" />
    </svg>
  );
}
function FiExternalLink(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M14 3h7v7m0-7L11 13M10 5H6a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-4" />
    </svg>
  );
}
function FiArrowUp(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 21V3M4 11l8-8 8 8" />
    </svg>
  );
}
function FiEye(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M2 14s4-8 10-8 10 8 10 8" />
      <circle cx="12" cy="14" r="3" />
    </svg>
  );
}
function FiSearch(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <circle cx="10" cy="10" r="8" />
      <path d="m16 16 6 6M7 8h6M7 12h4" />
    </svg>
  );
}
function FiSend(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M13 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-7M16 3h5v5m0-5-6 6M12 9c-4-2-5 3-1 3s3 5-1 3M11 7v10" />
    </svg>
  );
}
function FiArrowDownCircle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="6" />
      <circle cx="12" cy="12" r="6" />
      <path d="M12 7v9m-3-3 3 3 3-3M1 8h4" />
    </svg>
  );
}
function FiUser(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <circle cx="12" cy="7" r="4" />
      <path d="M4 21v-2a8 8 0 0 1 16 0v2" />
    </svg>
  );
}
function FiX(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="m6 6 12 12M6 18 18 6" />
    </svg>
  );
}
function HiSparkles(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="m12 2 3 7 7 3-7 3-3 7-3-7-7-3 7-3z" />
    </svg>
  );
}
function FaRobot(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="3" y="6" width="18" height="15" rx="4" />
      <path d="M12 2v4M7 12h1m8 0h1M8 17h8" />
    </svg>
  );
}

interface Message {
  id: string;
  sender: "user" | "ai";
  text: string;
  timestamp: string;
}

const presetPrompts = [
  {
    id: "p1",
    text: "What is the latest news on BTC",
    icon: FiFileText,
    iconColor: "text-sky-400",
    category: "News",
    reply:
      "Bitcoin is currently consolidating near key institutional resistance following strong spot ETF inflows ($420M+ net positive over 48h). On-chain hash rate hit an ATH, signaling robust miner confidence despite recent halving adjustments.",
  },
  {
    id: "p2",
    text: "What could affect BTC's future price?",
    icon: FiBarChart2,
    iconColor: "text-amber-400",
    category: "Analysis",
    reply:
      "Key catalysts driving BTC price trajectory include: 1) Global liquidity index expansions and interest rate easing, 2) Sovereign reserve adoption announcements, 3) Institutional accumulation by treasury reserves, and 4) Spot derivatives liquidity depth.",
  },
  {
    id: "p3",
    text: "What is the next on BTC roadmap",
    icon: FiCompass,
    iconColor: "text-rose-400",
    category: "Roadmap",
    reply:
      "Upcoming developments on the Bitcoin network highlight Layer-2 scalability improvements (BitVM, Lightning Network multi-path routing), Taproot Asset protocols, and enhanced zero-knowledge verification bridges.",
  },
  {
    id: "p4",
    text: "Why is BTC's price up today?",
    icon: FiTrendingUp,
    iconColor: "text-emerald-400",
    category: "Market",
    reply:
      "BTC surged +4.8% in the last 24 hours driven by short liquidations on major perpetual exchanges ($85M wiped in 4 hours), combined with heightened accumulation by long-term holders (>100 BTC addresses).",
  },
  {
    id: "p5",
    text: "What is the latest update in BTC's?",
    icon: FiClock,
    iconColor: "text-purple-400",
    category: "Update",
    reply:
      "The Bitcoin Core team merged minor protocol optimizations reducing node memory overhead during mempool congestion. Meanwhile, cumulative Lightning Network locked capacity reached 5,800+ BTC.",
  },
  {
    id: "p6",
    text: "What is BTC",
    icon: FiHelpCircle,
    iconColor: "text-red-400",
    category: "Basics",
    reply:
      "Bitcoin (BTC) is the world’s first decentralized digital currency, introduced in 2008 by Satoshi Nakamoto. It operates on a peer-to-peer cryptographic ledger without central bank interference, capped strictly at 21,000,000 units.",
  },
];

// Reference-style action icons.
const quickChips = [
  {
    id: "check",
    label: "Check",
    icon: FiSearch,
    command: "Check wallet balance & active positions",
  },
  {
    id: "balance",
    label: "Balance",
    icon: FiHelpCircle,
    command: "What is my current total available balance?",
  },
  {
    id: "analyze",
    label: "Analyze",
    icon: FiBarChart2,
    command: "Analyze BTC/USDC support and resistance levels",
  },
  {
    id: "send",
    label: "Send",
    icon: FiSend,
    command: "Send 500 K$YC to address 0x71...C9",
  },
  {
    id: "withdraw",
    label: "Withdraw",
    icon: FiArrowDownCircle,
    command: "Withdraw available USDC profits to bank account",
  },
];

interface SmartestScreenerChatProps {
  onOpenSignUp?: () => void;
}

export default function SmartestScreenerChat({
  onOpenSignUp,
}: SmartestScreenerChatProps) {
  const [inputValue, setInputValue] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isThinking, setIsThinking] = useState(false);
  const [, setActiveChip] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSendPrompt = (queryText: string, specificReply?: string) => {
    if (!queryText.trim()) return;

    sfx.playClick();
    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: queryText,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsThinking(true);

    setTimeout(() => {
      sfx.playLevelUp();
      const reply =
        specificReply ||
        `KA$HY Screener executed command: "${queryText}". Multi-chain verification completed across 14 liquidity hubs with 0.00% slippage.`;

      const aiMsg: Message = {
        id: `ai-${Date.now()}`,
        sender: "ai",
        text: reply,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      setMessages((prev) => [...prev, aiMsg]);
      setIsThinking(false);
    }, 650);
  };

  const handleMicClick = () => {
    sfx.playHover();
    setIsRecording(!isRecording);
    if (!isRecording) {
      setInputValue("Show me today's highest yield liquidity pools");
    }
  };

  return (
    <section
      id="screener"
      className="kashy-screener relative text-white overflow-hidden"
    >
      <style>{`
.kashy-screener{background:#000;padding:100px 24px 80px}
.kashy-screener .screener-container{max-width:1288px}
.kashy-screener .screener-card{position:relative;isolation:isolate;overflow:hidden;max-width:1000px;margin:0 auto;padding:24px 18px;border:1px solid #505050;border-radius:34px;background:#0b0b0b;box-shadow:inset 1px 1px 0 #555}
.kashy-screener .screener-card::before{content:"";position:absolute;z-index:-1;inset:0;pointer-events:none;background:radial-gradient(ellipse 31% 43% at 0% 79%,rgba(145,168,118,.43),transparent 78%),radial-gradient(ellipse 33% 44% at 100% 80%,rgba(172,101,183,.49),transparent 77%),radial-gradient(ellipse 57% 30% at 53% 100%,rgba(62,43,106,.23),transparent 90%)}
.kashy-screener .screener-prompts{gap:5px;margin-bottom:15px}
.kashy-screener .screener-prompts button{min-height:36px;padding:7px 12px;gap:8px;border:1px solid #2c2c2c;background:rgba(11,11,11,.65);color:#bac6d5;font-size:13px;font-weight:500;line-height:1.35;box-shadow:none}
.kashy-screener .screener-prompts svg{width:18px;height:18px;flex-shrink:0}
.kashy-screener .screener-input{max-width:780px;min-height:116px;margin:0 auto;padding:16px;background:#1f1f1f;border:1px solid #606060;border-radius:30px;box-shadow:0 -1px 0 #555}
.kashy-screener .screener-input input{font-size:13px;padding-bottom:48px;padding-right:0}
.kashy-screener .screener-input input::placeholder{color:#62666b;opacity:1}
.kashy-screener .screener-input>div{bottom:14px;left:16px;right:16px}
.kashy-screener .screener-input button{width:38px;height:38px;display:flex;align-items:center;justify-content:center;border:1px solid #2e2e2e;border-radius:18px;color:#bdc5ce}
.kashy-screener .screener-input button svg{width:18px;height:18px}
.kashy-screener .screener-input button[type=submit]{background:#505050;border:0;border-radius:17px}
.kashy-screener .screener-input button[type=submit] svg{width:22px;height:22px}
.kashy-screener .screener-input button[type=submit]:not(:disabled){background:#b1e65a;color:#111}
.kashy-screener .screener-actions{margin-top:15px;gap:5px}
.kashy-screener .screener-actions button{min-height:40px;padding:7px 12px;gap:8px;border:1px solid rgba(255,255,255,.055);border-radius:19px;background:rgba(15,14,20,.16);color:#bec8d7;font-size:14px;font-weight:400}
.kashy-screener .screener-actions button svg{width:22px;height:22px;color:inherit}
.kashy-screener .screener-actions button:first-child{width:40px;padding:6px;border:0;background:transparent;color:#b4ee48;margin-right:5px;box-shadow:none}
.kashy-screener .screener-actions button:first-child svg{width:28px;height:28px}
.kashy-screener button:hover{filter:brightness(1.16)}
.kashy-screener button:focus-visible{outline:2px solid #b4ee48;outline-offset:4px}
.kashy-screener .screener-copy{margin-top:74px;max-width:1200px}
.kashy-screener .screener-heading{font-size:clamp(30px,4vw,58px);line-height:1.14;letter-spacing:-1.4px}
.kashy-screener .screener-heading span{background-image:linear-gradient(100deg,#afe558 0%,#7d68d1 48%,#e67ed0 100%)}
.kashy-screener .screener-copy p{max-width:1080px;margin-top:25px;font-size:clamp(14px,1.6vw,22px);line-height:1.5;color:#999}
.kashy-screener .screener-copy>div{margin-top:70px}
.kashy-screener .screener-copy button{min-width:255px;min-height:60px;background:#101010;border-color:#383838;box-shadow:inset 0 1px 0 #606060;font-size:17px}
@media(max-width:767px){
.kashy-screener{padding:48px 16px}
.kashy-screener .screener-card{padding:24px 12px;border-radius:25px}
.kashy-screener .screener-prompts button{font-size:12px;min-height:36px;padding:8px 10px;gap:5px}
.kashy-screener .screener-prompts svg{width:15px;height:15px}
.kashy-screener .screener-input{border-radius:23px;padding:18px 14px}
.kashy-screener .screener-input input{font-size:13px}
.kashy-screener .screener-input>div{left:14px;right:14px}
.kashy-screener .screener-actions button{font-size:13px;min-height:42px;padding:8px 10px;gap:6px;border-radius:15px}
.kashy-screener .screener-actions button svg{width:18px;height:18px}
.kashy-screener .screener-copy{margin-top:48px}
.kashy-screener .screener-copy>div{margin-top:32px}
}`}</style>
      <div className="screener-container relative z-10 mx-auto">
        <div className="screener-card">
          <div className="screener-prompts flex flex-col items-center">
            <div className="flex justify-center">
              <button
                type="button"
                onClick={() =>
                  handleSendPrompt(
                    presetPrompts[0].text,
                    presetPrompts[0].reply,
                  )
                }
                onMouseEnter={() => sfx.playHover()}
                className="group inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-neutral-900/90 hover:bg-neutral-800 border border-white/10 hover:border-white/25 transition-all text-xs sm:text-[13px] text-neutral-300 hover:text-white shadow-sm"
              >
                <FiFileText className="w-3.5 h-3.5 text-sky-400 group-hover:scale-110 transition-transform" />
                <span>{presetPrompts[0].text}</span>
              </button>
            </div>
            <div className="flex flex-wrap justify-center gap-1.5">
              <button
                type="button"
                onClick={() =>
                  handleSendPrompt(
                    presetPrompts[1].text,
                    presetPrompts[1].reply,
                  )
                }
                onMouseEnter={() => sfx.playHover()}
                className="group inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-neutral-900/90 hover:bg-neutral-800 border border-white/10 hover:border-white/25 transition-all text-xs sm:text-[13px] text-neutral-300 hover:text-white shadow-sm"
              >
                <Candles className="w-3.5 h-3.5 text-amber-400 group-hover:scale-110 transition-transform" />
                <span>{presetPrompts[1].text}</span>
              </button>

              <button
                type="button"
                onClick={() =>
                  handleSendPrompt(
                    presetPrompts[2].text,
                    presetPrompts[2].reply,
                  )
                }
                onMouseEnter={() => sfx.playHover()}
                className="group inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-neutral-900/90 hover:bg-neutral-800 border border-white/10 hover:border-white/25 transition-all text-xs sm:text-[13px] text-neutral-300 hover:text-white shadow-sm"
              >
                <FiCompass className="w-3.5 h-3.5 text-rose-400 group-hover:scale-110 transition-transform" />
                <span>{presetPrompts[2].text}</span>
              </button>
            </div>
            <div className="flex flex-wrap justify-center gap-1.5">
              <button
                type="button"
                onClick={() =>
                  handleSendPrompt(
                    presetPrompts[3].text,
                    presetPrompts[3].reply,
                  )
                }
                onMouseEnter={() => sfx.playHover()}
                className="group inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-neutral-900/90 hover:bg-neutral-800 border border-white/10 hover:border-white/25 transition-all text-xs sm:text-[13px] text-neutral-300 hover:text-white shadow-sm"
              >
                <FiTrendingUp className="w-3.5 h-3.5 text-emerald-400 group-hover:scale-110 transition-transform" />
                <span>{presetPrompts[3].text}</span>
              </button>

              <button
                type="button"
                onClick={() =>
                  handleSendPrompt(
                    presetPrompts[4].text,
                    presetPrompts[4].reply,
                  )
                }
                onMouseEnter={() => sfx.playHover()}
                className="group inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-neutral-900/90 hover:bg-neutral-800 border border-white/10 hover:border-white/25 transition-all text-xs sm:text-[13px] text-neutral-300 hover:text-white shadow-sm"
              >
                <FiClock className="w-3.5 h-3.5 text-purple-400 group-hover:scale-110 transition-transform" />
                <span>{presetPrompts[4].text}</span>
              </button>

              <button
                type="button"
                onClick={() =>
                  handleSendPrompt(
                    presetPrompts[5].text,
                    presetPrompts[5].reply,
                  )
                }
                onMouseEnter={() => sfx.playHover()}
                className="group inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-neutral-900/90 hover:bg-neutral-800 border border-white/10 hover:border-white/25 transition-all text-xs sm:text-[13px] text-neutral-300 hover:text-white shadow-sm"
              >
                <Question className="w-3.5 h-3.5 text-red-400 group-hover:scale-110 transition-transform" />
                <span>{presetPrompts[5].text}</span>
              </button>
            </div>
          </div>
          <AnimatePresence>
            {messages.length > 0 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mb-6 space-y-3 max-h-64 overflow-y-auto pr-2 rounded-2xl bg-black/40 border border-white/5 p-4"
              >
                <div className="flex items-center justify-between pb-2 border-b border-white/5 text-[11px] font-sans text-neutral-400">
                  <span className="flex items-center gap-1.5 text-[#9ae600]">
                    <HiSparkles className="w-3 h-3" />
                    <span>KA$HY AI SCREENER INTELLIGENCE</span>
                  </span>
                  <button
                    type="button"
                    onClick={() => setMessages([])}
                    className="hover:text-white flex items-center gap-1 text-[10px]"
                  >
                    <FiX className="w-3 h-3" />
                    <span>Clear</span>
                  </button>
                </div>

                {messages.map((m) => (
                  <motion.div
                    key={m.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-start gap-2.5 text-[12px] sm:text-[13px] ${
                      m.sender === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    {m.sender === "ai" && (
                      <div className="w-6 h-6 rounded-full bg-[#182613] border border-[#9ae600]/40 flex items-center justify-center shrink-0 mt-0.5 text-[#9ae600]">
                        <FaRobot className="w-3.5 h-3.5" />
                      </div>
                    )}
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-2.5 leading-relaxed ${
                        m.sender === "user"
                          ? "bg-[#1e2321] text-white border border-white/10 rounded-br-sm"
                          : "bg-[#121614] text-neutral-200 border border-[#9ae600]/20 rounded-bl-sm shadow-md"
                      }`}
                    >
                      <p>{m.text}</p>
                      <span className="block text-[10px] text-neutral-500 text-right mt-1 font-sans">
                        {m.timestamp}
                      </span>
                    </div>
                    {m.sender === "user" && (
                      <div className="w-6 h-6 rounded-full bg-neutral-800 flex items-center justify-center shrink-0 mt-0.5 text-neutral-300">
                        <FiUser className="w-3.5 h-3.5" />
                      </div>
                    )}
                  </motion.div>
                ))}

                {isThinking && (
                  <div className="flex items-center gap-2 text-xs text-[#9ae600] font-sans py-1">
                    <span className="animate-spin">✦</span>
                    <span>
                      KA$HY Screener routing across on-chain orderbooks...
                    </span>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendPrompt(inputValue);
            }}
            className="screener-input relative rounded-[22px] sm:rounded-[26px] bg-[#181a1c] border border-white/10 focus-within:border-white/30 transition-colors p-4 sm:p-5 shadow-inner"
          >
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="What information are you looking for?"
              className="w-full bg-transparent text-white text-sm sm:text-base placeholder-neutral-500 focus:outline-none pr-12 pb-8"
            />

            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
              <div className="flex items-center gap-2 text-neutral-400">
                <button
                  type="button"
                  onClick={() => {
                    sfx.playHover();
                    handleSendPrompt("Open decentralized terminal deep view");
                  }}
                  className="p-2 rounded-xl hover:bg-neutral-800/80 hover:text-white transition-colors"
                  title="Expand terminal"
                >
                  <FiExternalLink className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleMicClick}
                  className={`p-2 rounded-xl hover:bg-neutral-800/80 transition-colors ${
                    isRecording
                      ? "text-rose-400 bg-rose-950/40 animate-pulse"
                      : "hover:text-white"
                  }`}
                  title={isRecording ? "Listening..." : "Voice command"}
                >
                  <FiMic className="w-4 h-4" />
                </button>
              </div>

              <button
                type="submit"
                disabled={!inputValue.trim() || isThinking}
                className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                  inputValue.trim()
                    ? "bg-white text-black hover:bg-neutral-200 scale-105 shadow-md shadow-white/20"
                    : "bg-neutral-800 text-neutral-400 hover:text-neutral-200"
                }`}
                title="Send query"
              >
                <FiArrowUp className="w-4 h-4" />
              </button>
            </div>
          </form>

          <div className="screener-actions mt-5 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            <button
              type="button"
              onClick={() => {
                sfx.playClick();
                handleSendPrompt("Watchlist overview & top momentum gainers");
              }}
              className="w-8 h-8 rounded-full bg-neutral-900 border border-white/10 hover:border-[#9ae600]/50 flex items-center justify-center text-[#9ae600] hover:scale-105 transition-all shadow-sm"
              title="Watchlist & Eye Radar"
            >
              <FiEye className="w-4 h-4" />
            </button>

            {quickChips.map((chip) => {
              const Icon = chip.icon;
              return (
                <button
                  key={chip.id}
                  type="button"
                  onClick={() => {
                    sfx.playClick();
                    setActiveChip(chip.id);
                    handleSendPrompt(chip.command);
                  }}
                  onMouseEnter={() => sfx.playHover()}
                  className="group inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 rounded-full bg-neutral-900/80 hover:bg-neutral-800 border border-white/10 hover:border-white/25 transition-all text-xs font-medium text-neutral-300 hover:text-white"
                >
                  <Icon className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#9ae600] transition-colors" />
                  <span>{chip.label}</span>
                </button>
              );
            })}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="screener-copy text-center mx-auto"
        >
          <h2 className="screener-heading text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.08] font-display">
            <span className="bg-gradient-to-r from-[#9ae600] via-[#a5b4fc] to-[#f472b6] bg-clip-text text-transparent">
              The Smartest Screener in the World
            </span>
          </h2>

          <p className="mt-5 text-sm sm:text-base md:text-lg text-neutral-400 font-normal leading-relaxed max-w-3xl mx-auto">
            You're no longer restricted by buttons or complex workflows. KA$HY
            AI's chatbot turns your thoughts into executed commands—whether it's
            payments, trades, or account management—without friction.
          </p>

          <div className="mt-8 sm:mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => {
                sfx.playClick();
                if (inputRef.current) {
                  inputRef.current.focus();
                  inputRef.current.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                }
              }}
              onMouseEnter={() => sfx.playHover()}
              className="!min-h-[40px] !min-w-[160px] !px-5 !py-2 rounded-full bg-[#121415] hover:bg-[#1b1e20] text-white text-xs font-semibold tracking-wide border border-white/20 hover:border-white/40 shadow-xl shadow-black/60 transition-all hover:scale-[1.03] active:scale-95 flex items-center gap-2"
            >
              <span>Start Screening</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
