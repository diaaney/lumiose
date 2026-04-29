import postgres from 'postgres';

let client: ReturnType<typeof postgres> | null = null;

function getClient() {
  if (client) return client;
  const url = process.env.DATABASE_URL;
  if (!url) return null;

  client = postgres(url, {
    ssl: 'require',
    prepare: false,
    idle_timeout: 20,
    max: 1,
  });
  return client;
}

export type LeadInsert = {
  name: string;
  email: string;
  business?: string;
  phone?: string;
  need?: string;
  message?: string;
  locale: 'en' | 'es';
  source?: 'form' | 'whatsapp' | 'manual';
};

export async function insertLead(input: LeadInsert): Promise<string | null> {
  const sql = getClient();
  if (!sql) {
    console.warn('[leads] DATABASE_URL not set, skipping insert');
    return null;
  }

  try {
    const rows = await sql<{ id: string }[]>`
      INSERT INTO leads (
        name, email, business, phone, need, message, locale, source, status
      ) VALUES (
        ${input.name},
        ${input.email},
        ${input.business ?? null},
        ${input.phone ?? null},
        ${input.need ?? null},
        ${input.message ?? null},
        ${input.locale},
        ${input.source ?? 'form'},
        'new'
      )
      RETURNING id
    `;
    return rows[0]?.id ?? null;
  } catch (err) {
    console.error('[leads] insert failed:', err);
    return null;
  }
}
