import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Sparkles,
  ArrowRight,
  Clock,
  Calendar,
  Tag,
  X,
  Share2,
  Bookmark,
  Check,
  TrendingUp,
  Cpu,
  Shield,
} from "lucide-react";
import { sfx } from "../utils/sound";

import newsVrImg from "../assets/images/crypto_news_vr_1789984687213.jpg";
import newsFireImg from "../assets/images/crypto_news_fire_1789984700168.jpg";
import newsMatrixImg from "../assets/images/crypto_news_matrix_1789984756671.jpg";

export interface ArticleItem {
  id: string;
  category: "ai" | "market" | "protocol";
  categoryLabel: string;
  title: string;
  summary: string;
  fullContent: string[];
  readTime: string;
  date: string;
  image: string;
  tag: string;
  views: string;
}

const articles: ArticleItem[] = [
  {
    id: "ai-agents-mainnet",
    category: "ai",
    categoryLabel: "AI PROTOCOLS",
    title: "Autonomous AI Arbitrage Agents Deployed to Kashy Mainnet",
    summary:
      "Neural pathfinding nodes now execute multi-hop swaps in under 35 milliseconds, capturing cross-chain price discrepancies with zero slippage.",
    fullContent: [
      "The Kashy engineering core has officially greenlit Version 3.4 of our Autonomous AI Arbitrage Engine on mainnet.",
      "By running lightweight reinforcement learning models at the validator layer, the system anticipates mempool congestion and automatically routes transactions across the deepest pools.",
      "During early pilot testing across 12,000 trades, users experienced an average 4.8% improvement in net output compared to standard decentralized routers.",
      "Key enhancements include real-time MEV sandwich mitigation, automated fee optimization, and dynamic liquidity rebalancing across Arbitrum, Base, and Solana rails.",
    ],
    readTime: "3 min read",
    date: "Sep 21, 2026",
    image: newsVrImg.src,
    tag: "Deep Learning DEX",
    views: "14.2K",
  },
  {
    id: "tvl-milestone-bull",
    category: "market",
    categoryLabel: "MARKET MOMENTUM",
    title: "Kashy Liquidity Vaults Cross $250M Milestone Ahead of Season 4",
    summary:
      "Record institutional inflows and gamified staking rewards propel total value locked to historic highs as active trader count surpasses 180,000.",
    fullContent: [
      "In a monumental milestone for the ecosystem, total value locked across all Kashy smart yield vaults has officially surpassed $250,000,000.",
      "The surge in liquidity has been driven by the rollout of the 2.5x XP Season Event and enhanced liquidity pairing with blue-chip digital assets.",
      "With over 180,000 active trader accounts and daily volume regularly exceeding $40 million, protocol revenue distributions to stakers reached an all-time record.",
      'Founder Statement: "Our hybrid architecture marries the speed of modern gaming engines with decentralized finance security. This milestone validates our community-first vision."',
    ],
    readTime: "4 min read",
    date: "Sep 19, 2026",
    image: newsFireImg.src,
    tag: "Ecosystem Growth",
    views: "28.9K",
  },
  {
    id: "zk-settlement-speed",
    category: "protocol",
    categoryLabel: "ZERO-KNOWLEDGE",
    title: "Zero-Knowledge Rollup Architecture Delivers Sub-Second Finality",
    summary:
      "Next-generation recursive STARK proofs eliminate gas fees for end users while mathematically verifying private transactions on-chain.",
    fullContent: [
      "Privacy and velocity no longer require trade-offs. The Kashy Zero-Knowledge Rollup infrastructure has completed rigorous security audits.",
      "By aggregating thousands of micro-transactions into compact cryptographic proofs, gas costs for standard peer-to-peer and merchant payments drop to strictly zero.",
      "The architecture incorporates stealth address generation for complete wallet confidentiality while remaining 100% compliant with cryptographic audit standards.",
      "Merchant partners can now integrate the Kashy Instant Checkout SDK in under 15 minutes, accepting zero-fee instant settlements worldwide.",
    ],
    readTime: "5 min read",
    date: "Sep 16, 2026",
    image: newsMatrixImg.src,
    tag: "Cryptography",
    views: "9.8K",
  },
];

