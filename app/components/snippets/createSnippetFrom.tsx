"use client";

import { useState, useTransition } from "react";
import { createSnippet } from "@/drizzle/src/snippets/action";

const LANGUAGES = [
  "javascript",
  "typescript",
  "python",
  "java",
  "cpp",
  "c",
  "go",
  "rust",
  "sql",
];

export default function CreateSnippetForm() {
  const [isPending, startTransition] = useTransition();

  const [title, setTitle] = useState("");
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("typescript");
  const [isPublic, setIsPublic] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    startTransition(async () => {
      try {
        await createSnippet({
          title,
          code,
          language,
          isPublic,
        });

        // reset form
        setTitle("");
        setCode("");
        setIsPublic(false);
      } catch (err: any) {
        setError(err.message ?? "Something went wrong");
      }
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-white/10 bg-[#0b0f0e]/80 p-7 backdrop-blur"
    >
      {/* Title */}
      <div>
        <label className="text-sm text-slate-300">Title</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          placeholder="e.g. Fetch wrapper with retries"
          className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
        />
      </div>

      {/* Language */}
      <div className="mt-6">
        <label className="text-sm text-slate-300">Language</label>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="mt-2 w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white"
        >
          {LANGUAGES.map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </select>
      </div>

      {/* Code */}
      <div className="mt-6">
        <label className="text-sm text-slate-300">Code</label>
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          required
          rows={10}
          placeholder="// paste your code here"
          className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-black/40 px-4 py-3 font-mono text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
        />
      </div>

      {/* Public toggle */}
      <div className="mt-6 flex items-center gap-3">
        <input
          type="checkbox"
          checked={isPublic}
          onChange={(e) => setIsPublic(e.target.checked)}
          className="h-4 w-4 accent-emerald-500"
        />
        <span className="text-sm text-slate-300">
          Make this snippet public
        </span>
      </div>

      {/* Error */}
      {error && (
        <p className="mt-4 text-sm text-red-400">{error}</p>
      )}

      {/* Submit */}
      <button
        disabled={isPending}
        className="mt-8 w-full rounded-full bg-emerald-500 py-3 font-semibold text-black transition hover:bg-emerald-400 disabled:opacity-50"
      >
        {isPending ? "Saving..." : "Save snippet"}
      </button>
    </form>
  );
}
