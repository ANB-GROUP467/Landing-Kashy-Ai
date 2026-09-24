import { useState } from "react";
import { motion } from "motion/react";
import marcusCardImg from "../assets/images/marcus-card.png";
import marcusAvatarImg from "../assets/images/marcus-avatar.png";

const marcusCardSrc = marcusCardImg.src;
const marcusAvatarSrc = marcusAvatarImg.src;

interface FamMember {
  id: string;
  name: string;
  verticalName: string;
  avatar: string;
  joined: string;
  earnings: string;
  quote: string;
  bg: string;
  cardImage?: string;
  collapsedCardImage?: string;
}

const famMembers: FamMember[] = [
  {
    id: "marcus",
    name: "Marcus T.",
    verticalName: "Marcus T.",
    avatar: marcusAvatarSrc,
    cardImage: marcusCardSrc,
    joined: "Joined: March 2025",
    earnings: "Earnings: $12K+ in referrals",
    quote:
      '"I went from Frontline to OG in just 3 months. The tier system keeps me motivated, and the referral rewards are insane. KA$HY AI literally pays me to grow my network."',
    bg: `
      radial-gradient(
        ellipse 52% 24% at 43% 101%,
        rgba(225, 231, 199, 0.92) 0%,
        rgba(204, 222, 162, 0.7) 42%,
        transparent 100%
      ),
      radial-gradient(
        ellipse 66% 34% at 5% 100%,
        #ABE254 0%,
        #9CC753 42%,
        rgba(101, 133, 49, 0.8) 62%,
        transparent 100%
      ),
      radial-gradient(
        ellipse 70% 25% at 99% 102%,
        #A5D754 0%,
        #8CAA4A 43%,
        transparent 100%
      ),
      radial-gradient(
        ellipse 29% 65% at 101% 18%,
        rgba(72, 79, 57, 0.66) 0%,
        transparent 100%
      ),
      radial-gradient(
        ellipse 42% 42% at 0% 0%,
        rgba(48, 51, 39, 0.5) 0%,
        transparent 100%
      ),
      linear-gradient(#101110, #101110)
    `,
  },
  {
    id: "priya",
    name: "Priya Singh",
    verticalName: "Priya Singh",
    avatar: "/images/priya-reference-avatar.png",
    collapsedCardImage: "/images/priya-card.png",
    joined: "Joined: January 2025",
    earnings: "Earnings: $18.5K+ in trades",
    quote:
      '"The AI Screener spotted the Solana momentum 48 hours before mainstream crypto Twitter caught on. Truly superhuman speed."',
    bg: `
      radial-gradient(
        ellipse 155% 39% at 67% 0%,
        #A5A0D6 0%,
        #8E88C8 42%,
        #6258B1 68%,
        rgba(54, 42, 109, 0.4) 84%,
        transparent 100%
      ),
      radial-gradient(
        ellipse 145% 25% at 58% 102%,
        #A39BD9 0%,
        #8780CC 43%,
        rgba(78, 73, 130, 0.65) 68%,
        transparent 100%
      ),
      linear-gradient(#101110, #101110)
    `,
  },
  {
    id: "jordan",
    name: "Jordan Lee",
    verticalName: "Jordan Lee",
    avatar: "/images/jordan-reference-avatar.png",
    collapsedCardImage: "/images/jordan-card.png",
    joined: "Joined: February 2025",
    earnings: "Tier: OG Master ($22K Volume)",
    quote:
      '"Sub-second settlement on the 2 Seconds engine eliminated every slippage headache. My business runs on KA$HY now."',
    bg: `
      radial-gradient(
        ellipse 150% 31% at 23% 30%,
        rgba(159, 195, 209, 0.9) 0%,
        rgba(119, 167, 194, 0.72) 43%,
        transparent 100%
      ),
      radial-gradient(
        ellipse 155% 28% at 72% 43%,
        #4B9BC8 0%,
        #377DAB 40%,
        rgba(27, 63, 83, 0.6) 73%,
        transparent 100%
      ),
      linear-gradient(#101110, #101110)
    `,
  },
  {
    id: "sarah",
    name: "Sarah Chen",
    verticalName: "Sarah Chen",
    avatar: "/images/sarah-reference-avatar.png",
    collapsedCardImage: "/images/sarah-card.png",
    joined: "Joined: April 2025",
    earnings: "Earnings: $9.2K+ in staking",
    quote:
      '"Player mode made entering web3 payments so friendly. Moving into Collector Mode was the natural next level for my digital portfolio."',
    bg: `
      radial-gradient(
        ellipse 170% 53% at 82% 100%,
        #CA86C2 0%,
        #C27BB2 42%,
        rgba(164, 72, 122, 0.75) 71%,
        transparent 100%
      ),
      radial-gradient(
        ellipse 140% 37% at 0% 64%,
        #A12758 0%,
        #771B42 40%,
        transparent 100%
      ),
      linear-gradient(#101110, #101110)
    `,
  },
  {
    id: "devon",
    name: "Devon Williams",
    verticalName: "Devon Williams",
    avatar: "/images/devon-reference-avatar.png",
    collapsedCardImage: "/images/devon-card.png",
    joined: "Joined: November 2024",
    earnings: "Earnings: $34K+ in network",
    quote:
      '"The Diamond Pack paid for itself within the first week. The institutional alpha and member syndicates are world class."',
    bg: `
      radial-gradient(
        ellipse 130% 22% at 88% 7%,
        rgba(229, 197, 157, 0.92) 0%,
        rgba(213, 162, 103, 0.73) 40%,
        transparent 100%
      ),
      radial-gradient(
        ellipse 150% 26% at 0% 0%,
        #DA913E 0%,
        #AD6A2D 45%,
        transparent 100%
      ),
      radial-gradient(
        ellipse 160% 18% at 45% 84%,
        #D49B59 0%,
        #B77B3D 35%,
        rgba(106, 69, 32, 0.65) 62%,
        transparent 100%
      ),
      linear-gradient(#101110, #101110)
    `,
  },
  {
    id: "alex",
    name: "Alex Rivera",
    verticalName: "Alex Rivera",
    avatar: "/images/alex-reference-avatar.png",
    collapsedCardImage: "/images/alex-card.png",
    joined: "Joined: May 2025",
    earnings: "Tier: Gold Champion",
    quote:
      '"Total control minus the chaos is not just a slogan—it is how the entire platform feels to use every single day."',
    bg: `
      radial-gradient(
        ellipse 120% 25% at 108% 34%,
        #43AF8B 0%,
        #258E71 36%,
        rgba(21, 86, 64, 0.62) 65%,
        transparent 100%
      ),
      radial-gradient(
        ellipse 88% 18% at 30% 28%,
        rgba(23, 94, 67, 0.65) 0%,
        transparent 100%
      ),
      linear-gradient(#101110, #101110)
    `,
  },
];

