"use client";

import { useState } from "react";
import { Minus, Plus, TrendingUp } from "lucide-react";

const highlights = [
  "Experts in Bitcoin are formulating a BIP aimed at addressing quantum threats by eliminating outdated signature schemes that are susceptible to attacks.",
  "Cantor Fitzgerald's acquisition of Bitcoin worth $4 billion highlights its position as a frontrunner in the realm of institutional Bitcoin adoption.",
  "Bitcoin reaches all-time highs as institutional investments flood into ETFs, fueled by positive regulatory sentiment and long-term holdings by major investors.",
];
const marketStat =
  "Over the past 24 hours, Bitcoin's price has decreased by 0.29% to $118.44k, while trading volume has dropped by 10.11% to $73.07b.";

export default function KashyBottomLine() {
  const [expanded, setExpanded] = useState([true, true, true]);
  const toggleCard = (index: number) =>
    setExpanded((cards) =>
      cards.map((open, i) => (i === index ? !open : open)),
    );

  return (
    <section
      id="crypto-bottom-line"
      className="w-full bg-black px-5 pb-11 pt-28 font-sans text-[#bdcbd7] max-[1200px]:pt-[88px] max-[700px]:px-4 max-[700px]:pb-12 max-[700px]:pt-16"
      aria-labelledby="bottom-line-title"
    >
      <header className="mx-auto mb-[102px] text-center max-[1200px]:mb-[72px] max-[700px]:mb-10">
        <h2
          id="bottom-line-title"
          className="m-0 bg-[linear-gradient(100deg,#29c48d_20%,#08764f_78%)] bg-clip-text text-[56px] font-bold leading-[1.2] tracking-[-1.4px] text-transparent max-[1200px]:text-[44px] max-[700px]:text-[clamp(28px,6.5vw,38px)] max-[700px]:tracking-[-1px]"
        >
          K$Y Crypto Bottom Line
        </h2>
        <p className="mx-auto mt-5 max-w-[900px] text-[22px] font-normal leading-[1.2] tracking-[-.5px] max-[1200px]:text-xl max-[700px]:mt-[18px] max-[700px]:text-base max-[700px]:leading-[1.5] max-[700px]:tracking-normal">
          Get the key highlights quickly and clearly, without needing
          <br className="max-[700px]:hidden" /> to read everything in detail.
        </p>
      </header>
      <div className="grid grid-cols-3 items-start gap-4 max-[1200px]:grid-cols-2 max-[700px]:grid-cols-1">
        {[0, 1, 2].map((index) => (
          <article
            className="min-w-0 rounded-[30px] border border-[#232323] bg-[#121212] p-5 max-[1200px]:last:col-span-full max-[700px]:p-[18px] max-[700px]:rounded-3xl"
            key={index}
          >
            <div className="flex min-h-[38px] items-center gap-1.5">
              <span
                className="grid h-[29px] basis-[29px] place-items-center rounded-full bg-[#ff9812] font-sans text-[25px] font-bold leading-none text-white [transform:rotate(12deg)]"
                aria-label="Bitcoin"
              >
                {"\u20bf"}
              </span>
              <button
                type="button"
                className="inline-flex min-h-[38px] items-center gap-2.5 whitespace-nowrap rounded-full border border-[#2c2c2c] bg-transparent px-3.5 py-[7px] text-sm leading-[22px] text-inherit hover:bg-[#1d1d1d] max-[700px]:gap-[7px] max-[700px]:px-2.5 max-[700px]:text-xs"
                aria-expanded={expanded[index]}
                aria-controls={`bottom-line-summary-${index}`}
                onClick={() => toggleCard(index)}
              >
                <TrendingUp size={17} strokeWidth={1.8} aria-hidden="true" />
                <span>Summarize with KA$HY AI</span>
              </button>
              <button
                type="button"
                className="ml-auto grid h-[30px] basis-[30px] place-items-center rounded-full border-0 bg-[#2b2b2b] p-0 text-[#b7c5ce] hover:bg-[#3b3b3b]"
                aria-label={`${expanded[index] ? "Collapse" : "Expand"} Bitcoin summary ${index + 1}`}
                aria-expanded={expanded[index]}
                aria-controls={`bottom-line-summary-${index}`}
                onClick={() => toggleCard(index)}
              >
                {expanded[index] ? <Minus size={14} /> : <Plus size={14} />}
              </button>
            </div>
            <div
              id={`bottom-line-summary-${index}`}
              hidden={!expanded[index]}
              className="mt-4 text-[13px] font-normal leading-[18px] tracking-[-.15px] max-[700px]:text-xs"
            >
              <ul className="m-0 list-none p-0 [&>li+li]:mt-[18px] [&>li::before]:mr-0.5 [&>li::before]:inline-block [&>li::before]:w-6 [&>li::before]:pl-[5px] [&>li::before]:align-[1px] [&>li::before]:text-[10px] [&>li::before]:text-[#3989df] [&>li::before]:content-['◆']">
                {highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              <p className="mt-[18px] mb-0">
                <span aria-hidden="true">{"\ud83d\udcc9"}</span> {marketStat}
              </p>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-14 flex justify-center max-[1200px]:mt-11 max-[700px]:mt-8">
        <button
          type="button"
          className="inline-flex min-h-[52px] min-w-[215px] items-center justify-center rounded-full border border-[#585858] bg-[#101010] px-[26px] py-3 text-base font-bold leading-6 text-white hover:bg-[#1d1d1d] focus-visible:outline-2 focus-visible:outline-[#29c48d] focus-visible:outline-offset-4 max-[700px]:min-h-12 max-[700px]:min-w-[195px] max-[700px]:px-[22px] max-[700px]:py-2.5 max-[700px]:text-sm"
          onClick={() => {
            setExpanded([true, true, true]);
            document
              .getElementById("bottom-line-title")
              ?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
        >
          K$Y Bottom Line
        </button>
      </div>
    </section>
  );
}
