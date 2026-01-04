"use client";

import { useState } from "react";
import SnippetCard from "../snippets/SnippetCard";

type DashboardTabsProps = {
  mySnippets: any[];
  publicSnippets: any[];
  userId: string;
};

const TABS = ["my", "public", "liked"] as const;

export default function DashboardTabs({
  mySnippets,
  publicSnippets,
  userId,
}: DashboardTabsProps) {
  const [activeTab, setActiveTab] = useState<(typeof TABS)[number]>("my");

  function renderSnippets() {
    if (activeTab === "my") {
      return mySnippets;
    }

    if (activeTab === "public") {
      return publicSnippets;
    }

    // liked — placeholder for now
    return [];
  }

  const snippets = renderSnippets();

  return (
    <>
      {/* Tabs */}
      <div className="flex gap-6 border-b border-white/10">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-3 text-sm font-medium transition ${
              activeTab === tab
                ? "border-b-2 border-emerald-400 text-white"
                : "text-slate-400 hover:text-white"
            }`}
          >
            {tab === "my"
              ? "My Snippets"
              : tab === "public"
              ? "Public"
              : "Liked"}
          </button>
        ))}
      </div>

      {/* Snippet list */}
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {snippets.length === 0 ? (
          <p className="text-slate-400">
            No snippets found.
          </p>
        ) : (
          snippets.map((snippet) => (
            <SnippetCard
              key={snippet.id}
              title={snippet.title}
              code={snippet.content.code}
              language={snippet.content.language}
              isPublic={snippet.isPublic}
              createdAt={new Date(snippet.createdAt).toLocaleDateString()}
              likesCount={0}
              isOwner={snippet.authorId === userId}
              author={{
                username: snippet.author?.username ?? "You",
                avatar: snippet.author?.avatar,
              }}
            />
          ))
        )}
      </div>
    </>
  );
}
