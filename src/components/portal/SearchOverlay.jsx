import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search, X, ArrowUpRight } from "lucide-react";
import { PORTALS } from "@/lib/portalData";

export default function SearchOverlay({ isOpen, onClose }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setTimeout(() => inputRef.current?.focus(), 80);
    }
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    if (isOpen) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  const results = query.trim()
    ? PORTALS.filter(
        (p) =>
          p.title.toLowerCase().includes(query.toLowerCase()) ||
          p.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()))
      )
    : PORTALS;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] bg-[#0a1520]/95 backdrop-blur-xl flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-8 py-5 border-b border-white/[0.06]">
            <div className="flex items-center gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00d4d4]" />
              <span className="font-mono text-[11px] tracking-[0.18em] text-white/50 uppercase">
                Search Portals
              </span>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-sm border border-white/[0.08] flex items-center justify-center hover:border-[#00d4d4]/40 hover:bg-white/[0.04] transition-all"
            >
              <X className="w-3.5 h-3.5 text-white/50" />
            </button>
          </div>

          {/* Search input */}
          <div className="px-8 py-6 border-b border-white/[0.06]">
            <div className="relative max-w-2xl">
              <Search className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type to search..."
                className="w-full pl-8 pr-4 py-2 bg-transparent border-b border-white/[0.1] focus:border-[#00d4d4]/50 text-white text-2xl font-light placeholder:text-white/15 focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Results */}
          <div className="flex-1 overflow-auto">
            {results.map((portal) => (
              <a
                key={portal.id}
                href={portal.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="group flex items-center gap-5 px-8 py-5 border-b border-white/[0.04] hover:bg-white/[0.03] transition-all duration-200"
              >
                <img
                  src={portal.image}
                  alt={portal.title}
                  className="w-16 h-10 object-cover brightness-50 group-hover:brightness-75 transition-all duration-300 rounded-sm"
                />
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <span className="font-mono text-[10px] text-white/25 tracking-widest">
                    {portal.number}
                  </span>
                  <span className="text-white font-medium text-base group-hover:text-[#00d4d4] transition-colors">
                    {portal.title}
                  </span>
                  <span className="font-mono text-[10px] text-white/30 hidden sm:inline">
                    {portal.domain}
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-[#00d4d4] transition-colors shrink-0" />
              </a>
            ))}
            {results.length === 0 && (
              <div className="px-8 py-20 text-center">
                <p className="font-mono text-sm text-white/25">
                  No portals match "{query}"
                </p>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}