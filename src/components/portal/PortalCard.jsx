import React from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";

export default function PortalCard({ portal, isHovered, onMouseEnter, onMouseLeave }) {
  return (
    <a
      href={portal.url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.04] cursor-pointer transition-all duration-300"
      style={{
        flex: isHovered ? "2.5" : "1",
        transition: "flex 0.4s cubic-bezier(0.4,0,0.2,1), border-color 0.3s, background 0.3s",
        borderColor: isHovered ? "rgba(0,212,212,0.25)" : "rgba(255,255,255,0.08)",
        backgroundColor: isHovered ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,0.04)",
        minWidth: 0,
      }}
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={portal.image}
          alt={portal.title}
          className="w-full h-full object-cover transition-all duration-500"
          style={{
            filter: isHovered ? "brightness(0.45) saturate(0.7)" : "brightness(0.25) saturate(0.4)",
            transform: isHovered ? "scale(1.05)" : "scale(1)",
            transition: "filter 0.5s, transform 0.5s",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1520]/95 via-[#0d1520]/30 to-transparent" />
      </div>

      {/* Number — top left */}
      <div className="absolute top-5 left-5 z-10">
        <span className="font-mono text-[10px] tracking-[0.2em] text-white/25 select-none">
          {portal.number}
        </span>
      </div>

      {/* Arrow — top right, on hover */}
      <div
        className="absolute top-5 right-5 z-10 flex items-center gap-1.5 transition-opacity duration-300"
        style={{ opacity: isHovered ? 1 : 0 }}
      >
        <span className="font-mono text-[9px] tracking-[0.2em] text-[#00d4d4] uppercase">Enter portal</span>
        <ArrowUpRight className="w-3.5 h-3.5 text-[#00d4d4]" />
      </div>

      {/* Bottom content */}
      <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
        {/* Tags — hover only */}
        <div
          className="flex flex-wrap gap-1.5 mb-3 transition-all duration-300"
          style={{ opacity: isHovered ? 1 : 0, transform: isHovered ? "translateY(0)" : "translateY(8px)" }}
        >
          {portal.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 font-mono text-[9px] tracking-widest uppercase text-[#00d4d4]/70 border border-[#00d4d4]/20 rounded-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3
          className="font-display font-bold text-white leading-tight mb-2 transition-all duration-300"
          style={{
            fontSize: isHovered ? "1.6rem" : "1.1rem",
            transition: "font-size 0.4s cubic-bezier(0.4,0,0.2,1), color 0.3s",
            color: isHovered ? "white" : "rgba(255,255,255,0.85)",
          }}
        >
          {portal.title}
        </h3>

        {/* Description — hover only */}
        <p
          className="text-white/50 text-sm leading-relaxed mb-4 transition-all duration-300"
          style={{ opacity: isHovered ? 1 : 0, transform: isHovered ? "translateY(0)" : "translateY(8px)", maxWidth: "32rem" }}
        >
          {portal.description}
        </p>

        {/* Domain */}
        <div className="flex items-center gap-1.5 pt-3 border-t border-white/[0.06]">
          <div className="w-1.5 h-1.5 rounded-full bg-[#00d4d4] shrink-0" />
          <span className="font-mono text-[10px] tracking-wide text-white/35 truncate">
            {portal.domain}
          </span>
          <ExternalLink className="w-3 h-3 text-white/25 ml-auto shrink-0" />
        </div>
      </div>
    </a>
  );
}