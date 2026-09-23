import { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import btcGlassesImg from "../assets/images/image 2060.jpg";
import goldBullImg from "../assets/images/image 2059.png";
import robotEthImg from "../assets/images/image 2061.png";

const mainNews = [
  {
    id: "m1",
    symbol: "BTC",
    color: "#f7931a",
    iconBg: "#f7931a",
    time: "10 min ago",
    image: btcGlassesImg.src,
    title:
      "MicroStrategy Adds 6,220 Bitcoin Worth 739.8 Million to Treasury Holdings",
    desc: "MicroStrategy has expanded its Bitcoin holdings to 607,770 BTC, now valued at approximately $71.8 billion...",
  },
  {
    id: "m2",
    symbol: "BTC",
    color: "#f7931a",
    iconBg: "#f7931a",
    time: "10 min ago",
    image: goldBullImg.src,
    title:
      "Bitcoin Inflows to Binance Hit $2.7B Since July 11 as Activity Spikes",
    desc: "MicroStrategy has expanded its Bitcoin holdings to 607,770 BTC, now valued at approximately $71.8 billion...",
  },
  {
    id: "m3",
    symbol: "ETH",
    color: "#627eea",
    iconBg: "#627eea",
    time: "10 min ago",
    image: robotEthImg.src,
    title: "Ethereum Founder: ETH Outperformed Bitcoin in the Last Decade",
    desc: "MicroStrategy has expanded its Bitcoin holdings to 607,770 BTC, now valued at approximately $71.8 billion...",
  },
];

const miniNews = [
  {
    id: "s1",
    symbol: "BTC",
    color: "#f7931a",
    time: "10 min ago",
    text: "Bitcoin Whale Accumulation Reports Overstated, Says Crypto Quant Exec",
  },
  {
    id: "s2",
    symbol: "ETH",
    color: "#627eea",
    time: "10 min ago",
    text: "Bitfinex Hacker Ilya Lichtenstein Released Early Under First Step Act",
  },
  {
    id: "s3",
    symbol: "BTC",
    color: "#f7931a",
    time: "10 min ago",
    text: "Bitcoin Price Tops $91K as Global Tensions Fuel Risk Appetite",
  },
];

export default function CryptoBreakingNews() {
  const [filter, setFilter] = useState<"top" | "latest">("top");

  return (
    <section
      id="crypto-news"
      className="relative bg-black text-white py-20 sm:py-28 overflow-hidden select-none border-b border-neutral-900"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-5 lg:px-6">
        {/* Header Block Matching Frame 2147224912.png */}
        <div className="relative flex flex-col items-center text-center mb-12 sm:mb-16">
          {/* Filter Toggle (Top / Latest) on Right */}
          <div className="sm:absolute sm:right-0 sm:top-2 mb-6 sm:mb-0">
            <div className="inline-flex items-center gap-2 p-1 rounded-full bg-[#111315] border border-neutral-800 shadow-sm text-xs font-semibold">
              <button
                type="button"
                onClick={() => setFilter("top")}
                className={`px-4 py-1.5 rounded-full transition-colors ${
                  filter === "top"
                    ? "bg-neutral-100 text-black shadow"
                    : "text-neutral-400 hover:text-neutral-200"
                }`}
              >
                Top
              </button>
              <button
                type="button"
                onClick={() => setFilter("latest")}
                className={`px-4 py-1.5 rounded-full transition-colors ${
                  filter === "latest"
                    ? "bg-neutral-100 text-black shadow"
                    : "text-neutral-400 hover:text-neutral-200"
                }`}
              >
                Latest
              </button>
            </div>
          </div>

          {/* Centered Heading with Periwinkle Tint */}
          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#8299f8] font-display">
            Crypto Breaking News
          </h2>
          <p className="mt-3 text-lg sm:text-xl text-neutral-400 max-w-2xl font-normal">
            Real-time updates on crypto markets, platform news, and what's
            moving your money.
          </p>
        </div>

        {/* Top 3 Visual News Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {mainNews.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="rounded-[24px] bg-[#0c0e0f] text-white p-4 border border-neutral-800/80 shadow-xl flex flex-col gap-[10px] hover:border-neutral-700 transition-colors"
            >
              {/* Top Action Bar */}
              <div className="flex items-center justify-between text-xs">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#181a1c] border border-neutral-700/60 text-neutral-300 hover:text-white transition-colors cursor-pointer text-[11px]">
                  <div
                    className="w-3.5 h-3.5 rounded-full flex items-center justify-center font-bold text-[9px] text-white"
                    style={{ backgroundColor: item.color }}
                  >
                    {item.symbol === "BTC" ? "₿" : "♦"}
                  </div>
                  <ArrowUpRight className="w-3 h-3 text-[#9ae600]" />
                  <span>Summarize with KA$HY AI</span>
                </div>
                <span className="text-neutral-500 text-[11px] px-2 py-1 rounded-full bg-white/5">
                  {item.time}
                </span>
              </div>

              {/* Cover Image */}
              <div className="relative rounded-xl overflow-hidden aspect-video bg-neutral-900">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Article Headline */}
              <h3 className="font-bold text-base sm:text-lg text-neutral-100 leading-snug line-clamp-2 hover:text-white transition-colors">
                {item.title}
              </h3>

              {/* Article Description with Read More */}
              <p className="text-xs text-neutral-400 leading-relaxed">
                {item.desc}{" "}
                <span className="text-[#9ae600] font-semibold cursor-pointer hover:underline">
                  Read More
                </span>
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom 3 Mini News Cards */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {miniNews.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + idx * 0.08 }}
              className="rounded-2xl bg-[#0c0e0f] text-white p-4 border border-neutral-800/80 shadow-md flex flex-col justify-between hover:border-neutral-700 transition-colors"
            >
              {/* Top Bar */}
              <div className="flex items-center justify-between mb-2.5 text-xs">
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#181a1c] border border-neutral-700/60 text-neutral-300 text-[10px]">
                  <div
                    className="w-3 h-3 rounded-full flex items-center justify-center font-bold text-[8px] text-white"
                    style={{ backgroundColor: item.color }}
                  >
                    {item.symbol === "BTC" ? "₿" : "♦"}
                  </div>
                  <ArrowUpRight className="w-2.5 h-2.5 text-[#9ae600]" />
                  <span>Summarize with KA$HY AI</span>
                </div>
                <span className="text-neutral-500 text-[10px] px-2 py-0.5 rounded-full bg-white/5">
                  {item.time}
                </span>
              </div>

              {/* Text */}
              <p className="text-xs sm:text-[13px] font-semibold text-neutral-200 leading-snug line-clamp-2">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Center CTA Button Matching Frame 2147224912.png */}
        <div className="mt-8 sm:mt-10 flex justify-center">
          <button
            type="button"
            className="px-8 py-3.5 rounded-full bg-[#111315] text-white text-xs sm:text-sm font-bold tracking-wide border border-neutral-800 hover:bg-[#1a1d20] transition-colors shadow-lg active:scale-95"
          >
            K$Y Daily Analysis
          </button>
        </div>
      </div>
    </section>
  );
}
