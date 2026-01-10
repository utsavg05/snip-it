// "use client";

// import { useState, useTransition } from "react";
// import { createSnippet } from "@/drizzle/src/snippets/action";
// import { toast } from "react-toastify";

// const LANGUAGES = [
//   "javascript",
//   "typescript",
//   "python",
//   "java",
//   "cpp",
//   "c",
//   "go",
//   "rust",
//   "sql",
//   "react",
//   "node",
//   "csharp",
//   "php",
//   "ruby",
//   "swift",
//   "kotlin",
//   "bash",
//   "plaintext",
// ];

// export default function CreateSnippetForm() {
//   const [isPending, startTransition] = useTransition();

//   const [title, setTitle] = useState("");
//   const [code, setCode] = useState("");
//   const [language, setLanguage] = useState("typescript");
//   const [isPublic, setIsPublic] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   function handleSubmit(e: React.FormEvent) {
//     e.preventDefault();
//     setError(null);

//     startTransition(async () => {
//       try {
//         await createSnippet({
//           title,
//           code,
//           language,
//           isPublic,
//         });
//         toast.success("Snippet created successfully!");

//         // reset form
//         setTitle("");
//         setCode("");
//         setIsPublic(false);
//       } catch (err: any) {
//         setError(err.message ?? "Something went wrong");
//         toast.error("Failed to create snippet");
//       }
//     });
//   }

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="rounded-2xl border border-white/10 bg-[#0d1117] px-6 py-6 backdrop-blur"
//     >
//       {/* Title */}
//       <div>
//         <label className="text-xs font-medium text-slate-400">
//           Title
//         </label>
//         <input
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           required
//           placeholder="Fetch wrapper with retries"
//           className="mt-1.5 w-full rounded-lg border border-white/10 bg-[#010409] px-3.5 py-2.5 text-sm text-white outline-none focus:border-white/30"
//         />
//       </div>

//       {/* Language */}
//       <div className="mt-4">
//         <label className="text-xs font-medium text-slate-400">
//           Language
//         </label>
//         <div className="relative mt-1.5">
//           <select
//             value={language}
//             onChange={(e) => setLanguage(e.target.value)}
//             className="w-full appearance-none rounded-lg border border-white/10 bg-[#010409] px-3.5 py-2.5 pr-10 text-sm text-white outline-none focus:border-white/30"
//           >
//             {LANGUAGES.map((lang) => (
//               <option key={lang} value={lang}>
//                 {lang}
//               </option>
//             ))}
//           </select>

//           {/* Custom arrow */}
//           <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
//             ▾
//           </span>
//         </div>
//       </div>

//       {/* Code */}
//       <div className="mt-4">
//         <label className="text-xs font-medium text-slate-400">
//           Code
//         </label>
//         <textarea
//           value={code}
//           onChange={(e) => setCode(e.target.value)}
//           required
//           rows={8}
//           placeholder="// paste your code here"
//           className="mt-1.5 w-full h-[200px] resize-none rounded-lg border border-white/10 bg-[#010409] px-3.5 py-2.5 font-mono text-xs text-white outline-none focus:border-white/30"
//         />
//       </div>

//       {/* Public toggle */}
//       <div className="mt-4 flex items-center gap-2">
//         <input
//           type="checkbox"
//           checked={isPublic}
//           onChange={(e) => setIsPublic(e.target.checked)}
//           className="h-4 w-4 cursor-pointer accent-emerald-500"
//         />
//         <span className="text-sm text-slate-400">
//           Make snippet public
//         </span>
//       </div>

//       {/* Error */}
//       {error && (
//         <p className="mt-3 text-sm text-red-400">{error}</p>
//       )}

//       {/* Submit */}
//       <button
//         disabled={isPending}
//         className="mt-6 w-full rounded-lg bg-emerald-500 py-2.5 text-sm font-semibold text-black transition hover:bg-emerald-400 disabled:opacity-50"
//       >
//         {isPending ? "Saving..." : "Save snippet"}
//       </button>
//     </form>

//   );
// }




// Claude UI
"use client";

