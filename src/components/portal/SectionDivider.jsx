import React from "react";

export default function SectionDivider({ category }) {
  return (
    <div className="border-t border-b border-white/[0.05] bg-[#0a1218] px-8 py-5 flex items-center gap-5">
      <div className="w-1 h-4 bg-[#00d4d4] rounded-full" />
      <div>
        <span className="font-mono text-xs tracking-[0.2em] text-[#00d4d4] uppercase">
          {category.label}
        </span>
        <span className="font-mono text-[10px] text-white/30 ml-4 tracking-wider">
          {category.description}
        </span>
      </div>
    </div>
  );
}