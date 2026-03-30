// drizzle/schema.ts
import { pgTable, text, varchar, timestamp, jsonb, primaryKey, boolean } from "drizzle-orm/pg-core";
export type SnippetContent = {
  code: string;
  language: string;
};


export const users = pgTable("users", {
  id: text("id").primaryKey(),          
  username: varchar("username", { length: 50 }),
  avatar: text("avatar"),               
  createdAt: timestamp("created_at").defaultNow()
});

export const snippets = pgTable("snippets", {
  id: text("id").primaryKey(),          
  title: text("title").notNull(),
  content: jsonb("content").$type<SnippetContent>().notNull(),  
  authorId: text("author_id").references(() => users.id).notNull(),
  isPublic: boolean("is_public").default(false),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow()
});

export const tags = pgTable("tags", {
  id: text("id").primaryKey(),          // UUID
  name: varchar("name", { length: 50 }).unique().notNull() 
});

export const snippetTags = pgTable("snippet_tags", {
  snippetId: text("snippet_id").notNull().references(() => snippets.id),
  tagId: text("tag_id").notNull().references(() => tags.id),
}, (table) => ({
  pk: primaryKey(table.snippetId, table.tagId)
}));

export const snippetLikes = pgTable("snippet_likes", {
  id: text("id").primaryKey(),
  userId: text("user_id").notNull().references(() => users.id),
  snippetId: text("snippet_id").notNull().references(() => snippets.id),
  createdAt: timestamp("created_at").defaultNow()
});
