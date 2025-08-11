'use client';
import Title from "@/components/Title";
import { useState } from "react";

export default function Page() {
  const [attending, setAttending] = useState<"yes"|"no">("yes");
  const [bringingGuest, setBringingGuest] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErr(null);
    setLoading(true);

    const form = e.currentTarget;
    const fd = new FormData(form);
    const guest1Name = String(fd.get("guest1Name") || "").trim();
    const guest2Name = bringingGuest ? String(fd.get("guest2Name") || "").trim() : "";
    const email = String(fd.get("email") || "").trim();
    const notes = String(fd.get("notes") || "");

    if (!guest1Name || !email) {
      setErr("Please enter your name and email.");
      setLoading(false);
      return;
    }
    if (attending === "yes" && bringingGuest && !guest2Name) {
      setErr("Please enter your guest’s name or switch off plus-one.");
      setLoading(false);
      return;
    }

    const guestCount = attending === "yes" ? 1 + (bringingGuest ? 1 : 0) : 0;

    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          attending, email, notes,
          guest1Name, guest2Name,
          guestCount
        }),
      });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j.error || "Failed to submit");
      }
      setSubmitted(true);
      form.reset();
      setBringingGuest(false);
      setAttending("yes");
    } catch (e: any) {
      setErr(e.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main>
      <section className="section">
        <Title>RSVP</Title>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto card grid gap-4">
            <input
              required name="guest1Name" placeholder="Your full name"
              className="bg-transparent border border-[#2b4138] rounded px-3 py-2"
            />
            <input
              required type="email" name="email" placeholder="Email"
              className="bg-transparent border border-[#2b4138] rounded px-3 py-2"
            />

            <label className="text-sm opacity-80">Will you attend?</label>
            <select
              value={attending}
              onChange={e => { setAttending(e.target.value as any); if (e.target.value==="no") setBringingGuest(false); }}
              className="bg-transparent border border-[#2b4138] rounded px-3 py-2"
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>

            {attending === "yes" && (
              <>
                <label className="text-sm opacity-80">Bringing a guest?</label>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setBringingGuest(false)}
                    className={`px-3 py-1 rounded border ${!bringingGuest ? "bg-gold text-forest" : "border-[#2b4138]"}`}
                  >
                    No
                  </button>
                  <button
                    type="button"
                    onClick={() => setBringingGuest(true)}
                    className={`px-3 py-1 rounded border ${bringingGuest ? "bg-gold text-forest" : "border-[#2b4138]"}`}
                  >
                    Yes
                  </button>
                </div>

                {bringingGuest && (
                  <input
                    name="guest2Name" placeholder="Guest’s full name"
                    className="bg-transparent border border-[#2b4138] rounded px-3 py-2"
                  />
                )}
              </>
            )}

            <textarea
              name="notes" rows={4}
              placeholder="Dietary restrictions, disability accomodations, etc."
              className="bg-transparent border border-[#2b4138] rounded px-3 py-2"
            />

            <button className="btn justify-self-start disabled:opacity-60" type="submit" disabled={loading}>
              {loading ? "Submitting..." : "Submit"}
            </button>
            {err && <p className="text-sm text-red-300">{err}</p>}

            <p className="text-2xl font-bold text-[#C2A85D] text-center uppercase">
              UNFORTUNATELY NO CHILDREN ALLOWED. ADULT ONLY WEDDING.
            </p> 
          </form>
        ) : (
          <div className="max-w-lg mx-auto card text-center">
            <p>Thanks! We’ve received your RSVP.</p>
            <button className="btn mt-4" onClick={() => setSubmitted(false)}>Submit another</button>
          </div>
        )}
      </section>
    </main>
  );
}