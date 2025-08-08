'use client';
import Title from "@/components/Title";
import { useState } from "react";

export default function Page() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main>
      <section className="section">
        <Title>RSVP</Title>
        {!submitted ? (
          <form
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            className="max-w-xl mx-auto card grid gap-4"
          >
            <input required name="name" placeholder="Full Name" className="bg-transparent border border-[#2b4138] rounded px-3 py-2" />
            <input required type="email" name="email" placeholder="Email" className="bg-transparent border border-[#2b4138] rounded px-3 py-2" />
            <select name="attending" className="bg-transparent border border-[#2b4138] rounded px-3 py-2">
              <option value="yes">Will attend</option>
              <option value="no">Regretfully can’t</option>
            </select>
            <textarea name="notes" rows={4} placeholder="Dietary restrictions, song requests, etc." className="bg-transparent border border-[#2b4138] rounded px-3 py-2" />
            <button className="btn justify-self-start" type="submit">Submit</button>
            <p className="text-xs opacity-70">This demo stores nothing. Hook this up to a Google Form, Airtable, or Vercel serverless function later.</p>
          </form>
        ) : (
          <div className="max-w-lg mx-auto card text-center">
            <p>Thanks! Your RSVP has been noted (locally).</p>
          </div>
        )}
      </section>
    </main>
  );
}
