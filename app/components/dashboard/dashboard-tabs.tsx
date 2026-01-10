// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import SnippetCard from "../snippets/SnippetCard";
// import { RainbowButton } from "@/components/ui/rainbow-button";
// import Link from "next/link";
// import ExploreSkeleton from "@/app/explore/components/ExploreSkeleton";

// type DashboardTabsProps = {
//   mySnippets: any[];
//   likedSnippets: any[]; // ✅ ADD
//   userId: string;
// };

// const TABS = ["my", "liked"] as const;

// export default function DashboardTabs({
//   mySnippets,
//   likedSnippets,
//   userId,
// }: DashboardTabsProps) {
//   const [activeTab, setActiveTab] =
//     useState<(typeof TABS)[number]>("my");
//   const router = useRouter();

//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 1200)

//     return () => clearTimeout(timer);
//   }, [])

//   function handleTabChange(tab: (typeof TABS)[number]) {
//     setActiveTab(tab);
//     // router.refresh();
//   }

//   const snippets =
//     activeTab === "my" ? mySnippets : likedSnippets;

//     if(isLoading) {
//       return <ExploreSkeleton />
//     }

//   return (
//     <>
//       <Link href="/snippets/new">
//         <RainbowButton variant={"outline"} className="fixed rounded-xl text-md bottom-10 right-6 px-4 py-5 cursor-pointer ">Create</RainbowButton>
//       </Link>
//       {/* Tabs */}
//       <div className="flex gap-6 border-b border-white/10">
//         {TABS.map((tab) => (
//           <button
//             key={tab}
//             onClick={() => handleTabChange(tab)}
//             className={`pb-3 text-sm font-medium transition ${activeTab === tab
//                 ? "border-b-2 border-emerald-400 text-white"
//                 : "text-slate-400 hover:text-white"
//               }`}
//           >
//             {tab === "my" ? "My Snippets" : "Liked"}
//           </button>
//         ))}
//       </div>

//       {/* Snippet list */}
//       <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
//         {snippets.length === 0 ? (
//           <p className="text-slate-400">
//             No snippets to display. Create your first snippet!
//           </p>
//         ) : (
//           snippets.map((snippet) => (
//             <SnippetCard
//               key={`${activeTab}-${snippet.id}`}
//               id={snippet.id}
//               title={snippet.title}
//               code={snippet.content.code}
//               language={snippet.content.language}
//               isPublic={snippet.isPublic}
//               // createdAt={snippet.createdAt}
//               createdAt={
//                 snippet.createdAt
//                   ? snippet.createdAt.toLocaleDateString()
//                   : "—"
//               }
//               likesCount={snippet.likesCount ?? 0} // ✅ REAL
//               isLiked={snippet.isLiked ?? false}    // ✅ REAL
//               isOwner={snippet.authorId === userId}
//               author={{
//                 username:
//                   snippet.author?.username ??
//                   snippet.authorUsername ??
//                   "You",
//                 avatar:
//                   snippet.author?.avatar ??
//                   snippet.authorAvatar,
//               }}
//             />
//           ))
//         )}
//       </div>
//     </>
//   );
// }




// Claude UI
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import SnippetCard from "../snippets/SnippetCard";
import { RainbowButton } from "@/components/ui/rainbow-button";
import Link from "next/link";
import ExploreSkeleton from "@/app/explore/components/ExploreSkeleton";
import { Sparkles } from "lucide-react";

type DashboardTabsProps = {
  mySnippets: any[];
  likedSnippets: any[];
  userId: string;
};

const TABS = ["my", "liked"] as const;

export default function DashboardTabs({
  mySnippets,
  likedSnippets,
  userId,
}: DashboardTabsProps) {
  const [activeTab, setActiveTab] = useState<(typeof TABS)[number]>("my");
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  function handleTabChange(tab: (typeof TABS)[number]) {
    setActiveTab(tab);
  }

  const snippets = activeTab === "my" ? mySnippets : likedSnippets;

  if (isLoading) {
    return <ExploreSkeleton />;
  }

  return (
    <div>
      {/* Create Button */}
      <Link href="/snippets/new">
        <RainbowButton
          variant={"outline"}
          className="fixed rounded-xl text-sm sm:text-md bottom-6 sm:bottom-10 right-4 sm:right-6 px-3 sm:px-4 py-4 sm:py-5 cursor-pointer z-50 shadow-2xl"
        >
          <span className="hidden sm:inline">Create</span>
          <span className="sm:hidden text-lg font-semibold">+</span>
        </RainbowButton>
      </Link>

      {/* Tabs */}
      <div className="flex items-center gap-4 sm:gap-6 border-b border-white/10 mb-6 sm:mb-8">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabChange(tab)}
            className={`relative pb-3 sm:pb-4 text-sm sm:text-base font-semibold transition-all ${
              activeTab === tab
                ? "text-white"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            {tab === "my" ? "My Snippets" : "Liked Snippets"}
            
            {/* Active indicator */}
            {activeTab === tab && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full shadow-lg shadow-emerald-500/50" />
            )}
          </button>
        ))}
      </div>

      {/* Snippet list */}
      {snippets.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 sm:py-20 text-center">
          <div className="rounded-full bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 p-4 sm:p-6 mb-4 sm:mb-6">
            <Sparkles className="h-8 w-8 sm:h-12 sm:w-12 text-emerald-400" />
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
            {activeTab === "my" ? "No snippets yet" : "No liked snippets yet"}
          </h3>
          <p className="text-sm sm:text-base text-slate-400 max-w-md px-4">
            {activeTab === "my"
              ? "Create your first snippet to get started!"
              : "Explore and like snippets from the community."}
          </p>
          <Link href={activeTab === "my" ? "/snippets/new" : "/explore"}>
            <button className="mt-6 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 transition-all hover:scale-105 hover:shadow-emerald-500/50">
              {activeTab === "my" ? "Create Snippet" : "Explore Snippets"}
            </button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {snippets.map((snippet) => (
            <SnippetCard
              key={`${activeTab}-${snippet.id}`}
              id={snippet.id}
              title={snippet.title}
              code={snippet.content.code}
              language={snippet.content.language}
              isPublic={snippet.isPublic}
              createdAt={
                snippet.createdAt
                  ? snippet.createdAt.toLocaleDateString()
                  : "—"
              }
              likesCount={snippet.likesCount ?? 0}
              isLiked={snippet.isLiked ?? false}
              isOwner={snippet.authorId === userId}
              author={{
                username:
                  snippet.author?.username ??
                  snippet.authorUsername ??
                  "You",
                avatar: snippet.author?.avatar ?? snippet.authorAvatar,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}