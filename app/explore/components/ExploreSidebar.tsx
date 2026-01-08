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
        // <div className="pt-1">
        //     <h3 className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-slate-400">
        //         Languages
        //     </h3>

        //     <div className="flex flex-col gap-0.5">
        //         {LANGUAGES.map((lang) => {
        //             const isActive = activeLang === lang;

        //             return (
        //                 <button
        //                     key={lang}
        //                     onClick={() => handleSelect(lang)}
        //                     className={clsx(
        //                         "w-full rounded-md px-2 py-1.5 text-left text-sm transition",
        //                         isActive
        //                             ? "bg-emerald-500/10 text-emerald-400"
        //                             : "text-slate-400 hover:bg-white/5 hover:text-white"
        //                     )}
        //                 >
        //                     {lang}
        //                 </button>
        //             );
        //         })}
        //     </div>

        //     <button className="mt-2 text-xs text-emerald-400 hover:underline">
        //         More languages →
        //     </button>
        // </div>


        <div className="pt-1">
            {/* Header */}
            <div className="mb-3 flex items-center justify-between">
                <h3 className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                    Languages
                </h3>

                <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] text-slate-400">
                    Coming soon
                </span>
            </div>

            {/* Language list (visual only) */}
            <div className="flex flex-col gap-1">
                {LANGUAGES.map((lang) => (
                    <div
                        key={lang}
                        className="rounded-md px-2 py-1.5 text-sm text-slate-400 opacity-60"
                    >
                        {lang}
                    </div>
                ))}

                {/* And more */}
                <div className="mt-1 rounded-md px-2 py-1.5 text-sm text-slate-500 italic opacity-60">
                    And more…
                </div>
            </div>

            {/* Footer hint */}
            <p className="mt-3 text-sm leading-relaxed text-slate-500">
                Filter snippets by language & framework in an upcoming update.
            </p>
        </div>


    );
}

