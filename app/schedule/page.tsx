import Title from "@/components/Title";

const items = [
  { time: "5:00 pm", title: "Welcome Drink", detail: "Have a drink before things get real fancy."},
  { time: "5:30 pm", title: "Ceremony", detail: "We’ll make it official!"},
  { time: "6:00 pm", title: "Cocktail Reception", detail: "Enjoy hors d’oeuvres and the open bar."},
  { time: "7:00 pm", title: "Dinner & Dancing", detail: "Eat, toast, dance."},
];

export default function Page() {
  return (
    <main>
      <section className="section">
        <Title>Schedule</Title>
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((it, idx) => (
            <div key={idx} className="card">
              <div className="text-xs uppercase tracking-widest opacity-70">{it.time}</div>
              <div className="font-display text-2xl mt-1">{it.title}</div>
              <p className="mt-2 opacity-90">{it.detail}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
