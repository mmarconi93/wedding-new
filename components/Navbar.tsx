'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/venue", label: "Venue" },
  { href: "/dress-code", label: "Dress Code" },
  { href: "/schedule", label: "Schedule" },
  { href: "/accommodations", label: "Accommodations" },
  { href: "/rsvp", label: "RSVP" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the menu on route change
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="w-full border-b border-[#2b4138] bg-forest/95 backdrop-blur sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="font-display text-lg tracking-widest">
          MALAQUIAS & CHANTEL
        </Link>

        {/* Desktop menu */}
        <ul className="hidden md:flex items-center gap-5">
          {links.map(l => (
            <li key={l.href}>
              <Link
                className={`nav-link ${pathname === l.href ? "opacity-100" : "opacity-80"}`}
                href={l.href}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger (mobile) */}
        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
          className="md:hidden p-2 rounded border border-[#2b4138] focus:outline-none focus:ring-2 focus:ring-gold"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" />
          </svg>
        </button>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden border-t border-[#2b4138] bg-forest">
          <ul className="px-4 py-3 space-y-2">
            {links.map(l => (
              <li key={l.href}>
                <Link
                  className={`block py-2 nav-link ${pathname === l.href ? "opacity-100" : "opacity-80"}`}
                  href={l.href}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
