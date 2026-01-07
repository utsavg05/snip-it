"use client";

const LANGUAGES = [
  "JavaScript",
  "TypeScript",
  "Python",
  "Java",
  "Cpp",
  "Go",
  "Rust",
];


// export default function ExploreSidebar() {
//   return (
//     <div className="pt-4">
//       <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
//         Languages
//       </h3>

//       <div className="space-y-0.5">
//         {LANGUAGES.map((lang) => (
//           <button
//             key={lang}
//             className="w-full rounded-md px-2.5 py-1.5 text-left text-sm text-slate-400 transition hover:bg-white/5 hover:text-white"
//           >
//             {lang}
//           </button>
//         ))}
//       </div>

//       <button className="mt-3 text-xs text-emerald-400 hover:underline">
//         More languages →
//       </button>
//     </div>
//   );
// }

export default function ExploreSidebar() {
  return (
    <div className="pt-2">
      <h3 className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-slate-400">
        Languages
      </h3>

      <div className="flex flex-col gap-1">
        {LANGUAGES.map((lang) => (
          <button
            key={lang}
            className="w-full rounded-md px-2 py-1.5 text-left text-sm text-slate-400 transition hover:bg-white/5 hover:text-white"
          >
            {lang}
          </button>
        ))}
      </div>

      <button className="mt-2 text-xs text-emerald-400 hover:underline">
        More languages →
      </button>
    </div>
  );
}
