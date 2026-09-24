import { motion } from "motion/react";

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
        min-h-[480px]
        sm:min-h-[724px]
        2xl:min-h-[900px]
        overflow-hidden
        bg-black
        text-white
        flex
        items-center
        justify-center
        text-center
        select-none
      "
    >
      <div
        className="absolute bottom-0 w-full max-h-full overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        <img
          src="/images/join-movement-reference.png"
          alt=""
          draggable={false}
          className="
            block
            w-full
            min-h-[480px]
            sm:min-h-[724px]
            2xl:min-h-[900px]
            max-w-none
            object-cover
            object-top
            pointer-events-none
            select-none
          "
        />
      </div>
      <div
        className="
          relative
          z-10
          w-full
          max-w-[1280px]
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
            text-[clamp(30px,7.8vw,48px)]
            sm:text-[64px]
            lg:text-[82px]
            2xl:text-[103px]
            leading-[1.12447]
            tracking-normal
            bg-[linear-gradient(94.27deg,_#7A7A7A_0.92%,_#F7F7F7_47.03%,_#7A7A7A_97.24%)]
            bg-clip-text
            text-transparent
          "
          style={{
            textShadow: "0 17px 28.3px rgba(0, 0, 0, 0.43)",
            WebkitTextStroke: "0.5px #000",
            WebkitTextFillColor: "transparent",
          }}
        >
          <span className="block">Don't Just Watch,</span>
          <span className="block">Join the Movement.</span>
        </motion.h2>

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
            mt-3
            mb-0
            max-w-none
            text-[16px]
            sm:text-[24px]
            2xl:text-[30px]
            font-light
            tracking-normal
            leading-[1.5]
            text-white
          "
        >
          Thousands are already leveling up. Your turn.
        </motion.p>

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
          className="mt-8 sm:mt-[42px] 2xl:mt-[52px]"
        >
          <button
            id="join-movement-signup-btn"
            type="button"
            disabled
            className="
              w-[215px]
              h-[53px]
              2xl:w-[269px]
              2xl:h-[66px]
              px-6
              rounded-full
              bg-[#0F0F0F]
              border-0
              text-white
              text-[14px]
              2xl:text-[18px]
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
