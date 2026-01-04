import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from "./schema"

const dbUrl = process.env.NEXT_PUBLIC_DATABASE_URL_CONFIG;
if (!dbUrl) {
    console.error("❌ FATAL: NEXT_PUBLIC_DATABASE_URL_CONFIG is missing!");
} else {
    // Sanitize URL just in case user pasted 'psql ' command
    const cleanUrl = dbUrl.replace(/^psql\s+/, "").replace(/['"]/g, "").trim();

    try {
        const url = new URL(cleanUrl);
        console.log("✅ Database URL Cleaned & Validated. Hostname:", url.hostname);
    } catch (e) {
        console.error("❌ FATAL: Connection string is still invalid after cleaning:", e);
        console.error("Value was:", cleanUrl);
    }
}

const cleanUrl = process.env.NEXT_PUBLIC_DATABASE_URL_CONFIG?.replace(/^psql\s+/, "").replace(/['"]/g, "").trim();

if (!cleanUrl) {
    throw new Error("Database URL is missing or empty.");
}

const sql = neon(cleanUrl);
export const db = drizzle(sql, { schema });
