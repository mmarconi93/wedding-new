import Title from "@/components/Title";

const people = [
  { role: "Maid of Honor", name: "TBD" },
  { role: "Best Man", name: "TBD" },
  { role: "Bridesmaid", name: "TBD" },
  { role: "Groomsman", name: "TBD" },
];

export default function Page() {
  return (
    <main>
      <section className="section">
        <Title>Wedding Party</Title>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {people.map((p, i) => (
            <div key={i} className="card text-center">
              <div className="mx-auto h-24 w-24 rounded-full bg-[#153127] mb-4" />
              <div className="font-display">{p.name}</div>
              <div className="text-xs uppercase tracking-widest opacity-70">{p.role}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
