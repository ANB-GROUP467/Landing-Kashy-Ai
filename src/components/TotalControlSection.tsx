import { useState } from "react";
import {
  ArrowUp,
  BarChart3,
  Check,
  ChevronDown,
  CircleHelp,
  Copy,
  ExternalLink,
  Eye,
  KeyRound,
  Mic,
  MoreVertical,
  RotateCcw,
  Search,
  Share2,
  ThumbsDown,
  ThumbsUp,
  Wallet,
} from "lucide-react";

import laptopFrameImg from "../assets/images/laptop 2 (1).png";

const featureCards = [
  {
    title: "Instant AI Payments",
    description:
      "Send K$Y or crypto in seconds with simple voice or text commands.",
  },
  {
    title: "Trade Your Way",
    description: "P2P marketplace where you control prices, terms, and timing.",
  },
  {
    title: "Level Up & Earn More",
    description:
      "Gamified tiers reward your activity with lower fees and bigger benefits.",
  },
  {
    title: "Diamond Packs",
    description: (
      <>
        Broaden your network and boost your{" "}
        <strong className="font-bold">revenue</strong> with the Diamond Pack.
      </>
    ),
  },
];

const quickActions = [
  { label: "Check", icon: Search },
  { label: "Balance", icon: CircleHelp },
  { label: "Analyze", icon: BarChart3 },
  { label: "Send", icon: ExternalLink },
  { label: "Withdraw", icon: Wallet },
];

