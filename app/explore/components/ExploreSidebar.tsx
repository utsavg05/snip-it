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




"use client";

import { useRouter, useSearchParams } from "next/navigation";
import clsx from "clsx";

const LANGUAGES = [
  "JavaScript",
  "TypeScript",
  "Python",
  "Java",
  "Cpp",
  "Go",
  "Rust",
];

export default function ExploreSidebar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeLang = searchParams.get("lang");

  function handleSelect(lang: string) {
    const params = new URLSearchParams(searchParams.toString());

    // toggle behavior
    if (activeLang === lang) {
      params.delete("lang");
    } else {
      params.set("lang", lang);
    }

    params.delete("page"); // reset pagination on filter change
    router.push(`/explore?${params.toString()}`);
  }

  return (
    <div className="pt-1">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
          Languages
        </h3>

        <span className="rounded-full bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 text-[10px] font-semibold text-emerald-400">
          Soon
        </span>
      </div>

      {/* Language list (visual only) */}
      <div className="flex flex-col gap-1">
        {LANGUAGES.map((lang) => (
          <div
            key={lang}
            className="cursor-not-allowed rounded-lg px-3 py-2 text-sm text-slate-400 opacity-50 hover:bg-white/[0.02] transition-colors"
          >
            {lang}
          </div>
        ))}

        {/* And more */}
        <div className="mt-2 rounded-lg px-3 py-2 text-sm text-slate-500 italic opacity-50">
          And more…
        </div>
      </div>

      {/* Footer hint */}
      <p className="mt-4 text-xs leading-relaxed text-slate-500 border-t border-white/5 pt-4">
        Filter snippets by language & framework in an upcoming update.
      </p>
    </div>
  );
}

