import { useEffect } from "react";
import { sfx } from "../utils/sound";

interface MobileMenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSignIn: () => void;
  onOpenSignUp: () => void;
  onOpenAbout: () => void;
  onOpenContact: () => void;
  onScrollToSection: (sectionId: string) => void;
}

export default function MobileMenuDrawer({
  isOpen,
  onClose,
  onOpenAbout,
  onScrollToSection,
}: MobileMenuDrawerProps) {
  // Close on Escape, lock background scroll while open
  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const mainItems = [
    { number: "01", label: "About Ka$hy AI", action: () => onOpenAbout() },
    {
      number: "02",
      label: "Lifer",
      action: () => onScrollToSection("legends-become-owners"),
    },
    {
      number: "03",
      label: "News",
      action: () => onScrollToSection("crypto-news"),
    },
    {
      number: "04",
      label: "K$y Bottom Line",
      action: () => onScrollToSection("crypto-bottom-line"),
    },
    {
      number: "05",
      label: "Testimonials",
      action: () => onScrollToSection("fam-stories"),
    },
  ];

  const modelItems = [
    {
      label: "Ka$hy AI Models",
      action: () => onScrollToSection("three-models"),
    },
    { label: "Player", action: () => onScrollToSection("three-models") },
    { label: "Collector", action: () => onScrollToSection("three-models") },
    { label: "Trader", action: () => onScrollToSection("three-models") },
  ];

  return (
    <>
      {/* Invisible click-catcher: closes the menu, no dimming/blur — hero stays fully visible */}
      <button
        type="button"
        aria-label="Close navigation menu"
        onClick={() => {
          sfx.playClick();
          onClose();
        }}
        className="fixed inset-0 z-40 cursor-default bg-transparent"
      />

      {/* Dropdown list */}
      <nav
        role="menu"
        aria-label="Main navigation"
        className="fixed left-0 top-[88px] z-50 min-w-[240px] px-7 pb-10 pt-6 transition-transform duration-200 ease-out"
      >
        <ul className="space-y-[13px]">
          {mainItems.map((item) => (
            <li key={item.number}>
              <button
                type="button"
                role="menuitem"
                onClick={() => {
                  sfx.playClick();
                  onClose();
                  item.action();
                }}
                onMouseEnter={() => sfx.playHover()}
                className="group flex items-baseline gap-3 text-left"
              >
                <span className="w-6 shrink-0 font-sans text-[11px] tracking-wider text-neutral-500">
                  {item.number}
                </span>
                <span className="text-[15px] font-semibold uppercase tracking-wide text-neutral-200 transition-colors group-hover:text-white">
                  {item.label}
                </span>
              </button>
            </li>
          ))}
        </ul>

        <ul className="mt-5 space-y-[10px] pl-9">
          {modelItems.map((item) => (
            <li key={item.label}>
              <button
                type="button"
                role="menuitem"
                onClick={() => {
                  sfx.playClick();
                  onClose();
                  item.action();
                }}
                onMouseEnter={() => sfx.playHover()}
                className="text-[13px] font-medium uppercase tracking-wide text-neutral-400 transition-colors hover:text-white"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
