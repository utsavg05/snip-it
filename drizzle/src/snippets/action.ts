"use server";

// import { db } from "@/lib/db";
import { db } from "@/drizzle/src/index";
import { snippetLikes, snippets, users } from "@/drizzle/src/db/schema";
import { createSupabaseServerClient } from "@/lib/supabase/server-client";
import { nanoid } from "nanoid";
import { eq, sql } from "drizzle-orm";

type CreateSnippetInput = {
  title: string;
  code: string;
  language: string;
  isPublic?: boolean;
};

export async function createSnippet(input: CreateSnippetInput) {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // 1️⃣ Auth guard
  if (!user) {
    throw new Error("Unauthorized");
  }

  // 2️⃣ Validation (simple for MVP)
  if (!input.title || !input.code || !input.language) {
    throw new Error("Missing required fields");
  }

  // 3️⃣ Insert snippet
  await db.insert(snippets).values({
    id: nanoid(),
    title: input.title,
    content: {
      code: input.code,
      language: input.language,
    },
    authorId: user.id,
    isPublic: input.isPublic ?? false,
  });

  return { success: true };
}

export async function getMySnippets() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Unauthorized");
  }

  return db.query.snippets.findMany({
    where: (snippets, { eq }) =>
      eq(snippets.authorId, user.id),
    orderBy: (snippets, { desc }) =>
      desc(snippets.createdAt),
  });
}

export async function getPublicSnippets() {
  return db.query.snippets.findMany({
    where: (snippets, { eq }) =>
      eq(snippets.isPublic, true),
    orderBy: (snippets, { desc }) =>
      desc(snippets.createdAt),
  });
}

export async function getPublicSnippetsWithLikes() {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();

  return db
    .select({
      id: snippets.id,
      title: snippets.title,
      content: snippets.content,
      isPublic: snippets.isPublic,
      createdAt: snippets.createdAt,
      authorId: snippets.authorId,
      authorUsername: users.username,
      authorAvatar: users.avatar,
      likesCount: sql<number>`count(${snippetLikes.id})`,
      isLiked: sql<boolean>`
        exists(
          select 1 from ${snippetLikes}
          where ${snippetLikes.snippetId} = ${snippets.id}
          ${user ? sql`and ${snippetLikes.userId} = ${user.id}` : sql``}
        )
      `,
    })
    .from(snippets)
    .leftJoin(users, eq(users.id, snippets.authorId))
    .leftJoin(snippetLikes, eq(snippetLikes.snippetId, snippets.id))
    .where(eq(snippets.isPublic, true))
    .groupBy(snippets.id, users.username, users.avatar)
    .orderBy(sql`count(${snippetLikes.id}) desc`);
}

export async function getLikedSnippets() {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error("Unauthorized");

  return db
    .select({
      id: snippets.id,
      title: snippets.title,
      content: snippets.content,
      isPublic: snippets.isPublic,
      createdAt: snippets.createdAt,
      authorId: snippets.authorId,
      authorUsername: users.username,
      authorAvatar: users.avatar,
    })
    .from(snippetLikes)
    .innerJoin(snippets, eq(snippets.id, snippetLikes.snippetId))
    .leftJoin(users, eq(users.id, snippets.authorId))
    .where(eq(snippetLikes.userId, user.id))
    .orderBy(snippetLikes.createdAt);
}