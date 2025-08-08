'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/venue", label: "Venue" },
  { href: "/wedding-party", label: "Wedding Party" },
  { href: "/dress-code", label: "Dress Code" },
  { href: "/schedule", label: "Schedule" },
  { href: "/accommodations", label: "Accommodations" },
  { href: "/registry", label: "Registry" },
  { href: "/rsvp", label: "RSVP" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <header className="w-full border-b border-[#2b4138] bg-forest/95 backdrop-blur sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 h-14">
        <Link href="/" className="font-display text-lg tracking-widest">
          MALAQUIAS & CHANTEL
        </Link>
        <ul className="hidden md:flex items-center gap-5">
          {links.map(l => (
            <li key={l.href}>
              <Link className={`nav-link ${pathname===l.href ? "opacity-100" : "opacity-80"}`} href={l.href}>{l.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
