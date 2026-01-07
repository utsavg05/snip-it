"use client";

import { Search } from "lucide-react";

export default function ExploreHeader() {
  return (
    <div className="mb-6 flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-semibold text-white">
          Explore Snippets
        </h1>
        <p className="text-sm text-slate-400">
          Discover public snippets shared by developers
        </p>
      </div>

      <div className="relative w-72">
        <Search
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
        />
        <input
          placeholder="Search snippets..."
          className="w-full rounded-xl border border-white/10 bg-black/40 py-2 pl-9 pr-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-emerald-500/40"
        />
      </div>
    </div>
  );
}
