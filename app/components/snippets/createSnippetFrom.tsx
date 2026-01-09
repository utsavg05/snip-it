"use client";

import { useState, useTransition } from "react";
import { createSnippet } from "@/drizzle/src/snippets/action";
import { toast } from "react-toastify";

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
  "react",
  "node",
  "csharp",
  "php",
  "ruby",
  "swift",
  "kotlin",
  "bash",
  "plaintext",
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
        toast.success("Snippet created successfully!");

        // reset form
        setTitle("");
        setCode("");
        setIsPublic(false);
      } catch (err: any) {
        setError(err.message ?? "Something went wrong");
        toast.error("Failed to create snippet");
      }
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-white/10 bg-[#0d1117] px-6 py-6 backdrop-blur"
    >
      {/* Title */}
      <div>
        <label className="text-xs font-medium text-slate-400">
          Title
        </label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          placeholder="Fetch wrapper with retries"
          className="mt-1.5 w-full rounded-lg border border-white/10 bg-[#010409] px-3.5 py-2.5 text-sm text-white outline-none focus:border-white/30"
        />
      </div>

      {/* Language */}
      <div className="mt-4">
        <label className="text-xs font-medium text-slate-400">
          Language
        </label>
        <div className="relative mt-1.5">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full appearance-none rounded-lg border border-white/10 bg-[#010409] px-3.5 py-2.5 pr-10 text-sm text-white outline-none focus:border-white/30"
          >
            {LANGUAGES.map((lang) => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
          </select>

          {/* Custom arrow */}
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
            ▾
          </span>
        </div>
      </div>

      {/* Code */}
      <div className="mt-4">
        <label className="text-xs font-medium text-slate-400">
          Code
        </label>
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          required
          rows={8}
          placeholder="// paste your code here"
          className="mt-1.5 w-full h-[200px] resize-none rounded-lg border border-white/10 bg-[#010409] px-3.5 py-2.5 font-mono text-xs text-white outline-none focus:border-white/30"
        />
      </div>

      {/* Public toggle */}
      <div className="mt-4 flex items-center gap-2">
        <input
          type="checkbox"
          checked={isPublic}
          onChange={(e) => setIsPublic(e.target.checked)}
          className="h-4 w-4 cursor-pointer accent-emerald-500"
        />
        <span className="text-sm text-slate-400">
          Make snippet public
        </span>
      </div>

      {/* Error */}
      {error && (
        <p className="mt-3 text-sm text-red-400">{error}</p>
      )}

      {/* Submit */}
      <button
        disabled={isPending}
        className="mt-6 w-full rounded-lg bg-emerald-500 py-2.5 text-sm font-semibold text-black transition hover:bg-emerald-400 disabled:opacity-50"
      >
        {isPending ? "Saving..." : "Save snippet"}
      </button>
    </form>

  );
}