export default function TotalControlSection() {
  const [copied, setCopied] = useState(false);
  const [liked, setLiked] = useState<boolean | null>(null);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("Available Balance: 2,140.50 USD");
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section
      id="total-control"
      aria-labelledby="total-control-heading"
      className="relative isolate overflow-hidden bg-black text-white"
    >
      <div className="relative mx-auto w-full max-w-[1920px] [container-type:inline-size]">
        <div className="relative aspect-[1920/1496] max-sm:aspect-[1920/1600]">
          <img
            src={laptopFrameImg.src}
            alt=""
            aria-hidden="true"
            draggable={false}
            className="pointer-events-none absolute left-[-1%] top-0 h-[98%] w-[102%] max-w-none select-none"
          />

          <h2
            id="total-control-heading"
            className="absolute inset-x-0 top-[9.8%] m-0 px-[4cqw] text-center text-[3.65cqw] font-semibold leading-[1.15] tracking-[-0.1cqw]"
          >
            <span className="bg-gradient-to-r from-[#858585] via-[#eeeeee] to-[#858585] bg-clip-text text-transparent">
              Total Control, Minus the Chaos.
            </span>
          </h2>
          <div className="absolute left-[20.55%] top-[26.13%] h-[48.3%] w-[58.27%] overflow-hidden rounded-t-[0.65cqw] bg-[#151515] text-[#b8b8b8]">
            {/* Camera notch */}
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-0 z-20 flex h-[1.05cqw] w-[6.2cqw] -translate-x-1/2 items-center justify-center rounded-b-[0.3cqw] bg-black"
            >
              <span className="h-[0.24cqw] w-[0.24cqw] rounded-full bg-[#101719] shadow-[inset_0_0_2px_#344047]" />
            </div>

            {/* Top navigation */}
            <div className="absolute inset-x-[5.8%] top-[2.4%] flex items-center justify-between">
              <div className="flex items-center gap-[0.35cqw]">
                <span className="flex h-[1.35cqw] w-[1.35cqw] items-center justify-center rounded-[0.55cqw] border border-white/[0.06]">
                  <KeyRound className="h-[0.8cqw] w-[0.8cqw]" />
                </span>

                <span className="text-[0.97cqw] font-[1000] tracking-[-0.045cqw] text-[#b6ec63] leading-none">
                  2,854.50 USD
                </span>

                <ChevronDown className="h-[0.8cqw] w-[0.8cqw] text-[#b6ec63]" />
              </div>

              <div className="flex items-center gap-[0.25cqw]">
                <span className="mr-[0.12cqw] text-[0.5cqw] text-[#969b9e]">
                  👋 Good Evening,{" "}
                  <strong className="font-semibold text-[#bcc1c4]">
                    KEVIN
                  </strong>
                </span>

                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80"
                  alt="Kevin"
                  className="h-[1.3cqw] w-[1.3cqw] rounded-full object-cover"
                />

                <span className="flex h-[1.35cqw] w-[1.35cqw] items-center justify-center rounded-[0.55cqw] border border-white/[0.06]">
                  <Share2 className="h-[0.65cqw] w-[0.65cqw]" />
                </span>

                <span className="flex h-[1.35cqw] w-[1.35cqw] items-center justify-center rounded-[0.55cqw] border border-white/[0.06]">
                  <MoreVertical className="h-[0.7cqw] w-[0.7cqw]" />
                </span>
              </div>
            </div>

            {/* User message */}
            <div className="absolute right-[26.1%] top-[9.2%] rounded-[0.95cqw] rounded-br-[0.3cqw] border border-white/[0.035] bg-[#202020] px-[0.75cqw] py-[0.7cqw] text-[0.61cqw] font-bold leading-[1.25]">
              What's is my total balance?
            </div>

            {/* Assistant message */}
            <div className="absolute left-[23%] top-[18.4%] flex w-[51%] items-start gap-[0.55cqw]">
              <img
                src="https://kashy.ai/assets/kashynewavatar-Cj55LjIY.png"
                alt="KA$HY assistant"
                className="h-[1.4cqw] w-[1.4cqw] shrink-0 rounded-full object-cover"
              />
              <div className="min-w-0 flex-1">
                <div className="text-[0.6cqw] leading-[1.35] text-[#bcbcbc]">
                  <p>Your financial journey is important to us!</p>
                  <p>
                    Here's a quick snapshot of your KA$HY wallet{" "}
                    <strong className="font-bold">balance</strong>.
                  </p>
                </div>

                {/* Balance card */}
                <div className="relative mt-[0.85cqw] h-[8.65cqw] w-[15.7cqw] overflow-hidden rounded-[0.95cqw] bg-gradient-to-r from-[#a9e34d] to-[#c1eb7b] text-[#18200e]">
                  {/* Decorative leaf pattern */}
                  <svg
                    viewBox="0 0 280 155"
                    fill="none"
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 h-full w-full"
                  >
                    <g fill="#e0f4ad" opacity="0.35">
                      <path d="M235 111C187 106 147 77 146 22c46 15 78 45 89 89Z" />
                      <path d="M235 111c-8-43 6-75 45-98v69c-12 15-27 25-45 29Z" />
                      <path d="M235 111c-39-6-64 9-83 44h67c10-12 15-27 16-44Z" />
                      <path d="M235 111c14 1 30 7 45 19v25h-18c-16-11-24-26-27-44Z" />
                    </g>
                    <g fill="#9ed34a" opacity="0.2">
                      <path d="M235 111c-7-43-38-77-89-89 32-7 91 12 89 89Z" />
                      <path d="M235 111c27-7 39-22 45-43v47c-17 6-31 4-45-4Z" />
                    </g>
                  </svg>

                  <div className="relative z-10 flex h-full flex-col p-[0.75cqw]">
                    <span className="text-[0.58cqw] font-[1000] tracking-[-0.03cqw] leading-none">
                      Available Balance
                    </span>

                    <strong className="mt-[1.15cqw] whitespace-nowrap font-[1000] text-[1.58cqw] leading-[0.88] tracking-[-0.095cqw]">
                      2,140.50 USD
                    </strong>

                    <div className="mt-auto flex items-end justify-between">
                      <span className="text-[0.43cqw] font-[500] tracking-[-0.01cqw]">
                        Mar 20, Thursday
                      </span>

                      <img
                        src="https://kashy.ai/assets/kashynewavatar-Cj55LjIY.png"
                        alt=""
                        className="h-[1.55cqw] w-[1.55cqw] rounded-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Security note */}
                <div className="mt-[0.65cqw] text-[0.59cqw] leading-[1.35]">
                  <strong className="block font-semibold text-[#c5c5c5]">
                    Security Note:
                  </strong>
                  <p>
                    Your <strong className="font-bold">balance</strong> is
                    always secure with KA$HY. For any concerns, contact{" "}
                    <span className="font-semibold text-[#d4d4d4]">
                      support.
                    </span>
                  </p>
                </div>

                <div className="my-[0.75cqw] h-px w-full bg-white/[0.055]" />

                <p className="text-[0.59cqw] leading-[1.4]">
                  Feel free to reach out if you need any more help with
                  something! 😊
                </p>

                {/* Working feedback controls */}
                <div className="mt-[0.45cqw] flex items-center gap-[0.18cqw]">
                  <button
                    type="button"
                    onClick={handleCopy}
                    aria-label={copied ? "Copied" : "Copy balance"}
                    className="flex h-[1.3cqw] w-[1.3cqw] items-center justify-center rounded-[0.5cqw] border border-white/[0.065] transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-[#b5ea66]"
                  >
                    {copied ? (
                      <Check className="h-[0.75cqw] w-[0.75cqw] text-[#b5ea66]" />
                    ) : (
                      <Copy className="h-[0.75cqw] w-[0.75cqw]" />
                    )}
                  </button>

                  <button
                    type="button"
                    aria-label="Reset feedback"
                    onClick={() => {
                      setLiked(null);
                      setCopied(false);
                    }}
                    className="flex h-[1.3cqw] w-[1.3cqw] items-center justify-center rounded-[0.5cqw] border border-white/[0.065] transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-[#b5ea66]"
                  >
                    <RotateCcw className="h-[0.75cqw] w-[0.75cqw]" />
                  </button>

                  <button
                    type="button"
                    aria-label="Helpful"
                    aria-pressed={liked === true}
                    onClick={() => setLiked(liked === true ? null : true)}
                    className={`flex h-[1.3cqw] w-[1.3cqw] items-center justify-center rounded-[0.5cqw] border border-white/[0.065] transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-[#b5ea66] ${
                      liked === true ? "text-[#b5ea66]" : ""
                    }`}
                  >
                    <ThumbsUp className="h-[0.75cqw] w-[0.75cqw]" />
                  </button>

                  <button
                    type="button"
                    aria-label="Not helpful"
                    aria-pressed={liked === false}
                    onClick={() => setLiked(liked === false ? null : false)}
                    className={`flex h-[1.3cqw] w-[1.3cqw] items-center justify-center rounded-[0.5cqw] border border-white/[0.065] transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-[#b5ea66] ${
                      liked === false ? "text-rose-400" : ""
                    }`}
                  >
                    <ThumbsDown className="h-[0.75cqw] w-[0.75cqw]" />
                  </button>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[2.3%] left-[26.1%] w-[47.8%]">
              <div className="mb-[0.35cqw] flex items-center justify-center gap-[0.22cqw]">
                <Eye className="mr-[0.2cqw] h-[0.8cqw] w-[0.8cqw] text-[#a9df51]" />

                {quickActions.map(({ label, icon: Icon }) => (
                  <span
                    key={label}
                    className={`inline-flex items-center gap-[0.32cqw] whitespace-nowrap rounded-[0.6cqw] border border-white/[0.035] px-[0.4cqw] py-[0.3cqw] text-[0.6cqw] leading-none text-[#aeb5be] ${label === "Balance" ? "font-bold" : ""}`}
                  >
                    <Icon className="h-[0.65cqw] w-[0.65cqw]" />
                    {label}
                  </span>
                ))}
              </div>

              <div className="relative h-[4.35cqw] rounded-[1cqw] border border-white/[0.04] bg-[#202020] px-[0.6cqw] py-[0.6cqw]">
                <p className="text-[0.62cqw] font-bold leading-none text-[#aeb5be]">
                  What's is my total balance?
                </p>

                <div className="absolute bottom-[0.5cqw] left-[0.6cqw] flex items-center gap-[0.3cqw]">
                  <span className="flex h-[1.35cqw] w-[1.35cqw] items-center justify-center rounded-full border border-white/[0.04]">
                    <ExternalLink className="h-[0.7cqw] w-[0.7cqw]" />
                  </span>

                  <span className="flex h-[1.35cqw] w-[1.35cqw] items-center justify-center rounded-full border border-white/[0.04]">
                    <Mic className="h-[0.7cqw] w-[0.7cqw]" />
                  </span>
                </div>

                <span className="absolute bottom-[0.5cqw] right-[0.55cqw] flex h-[1.35cqw] w-[1.35cqw] items-center justify-center rounded-[0.5cqw] bg-[#b3e965] text-[#293818]">
                  <ArrowUp className="h-[0.95cqw] w-[0.95cqw]" />
                </span>
              </div>
            </div>

            <p className="absolute bottom-[0.55%] left-[26.1%] w-[47.8%] text-center text-[0.49cqw] leading-none text-[#575757]">
              Important info should be verified, as KA$HY isn't infallible.
            </p>

            <div className="absolute bottom-[2.3%] right-[5.8%] flex items-center gap-[0.35cqw] rounded-[0.6cqw] border border-white/[0.025] px-[0.5cqw] py-[0.35cqw]">
              <span className="text-[0.8cqw] leading-none text-[#929a9f]">
                ⬡
              </span>
              <span className="text-[0.48cqw] font-[900] leading-none tracking-[-0.02cqw] text-[#b4e969]">
                FRONTLINE
              </span>
            </div>
          </div>

          <div className="absolute inset-x-[1.1%] top-[85.4%] grid grid-cols-4 gap-[1.05cqw] max-sm:hidden">
            {featureCards.map((card) => (
              <article
                key={card.title}
                className="min-h-[7.9cqw] rounded-[1.2cqw] border border-white/[0.12] bg-[#111111]/95 px-[1.55cqw] py-[1.55cqw] shadow-[inset_0_1px_0_rgba(255,255,255,0.025)]"
              >
                <h3 className="text-[0.92cqw] font-bold leading-[1.3] tracking-[-0.01cqw] text-[#eeeeee]">
                  {card.title}
                </h3>

                <p className="mt-[0.85cqw] text-[0.92cqw] font-normal leading-[1.4] text-[#aabfce]">
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        </div>
        <div className="relative -mt-[6cqw] grid grid-cols-1 gap-3 px-4 pb-10 min-[420px]:grid-cols-2 sm:hidden">
          {featureCards.map((card) => (
            <article
              key={card.title}
              className="rounded-2xl border border-white/10 bg-[#111111]/95 p-4"
            >
              <h3 className="text-sm font-semibold text-[#eeeeee]">
                {card.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-[#aabfce]">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
