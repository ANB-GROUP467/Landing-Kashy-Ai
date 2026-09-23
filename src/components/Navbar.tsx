"use client";
import { useState } from "react";

interface NavbarProps {
  onOpenMenu: () => void;
  onOpenSignIn: () => void;
  onOpenSignUp: () => void;
  onOpenAbout: () => void;
  onOpenContact: () => void;
  onScrollToSection: (id: string) => void;
}

export default function Navbar({
  onOpenMenu,
  onOpenSignIn,
  onOpenSignUp,
  onOpenAbout,
  onScrollToSection,
}: NavbarProps) {
  const [desktopMenuOpen, setDesktopMenuOpen] = useState(false);
  const navTextClass =
    "inline-flex h-4 shrink-0 items-center justify-center whitespace-nowrap bg-[linear-gradient(to_bottom,#F0EEE9_0%,#383A3C_100%)] bg-clip-text p-0 font-sans text-[12px] font-medium leading-[100%] tracking-[0px] text-transparent uppercase";
  const items = [
    { label: "ABOUT KA$HY AI", action: onOpenAbout },
    {
      label: "LIFER",
      action: () => onScrollToSection("legends-become-owners"),
    },
    { label: "NEWS", action: () => onScrollToSection("crypto-news") },
    {
      label: "K$Y BOTTOM LINE",
      action: () => onScrollToSection("crypto-bottom-line"),
    },
    { label: "TESTIMONIALS", action: () => onScrollToSection("fam-stories") },
  ];
  return (
    <header
      id="main-navbar"
      className="relative z-40 flex h-[88px] w-full shrink-0 items-center justify-between bg-black px-5 font-sans text-[12px] font-medium leading-none text-[#aaa] max-[700px]:h-[72px] max-[700px]:px-4"
    >
      <button
        id="nav-menu-btn"
        type="button"
        className="inline-flex items-center gap-3 p-0 font-inherit text-inherit hover:text-white focus-visible:outline focus-visible:outline-1 focus-visible:outline-white focus-visible:outline-offset-3 max-[700px]:gap-2"
        onClick={() => {
          if (window.matchMedia("(max-width: 700px)").matches) {
            onOpenMenu();
          } else {
            setDesktopMenuOpen((open) => !open);
          }
        }}
        aria-label="Toggle navigation menu"
        aria-expanded={desktopMenuOpen}
        aria-controls="hero-desktop-menu"
      >
        <span
          className="grid h-8 w-8 place-items-center rounded-[11px] border border-[#333] max-[700px]:h-[30px] max-[700px]:w-[30px]"
          aria-hidden="true"
        >
          <svg
            className="h-[21px] w-[21px]"
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
          >
            <circle cx="10" cy="13" r="6.5" stroke="currentColor" />
            <path d="M17 13h4" stroke="currentColor" />
            <circle cx="23" cy="13" r="2.5" fill="currentColor" />
          </svg>
        </span>
        <span className={navTextClass}>MENU</span>
      </button>
      <div className="flex items-center gap-6 max-[700px]:gap-3.5">
        <button
          id="nav-about-btn"
          type="button"
          disabled
          className="inline-flex h-[38px] shrink-0 cursor-pointer items-center border-0 bg-transparent p-0 focus-visible:outline-2 focus-visible:outline-lime-300 max-[700px]:hidden"
        >
          <span className={navTextClass}>ABOUT US</span>
        </button>
        <button
          id="nav-signin-btn"
          type="button"
          disabled
          className="inline-flex h-[38px] min-w-[43px] shrink-0 cursor-pointer items-center justify-center whitespace-nowrap border-0 bg-transparent p-0 focus-visible:outline-2 focus-visible:outline-lime-300"
        >
          <span className={navTextClass}>SIGN IN</span>
        </button>
        <button
          id="nav-signup-btn"
          type="button"
          disabled
          className="inline-flex h-[38px] w-[119px] shrink-0 flex-col items-center justify-center gap-[10px] rounded-[52px] bg-[#243b00] pl-[20px] font-sans text-[12px] font-semibold text-white"
        >
          <span className="flex h-full w-full items-center gap-[10px]">
            <span className="flex-1 whitespace-nowrap">SIGN UP</span>
            <svg
              className="h-[38px] w-[38px] shrink-0"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <circle cx="24" cy="24" r="24" fill="#b1e65c" />
              <path
                d="M24 0C24 14 34 24 48 24C34 24 24 34 24 48C24 34 14 24 0 24C14 24 24 14 24 0Z"
                fill="#284400"
              />
            </svg>
          </span>
        </button>
      </div>
      <nav
        id="hero-desktop-menu"
        className="absolute left-5 top-full w-[225px] bg-transparent max-[700px]:hidden"
        aria-label="Main navigation"
        hidden={!desktopMenuOpen}
        onKeyDown={(event) => {
          if (event.key === "Escape") setDesktopMenuOpen(false);
        }}
      >
        <ol>
          {items.map((item, index) => (
            <li key={item.label}>
              <button
                type="button"
                className={navTextClass}
                onClick={item.action}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item.label}
              </button>
            </li>
          ))}
        </ol>
        <div className="ml-[30px] mt-4 flex flex-col gap-[7px]">
          {["KA$HY AI MODELS", "PLAYER", "COLLECTOR", "TRADER"].map((label) => (
            <button
              className={`${navTextClass} justify-start text-left`}
              key={label}
              type="button"
              onClick={() => onScrollToSection("three-models")}
            >
              {label}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}
