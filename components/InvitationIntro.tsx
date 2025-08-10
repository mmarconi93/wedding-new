'use client';
import { useEffect, useMemo, useState, useId } from "react";

/* ----- Realistic petal using SVG with a soft ivory gradient ----- */
function Petal({ i }: { i: number }) {
  const gid = useId().replace(/:/g, ""); // unique gradient id

  // Randomized once
  const props = useMemo(() => {
    const r = (a: number, b: number) => Math.random() * (b - a) + a;
    const leftPct = r(0, 100);
    const xStart  = `${r(-1, 1)}vw`;
    const xDrift  = `${r(-14, 14)}vw`;
    const xEnd    = `${r(-22, 22)}vw`;

    const rotStart = `${r(-20, 20)}deg`;
    const rotMid   = `${r(80, 180)}deg`;
    const rotEnd   = `${r(200, 360)}deg`;

    const w = r(26, 46);
    const h = w * r(0.9, 1.3);

    const dur   = `${r(3.4, 4.8)}s`;
    const delay = `${r(0, 1.3)}s`;

    return { leftPct, xStart, xDrift, xEnd, rotStart, rotMid, rotEnd, w, h, dur, delay };
  }, [i]);

  return (
    <svg
      className="pointer-events-none absolute top-[-14vh] animate-petal"
      style={{
        left: `${props.leftPct}%`,
        width: `${props.w}px`,
        height: `${props.h}px`,
        filter: "drop-shadow(0 4px 8px rgba(0,0,0,.18))",
        ["--xStart" as any]: props.xStart,
        ["--xDrift" as any]: props.xDrift,
        ["--xEnd" as any]: props.xEnd,
        ["--rotStart" as any]: props.rotStart,
        ["--rotMid" as any]: props.rotMid,
        ["--rotEnd" as any]: props.rotEnd,
        ["--dur" as any]: props.dur,
        ["--delay" as any]: props.delay
      } as React.CSSProperties}
      viewBox="0 0 100 120"
    >
      <defs>
        <radialGradient id={`g${gid}`} cx="45%" cy="30%" r="80%">
          <stop offset="0%"  stopColor="#FFFFFF" stopOpacity="0.98" />
          <stop offset="45%" stopColor="#FFF9F1" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#F4EFE6" stopOpacity="0.9" />
        </radialGradient>
      </defs>
      <path
        d="M50 6 C72 8, 92 26, 88 53 C85 76, 66 100, 50 114 C34 100, 15 76, 12 53 C8 26, 28 8, 50 6 Z"
        fill={`url(#g${gid})`}
      />
    </svg>
  );
}

function PetalField() {
  const COUNT = 64; // full-screen coverage; lower if mobile perf dips
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-20">
      {Array.from({ length: COUNT }).map((_, i) => <Petal key={i} i={i} />)}
    </div>
  );
}

/* ---------------- Envelope intro ---------------- */
export default function InvitationIntro() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 7000); // keep in sync with overlay-out
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
      {/* 1) Petals */}
      <PetalField />

      {/* 2) Gold envelope + rising card (simplified & correctly layered) */}
      <div className="relative w-80 h-56 sm:w-[28rem] sm:h-44 z-30">
        {/* Back body (behind everything) */}
        <div
          className="absolute inset-0 rounded-xl z-10"
          style={{ backgroundColor: "#D4B483" }}
        />

        {/* Card — rises fully out; sits ABOVE the envelope face */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-3 w-[86%] h-[68%] z-30">
          <div className="w-full h-full bg-white text-[#0f2a22] rounded-lg shadow-2xl grid place-items-center opacity-0 animate-card-rise">
            <div className="text-center px-4">
              <div className="text-sm tracking-[0.35em] uppercase">You’re invited to</div>
              <div className="font-display text-2xl mt-1">The Marconi Wedding</div>
              <div className="text-xs mt-1 tracking-widest">September 25, 2026</div>
            </div>
          </div>
        </div>

        {/* Front face (LEFT/RIGHT/BOTTOM) kept BELOW the card; no overflow clipping */}
        <div className="absolute inset-0 rounded-xl z-20 pointer-events-none">
          <div
            className="absolute left-0 bottom-0 w-1/2 h-1/2"
            style={{ backgroundColor: "#C9A873", clipPath: "polygon(0 100%, 100% 100%, 0 0)" }}
          />
          <div
            className="absolute right-0 bottom-0 w-1/2 h-1/2"
            style={{ backgroundColor: "#C9A873", clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }}
          />
          <div
            className="absolute left-0 right-0 bottom-0 h-1/2"
            style={{ backgroundColor: "#B99763", clipPath: "polygon(0 100%, 50% 0, 100% 100%)" }}
          />
        </div>

        {/* Top flap — the only piece above the card */}
        <div
          className="absolute left-0 right-0 top-0 h-1/2 origin-top rounded-t-xl animate-flap-open z-40"
          style={{
            backgroundColor: "#C9A873",
            clipPath: "polygon(0 0, 100% 0, 50% 100%)",
            transformStyle: "preserve-3d",
            boxShadow: "0 10px 24px rgba(0,0,0,.18)"
          }}
        />
      </div>
    </div>
  );
}