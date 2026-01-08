"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import SnippetCard from "../snippets/SnippetCard";
import { RainbowButton } from "@/components/ui/rainbow-button";
import Link from "next/link";
import ExploreSkeleton from "@/app/explore/components/ExploreSkeleton";

type DashboardTabsProps = {
  mySnippets: any[];
  likedSnippets: any[]; // ✅ ADD
  userId: string;
};

const TABS = ["my", "liked"] as const;

export default function DashboardTabs({
  mySnippets,
  likedSnippets,
  userId,
}: DashboardTabsProps) {
  const [activeTab, setActiveTab] =
    useState<(typeof TABS)[number]>("my");
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200)

    return () => clearTimeout(timer);
  }, [])

  function handleTabChange(tab: (typeof TABS)[number]) {
    setActiveTab(tab);
    // router.refresh();
  }

  const snippets =
    activeTab === "my" ? mySnippets : likedSnippets;

    if(isLoading) {
      return <ExploreSkeleton />
    }

  return (
    <>
      <Link href="/snippets/new">
        <RainbowButton variant={"outline"} className="fixed rounded-xl text-md bottom-10 right-6 px-4 py-5 cursor-pointer ">Create</RainbowButton>
      </Link>
      {/* Tabs */}
      <div className="flex gap-6 border-b border-white/10">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabChange(tab)}
            className={`pb-3 text-sm font-medium transition ${activeTab === tab
                ? "border-b-2 border-emerald-400 text-white"
                : "text-slate-400 hover:text-white"
              }`}
          >
            {tab === "my" ? "My Snippets" : "Liked"}
          </button>
        ))}
      </div>

      {/* Snippet list */}
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {snippets.length === 0 ? (
          <p className="text-slate-400">
            No snippets to display. Create your first snippet!
          </p>
        ) : (
          snippets.map((snippet) => (
            <SnippetCard
              key={`${activeTab}-${snippet.id}`}
              id={snippet.id}
              title={snippet.title}
              code={snippet.content.code}
              language={snippet.content.language}
              isPublic={snippet.isPublic}
              // createdAt={snippet.createdAt}
              createdAt={
                snippet.createdAt
                  ? snippet.createdAt.toLocaleDateString()
                  : "—"
              }
              likesCount={snippet.likesCount ?? 0} // ✅ REAL
              isLiked={snippet.isLiked ?? false}    // ✅ REAL
              isOwner={snippet.authorId === userId}
              author={{
                username:
                  snippet.author?.username ??
                  snippet.authorUsername ??
                  "You",
                avatar:
                  snippet.author?.avatar ??
                  snippet.authorAvatar,
              }}
            />
          ))
        )}
      </div>
    </>
  );
}
