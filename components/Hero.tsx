import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[60vh] md:min-h-[70vh]">
      <Image
        src="/hero.jpg"
        alt="Malaquias and Chantel"
        fill
        className="object-cover opacity-90"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/20 to-forest/90" />
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center px-4">
        <h1 className="font-display text-6xl md:text-7xl">MALAQUIAS</h1>
        <div className="rule my-4 w-64 mx-auto" />
        <h2 className="font-display text-6xl md:text-7xl">CHANTEL</h2>
        <p className="mt-6 uppercase tracking-[0.35em] text-sm">September 25, 2026</p>
      </div>
    </section>
  );
}
