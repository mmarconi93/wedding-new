import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, attending, guestCount, guest1Name, guest2Name, notes } = await req.json();

    if (!guest1Name || !email) {
      return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
    }

    const base = process.env.AIRTABLE_BASE_ID!;
    const table = process.env.AIRTABLE_TABLE_NAME || "RSVPs";
    const key = process.env.AIRTABLE_API_KEY!;
    const url = `https://api.airtable.com/v0/${base}/${encodeURIComponent(table)}`;

    const at = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fields: {
          "Email": email,
          "Attending": attending === "yes" ? "Yes" : "No",
          "Guest 1 Name": guest1Name,
          "Guest 2 Name": guest2Name || "",
          "Guest Count": Number(guestCount || 0),
          "Notes": notes || ""
          // Full Guest Names, Is Attending?, RSVP Timestamp are formulas/created time in Airtable
        }
      }),
    });

    if (!at.ok) {
      const t = await at.text();
      console.error("Airtable error:", t);
      return NextResponse.json({ error: "Failed to save RSVP" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}