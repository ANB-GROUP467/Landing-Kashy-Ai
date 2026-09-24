"use client";
import Image from "next/image";
import { dmSans } from "../../app/fonts";

const DESKTOP_ART = "https://kashy.ai/assets/twoSecounds-B3QA2fzU.png";
const MOBILE_ART = "https://kashy.ai/assets/twoSecoundsMobile-BmURBc-7.png";

export default function TwoSecondsSection() {
  return (
    <section
      id="two-seconds"
      aria-label="2 Seconds section"
      className={`${dmSans.className} relative w-full overflow-hidden bg-[#F0EEE9] select-none`}
    >
      <div
        className="
        relative
        mx-auto
        w-full
        min-h-110
        sm:min-h-256
        "
      >
        <Image
          src={DESKTOP_ART}
          alt=""
          width={838}
          height={1024}
          priority
          aria-hidden
          className="
          pointer-events-none
          absolute
          left-0
          top-0
          hidden
          h-full
          w-auto
          max-h-256
          sm:block
          "
        />

        {/* Mobile Artwork */}

        <Image
          src={MOBILE_ART}
          alt=""
          width={880}
          height={880}
          aria-hidden
          className="
          pointer-events-none
          absolute
          left-0
          top-0
          h-full
          w-auto
          max-h-full
          object-contain
          sm:hidden
          "
        />
        <div
          className="
          absolute
          right-4.5
          top-1/2
          z-10
          flex
          w-[calc(100%-36px)]
          max-w-[320px]
          -translate-y-1/2
          flex-col
          items-center
          text-center
          sm:right-auto
          sm:top-1/2
          sm:flex
          sm:w-175.75
          sm:max-w-175.75
          sm:-translate-y-1/2
          sm:items-start
          sm:text-left
          min-[1440px]:left-195
          max-[1439px]:left-[calc(50%+5rem)]
          "
        >
          <h2
            className="
            w-full
            font-semibold
            not-italic
            text-[#2B2A2A]
            text-[40px]
            leading-[49.97px]
            tracking-[-0.055em]
            sm:text-[129px]
            sm:leading-28
            "
          >
            2 Seconds.
          </h2>

          <p
            className="
            mt-3
            w-full
            font-light
            not-italic
            leading-[128%]
            tracking-[-0.01em]
            text-[#2B2A2A]
            text-xs
            max-w-50
            sm:max-w-none
            sm:text-[24px]
            sm:whitespace-nowrap
            "
          >
            Transfer Money, trade currencies, and verify tiers in 2 seconds.
          </p>
        </div>
      </div>
    </section>
  );
}
