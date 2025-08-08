import Title from "@/components/Title";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main>
      <section className="section">
        <Title>Venue</Title>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card leading-relaxed space-y-4">
            <p>
              <strong>Ceremony & Reception</strong><br />
              Lost Mission, Spring Branch, TX
            </p>
            <p>
              Doors open at 5:00 pm. Ceremony at 5:00 pm. Cocktail hour and reception to follow.
            </p>
            <p>
              On-site parking available.
            </p>
            <p>
              📍{" "}
              <Link
                href="https://www.google.com/maps/place/Lost+Mission/@29.8099499,-98.4809593,17z/data=!3m1!4b1!4m6!3m5!1s0x865c80a4f5a35975:0x8a6e022fef744a7f!8m2!3d29.8099453!4d-98.4783844!16s%2Fg%2F1v62j22h?entry=ttu&g_ep=EgoyMDI1MDgwNS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                className="underline hover:opacity-80"
              >
                View on Google Maps
              </Link>
            </p>
            <p>
              🌐{" "}
              <Link
                href="https://www.lostmission.com/"
                target="_blank"
                className="underline hover:opacity-80"
              >
                Visit Lost Mission Website
              </Link>
            </p>
          </div>

          <div className="card p-0 overflow-hidden">
            <Image
              src="/venue.jpg"
              alt="Lost Mission Venue"
              width={800}
              height={600}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
