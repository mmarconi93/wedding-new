import Title from "@/components/Title";
import Link from "next/link";

export default function Page() {
  return (
    <main>
      <section className="section text-center">
        <Title>Registry</Title>
        <p className="opacity-90 max-w-2xl mx-auto">
          Your presence is the greatest gift! If you’d like to contribute, we’ll add registry links here later.
        </p>
        <div className="mt-10 space-x-4">
          <Link className="btn" href="#">Amazon</Link>
          <Link className="btn" href="#">Target</Link>
          <Link className="btn" href="#">Honeyfund</Link>
        </div>
      </section>
    </main>
  );
}