import { useState, useTransition } from "react";
import { createSnippet } from "@/drizzle/src/snippets/action";
import { toast } from "react-toastify";
import { Code2, Globe, Lock, Sparkles, ChevronDown } from "lucide-react";

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
    <div className="mx-auto max-w-4xl">
      {/* Header */}
      <div className="mb-6 sm:mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-lg shadow-emerald-500/20">
            <Code2 className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            Create Snippet
          </h1>
        </div>
        <p className="text-sm sm:text-base text-slate-400 ml-0 sm:ml-[52px]">
          Save your code for future reference
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="rounded-xl sm:rounded-2xl border border-white/10 bg-[#0b0f0e] p-4 sm:p-6 md:p-8 shadow-2xl"
      >
        {/* Title */}
        <div>
          <label className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-300 mb-2">
            <Sparkles className="h-4 w-4 text-emerald-400" />
            Title
          </label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder="e.g., Fetch wrapper with retries"
            className="w-full rounded-lg sm:rounded-xl border border-white/10 bg-[#010409] px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-white placeholder:text-slate-500 outline-none transition-all focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20"
          />
        </div>

        {/* Language */}
        <div className="mt-5 sm:mt-6">
          <label className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-300 mb-2">
            <Code2 className="h-4 w-4 text-emerald-400" />
            Language
          </label>
          <div className="relative">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full appearance-none rounded-lg sm:rounded-xl border border-white/10 bg-[#010409] px-3 sm:px-4 py-2.5 sm:py-3 pr-10 text-sm sm:text-base text-white outline-none transition-all focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 cursor-pointer"
            >
              {LANGUAGES.map((lang) => (
                <option key={lang} value={lang} className="bg-[#0b0f0e]">
                  {lang.charAt(0).toUpperCase() + lang.slice(1)}
                </option>
              ))}
            </select>

            {/* Custom arrow */}
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
          </div>
        </div>

        {/* Code */}
        <div className="mt-5 sm:mt-6">
          <label className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-300 mb-2">
            <Code2 className="h-4 w-4 text-emerald-400" />
            Code
          </label>
          <div className="relative">
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              required
              rows={10}
              placeholder="// Paste your code here&#10;function example() {&#10;  return 'Hello, World!';&#10;}"
              className="w-full min-h-[200px] sm:min-h-[280px] resize-y rounded-lg sm:rounded-xl border border-white/10 bg-[#010409] px-3 sm:px-4 py-2.5 sm:py-3 font-mono text-xs sm:text-sm text-white placeholder:text-slate-500 outline-none transition-all focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 scrollbar-hide"
            />
            {/* Character count */}
            <div className="absolute bottom-3 right-3 text-xs text-slate-500 bg-[#010409]/80 px-2 py-1 rounded">
              {code.length} chars
            </div>
          </div>
        </div>

        {/* Public toggle */}
        <div className="mt-5 sm:mt-6">
          <label className="flex items-center gap-3 cursor-pointer group">
            <div className="relative">
              <input
                type="checkbox"
                checked={isPublic}
                onChange={(e) => setIsPublic(e.target.checked)}
                className="peer sr-only"
              />
              {/* Custom toggle switch */}
              <div className="h-6 w-11 rounded-full border-2 border-white/10 bg-[#010409] transition-all peer-checked:border-emerald-500/50 peer-checked:bg-emerald-500/20" />
              <div className="absolute left-1 top-1 h-4 w-4 rounded-full bg-slate-400 transition-all peer-checked:translate-x-5 peer-checked:bg-emerald-400" />
            </div>
            
            <div className="flex items-center gap-2">
              {isPublic ? (
                <Globe className="h-4 w-4 text-emerald-400" />
              ) : (
                <Lock className="h-4 w-4 text-slate-400" />
              )}
              <div>
                <p className="text-sm font-medium text-white">
                  {isPublic ? "Public" : "Private"}
                </p>
                <p className="text-xs text-slate-400">
                  {isPublic
                    ? "Everyone can see this snippet"
                    : "Only you can see this snippet"}
                </p>
              </div>
            </div>
          </label>
        </div>

        {/* Error */}
        {error && (
          <div className="mt-5 sm:mt-6 rounded-lg border border-red-500/30 bg-red-500/10 p-3 sm:p-4">
            <p className="text-sm text-red-400">{error}</p>
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={isPending}
          className="mt-6 sm:mt-8 w-full rounded-lg sm:rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 py-3 sm:py-3.5 text-sm sm:text-base font-bold text-white shadow-lg shadow-emerald-500/30 transition-all hover:scale-[1.02] hover:shadow-emerald-500/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 active:scale-[0.98]"
        >
          {isPending ? (
            <span className="flex items-center justify-center gap-2">
              <svg
                className="animate-spin h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Saving...
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2">
              <Sparkles className="h-5 w-5" />
              Save Snippet
            </span>
          )}
        </button>
      </form>
    </div>
  );
}