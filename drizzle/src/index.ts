
import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import { snippets, users } from './db/schema'

const connectionString = process.env.DATABASE_URL

if (!connectionString) {
  throw new Error('DATABASE_URL environment variable is not set')
}

// Disable prefetch as it is not supported for "Transaction" pool mode
const client = postgres(connectionString, { prepare: false })
export const db = drizzle(client, {schema: { snippets, users }});

const allUsers = await db.select().from(users);