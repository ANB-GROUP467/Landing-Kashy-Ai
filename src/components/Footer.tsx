import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import footerWordmarkLight from "../assets/images/Frame 2147224926.png";
import footerWordmarkMid from "../assets/images/Frame 2147224928.png";
import footerWordmarkDark from "../assets/images/Frame 2147224929.png";

interface FooterProps {
  onScrollToTop?: () => void;
  onOpenAbout?: () => void;
  onOpenSignUp?: () => void;
}

const socialLinks = [
  { label: "Facebook", href: "https://facebook.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "TikTok", href: "https://tiktok.com" },
  { label: "YouTube", href: "https://youtube.com" },
];

export default function Footer({ onScrollToTop, onOpenAbout }: FooterProps) {
  const [currentTime, setCurrentTime] = useState<Date | null>(null);

  useEffect(() => {
    setCurrentTime(new Date());
    const timer = window.setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    if (onScrollToTop) {
      onScrollToTop();
      return;
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      return;
    }

    scrollToTop();
  };

  const navigationLinks = [
    { label: "Intro", action: scrollToTop },
    {
      label: "Player",
      action: () => scrollToSection("three-models"),
    },
    {
      label: "Collector",
      action: () => scrollToSection("three-models"),
    },
    {
      label: "Trader",
      action: () => scrollToSection("three-models"),
    },
    {
      label: "Lifer",
      action: () => scrollToSection("climb-ranks"),
    },
    {
      label: "About K$Y",
      action: () => onOpenAbout?.(),
    },
    {
      label: "News",
      action: () => scrollToSection("crypto-news"),
    },
    {
      label: "K$Y BL",
      action: () => scrollToSection("crypto-bottom-line"),
    },
    {
      label: "About us",
      action: () => onOpenAbout?.(),
    },
  ];

  return (
    <footer
      id="footer"
      className="relative isolate w-full overflow-hidden bg-black font-sans text-white"
    >
      <div className="px-5 pb-12 pt-8 sm:px-8 lg:px-12 lg:pb-[48px] lg:pt-[30px]">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-[46.7%_22%_31.3%] lg:gap-0">
          <div className="col-span-2 lg:col-span-1">
            <h2 className="m-0 max-w-[565px] font-sans text-[18px] font-black uppercase leading-[1.17] tracking-[-0.8px] sm:text-[22px] lg:text-[24px] lg:[-webkit-text-stroke:0.6px_white]">
              <span className="block">KA$HY AI HONORS THE DIVERSE</span>
              <span className="block">CULTURES, COMMUNITIES, AND</span>
              <span className="block">TRADITIONS OF OUR GLOBAL FAM</span>
              <span className="block">ACROSS EVERY CONTINENT WE</span>
              <span className="block">SERVE.</span>
            </h2>

            <div className="mt-12 lg:mt-[104px]">
              <h3 className="mb-[14px] bg-[linear-gradient(360deg,_#383A3C_-6.25%,_#F0EEE9_93.75%)] bg-clip-text text-[13px] font-semibold leading-[20px] text-transparent lg:text-[14px]">
                CONTACT
              </h3>

              <address className="text-[14px] not-italic leading-[21px] tracking-[-0.2px] lg:text-[16px]">
                <a
                  href="mailto:contact@kashy.ai"
                  className="block w-fit transition-colors hover:text-[#b5df77] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b5df77]"
                >
                  contact@kashy.ai
                </a>

                <p>4030 Wake Forest Rd.</p>
                <p>STE. 349 Raleigh NC</p>
                <p>27609</p>
              </address>
            </div>
          </div>

          <nav aria-label="Footer navigation">
            <h3 className="mb-[16px] bg-[linear-gradient(360deg,_#383A3C_-6.25%,_#F0EEE9_93.75%)] bg-clip-text text-[13px] font-semibold leading-[20px] text-transparent lg:text-[14px]">
              NAVIGATION
            </h3>

            <ul className="m-0 list-none p-0">
              {navigationLinks.map(({ label, action }) => (
                <li key={label} className="leading-none">
                  <button
                    type="button"
                    onClick={action}
                    className="cursor-pointer bg-transparent py-[3px] text-left text-[15px] font-semibold leading-[23px] tracking-[-0.2px] transition-colors hover:text-[#b5df77] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b5df77] lg:text-[18px]"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social links */}
          <nav aria-label="Social links">
            <h3 className="mb-[16px] bg-[linear-gradient(360deg,_#383A3C_-6.25%,_#F0EEE9_93.75%)] bg-clip-text text-[13px] font-semibold leading-[20px] text-transparent lg:text-[14px]">
              CONNECT
            </h3>

            <ul className="m-0 list-none p-0">
              {socialLinks.map(({ label, href }) => (
                <li key={label} className="leading-none">
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-[6px] py-[3px] text-[15px] font-semibold leading-[23px] tracking-[-0.2px] transition-colors hover:text-[#b5df77] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b5df77] lg:text-[18px]"
                  >
                    {label}

                    <ArrowUpRight
                      aria-hidden="true"
                      strokeWidth={1.7}
                      className="h-[16px] w-[16px] shrink-0 text-[#deded0] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 lg:h-[18px] lg:w-[18px]"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p className="mb-0 mt-16 max-w-[630px] text-[13px] font-normal leading-[21px] tracking-[-0.15px] sm:text-[14px] lg:mt-[146px] lg:text-[16px]">
          KA$HY AI honors the diverse cultures, communities, and traditions of
          our global FAM across every continent we serve.
        </p>
      </div>

      <div className="flex items-center justify-between px-5 pb-8 text-[12px] leading-none text-[#9ca3af] sm:px-8 sm:text-[14px] lg:px-12">
        <span>©2026 KA$HY AI PTY LTD</span>
        <button
          type="button"
          onClick={() => scrollToTop()}
          className="transition-colors hover:text-white"
        >
          LEGAL NOTICE
        </button>
        <time dateTime={currentTime?.toISOString()}>
          {currentTime
            ? new Intl.DateTimeFormat("en-US", {
                weekday: "long",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                timeZoneName: "short",
                timeZone: "America/New_York",
              }).format(currentTime)
            : "\u2014"}
        </time>
      </div>

      <div
        role="img"
        aria-label="KA$HY AI"
        className="w-full overflow-hidden leading-none"
      >
        <div className="relative aspect-[1440/84] w-full overflow-hidden">
          <img
            src={footerWordmarkDark.src}
            alt=""
            aria-hidden="true"
            draggable={false}
            className="pointer-events-none absolute bottom-0 left-0 m-0 block h-auto w-full max-w-none select-none p-0"
          />
        </div>

        <div className="relative aspect-[1440/152] w-full overflow-hidden">
          <img
            src={footerWordmarkMid.src}
            alt=""
            aria-hidden="true"
            draggable={false}
            className="pointer-events-none absolute bottom-0 left-0 m-0 block h-auto w-full max-w-none select-none p-0"
          />
        </div>

        <div className="relative aspect-[1440/166] w-full overflow-hidden">
          <img
            src={footerWordmarkLight.src}
            alt=""
            aria-hidden="true"
            draggable={false}
            className="pointer-events-none absolute bottom-0 left-0 m-0 block h-auto w-full max-w-none select-none p-0"
          />
        </div>
      </div>
    </footer>
  );
}
