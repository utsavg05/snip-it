"use server";

// import { db } from "@/lib/db";
import { db } from "@/drizzle/src/index";
import { snippets } from "@/drizzle/src/db/schema";
import { createSupabaseServerClient } from "@/lib/supabase/server-client";
import { nanoid } from "nanoid";

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
