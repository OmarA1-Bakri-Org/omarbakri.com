import { neon } from "@neondatabase/serverless";

type DbRow = Record<string, unknown>;

let tablesInitialized = false;
let tablesInitializationPromise: Promise<void> | null = null;

function createClient() {
  const databaseUrl = process.env.POSTGRES_URL || process.env.DATABASE_URL;
  if (!databaseUrl) {
    throw new Error("Missing database connection string: set POSTGRES_URL or DATABASE_URL");
  }

  return neon(databaseUrl);
}

export async function sql<T extends DbRow = DbRow>(
  strings: TemplateStringsArray,
  ...values: unknown[]
): Promise<{ rows: T[] }> {
  const client = createClient();
  const rows = (await client(strings, ...values)) as T[];
  return { rows };
}

export async function ensureTables() {
  await sql`
    CREATE TABLE IF NOT EXISTS contacts (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      company VARCHAR(255) DEFAULT '',
      message TEXT NOT NULL,
      status VARCHAR(50) DEFAULT 'new',
      created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
    )
  `;

  await sql`
    CREATE INDEX IF NOT EXISTS contacts_email_idx ON contacts(email)
  `;

  await sql`
    CREATE TABLE IF NOT EXISTS newsletter_subscribers (
      id SERIAL PRIMARY KEY,
      email VARCHAR(255) UNIQUE NOT NULL,
      source VARCHAR(100) DEFAULT 'website',
      subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
    )
  `;

  await sql`
    CREATE INDEX IF NOT EXISTS newsletter_email_idx ON newsletter_subscribers(email)
  `;
}

export async function ensureTablesOnce() {
  if (tablesInitialized) {
    return;
  }

  if (!tablesInitializationPromise) {
    tablesInitializationPromise = ensureTables();
  }

  try {
    await tablesInitializationPromise;
    tablesInitialized = true;
  } catch (error) {
    tablesInitializationPromise = null;
    throw error;
  }
}
