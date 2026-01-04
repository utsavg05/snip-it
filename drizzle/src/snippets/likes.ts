"use server";

import { db } from "@/drizzle/src/index";
import { snippetLikes } from "@/drizzle/src/db/schema";
import { createSupabaseServerClient } from "@/lib/supabase/server-client";
import { nanoid } from "nanoid";
import { and, eq } from "drizzle-orm";

export async function likeSnippet(snippetId: string) {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error("Unauthorized");

  // idempotent insert
  await db
    .insert(snippetLikes)
    .values({
      id: nanoid(),
      userId: user.id,
      snippetId,
    })
    .onConflictDoNothing();

  return { ok: true };
}

export async function unlikeSnippet(snippetId: string) {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error("Unauthorized");

  await db
    .delete(snippetLikes)
    .where(
      and(
        eq(snippetLikes.userId, user.id),
        eq(snippetLikes.snippetId, snippetId)
      )
    );

  return { ok: true };
}
