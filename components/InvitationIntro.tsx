'use client';
import { useEffect, useState } from "react";

function PetalField() {
  // simple positions/delays for 14 petals
  const petals = [
    { left: "12%", delay: "0s",    slow: false },
    { left: "22%", delay: "0.15s", slow: true  },
    { left: "35%", delay: "0.3s",  slow: false },
    { left: "46%", delay: "0.45s", slow: true  },
    { left: "58%", delay: "0.1s",  slow: false },
    { left: "68%", delay: "0.25s", slow: true  },
    { left: "78%", delay: "0.4s",  slow: false },
    { left: "88%", delay: "0.2s",  slow: true  },
    { left: "5%",  delay: "0.55s", slow: true  },
    { left: "30%", delay: "0.65s", slow: false },
    { left: "55%", delay: "0.5s",  slow: true  },
    { left: "70%", delay: "0.7s",  slow: false },
    { left: "83%", delay: "0.85s", slow: true  },
    { left: "17%", delay: "0.95s", slow: false },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-20">
      {petals.map((p, i) => (
        <span
          key={i}
          className={`absolute top-[-10vh] block rounded-full shadow
                      ${p.slow ? "animate-petal-slow" : "animate-petal-fast"}`}
          style={{
            left: p.left,
            animationDelay: p.delay,
            width: i % 3 === 0 ? "14px" : "10px",
            height: i % 3 === 0 ? "9px"  : "7px",
            background: "rgba(255,255,255,0.95)",
            boxShadow: "0 2px 6px rgba(0,0,0,.2)",
            transform: "rotate(15deg)",
            borderRadius: "40% 60% 60% 40% / 60% 50% 50% 40%", // petal-ish
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}

export default function InvitationIntro() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 7000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) setShow(false);
  }, []);

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-forest text-gold animate-overlay-out"
      style={{ perspective: "1200px" }}
      aria-label="Opening invitation"
    >
      {/* 1) White rose petals (start immediately) */}
      <PetalField />

      {/* 2) Gold envelope */}
      <div className="relative w-80 h-56 sm:w-[28rem] sm:h-44 z-30">
        {/* Back/body — GOLD */}
        <div
          className="absolute inset-0 rounded-xl border"
          style={{ backgroundColor: "#D4B483", borderColor: "#C6A474" }}
        />

        {/* Card (rises fully out) */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-4 w-[85%] h-[70%] z-40">
          <div className="w-full h-full bg-white text-[#0f2a22] rounded-lg shadow-2xl grid place-items-center opacity-0 animate-card-rise">
            <div className="text-center px-4">
              <div className="text-sm tracking-[0.35em] uppercase">You’re invited to</div>
              <div className="font-display text-2xl mt-1">The Marconi Wedding</div>
              <div className="text-xs mt-1 tracking-widest">September 25, 2026</div>
            </div>
          </div>
        </div>

        {/* Front triangles (gold) */}
        <div className="absolute inset-0 rounded-xl overflow-hidden z-35">
          <div className="absolute left-0 bottom-0 w-1/2 h-1/2"
               style={{ backgroundColor: "#C9A873", clipPath: "polygon(0 100%, 100% 100%, 0 0)" }} />
          <div className="absolute right-0 bottom-0 w-1/2 h-1/2"
               style={{ backgroundColor: "#C9A873", clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }} />
          <div className="absolute left-0 right-0 bottom-0 h-1/2"
               style={{ backgroundColor: "#B99763", clipPath: "polygon(0 100%, 50% 0, 100% 100%)" }} />
        </div>

        {/* Flap */}
        <div
          className="absolute left-0 right-0 top-0 h-1/2 origin-top rounded-t-xl animate-flap-open z-50"
          style={{ backgroundColor: "#C9A873", clipPath: "polygon(0 0, 100% 0, 50% 100%)", transformStyle: "preserve-3d" }}
        />
      </div>
    </div>
  );
}
