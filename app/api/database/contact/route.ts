import { NextResponse } from "next/server";
import { sql, ensureTablesOnce } from "@/lib/db";
import { z } from "zod";

type ContactInsertRow = {
  id: number;
};

const contactSchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(254),
  company: z.string().trim().max(120).optional().default(""),
  message: z.string().trim().min(1).max(4000),
});

export async function POST(request: Request) {
  try {
    const contentLengthHeader = request.headers.get("content-length");
    if (contentLengthHeader) {
      const contentLength = Number(contentLengthHeader);
      if (Number.isFinite(contentLength) && contentLength > 10_000) {
        return NextResponse.json(
          { error: "Payload too large" },
          { status: 400 }
        );
      }
    }

    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          error: "Validation failed",
          details: parsed.error.flatten(),
        },
        { status: 400 }
      );
    }

    const { name, email, company, message } = parsed.data;


    await ensureTablesOnce();

    const result = await sql<ContactInsertRow>`
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
    const requestId = crypto.randomUUID();
    const errorMessage = error instanceof Error ? error.message : "unknown_error";
    console.error(`Contact submission failed [${requestId}] ${errorMessage}`);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}