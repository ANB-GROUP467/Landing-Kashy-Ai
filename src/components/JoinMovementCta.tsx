import { motion } from "motion/react";
import ksyBlurredGlowImg from "../assets/images/Group 1171275281.png";

interface JoinMovementCtaProps {
  onOpenSignUp: () => void;
}

export default function JoinMovementCta({
  onOpenSignUp,
}: JoinMovementCtaProps) {
  return (
    <section
      id="join-movement"
      className="
        relative
        w-full
        min-h-[720px]
        lg:min-h-[820px]
        overflow-hidden
        bg-[#090a09]
        text-white
        flex
        items-center
        justify-center
        pt-8
        sm:pt-12
        lg:pt-16
        text-center
        select-none
      "
    >
      {/* =========================
          BACKGROUND
          Matches the Hero section's background treatment exactly:
          image anchored to the bottom, same fade timing, and the
          same soft radial overlay behind the heading for readability.
      ========================== */}

      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        {/* Dark Base */}
        <div className="absolute inset-0 bg-[#090a09]" />

        {/* Glow image — anchored bottom, height 96%, same crop as Hero */}
        <img
          src={ksyBlurredGlowImg.src}
          alt=""
          draggable={false}
          className="
            absolute
            left-1/2
            bottom-[4%]
            w-full
            h-[96%]
            max-w-none
            -translate-x-1/2
            object-cover
            object-top
            pointer-events-none
            select-none
          "
        />

        {/* Black-to-green fade + readability overlay — same stops as Hero */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 55% 48% at 50% 45%, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.22) 45%, transparent 75%), " +
              "linear-gradient(to bottom, #090a09 0%, #090a09 14%, rgba(9,10,9,1) 18%, rgba(9,10,9,0.9) 22%, rgba(9,10,9,0.72) 26%, rgba(9,10,9,0.48) 30%, rgba(9,10,9,0.22) 34%, rgba(9,10,9,0.06) 38%, transparent 42%)",
          }}
        />
      </div>

      {/* =========================
          CONTENT
      ========================== */}

      <div
        className="
          relative
          z-10
          w-full
          max-w-5xl
          mx-auto
          px-6
          sm:px-10
          flex
          flex-col
          items-center
        "
      >
        {/* Heading */}
        <motion.h2
          initial={{
            opacity: 0,
            y: 22,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.35,
          }}
          transition={{
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            m-0
            font-display
            font-bold
            text-[48px]
            sm:text-[66px]
            md:text-[80px]
            lg:text-[92px]
            leading-[1.03]
            tracking-[-0.02em]
            bg-[linear-gradient(94.27deg,_#7A7A7A_0.92%,_#F7F7F7_47.03%,_#7A7A7A_97.24%)]
            bg-clip-text
            text-transparent
          "
        >
          <span className="block">Don't Just Watch,</span>

          <span className="block">Join the Movement.</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{
            opacity: 0,
            y: 16,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.35,
          }}
          transition={{
            duration: 0.6,
            delay: 0.1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            mt-6
            mb-0
            max-w-xl
            text-[18px]
            sm:text-[21px]
            md:text-[23px]
            font-normal
            tracking-[-0.02em]
            leading-[1.55]
            text-white
          "
        >
          Thousands are already leveling up. Your turn.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95,
            y: 14,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.35,
          }}
          transition={{
            duration: 0.5,
            delay: 0.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mt-8"
        >
          <button
            id="join-movement-signup-btn"
            type="button"
            onClick={onOpenSignUp}
            className="
              min-w-[190px]
              px-8
              py-[15px]
              rounded-full

              bg-[#080908]

              border
              border-white/[0.10]

              text-white
              text-[13px]
              font-semibold

              cursor-pointer

              transition-all
              duration-200

              hover:bg-[#151714]
              hover:border-[#bef264]/25
              hover:-translate-y-[2px]
              hover:shadow-[0_8px_30px_rgba(0,0,0,0.35)]

              active:translate-y-0
              active:scale-[0.98]

              focus-visible:outline
              focus-visible:outline-2
              focus-visible:outline-[#bef264]
              focus-visible:outline-offset-4
            "
          >
            Let's Go! Sign Me Up
          </button>
        </motion.div>
      </div>
    </section>
  );
}