export default function HearItFromFam() {
  const [activeId, setActiveId] = useState<string>("marcus");

  return (
    <section
      id="fam-stories"
      className="relative overflow-hidden border-b border-neutral-900 bg-[#0f100f] py-20 text-white select-none sm:py-28"
    >
      <div
        className="relative mx-auto flex w-[calc(100%_-_32px)] max-w-[1180px] flex-col gap-12 sm:w-[calc(100%_-_48px)] lg:gap-[74px]"
        style={{ containerType: "inline-size" }}
      >
        <div className="text-center">
          <h2
            className="font-display mx-auto max-w-[608px] bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-6xl"
            style={{
              backgroundImage:
                "linear-gradient(90.46deg, #98D4FF 11.31%, #3D81B1 97.47%)",
            }}
          >
            Hear It From the FAM
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-base font-normal text-neutral-400 sm:text-lg">
            Discover inspiring stories from genuine members who have transformed
            their lives and achieved new heights with KA$HY AI.
          </p>
        </div>
        <div
          className="
            flex min-h-0 flex-col items-stretch justify-center gap-[14px]
            [--fam-size:calc((100cqw_-_90px)*0.457221711)]
            lg:h-[var(--fam-size)] lg:flex-row lg:gap-[18px]
          "
        >
          {famMembers.map((member) => {
            const isExpanded = member.id === activeId;

            return (
              <motion.div
                key={member.id}
                layout
                onClick={() => setActiveId(member.id)}
                transition={{ type: "spring", damping: 24, stiffness: 260 }}
                className={`relative isolate box-border flex min-w-0 cursor-pointer flex-col justify-between overflow-hidden rounded-[27px] bg-[#101110] transition-all duration-300 ${
                  isExpanded
                    ? "aspect-square min-h-[400px] w-full lg:h-full lg:min-h-0 lg:w-[var(--fam-size)] lg:flex-[0_0_var(--fam-size)]"
                    : "h-[90px] min-h-0 lg:h-full lg:flex-[1_1_0%]"
                }`}
              >
                <div
                  className="pointer-events-none absolute inset-0 z-0"
                  style={{ backgroundImage: member.bg }}
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 z-[1] opacity-[0.42] mix-blend-overlay"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                    backgroundSize: "128px 128px",
                    backgroundRepeat: "repeat",
                  }}
                />
                {isExpanded ? (
                  member.cardImage ? (
                    <div className="relative z-10 h-full w-full">
                      <img
                        src={member.cardImage}
                        alt={`${member.name} story card`}
                        className="h-full w-full rounded-[27px] object-cover"
                      />
                      <span className="sr-only">
                        {member.name}: {member.quote} {member.joined} {member.earnings}
                      </span>
                    </div>
                  ) : (
                    <div
                      className="absolute inset-0 z-10 flex h-full w-full items-start rounded-[inherit]"
                      style={{
                        boxShadow:
                          "inset 1px 1px 0 rgba(255,255,255,0.34), inset -1px -1px 0 rgba(255,255,255,0.035)",
                      }}
                    >
                      <div className="absolute top-[26px] left-6 shrink-0 text-base leading-[1.2] font-semibold tracking-normal text-[#e9e9df] normal-case [writing-mode:vertical-rl] lg:top-10 lg:left-[23px] min-[1200px]:top-[50px] min-[1200px]:left-7 min-[1200px]:text-lg">
                        {member.name}
                      </div>

                    <div className="absolute right-6 bottom-6 left-6 flex min-w-0 flex-col justify-end lg:right-[23px] lg:bottom-[27px] lg:left-[23px] min-[1200px]:right-7 min-[1200px]:bottom-8 min-[1200px]:left-7">
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="m-0 pb-6 lg:pb-7 min-[1200px]:pb-10"
                      >
                        <p className="m-0 max-w-none text-base leading-[1.3] font-normal tracking-[-0.25px] text-[#e1e1d7] min-[1200px]:text-lg">
                          {member.quote}
                        </p>
                      </motion.div>

                      <div className="flex items-center gap-[9px] text-[11px] text-[#e9e9df] italic min-[1200px]:text-[13px]">
                        <div className="h-[38px] w-[38px] shrink-0 overflow-hidden rounded-full">
                          <img
                            src={member.avatar}
                            alt={member.name}
                            className="h-full w-full object-cover"
                          />
                        </div>

                        <div className="flex flex-wrap items-center gap-x-[3px] gap-y-[2px] leading-[1.25] whitespace-normal">
                          <div className="font-normal">{member.joined}</div>

                          {member.id === "marcus" && (
                            <span aria-hidden="true" className="text-[#e9e9df]">
                              |
                            </span>
                          )}

                          <div className="font-normal text-[#e9e9df]">
                            {member.earnings}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              ) : (
                <>
                  {member.collapsedCardImage && (
                    <img
                      src={member.collapsedCardImage}
                      alt={member.name}
                      className="pointer-events-none absolute inset-0 z-10 hidden h-full w-full object-fill lg:block"
                    />
                  )}
                  <div
                    className={`absolute inset-0 z-10 flex h-full w-full items-center justify-between rounded-[inherit] ${member.collapsedCardImage ? "lg:hidden" : ""}`}
                    style={{
                      boxShadow:
                        "inset 1px 1px 0 rgba(255,255,255,0.34), inset -1px -1px 0 rgba(255,255,255,0.035)",
                    }}
                  >
                    <div className="absolute top-[35px] left-6 text-base leading-[1.2] font-semibold tracking-normal text-[#e9e9df] normal-case [writing-mode:horizontal-tb] lg:top-10 lg:left-[25px] lg:[writing-mode:vertical-rl] min-[1200px]:top-[50px] min-[1200px]:left-[30px] min-[1200px]:text-lg">
                      {member.verticalName}
                    </div>

                    <div className="absolute right-6 bottom-[26px] h-[38px] w-[38px] shrink-0 overflow-hidden rounded-full lg:right-auto lg:bottom-8 lg:left-[calc(50%_-_19px)]">
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
