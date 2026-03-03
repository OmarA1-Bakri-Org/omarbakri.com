import { NextResponse } from "next/server";
import { sql, ensureTables } from "@/lib/db";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    await ensureTables();

    const result = await sql`
      INSERT INTO contacts (name, email, company, message)
      VALUES (${name}, ${email}, ${company || ""}, ${message})
      RETURNING id
    `;

    return NextResponse.json({
      success: true,
      id: result.rows[0].id,
      message: "Contact form submitted successfully",
    });
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "An unknown error occurred",
      },
      { status: 500 }
    );
  }
}
