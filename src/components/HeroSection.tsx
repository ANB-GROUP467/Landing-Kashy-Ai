import { useState } from "react";
import { sfx } from "../utils/sound";

interface HeroSectionProps {
  onOpenSignUp: () => void;
  onScrollToGrid: () => void;
}

const headingLines = ["AI-powered,", "Gamified Payment", "Revolution."];
const headingLineClass =
  "block whitespace-nowrap text-center font-sans text-[clamp(24px,7.6vw,42px)] font-bold leading-[1.45] tracking-[0] sm:text-[77px] sm:leading-[112px]";

export default function HeroSection({ onOpenSignUp }: HeroSectionProps) {
  const [mascotBubble, setMascotBubble] = useState(false);

  return (
    <section
      id="hero"
      aria-label="Hero section"
      className="relative isolate flex h-screen w-full flex-col items-center overflow-hidden bg-black text-white"
    >
      <div
        className="pointer-events-none absolute bottom-0 -z-10 max-h-[630px] w-full overflow-hidden"
        aria-hidden="true"
      >
        <img
          src="/images/hero-background.png"
          alt=""
          fetchPriority="high"
          className="h-full w-full object-cover"
        />
      </div>

      <button
        type="button"
        aria-label="Hear a perk from Kashy"
        onClick={() => {
          sfx.playLevelUp();
          setMascotBubble(true);
          setTimeout(() => setMascotBubble(false), 4500);
        }}
        className="relative z-30 mb-5 h-[130px] w-[121px] shrink-0 cursor-pointer transition-transform duration-300 hover:scale-110 focus-visible:outline-2 focus-visible:outline-lime-300 sm:h-[147px] sm:w-[137px]"
      >
        <img
          src="/images/kashy-avatar.png"
          alt="Kashy bunny with sunglasses"
          width={137}
          height={147}
          className="h-full w-full object-contain"
        />
        {mascotBubble && (
          <span
            role="status"
            className="absolute left-1/2 top-full -translate-x-1/2 whitespace-nowrap rounded-full bg-black/90 px-4 py-2 text-xs text-white"
          >
            Yo! 2.5X XP Event is live!
          </span>
        )}
      </button>

      <div className="relative z-10 flex w-full max-w-[800px] flex-col items-center gap-[42px]">
        <div className="flex w-full flex-col items-center gap-3">
          <h1 className="relative m-0 inline-block max-w-full text-center">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute left-0 top-0 w-full select-none"
            >
              {headingLines.map((line) => (
                <span
                  key={line}
                  className={
                    headingLineClass +
                    " text-transparent [-webkit-text-stroke:0.5px_#fff]"
                  }
                >
                  {line}
                </span>
              ))}
            </span>
            <span className="relative z-[1]">
              {headingLines.map((line) => (
                <span
                  key={line}
                  className={
                    headingLineClass +
                    " bg-[linear-gradient(94.25deg,#7A7A7A_0.92%,#F7F7F7_47.03%,#7A7A7A_97.24%)] bg-clip-text text-transparent drop-shadow-[0_17px_28.3px_rgba(0,0,0,0.43)]"
                  }
                >
                  {line}
                </span>
              ))}
            </span>
          </h1>
          <p className="m-0 max-w-[580px] px-4 text-center font-sans text-[18px] font-light leading-[1.28] tracking-[-0.01em] text-white sm:text-[24px]">
            Trade Smarter, Earn More, And Elevate Your Game.
          </p>
        </div>
        <button
          id="hero-cta-btn"
          type="button"
          disabled
          className="flex h-[53px] w-[215px] shrink-0 cursor-pointer items-center justify-center rounded-[69px] border border-transparent [background:linear-gradient(#0F0F0F,#0F0F0F)_padding-box,linear-gradient(180deg,rgba(153,153,153,0.5)_0%,rgba(153,153,153,0)_50%,rgba(255,255,255,0.35)_100%)_border-box] text-center font-sans text-[14px] font-semibold leading-[1.2] tracking-normal text-white transition duration-200 hover:brightness-110 focus-visible:outline-2 focus-visible:outline-lime-300 focus-visible:outline-offset-4"
        >
          Let's Go! Sign Me Up
        </button>
      </div>
    </section>
  );
}
