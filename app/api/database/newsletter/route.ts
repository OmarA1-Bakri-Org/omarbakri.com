import { NextResponse } from "next/server";
import { sql, ensureTablesOnce } from "@/lib/db";

type SubscriberRow = {
  id: number;
};

function validateEmail(email: string): boolean {
  return /^(?:"[^"]+"|[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+)@(?:\[[^\]\s]+\]|(?:[A-Za-z0-9-]+\.)+[A-Za-z0-9-]{2,})$/.test(
    email
  );
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    if (!validateEmail(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
    }

    await ensureTablesOnce();

    const result = await sql<SubscriberRow>`
      INSERT INTO newsletter_subscribers (email)
      VALUES (${email})
      ON CONFLICT (email) DO NOTHING
      RETURNING id
    `;

    if (result.rows[0]?.id == null) {
      const existing = await sql<SubscriberRow>`
        SELECT id
        FROM newsletter_subscribers
        WHERE email = ${email}
        LIMIT 1
      `;

      return NextResponse.json({
        success: true,
        id: existing.rows[0]?.id ?? null,
        message: "Already subscribed",
        alreadySubscribed: true,
      });
    }

    return NextResponse.json({
      success: true,
      id: result.rows[0].id,
      message: "Subscribed successfully",
      alreadySubscribed: false,
    });
  } catch (error) {
    console.error("Error subscribing to newsletter:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "An unknown error occurred",
      },
      { status: 500 }
    );
  }
}
