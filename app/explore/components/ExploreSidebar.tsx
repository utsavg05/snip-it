// "use client";

// const LANGUAGES = [
//   "JavaScript",
//   "TypeScript",
//   "Python",
//   "Java",
//   "Cpp",
//   "Go",
//   "Rust",
// ];

// export default function ExploreSidebar() {
//   return (
//     <div className="pt-2">
//       <h3 className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-slate-400">
//         Languages
//       </h3>

//       <div className="flex flex-col gap-1">
//         {LANGUAGES.map((lang) => (
//           <button
//             key={lang}
//             className="w-full rounded-md px-2 py-1.5 text-left text-sm text-slate-400 transition hover:bg-white/5 hover:text-white"
//           >
//             {lang}
//           </button>
//         ))}
//       </div>

//       <button className="mt-2 text-xs text-emerald-400 hover:underline">
//         More languages →
//       </button>
//     </div>
//   );
// }




// working
// "use client";

// import { useRouter, useSearchParams } from "next/navigation";
// import clsx from "clsx";

// const LANGUAGES = [
//   "JavaScript",
//   "TypeScript",
//   "Python",
//   "Java",
//   "Cpp",
//   "Go",
//   "Rust",
// ];

// export default function ExploreSidebar() {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const activeLang = searchParams.get("lang");

//   function handleSelect(lang: string) {
//     const params = new URLSearchParams(searchParams.toString());

//     // toggle behavior
//     if (activeLang === lang) {
//       params.delete("lang");
//     } else {
//       params.set("lang", lang);
//     }

//     params.delete("page"); // reset pagination on filter change
//     router.push(`/explore?${params.toString()}`);
//   }

//   return (
//     <div className="pt-1">
//       {/* Header */}
//       <div className="mb-4 flex items-center justify-between">
//         <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
//           Languages
//         </h3>

//         <span className="rounded-full bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 text-[10px] font-semibold text-emerald-400">
//           Soon
//         </span>
//       </div>

//       {/* Language list (visual only) */}
//       <div className="flex flex-col gap-1">
//         {LANGUAGES.map((lang) => (
//           <div
//             key={lang}
//             className="cursor-not-allowed rounded-lg px-3 py-2 text-sm text-slate-400 opacity-50 hover:bg-white/[0.02] transition-colors"
//           >
//             {lang}
//           </div>
//         ))}

//         {/* And more */}
//         <div className="mt-2 rounded-lg px-3 py-2 text-sm text-slate-500 italic opacity-50">
//           And more…
//         </div>
//       </div>

//       {/* Footer hint */}
//       <p className="mt-4 text-xs leading-relaxed text-slate-500 border-t border-white/5 pt-4">
//         Filter snippets by language & framework in an upcoming update.
//       </p>
//     </div>
//   );
// }




"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import clsx from "clsx";
import { ChevronDown } from "lucide-react";

const PRIMARY_LANGUAGES = [
  "JavaScript",
  "TypeScript",
  "Python",
  "React",
  "Java",
  "Go",
  "Rust",
];

const MORE_LANGUAGES = [
  "C",
  "Cpp",
  "CSharp",
  "PHP",
  "Ruby",
  "Swift",
  "Kotlin",
  "SQL",
  "Bash",
  "Docker",
  "HTML",
  "CSS",
];

export default function ExploreSidebar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeLang = searchParams.get("lang");
  const [showMore, setShowMore] = useState(false);

  function handleSelect(lang: string) {
    const params = new URLSearchParams(searchParams.toString());

    if (activeLang === lang) {
      params.delete("lang");
    } else {
      params.set("lang", lang);
    }

    // clear search when filtering
    params.delete("q");
    params.delete("page");

    router.push(`/explore?${params.toString()}`);
  }

  function renderLang(lang: string) {
    const isActive = activeLang === lang;

    return (
      <button
        key={lang}
        onClick={() => handleSelect(lang)}
        className={clsx(
          "w-full rounded-md px-3 py-1.5 text-sm font-medium transition-all text-left",
          isActive
            ? "bg-emerald-500/20 text-emerald-400 ring-1 ring-emerald-500/30"
            : "text-slate-300 hover:bg-white/5 hover:text-white"
        )}
      >
        {lang}
      </button>
    );
  }

  return (
    <aside className="rounded-xl bg-emerald-500/[0.04] border border-emerald-500/10 p-3">
      {/* Header */}
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
          Languages
        </h3>

        {activeLang && (
          <button
            onClick={() => handleSelect(activeLang)}
            className="text-[11px] cursor-pointer font-medium text-slate-400 hover:text-emerald-400 transition"
          >
            Clear
          </button>
        )}
      </div>

      {/* Primary languages */}
      <div className="flex flex-col gap-1">
        {PRIMARY_LANGUAGES.map(renderLang)}
      </div>

      {/* More toggle */}
      <button
        onClick={() => setShowMore((v) => !v)}
        className="mt-2 flex w-full items-center justify-between rounded-md px-3 py-1.5 text-xs font-medium text-slate-400 hover:bg-white/5 hover:text-white transition"
      >
        <span>{showMore ? "Less languages" : "More languages"}</span>
        <ChevronDown
          size={14}
          className={clsx("transition-transform", showMore && "rotate-180")}
        />
      </button>

      {/* More languages */}
      {showMore && (
        <div className="mt-2 grid grid-cols-2 gap-1">
          {MORE_LANGUAGES.map(renderLang)}
        </div>
      )}

      {/* Footer hint */}
      <p className="mt-3 border-t border-white/5 pt-3 text-[11px] leading-relaxed text-slate-500">
        Filter public snippets by language.
      </p>
    </aside>
  );
}
