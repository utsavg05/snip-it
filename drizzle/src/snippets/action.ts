// "use server";

// // import { db } from "@/lib/db";
// import { db } from "@/drizzle/src/index";
// import { snippetLikes, snippets, users } from "@/drizzle/src/db/schema";
// import { createSupabaseServerClient } from "@/lib/supabase/server-client";
// import { nanoid } from "nanoid";
// import { and, desc, eq, sql } from "drizzle-orm";
// import { getAuthUser } from "@/lib/auth";

// type CreateSnippetInput = {
//   title: string;
//   code: string;
//   language: string;
//   isPublic?: boolean;
// };

// export async function createSnippet(input: CreateSnippetInput) {
//   const supabase = await createSupabaseServerClient();
//   const {
//     data: { user },
//   } = await supabase.auth.getUser();

//   // 1️⃣ Auth guard
//   if (!user) {
//     throw new Error("Unauthorized");
//   }

//   // 2️⃣ Validation (simple for MVP)
//   if (!input.title || !input.code || !input.language) {
//     throw new Error("Missing required fields");
//   }

//   // 3️⃣ Insert snippet
//   await db.insert(snippets).values({
//     id: nanoid(),
//     title: input.title,
//     content: {
//       code: input.code,
//       language: input.language,
//     },
//     authorId: user.id,
//     isPublic: input.isPublic ?? false,
//   });

//   return { success: true };
// }

// // export async function getMySnippets() {
// //   const supabase = await createSupabaseServerClient();
// //   const {
// //     data: { user },
// //   } = await supabase.auth.getUser();

// //   if (!user) {
// //     throw new Error("Unauthorized");
// //   }

// //   return db.query.snippets.findMany({
// //     where: (snippets, { eq }) =>
// //       eq(snippets.authorId, user.id),
// //     orderBy: (snippets, { desc }) =>
// //       desc(snippets.createdAt),
// //   });
// // }

// export async function getMySnippets() {
//   const supabase = await createSupabaseServerClient();
//   const { data: { user } } = await supabase.auth.getUser();
//   if (!user) throw new Error("Unauthorized");

//   return db
//     .select({
//       id: snippets.id,
//       title: snippets.title,
//       content: snippets.content,
//       isPublic: snippets.isPublic,
//       createdAt: snippets.createdAt,
//       authorId: snippets.authorId,

//       likesCount: sql<number>`
//         COUNT(DISTINCT ${snippetLikes.id})
//       `,

//       isLiked: sql<boolean>`
//         BOOL_OR(${snippetLikes.userId} = ${user.id})
//       `,
//     })
//     .from(snippets)
//     .leftJoin(
//       snippetLikes,
//       eq(snippetLikes.snippetId, snippets.id)
//     )
//     .where(eq(snippets.authorId, user.id))
//     .groupBy(snippets.id)
//     .orderBy(desc(snippets.createdAt));
// }


// export async function getPublicSnippets() {
//   return db.query.snippets.findMany({
//     where: (snippets, { eq }) =>
//       eq(snippets.isPublic, true),
//     orderBy: (snippets, { desc }) =>
//       desc(snippets.createdAt),
//   });
// }

// export async function getPublicSnippetsWithLikes() {
//   const supabase = await createSupabaseServerClient();
//   const { data: { user } } = await supabase.auth.getUser();

//   return db
//     .select({
//       id: snippets.id,
//       title: snippets.title,
//       content: snippets.content,
//       isPublic: snippets.isPublic,
//       createdAt: snippets.createdAt,
//       authorId: snippets.authorId,
//       authorUsername: users.username,
//       authorAvatar: users.avatar,
//       likesCount: sql<number>`count(${snippetLikes.id})`,
//       isLiked: sql<boolean>`
//         exists(
//           select 1 from ${snippetLikes}
//           where ${snippetLikes.snippetId} = ${snippets.id}
//           ${user ? sql`and ${snippetLikes.userId} = ${user.id}` : sql``}
//         )
//       `,
//     })
//     .from(snippets)
//     .leftJoin(users, eq(users.id, snippets.authorId))
//     .leftJoin(snippetLikes, eq(snippetLikes.snippetId, snippets.id))
//     .where(eq(snippets.isPublic, true))
//     .groupBy(snippets.id, users.username, users.avatar)
//     .orderBy(sql`count(${snippetLikes.id}) desc`);
// }

