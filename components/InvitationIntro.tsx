'use client';
import { useEffect, useState } from "react";

export default function InvitationIntro() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 7000); // keep in sync with overlay-out
    return () => clearTimeout(t);
  }, []);

  // Respect reduced motion
  useEffect(() => {
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      setShow(false);
    }
  }, []);

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-forest text-gold animate-overlay-out"
      style={{ perspective: "1200px" }}
      aria-label="Opening invitation"
    >
      {/* Envelope */}
      <div className="relative w-80 h-56 sm:w-[28rem] sm:h-44">
        {/* Back/body — GOLD */}
        <div
          className="absolute inset-0 rounded-xl border"
          style={{
            backgroundColor: "#D4B483",       // gold
            borderColor: "#C6A474"            // slightly darker border
          }}
        />

        {/* CARD WRAPPER (centered) */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-4 w-[85%] h-[70%] z-30">
          {/* Card that actually animates */}
          <div className="w-full h-full bg-white text-[#0f2a22] rounded-lg shadow-2xl grid place-items-center opacity-0 animate-card-rise">
            <div className="text-center px-4">
              <div className="text-sm tracking-[0.35em] uppercase">You’re invited</div>
              <div className="font-display text-2xl mt-1">Malaquias &amp; Chantel</div>
              <div className="text-xs mt-1 tracking-widest">September 25, 2026</div>
            </div>
          </div>
        </div>

        {/* Front triangles / flap base — GOLD shades for depth */}
        <div className="absolute inset-0 rounded-xl overflow-hidden z-10">
          {/* left triangle */}
          <div
            className="absolute left-0 bottom-0 w-1/2 h-1/2"
            style={{
              backgroundColor: "#C9A873",   // darker gold
              clipPath: "polygon(0 100%, 100% 100%, 0 0)"
            }}
          />
          {/* right triangle */}
          <div
            className="absolute right-0 bottom-0 w-1/2 h-1/2"
            style={{
              backgroundColor: "#C9A873",
              clipPath: "polygon(0 100%, 100% 100%, 100% 0)"
            }}
          />
          {/* bottom triangle */}
          <div
            className="absolute left-0 right-0 bottom-0 h-1/2"
            style={{
              backgroundColor: "#B99763",   // even darker gold
              clipPath: "polygon(0 100%, 50% 0, 100% 100%)"
            }}
          />
        </div>

        {/* Top flap — GOLD, rotates open */}
        <div
          className="absolute left-0 right-0 top-0 h-1/2 origin-top rounded-t-xl animate-flap-open z-20"
          style={{
            backgroundColor: "#C9A873",
            clipPath: "polygon(0 0, 100% 0, 50% 100%)",
            transformStyle: "preserve-3d"
          }}
        />
      </div>
    </div>
  );
}