"use client";

import { useId, useState } from "react";
import Image from "next/image";
import { Titan_One } from "next/font/google";
import { dmSans } from "../../app/fonts";

const titanOne = Titan_One({ weight: "400", subsets: ["latin"] });

type ModelType = "player" | "collector" | "trader";

const MODELS: ModelType[] = ["player", "collector", "trader"];

const DESCRIPTIONS: Record<ModelType, string> = {
  player:
    "Player Mode is beginner-friendly allowing Noobs to explore KA$HY AI with ease of mind and an even easier wallet to manage. A single digital wallet storing KA$HY Coin(K$YC), a virtual in-app currency backed by USDC, is all you need to Pay Now and Get Paid.",
  collector:
    "Collector Mode is tailored for digital asset holders and curators looking to discover rare allocations, monitor vault floor values, and stake KA$HY rewards.",
  trader:
    "Trader Mode unlocks lightning-fast execution, automated routing, and institutional-grade analytics for experienced market operators.",
};

const ACTIVE_BG = "#AAE153";
const INACTIVE_BG = "#273F00";

function RoleStarIcon({ gradientId }: { gradientId: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="89"
      height="89"
      viewBox="0 0 89 89"
      fill="none"
      className="h-[29.925px] w-[29.925px] shrink-0 overflow-visible sm:h-[89px] sm:w-[89px]"
      aria-hidden
    >
      <path
        d="M44.5 0C69.0767 0 89 19.9233 89 44.5C89 69.0767 69.0767 89 44.5 89C19.9233 89 0 69.0767 0 44.5C0 19.9233 19.9233 0 44.5 0Z"
        fill={`url(#${gradientId})`}
      />
      <path
        d="M44.5 18.1631C44.5 32.7085 32.7085 44.5 18.1631 44.5C32.7085 44.5 44.5 56.2915 44.5 70.8369C44.5 56.2915 56.2915 44.5 70.8369 44.5C56.2915 44.5 44.5 32.7085 44.5 18.1631Z"
        fill="#FFFFFF"
      />
      <defs>
        <linearGradient
          id={gradientId}
          x1="33.9731"
          y1="23.0172"
          x2="95.1854"
          y2="30.9275"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#273F00" />
          <stop offset="1" stopColor="#C5ED83" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function ThreeModelsSection() {
  const [activeModel, setActiveModel] = useState<ModelType>("player");
  const gradientId = useId().replace(/:/g, "");

  return (
    <section
      aria-label="Role Models section"
      className={`${dmSans.className} relative flex w-full items-center justify-center overflow-hidden bg-[#F0EEE9]`}
    >
      <Image
        src="https://kashy.ai/assets/roleModalBg-B2WI3zS8.png"
        alt=""
        width={951}
        height={1024}
        className="pointer-events-none absolute bottom-0 right-0 h-auto w-auto max-w-none select-none"
        aria-hidden
        priority
      />

      <div className="relative z-10 flex w-full flex-col items-start gap-3 pl-[16px] pt-[15px] sm:pl-[32px] sm:pt-[87px]">
        <header className="flex flex-col">
          <h2 className="group flex items-center gap-2 text-[50px] font-medium leading-[112%] tracking-normal text-[#0F0F0F] sm:text-[163px]">
            <RoleStarIcon gradientId={gradientId} />
            Three Models.
          </h2>
          <h2 className="text-[50px] font-medium leading-[112%] tracking-normal text-[#0F0F0F] sm:text-[163px]">
            One Platform.
            <br />
            Your Journey.
          </h2>
        </header>

        <div
          className="mt-4 flex items-center gap-4"
          role="list"
          aria-label="Role types"
        >
          {MODELS.map((item) => {
            const active = activeModel === item;
            return (
              <button
                key={item}
                type="button"
                role="listitem"
                aria-pressed={active}
                aria-label={`Select ${item.toUpperCase()} role`}
                onClick={() => setActiveModel(item)}
                className={`${dmSans.className} flex h-[30px] w-[113px] cursor-pointer items-center justify-center rounded-[33px] transition-all duration-300 hover:scale-105 sm:h-[56px] sm:w-[216px] sm:rounded-[63px]`}
                style={{
                  backgroundColor: active ? ACTIVE_BG : INACTIVE_BG,
                }}
              >
                <span
                  className={`${titanOne.className} text-[12px] uppercase leading-[100%] tracking-normal transition-colors duration-300 sm:text-[19.44px]`}
                  style={{ color: active ? INACTIVE_BG : ACTIVE_BG }}
                >
                  {item}
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-[100px] flex w-full items-center justify-between pb-6 sm:pb-12">
          <p className="max-w-[291px] text-[12px] font-normal leading-[128%] tracking-[-0.01em] text-[#0F0F0F] sm:max-w-[682px] sm:text-[18px]">
            {DESCRIPTIONS[activeModel]}
          </p>

          <Image
            src="https://kashy.ai/assets/kashynewavatar-Cj55LjIY.png"
            alt="Kashy logo"
            width={122}
            height={131}
            className="mr-4 h-[69px] w-[64px] sm:mr-14 sm:h-[131px] sm:w-[122px]"
          />
        </div>
      </div>
    </section>
  );
}