// export async function getLikedSnippets() {
//   const supabase = await createSupabaseServerClient();
//   const { data: { user } } = await supabase.auth.getUser();
//   if (!user) throw new Error("Unauthorized");

//   return db
//     .select({
//       id: snippets.id,
//       title: snippets.title,
//       content: snippets.content,
//       isPublic: snippets.isPublic,
//       createdAt: snippets.createdAt,
//       authorId: snippets.authorId,

//       // ✅ correct like count
//       likesCount: sql<number>`
//         (
//           SELECT COUNT(*)
//           FROM ${snippetLikes}
//           WHERE ${snippetLikes.snippetId} = ${snippets.id}
//         )
//       `,

//       // ✅ always liked (by definition)
//       isLiked: sql<boolean>`true`,
//     })
//     .from(snippetLikes)
//     .innerJoin(
//       snippets,
//       eq(snippets.id, snippetLikes.snippetId)
//     )
//     .where(eq(snippetLikes.userId, user.id))
//     .orderBy(desc(snippetLikes.createdAt));
// }



// export async function getExploreSnippets() {
//   const user = await getAuthUser(); // may be null

//   const rows = await db
//     .select({
//       id: snippets.id,
//       title: snippets.title,
//       content: snippets.content,
//       isPublic: snippets.isPublic,
//       createdAt: snippets.createdAt,

//       author: {
//         username: users.username,
//         avatar: users.avatar,
//       },

//       likesCount: sql<number>`
//         COUNT(DISTINCT ${snippetLikes.id})
//       `,

//       isLiked: user
//         ? sql<boolean>`
//             BOOL_OR(${snippetLikes.userId} = ${user.id})
//           `
//         : sql<boolean>`false`,
//     })
//     .from(snippets)
//     .leftJoin(users, eq(snippets.authorId, users.id))
//     .leftJoin(
//       snippetLikes,
//       eq(snippetLikes.snippetId, snippets.id)
//     )
//     .where(eq(snippets.isPublic, true))
//     // .groupBy(snippets.id, users.id)
//     .groupBy(
//       snippets.id,
//       snippets.title,
//       snippets.content,
//       snippets.isPublic,
//       snippets.createdAt,
//       users.id,
//       users.username,
//       users.avatar
//     )

//     .orderBy(desc(snippets.createdAt));

//   return rows;
// }

// export async function getExploreSnippetsPaginated({
//   limit = 12,
//   cursor,
// }: {
//   limit?: number;
//   cursor?: { createdAt: Date; id: string };
// }) {
//   const user = await getAuthUser(); // may be null

//   const rows = await db
//     .select({
//       id: snippets.id,
//       title: snippets.title,
//       content: snippets.content,
//       isPublic: snippets.isPublic,
//       createdAt: snippets.createdAt,

//       author: {
//         username: users.username,
//         avatar: users.avatar,
//       },

//       likesCount: sql<number>`COUNT(DISTINCT ${snippetLikes.id})`,

//       isLiked: user
//         ? sql<boolean>`
//             BOOL_OR(${snippetLikes.userId} = ${user.id})
//           `
//         : sql<boolean>`false`,
//     })
//     .from(snippets)
//     .leftJoin(users, eq(snippets.authorId, users.id))
//     .leftJoin(
//       snippetLikes,
//       eq(snippetLikes.snippetId, snippets.id)
//     )
//     .where(
//       and(
//         cursor
//           ? sql`
//               (${snippets.createdAt}, ${snippets.id})
//               < (${cursor.createdAt}, ${cursor.id})
//             `
//           : sql`true`,
//         eq(snippets.isPublic, true)
//       )
//     )
//     .groupBy(snippets.id, users.id)
//     .orderBy(desc(snippets.createdAt), desc(snippets.id))
//     .limit(limit + 1); // 👈 fetch one extra