export default function ChroniclesNews() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(
    null,
  );
  const [copiedLink, setCopiedLink] = useState(false);

  const filteredArticles =
    selectedCategory === "all"
      ? articles
      : articles.filter((a) => a.category === selectedCategory);

  const handleOpenArticle = (article: ArticleItem) => {
    sfx.playClick();
    setSelectedArticle(article);
  };

  const handleShare = () => {
    sfx.playClick();
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <section
      id="intelligence"
      aria-label="Kashy Intelligence and News"
      className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#162013] border border-[#a3e635]/30 text-[#a3e635] text-xs font-sans font-semibold mb-3 tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#a3e635]" />
            <span>KASHY CHRONICLES & INTELLIGENCE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-display">
            Stay Ahead of the Game
          </h2>
          <p className="mt-3 text-base sm:text-lg text-neutral-400 max-w-xl">
            Real-time alpha, protocol upgrades, and cryptographic breakthroughs
            straight from our research labs.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 bg-[#121513] border border-neutral-800 p-1.5 rounded-2xl">
          {[
            { id: "all", label: "All Alpha" },
            { id: "ai", label: "AI Protocols" },
            { id: "market", label: "Market Momentum" },
            { id: "protocol", label: "Zero-Knowledge" },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => {
                sfx.playClick();
                setSelectedCategory(tab.id);
              }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-sans font-bold transition-all ${
                selectedCategory === tab.id
                  ? "bg-[#9ae600] text-black shadow-md"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* 3-Column News Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredArticles.map((article, idx) => (
          <motion.article
            key={article.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            onClick={() => handleOpenArticle(article)}
            onMouseEnter={() => sfx.playHover()}
            className="group relative rounded-3xl bg-[#111412]/80 hover:bg-[#151a15] border border-neutral-800/90 hover:border-[#9ae600]/60 transition-all duration-300 p-5 sm:p-6 flex flex-col justify-between overflow-hidden cursor-pointer shadow-xl shadow-black/50 hover:shadow-2xl hover:shadow-[#9ae600]/10 hover:-translate-y-1"
          >
            <div>
              {/* Image Preview with Category Badge */}
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-black mb-5 border border-neutral-800 group-hover:border-neutral-700 transition-colors">
                <img
                  src={article.image}
                  alt={article.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                {/* Category Pill Over Image */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-neutral-700/80 text-[10px] font-sans font-bold text-[#a3e635] tracking-wider uppercase">
                  {article.categoryLabel}
                </div>

                {/* Read time pill */}
                <div className="absolute bottom-3 right-3 px-2.5 py-0.5 rounded-full bg-black/80 backdrop-blur-md text-[10px] font-sans text-neutral-300 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-neutral-400" />
                  <span>{article.readTime}</span>
                </div>
              </div>

              {/* Date & Tag meta */}
              <div className="flex items-center justify-between text-[11px] font-sans text-neutral-400 mb-2">
                <span>{article.date}</span>
                <span className="text-[#a3e635] font-semibold">
                  {article.tag}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white tracking-tight font-display line-clamp-2 mb-2 group-hover:text-[#a3e635] transition-colors">
                {article.title}
              </h3>

              {/* Summary */}
              <p className="text-xs sm:text-sm text-neutral-400 line-clamp-3 leading-relaxed">
                {article.summary}
              </p>
            </div>

            {/* Card Footer */}
            <div className="mt-6 pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs font-semibold text-neutral-300 group-hover:text-white">
              <span className="text-neutral-400 font-sans text-[11px]">
                {article.views} reads
              </span>
              <span className="inline-flex items-center gap-1.5 text-[#9ae600] group-hover:translate-x-1 transition-transform">
                <span>Read Intel</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Full Article Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl rounded-3xl bg-[#121513] border border-neutral-700/80 p-6 sm:p-8 shadow-2xl shadow-black overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              {/* Top Controls */}
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded-full text-xs font-sans font-bold bg-[#182615] border border-[#a3e635]/30 text-[#a3e635] uppercase">
                  {selectedArticle.categoryLabel}
                </span>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleShare}
                    title="Copy Article Link"
                    className="p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-sans"
                  >
                    {copiedLink ? (
                      <Check className="w-4 h-4 text-[#9ae600]" />
                    ) : (
                      <Share2 className="w-4 h-4" />
                    )}
                    <span className="hidden sm:inline">
                      {copiedLink ? "Copied" : "Share"}
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      sfx.playClick();
                      setSelectedArticle(null);
                    }}
                    className="p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Cover Image */}
              <div className="w-full aspect-[21/9] rounded-2xl overflow-hidden bg-black mb-6 border border-neutral-800">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Meta */}
              <div className="flex items-center gap-4 text-xs font-sans text-neutral-400 mb-3">
                <span>{selectedArticle.date}</span>
                <span>•</span>
                <span>{selectedArticle.readTime}</span>
                <span>•</span>
                <span className="text-[#a3e635]">{selectedArticle.tag}</span>
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl font-black text-white font-display leading-tight mb-6">
                {selectedArticle.title}
              </h2>

              {/* Body paragraphs */}
              <div className="space-y-4 text-sm sm:text-base text-neutral-300 leading-relaxed">
                {selectedArticle.fullContent.map((paragraph, pIdx) => (
                  <p key={pIdx}>{paragraph}</p>
                ))}
              </div>

              {/* Footer CTA */}
              <div className="mt-8 pt-6 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-neutral-400 font-sans">
                  Verified by Kashy Research Labs
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedArticle(null)}
                  className="px-6 py-2.5 rounded-full bg-[#9ae600] hover:bg-[#aaff00] text-black text-xs font-extrabold uppercase tracking-wider"
                >
                  Done Reading
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
