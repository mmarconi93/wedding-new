'use client';
import { useEffect, useState } from "react";

export default function InvitationIntro() {
  const [show, setShow] = useState(true); // start visible

  useEffect(() => {
    const totalMs = 7000; // length of animations
    const t = setTimeout(() => setShow(false), totalMs);
    return () => clearTimeout(t);
  }, []);

  // Respect reduced motion
  useEffect(() => {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
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
        {/* Back/body */}
        <div className="absolute inset-0 rounded-xl bg-[#0c221b] border border-[#2b4138]" />

        {/* Card inside */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-4 w-[85%] h-[70%] z-20">
          <div className="w-full h-full bg-white text-[#0f2a22] rounded-lg shadow-xl grid place-items-center opacity-0 animate-card-slide">
            <div className="text-center px-4">
              <div className="text-sm tracking-[0.35em] uppercase">You’re invited</div>
              <div className="font-display text-2xl mt-1">Malaquias &amp; Chantel</div>
              <div className="text-xs mt-1 tracking-widest">September 25, 2026</div>
            </div>
          </div>
        </div>

        {/* Front triangles */}
        <div className="absolute inset-0 rounded-xl overflow-hidden z-10">
          <div className="absolute left-0 bottom-0 w-1/2 h-1/2 bg-[#123428]"
               style={{ clipPath: "polygon(0 100%, 100% 100%, 0 0)" }} />
          <div className="absolute right-0 bottom-0 w-1/2 h-1/2 bg-[#123428]"
               style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }} />
          <div className="absolute left-0 right-0 bottom-0 h-1/2 bg-[#113125]"
               style={{ clipPath: "polygon(0 100%, 50% 0, 100% 100%)" }} />
        </div>

        {/* Top flap */}
        <div
          className="absolute left-0 right-0 top-0 h-1/2 origin-top bg-[#153c2f] rounded-t-xl animate-flap-open"
          style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)", transformStyle: "preserve-3d" }}
        />
      </div>
    </div>
  );
}