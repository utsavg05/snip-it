// import { getExploreSnippets } from "@/drizzle/src/snippets/action";
// import SnippetCard from "@/app/components/snippets/SnippetCard";

// export default async function ExplorePage() {
//   const snippets = await getExploreSnippets();

//   return (
//     <main className="mx-auto max-w-7xl px-6 py-20 text-white">
//       <h1 className="text-3xl font-semibold">Explore Snippets</h1>
//       <p className="mt-2 text-slate-400">
//         Discover code snippets shared by the community
//       </p>

//       <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
//         {snippets.length === 0 ? (
//           <p className="text-slate-400">No public snippets yet.</p>
//         ) : (
//           snippets.map((snippet) => (
//             <SnippetCard
//               key={snippet.id}
//               id={snippet.id}
//               title={snippet.title}
//               code={snippet.content.code}
//               language={snippet.content.language}
//               isPublic
//               createdAt={
//                 snippet.createdAt
//                   ? snippet.createdAt.toLocaleDateString()
//                   : "—"
//               }
//               likesCount={snippet.likesCount}
//               isLiked={snippet.isLiked}
//               author={{
//                 username: snippet.author?.username ?? null,
//                 avatar: snippet.author?.avatar ?? null,
//               }}
//             />
//           ))
//         )}
//       </div>
//     </main>
//   );
// }


import { getExploreSnippetsPaginated } from "@/drizzle/src/snippets/action";
import SnippetCard from "@/app/components/snippets/SnippetCard";
import ExplorePagination from "./pagination";

type ExplorePageProps = {
  searchParams: {
    page?: string;
  };
};

export default async function ExplorePage({ searchParams }: ExplorePageProps) {
  const params = await searchParams;
  const page = Math.max(1, Number(params.page ?? 1));

  const { items, totalPages } =
    await getExploreSnippetsPaginated({
      page,
      limit: 12,
    });

  return (
    <main className="mx-auto max-w-7xl px-6 py-20 text-white">
      <h1 className="text-3xl font-semibold">Explore Snippets</h1>
      <p className="mt-2 text-slate-400">
        Discover public snippets shared by developers
      </p>

      {/* Snippets Grid */}
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((snippet) => (
          <SnippetCard
            key={snippet.id}
            id={snippet.id}
            title={snippet.title}
            code={snippet.content.code}
            language={snippet.content.language}
            isPublic
            createdAt={
                snippet.createdAt
                  ? snippet.createdAt.toLocaleDateString()
                  : "—"
              }
            likesCount={snippet.likesCount}
            isLiked={snippet.isLiked}
            author={{
              username: snippet.author?.username ?? null,
              avatar: snippet.author?.avatar ?? null,
            }}
          />
        ))}
      </div>

      {/* Pagination */}
      <ExplorePagination
        currentPage={page}
        totalPages={totalPages}
      />
    </main>
  );
}
