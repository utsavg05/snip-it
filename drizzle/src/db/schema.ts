// drizzle/schema.ts
import { pgTable, text, varchar, timestamp, jsonb, primaryKey } from "drizzle-orm/pg-core";

// 1️⃣ Users Table - tied to Supabase Auth users
export const users = pgTable("users", {
  id: text("id").primaryKey(),          // same as supabase auth user id
  username: varchar("username", { length: 50 }),
  avatar: text("avatar"),               // optional profile picture
  createdAt: timestamp("created_at").defaultNow()
});

// 2️⃣ Snippets Table - main code storage
export const snippets = pgTable("snippets", {
  id: text("id").primaryKey(),          // can store UUID from client
  title: text("title").notNull(),
  content: jsonb("content").notNull(),  // { code: "...", language: "javascript" }
  authorId: text("author_id").references(() => users.id).notNull(),
  createdAt: timestamp("created_at").defaultNow()
});

// 3️⃣ Tags Table - list of tags (predefined + user-added later)
export const tags = pgTable("tags", {
  id: text("id").primaryKey(),          // UUID
  name: varchar("name", { length: 50 }).unique().notNull()  // "javascript", "nextjs", "api"
});

// 4️⃣ Snippet-Tags Table (Many-to-many relationship)
export const snippetTags = pgTable("snippet_tags", {
  snippetId: text("snippet_id").notNull().references(() => snippets.id),
  tagId: text("tag_id").notNull().references(() => tags.id),
}, (table) => ({
  pk: primaryKey(table.snippetId, table.tagId)
}));

// 5️⃣ Likes Table - who liked what
export const snippetLikes = pgTable("snippet_likes", {
  id: text("id").primaryKey(),
  userId: text("user_id").notNull().references(() => users.id),
  snippetId: text("snippet_id").notNull().references(() => snippets.id),
  createdAt: timestamp("created_at").defaultNow()
});
