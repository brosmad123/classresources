import React, { useState, useEffect } from "react";
import Header from "@/components/portal/Header";
import SearchOverlay from "@/components/portal/SearchOverlay";
import Footer from "@/components/portal/Footer";
import PortalCard from "@/components/portal/PortalCard";
import SectionDivider from "@/components/portal/SectionDivider";
import { CATEGORIES, PORTALS } from "@/lib/portalData";

function PortalRow({ portals }) {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="flex gap-3 px-8 py-6" style={{ minHeight: "340px" }}>
      {portals.map((portal) => (
        <PortalCard
          key={portal.id}
          portal={portal}
          isHovered={hoveredId === portal.id}
          onMouseEnter={() => setHoveredId(portal.id)}
          onMouseLeave={() => setHoveredId(null)}
        />
      ))}
    </div>
  );
}

export default function Home() {
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#0d1520]">
      <Header onSearchOpen={() => setSearchOpen(true)} />
      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

      <main className="pt-14">
        {CATEGORIES.map((category) => {
          const portals = PORTALS.filter((p) => p.category === category.id);
          if (!portals.length) return null;

          return (
            <section key={category.id} className="mb-2">
              <SectionDivider category={category} />
              <PortalRow portals={portals} />
            </section>
          );
        })}
      </main>

      <Footer />
    </div>
  );
}