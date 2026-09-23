"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import MobileMenuDrawer from "./components/MobileMenuDrawer";
import HeroSection from "./components/HeroSection";
import ClimbRanksTiers from "./components/ClimbRanksTiers";
import ThreeModelsSection from "./components/ThreeModelsSection";
import SmartestScreenerChat from "./components/SmartestScreenerChat";
import TwoSecondsSection from "./components/TwoSecondsSection";
import TotalControlSection from "./components/TotalControlSection";
import CryptoBreakingNews from "./components/CryptoBreakingNews";
import KashyBottomLine from "./components/KashyBottomLine";
import HearItFromFam from "./components/HearItFromFam";
import JoinMovementCta from "./components/JoinMovementCta";
import Footer from "./components/Footer";
import {
  SignInModal,
  SignUpModal,
  AboutUsModal,
} from "./components/AuthModals";
import ContactModal from "./components/ContactModal";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#0b0d0c] text-white flex flex-col selection:bg-[#9ae600] selection:text-black">
      {" "}
      <Navbar
        onOpenMenu={() => setIsMenuOpen(true)}
        onOpenSignIn={() => setIsSignInOpen(true)}
        onOpenSignUp={() => setIsSignUpOpen(true)}
        onOpenAbout={() => setIsAboutOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
        onScrollToSection={handleScrollToSection}
      />
      <MobileMenuDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onOpenSignIn={() => setIsSignInOpen(true)}
        onOpenSignUp={() => setIsSignUpOpen(true)}
        onOpenAbout={() => setIsAboutOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
        onScrollToSection={handleScrollToSection}
      />
      <main className="flex-1 flex flex-col">
        <HeroSection
          onOpenSignUp={() => setIsSignUpOpen(true)}
          onScrollToGrid={() => handleScrollToSection("features-sculptures")}
        />

        <ClimbRanksTiers onOpenSignUp={() => setIsSignUpOpen(true)} />
        <ThreeModelsSection />
        <SmartestScreenerChat onOpenSignUp={() => setIsSignUpOpen(true)} />
        <TwoSecondsSection />
        <TotalControlSection />
        <CryptoBreakingNews />
        <KashyBottomLine />
        <HearItFromFam />
        <JoinMovementCta onOpenSignUp={() => setIsSignUpOpen(true)} />
      </main>
      <Footer
        onScrollToTop={handleScrollToTop}
        onOpenAbout={() => setIsAboutOpen(true)}
        onOpenSignUp={() => setIsSignUpOpen(true)}
      />
      <SignInModal
        isOpen={isSignInOpen}
        onClose={() => setIsSignInOpen(false)}
        onSwitchToSignUp={() => {
          setIsSignInOpen(false);
          setIsSignUpOpen(true);
        }}
      />
      <SignUpModal
        isOpen={isSignUpOpen}
        onClose={() => setIsSignUpOpen(false)}
        onSwitchToSignIn={() => {
          setIsSignUpOpen(false);
          setIsSignInOpen(true);
        }}
      />
      <AboutUsModal
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
      />
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}
