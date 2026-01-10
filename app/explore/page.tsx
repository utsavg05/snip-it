// // OLD UI

// import { getExploreSnippetsPaginated } from "@/drizzle/src/snippets/action";
// import SnippetCard from "@/app/components/snippets/SnippetCard";
// import ExplorePagination from "./pagination";

// type ExplorePageProps = {
//   searchParams: {
//     page?: string;
//   };
// };

// export default async function ExplorePage({ searchParams }: ExplorePageProps) {
  // const params = await searchParams;
  // const page = Math.max(1, Number(params.page ?? 1));

//   const { items, totalPages } =
//     await getExploreSnippetsPaginated({
//       page,
//       limit: 12,
//     });

//   return (
//     <main className="mx-auto max-w-7xl px-6 py-20 text-white mt-3">
//       <h1 className="text-3xl font-semibold">Explore Snippets</h1>
//       <p className="mt-2 text-slate-400">
//         Discover public snippets shared by developers
//       </p>

//       {/* Snippets Grid */}
//       <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
//         {items.map((snippet) => (
//           <SnippetCard
//             key={snippet.id}
//             id={snippet.id}
//             title={snippet.title}
//             code={snippet.content.code}
//             language={snippet.content.language}
//             isPublic
//             createdAt={
//               snippet.createdAt
//                 ? snippet.createdAt.toLocaleDateString()
//                 : "—"
//             }
//             likesCount={snippet.likesCount}
//             isLiked={snippet.isLiked}
//             author={{
//               username: snippet.author?.username ?? null,
//               avatar: snippet.author?.avatar ?? null,
//             }}
//           />
//         ))}
//       </div>

//       {/* Pagination */}
//       <ExplorePagination
//         currentPage={page}
//         totalPages={totalPages}
//       />
//     </main>
//   );
// }



// NEW UI part 1
// import ExploreSidebar from "./components/ExploreSidebar";
// import ExploreHeader from "./components/ExploreHeader";
// import ExploreGrid from "./components/ExploreGrid";

// export default async function ExplorePage() {
//   // later this will be real data
//   const isLoading = true;

//   return (
//     <main className="mx-auto max-w-7xl px-6 pt-24 pb-12 text-white">
//       <div className="flex items-start gap-6">
//         {/* Sidebar */}
//         <aside className="sticky top-24 h-[calc(100vh-96px)] w-48 shrink-0 border-r border-white/10 pr-3">
//           <ExploreSidebar />
//         </aside>

//         {/* Content */}
//         <section className="flex-1 min-w-0">
//           <ExploreHeader />
//           <ExploreGrid isLoading={isLoading} />
//         </section>
//       </div>
//     </main>

//   );
// }



// NEW UI part 2
// import ExploreSidebar from "./components/ExploreSidebar";
// import ExploreHeader from "./components/ExploreHeader";
// import ExploreGrid from "./components/ExploreGrid";
// import ExploreResults from "./components/ExploreResults";

// type ExplorePageProps = {
//   searchParams?: {
//     lang?: string;
//     q?: string;
//     page?: string;
//   };
// };

// export default async function ExplorePage({ searchParams }: ExplorePageProps) {
//   const lang = searchParams?.lang ?? null;
//   const query = searchParams?.q ?? "";
//   const page = Math.max(1, Number(searchParams?.page ?? 1));

//   // later this will be real data
//   const isLoading = true;

//   return (
//     <main className="mx-auto max-w-7xl px-6 pt-20 pb-12 text-white">
//       <div className="flex gap-6">
//         {/* Sidebar */}
//         <aside
//           className="
//             sticky top-20
//             h-[calc(100vh-80px)]
//             w-44
//             shrink-0
//             border-r border-white/10
//             pr-3
//           "
//         >
//           <ExploreSidebar activeLang={lang} />
//         </aside>

//         {/* Content */}
//         <section className="flex-1 min-w-0">
//           <ExploreHeader initialQuery={query} />
//           {/* <ExploreGrid
//             isLoading={isLoading}
//             activeLang={lang}
//             query={query}
//             page={page}
//           /> */}
//           <ExploreResults
//             lang={lang}
//             query={query}
//             page={page}
//           />

//         </section>
//       </div>
//     </main>
//   );
// }



// import ExploreSidebar from "./components/ExploreSidebar";
// import ExploreHeader from "./components/ExploreHeader";
// import ExploreResults from "./components/ExploreResults";
// import { getExploreSnippetsPaginated } from "@/drizzle/src/snippets/action";

// type ExplorePageProps = {
//   searchParams?: {
//     page?: string;
//   };
// };

// export default async function ExplorePage({ searchParams }: ExplorePageProps) {
//   const params = await searchParams;
//   const page = Math.max(1, Number(params?.page ?? 1));

//   const { items, totalPages } =
//     await getExploreSnippetsPaginated({
//       page,
//       limit: 12,
//     });
    

//   return (
//     <main className="mx-auto max-w-7xl px-6 pt-24 pb-12 text-white">
//       <div className="flex gap-6">
//         {/* Sidebar */}
//         <aside className="sticky top-24 h-[calc(100vh-96px)] w-44 shrink-0 border-r border-white/10 pr-3">
//           <ExploreSidebar  />
//         </aside>

//         {/* Content */}
//         <section className="flex-1 min-w-0">
//           <ExploreHeader  />
//           <ExploreResults page={page} />
//         </section>
//       </div>
//     </main>
//   );
// }



import ExploreSidebar from "./components/ExploreSidebar";
import ExploreHeader from "./components/ExploreHeader";
import ExploreResults from "./components/ExploreResults";
import { getExploreSnippetsPaginated } from "@/drizzle/src/snippets/action";

type ExplorePageProps = {
  searchParams?: {
    page?: string;
  };
};

export default async function ExplorePage({ searchParams }: ExplorePageProps) {
  const params = await searchParams;
  const page = Math.max(1, Number(params?.page ?? 1));

  const { items, totalPages } = await getExploreSnippetsPaginated({
    page,
    limit: 12,
  });

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 pt-20 sm:pt-24 pb-12 text-white">
      <div className="flex gap-4 lg:gap-6">
        {/* Sidebar - Hidden on mobile/tablet */}
        <aside className="sticky top-24 h-[calc(100vh-96px)] w-44 shrink-0 border-r border-white/10 pr-4 hidden lg:block">
          <ExploreSidebar />
        </aside>

        {/* Content */}
        <section className="flex-1 min-w-0 w-full">
          <ExploreHeader />
          <ExploreResults page={page} />
        </section>
      </div>
    </main>
  );
}