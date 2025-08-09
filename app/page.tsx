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
        <div className="mt-10 flex justify-center gap-4">
          <Link href="/rsvp" className="btn">RSVP</Link>
          <Link href="/schedule" className="btn">View Schedule</Link>
        </div>
      </section>
    </main>
  );
}
