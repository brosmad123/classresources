import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.05] bg-[#0a1218]">
      <div className="px-8 h-12 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-1.5 h-1.5 rounded-full bg-[#00d4d4] animate-pulse" />
          <span className="font-mono text-[10px] tracking-[0.18em] text-white/35 uppercase">
            Status: All Systems Live
          </span>
        </div>
        <span className="font-mono text-[10px] text-white/20 tracking-wider">
          classresources.info · © {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
}