//   const hasMore = rows.length > limit;
//   const items = hasMore ? rows.slice(0, limit) : rows;

//   const nextCursor = hasMore
//     ? {
//       createdAt: items[items.length - 1].createdAt!,
//       id: items[items.length - 1].id,
//     }
//     : null;

//   return { items, nextCursor };
// }







"use server";

import { db } from "@/drizzle/src/index";
import { snippetLikes, snippets, users } from "@/drizzle/src/db/schema";
import { createSupabaseServerClient } from "@/lib/supabase/server-client";
import { nanoid } from "nanoid";
import { and, desc, eq, sql } from "drizzle-orm";
import { getAuthUser } from "@/lib/auth";

/* ------------------------------------------------------------------ */
/* CREATE */
/* ------------------------------------------------------------------ */

type CreateSnippetInput = {
  title: string;
  code: string;
  language: string;
  isPublic?: boolean;
};

export async function createSnippet(input: CreateSnippetInput) {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) throw new Error("Unauthorized");
  if (!input.title || !input.code || !input.language) {
    throw new Error("Missing required fields");
  }

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

/* ------------------------------------------------------------------ */
/* MY SNIPPETS (FIXED) */
/* ------------------------------------------------------------------ */

export async function getMySnippets() {
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

      likesCount: sql<number>`COUNT(DISTINCT ${snippetLikes.id})`,
      isLiked: sql<boolean>`
        BOOL_OR(${snippetLikes.userId} = ${user.id})
      `,
    })
    .from(snippets)
    .leftJoin(snippetLikes, eq(snippetLikes.snippetId, snippets.id))
    .where(eq(snippets.authorId, user.id))
    .groupBy(
      snippets.id,
      snippets.title,
      snippets.content,
      snippets.isPublic,
      snippets.createdAt,
      snippets.authorId
    )
    .orderBy(desc(snippets.createdAt));
}

/* ------------------------------------------------------------------ */
/* LIKED SNIPPETS (FIXED) */
/* ------------------------------------------------------------------ */

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

      likesCount: sql<number>`
        (
          SELECT COUNT(*)
          FROM ${snippetLikes}
          WHERE ${snippetLikes.snippetId} = ${snippets.id}
        )
      `,
      isLiked: sql<boolean>`true`,
    })
    .from(snippetLikes)
    .innerJoin(snippets, eq(snippets.id, snippetLikes.snippetId))
    .where(eq(snippetLikes.userId, user.id))
    .orderBy(desc(snippetLikes.createdAt));
}

/* ------------------------------------------------------------------ */
/* EXPLORE (FIXED) */
/* ------------------------------------------------------------------ */

export async function getExploreSnippets() {
  const user = await getAuthUser();

  return db
    .select({
      id: snippets.id,
      title: snippets.title,
      content: snippets.content,
      isPublic: snippets.isPublic,
      createdAt: snippets.createdAt,

      author: {
        username: users.username,
        avatar: users.avatar,
      },

      likesCount: sql<number>`COUNT(DISTINCT ${snippetLikes.id})`,
      isLiked: user
        ? sql<boolean>`BOOL_OR(${snippetLikes.userId} = ${user.id})`
        : sql<boolean>`false`,
    })
    .from(snippets)
    .leftJoin(users, eq(snippets.authorId, users.id))
    .leftJoin(snippetLikes, eq(snippetLikes.snippetId, snippets.id))
    .where(eq(snippets.isPublic, true))
    .groupBy(
      snippets.id,
      snippets.title,
      snippets.content,
      snippets.isPublic,
      snippets.createdAt,
      users.id,
      users.username,
      users.avatar
    )
    .orderBy(desc(snippets.createdAt));
}

