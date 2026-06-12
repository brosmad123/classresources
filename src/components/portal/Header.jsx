import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";

export default function Header({ onSearchOpen }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#0d1520]/90 backdrop-blur-lg border-b border-white/[0.05]" : "bg-[#0d1520]/80 backdrop-blur-md border-b border-white/[0.04]"
      }`}
    >
      <div className="px-6 md:px-8 h-14 flex items-center justify-between">
        {/* Left: dot + site name */}
        <div className="flex items-center gap-2.5">
          <div className="w-2 h-2 rounded-full bg-[#00d4d4]" />
          <span className="font-mono text-[11px] tracking-[0.18em] text-white/70 uppercase">
            classresources.info
          </span>
        </div>

        {/* Center: headline */}
        <div className="hidden md:flex items-center gap-2">
          <span className="font-mono text-[13px] text-white/50 tracking-wide">Select a </span>
          <span className="font-mono text-[13px] text-[#00d4d4] tracking-wide font-medium">Portal</span>
        </div>

        {/* Right: portals count + search */}
        <div className="flex items-center gap-3">
          <button
            onClick={onSearchOpen}
            className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-white/[0.08] hover:border-[#00d4d4]/40 bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-200 group"
          >
            <Search className="w-3 h-3 text-white/40 group-hover:text-[#00d4d4] transition-colors" />
            <span className="font-mono text-[10px] text-white/40 group-hover:text-white/70 transition-colors hidden sm:inline">
              ⌘K
            </span>
          </button>
          <div className="px-3 py-1.5 rounded-md border border-white/[0.08] bg-white/[0.03]">
            <span className="font-mono text-[10px] tracking-[0.15em] text-white/40 uppercase">
              10 Portals Active
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}