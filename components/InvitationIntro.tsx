'use client';
import { useEffect, useMemo, useState } from "react";

/** One generated petal: size/position/animation randomized */
function Petal({ i }: { i: number }) {
  // generate once on mount, not every render
  const props = useMemo(() => {
    const rand = (min: number, max: number) => Math.random() * (max - min) + min;

    // horizontal starting column & drifts
    const leftPct   = rand(0, 100);                   // 0–100% across the screen
    const xStart    = `${rand(-1, 1)}vw`;             // tiny offset
    const xDrift    = `${rand(-12, 12)}vw`;           // mid sway
    const xEnd      = `${rand(-18, 18)}vw`;           // final drift

    // rotation
    const rotStart  = `${rand(-25, 25)}deg`;
    const rotMid    = `${rand(60, 160)}deg`;
    const rotEnd    = `${rand(180, 360)}deg`;

    // size (larger petals)
    const w         = rand(18, 28); // px
    const h         = w * 0.72;     // teardrop aspect

    // timing
    const dur       = `${rand(3.2, 4.6)}s`;
    const delay     = `${rand(0, 1.2)}s`;

    return { leftPct, xStart, xDrift, xEnd, rotStart, rotMid, rotEnd, w, h, dur, delay };
  }, [i]);

  return (
    <span
      className="pointer-events-none absolute top-[-12vh] block animate-petal"
      style={{
        left: `${props.leftPct}%`,
        width: `${props.w}px`,
        height: `${props.h}px`,

        // white petal with a soft highlight + slight translucency
        background:
          "radial-gradient(120% 100% at 60% 30%, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.92) 55%, rgba(255,255,255,0.85) 100%)",
        boxShadow: "0 4px 10px rgba(0,0,0,.18)",

        // teardrop/rose-petal silhouette
        borderRadius: "60% 60% 50% 50% / 70% 70% 40% 40%",
        transform: "rotate(18deg)",

        // per-petal animation variables
        // @ts-ignore - custom props
        ["--xStart" as any]: props.xStart,
        ["--xDrift" as any]: props.xDrift,
        ["--xEnd" as any]: props.xEnd,
        ["--rotStart" as any]: props.rotStart,
        ["--rotMid" as any]: props.rotMid,
        ["--rotEnd" as any]: props.rotEnd,
        ["--dur" as any]: props.dur,
        ["--delay" as any]: props.delay,
      } as React.CSSProperties}
    />
  );
}

function PetalField() {
  // 48 petals for full-screen coverage (drop to 32 on older phones if needed)
  const COUNT = 48;
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-20">
      {Array.from({ length: COUNT }).map((_, i) => (
        <Petal key={i} i={i} />
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
      {/* 1) White rose petals across full screen */}
      <PetalField />

      {/* 2) Gold envelope + rising card */}
      <div className="relative w-80 h-56 sm:w-[28rem] sm:h-44 z-30">
        {/* Envelope body */}
        <div className="absolute inset-0 rounded-xl" style={{ backgroundColor: "#D4B483" }} />
        <div className="absolute inset-0 rounded-xl ring-1" style={{ boxShadow: "inset 0 8px 22px rgba(0,0,0,.18)", borderColor: "#C6A474" }} />

        {/* Card (rises fully out) */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-3 w-[85%] h-[70%] z-40">
          <div className="w-full h-full bg-white text-[#0f2a22] rounded-lg shadow-2xl grid place-items-center opacity-0 animate-card-rise">
            <div className="text-center px-4">
              <div className="text-sm tracking-[0.35em] uppercase">You’re invited to</div>
              <div className="font-display text-2xl mt-1">The Marconi Wedding</div>
              <div className="text-xs mt-1 tracking-widest">September 25, 2026</div>
            </div>
          </div>
        </div>

        {/* Front triangles (depth shading) */}
        <div className="absolute inset-0 rounded-xl overflow-hidden z-35">
          <div className="absolute left-0 bottom-0 w-1/2 h-1/2"
               style={{ backgroundColor: "#C9A873", clipPath: "polygon(0 100%, 100% 100%, 0 0)" }} />
          <div className="absolute right-0 bottom-0 w-1/2 h-1/2"
               style={{ backgroundColor: "#C9A873", clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }} />
          <div className="absolute left-0 right-0 bottom-0 h-1/2"
               style={{ backgroundColor: "#B99763", clipPath: "polygon(0 100%, 50% 0, 100% 100%)" }} />
        </div>

        {/* Top flap */}
        <div
          className="absolute left-0 right-0 top-0 h-1/2 origin-top rounded-t-xl animate-flap-open z-50"
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