/* ------------------------------------------------------------------ */
/* EXPLORE PAGINATED (FIXED) */
/* ------------------------------------------------------------------ */

// export async function getExploreSnippetsPaginated({
//   limit = 12,
//   cursor,
// }: {
//   limit?: number;
//   cursor?: { createdAt: Date; id: string };
// }) {
//   const user = await getAuthUser(); // may be null

//   const rows = await db
//     .select({
//       id: snippets.id,
//       title: snippets.title,
//       content: snippets.content,
//       isPublic: snippets.isPublic,
//       createdAt: snippets.createdAt,

//       author: {
//         username: users.username,
//         avatar: users.avatar,
//       },

//       likesCount: sql<number>`COUNT(DISTINCT ${snippetLikes.id})`,

//       isLiked: user
//         ? sql<boolean>`BOOL_OR(${snippetLikes.userId} = ${user.id})`
//         : sql<boolean>`false`,
//     })
//     .from(snippets)
//     .leftJoin(users, eq(snippets.authorId, users.id))
//     .leftJoin(snippetLikes, eq(snippetLikes.snippetId, snippets.id))
//     .where(
//       and(
//         cursor
//           ? sql`
//               (
//                 ${snippets.createdAt} < ${cursor.createdAt}
//                 OR (
//                   ${snippets.createdAt} = ${cursor.createdAt}
//                   AND ${snippets.id} < ${cursor.id}
//                 )
//               )
//             `
//           : sql`true`,
//         eq(snippets.isPublic, true)
//       )
//     )
//     .groupBy(
//       snippets.id,
//       snippets.title,
//       snippets.content,
//       snippets.isPublic,
//       snippets.createdAt,
//       users.id,
//       users.username,
//       users.avatar
//     )
//     .orderBy(desc(snippets.createdAt), desc(snippets.id))
//     .limit(limit + 1); // fetch one extra to detect next page

//   const hasMore = rows.length > limit;
//   const items = hasMore ? rows.slice(0, limit) : rows;

//   const nextCursor = hasMore
//     ? {
//         createdAt: items[items.length - 1].createdAt!,
//         id: items[items.length - 1].id,
//       }
//     : null;

//   return { items, nextCursor };
// }



export async function getExploreSnippetsPaginated({
  page = 1,
  limit = 12,
}: {
  page?: number;
  limit?: number;
}) {
  const user = await getAuthUser();

  const offset = (page - 1) * limit;

  // 1️⃣ Fetch paginated snippets
  const items = await db
    .select({
      id: snippets.id,
      title: snippets.title,
      content: snippets.content,
      isPublic: snippets.isPublic,
      createdAt: snippets.createdAt,

      author: {
        username: users.username,
        avatar: users.avatar,
      },

      likesCount: sql<number>`
        COUNT(DISTINCT ${snippetLikes.id})
      `,

      isLiked: user
        ? sql<boolean>`
            BOOL_OR(${snippetLikes.userId} = ${user.id})
          `
        : sql<boolean>`false`,
    })
    .from(snippets)
    .leftJoin(users, eq(users.id, snippets.authorId))
    .leftJoin(
      snippetLikes,
      eq(snippetLikes.snippetId, snippets.id)
    )
    .where(eq(snippets.isPublic, true))
    .groupBy(
      snippets.id,
      users.id,
      users.username,
      users.avatar
    )
    .orderBy(desc(snippets.createdAt))
    .limit(limit)
    .offset(offset);

  // 2️⃣ Total count (for page numbers)
  const [{ count }] = await db
    .select({
      count: sql<number>`COUNT(*)`,
    })
    .from(snippets)
    .where(eq(snippets.isPublic, true));

  const totalPages = Math.ceil(count / limit);

  return {
    items,
    totalPages,
  };
}


