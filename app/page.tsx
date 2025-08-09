import InvitationIntro from "@/components/InvitationIntro";
import Hero from "@/components/Hero";
import Title from "@/components/Title";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Envelope intro – plays on every visit to "/" */}
      <InvitationIntro />

      <Hero />

      <section className="section text-center">
        <Title>We’re Getting Married!</Title>
        <p className="max-w-2xl mx-auto opacity-90">
          We can’t wait to celebrate with you in Texas on September 25, 2026.
          Find all the details here — venue info, schedule, dress code, lodging, and RSVP.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Link href="/rsvp" className="btn">RSVP</Link>
          <Link href="/schedule" className="btn">View Schedule</Link>
        </div>
      </section>
    </main>
  );
}
