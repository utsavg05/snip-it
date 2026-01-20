// "use client";

// import { Search } from "lucide-react";

// export default function ExploreHeader() {
//   return (
//     <div className="mb-6 flex items-center justify-between">
//       <div>
//         <h1 className="text-2xl font-semibold text-white">
//           Explore Snippets
//         </h1>
//         <p className="text-sm text-slate-400">
//           Discover public snippets shared by developers
//         </p>
//       </div>

//       <div className="relative w-72">
//         <Search
//           size={16}
//           className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
//         />
//         <input
//           placeholder="Search snippets..."
//           className="w-full rounded-xl border border-white/10 bg-black/40 py-2 pl-9 pr-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-emerald-500/40"
//         />
//       </div>
//     </div>
//   );
// }



// "use client";

// import { Search } from "lucide-react";
// import { useRouter, useSearchParams } from "next/navigation";
// import { useDebouncedCallback } from "use-debounce";
// import { useEffect, useState } from "react";

// type ExploreHeaderProps = {
//   initialQuery?: string;
// };

// export default function ExploreHeader({
//   initialQuery = "",
// }: ExploreHeaderProps) {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const [value, setValue] = useState(initialQuery);

//   // keep input in sync when navigating back/forward
//   useEffect(() => {
//     setValue(initialQuery);
//   }, [initialQuery]);

//   const updateSearch = useDebouncedCallback((val: string) => {
//     const params = new URLSearchParams(searchParams.toString());

//     if (val.trim()) {
//       params.set("q", val.trim());
//     } else {
//       params.delete("q");
//     }

//     params.delete("page"); // reset pagination
//     router.push(`/explore?${params.toString()}`);
//   }, 400);

//   return (
//     <div className="mb-6 flex items-center justify-between gap-6">
//       <div>
//         <h1 className="text-2xl font-semibold text-white">
//           Explore Snippets
//         </h1>
//         <p className="text-sm text-slate-400">
//           Discover public snippets shared by developers
//         </p>
//       </div>

//       <div className="relative w-72">
//         <Search
//           size={16}
//           className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
//         />

//         <input
//           value={value}
//           onChange={(e) => {
//             setValue(e.target.value);
//             updateSearch(e.target.value);
//           }}
//           placeholder="Search by title or keyword…"
//           className="
//             w-full rounded-xl
//             border border-white/10
//             bg-black/40
//             py-2 pl-9 pr-3
//             text-sm text-white
//             placeholder:text-slate-500
//             focus:outline-none
//             focus:ring-1 focus:ring-emerald-500/40
//           "
//         />
//       </div>
//     </div>
//   );
// }



// "use client";

// import { Search } from "lucide-react";
// import { useRouter, useSearchParams } from "next/navigation";
// import { useState } from "react";

// export default function ExploreHeader({
// }: {
//   }) {
//   const [value, setValue] = useState("");
//   const router = useRouter();
//   const searchParams = useSearchParams();

//   function onSubmit(e: React.FormEvent) {
//     e.preventDefault();

//     const params = new URLSearchParams(searchParams.toString());
//     value ? params.set("q", value) : params.delete("q");
//     params.set("page", "1");
//     router.push(`/explore?${params.toString()}`);
//   }

//   return (
//     <div className="mb-6 flex items-center justify-between">
//       <div>
//         <h1 className="text-2xl md:text-4xl font-semibold text-white">
//           Explore Snippets
//         </h1>
//         <p className="text-sm mt-2 text-slate-400">
//           Discover public snippets shared by developers
//         </p>
//       </div>

//       <form onSubmit={onSubmit} className="relative w-72">
//         <Search
//           size={16}
//           className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
//         />
//         <input
//           disabled
//           value={value}
//           onChange={(e) => setValue(e.target.value)}
//           placeholder="Search snippets (coming soon)..."
//           className="cursor-not-allowed opacity-60 w-full rounded-xl border border-white/10 bg-black/40 py-2 pl-9 pr-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-emerald-500/40"
//         />
//       </form>
//     </div>
//   );
// }



// working
// "use client";

// import { Search, ChevronDown } from "lucide-react";
// import { useRouter, useSearchParams } from "next/navigation";
// import { useState } from "react";

// const LANGUAGES = [
//   "JavaScript",
//   "TypeScript",
//   "Python",
//   "Java",
//   "Cpp",
//   "Go",
//   "Rust",
// ];

// export default function ExploreHeader() {
//   const [searchValue, setSearchValue] = useState("");
//   const [isLangOpen, setIsLangOpen] = useState(false);
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const activeLang = searchParams.get("lang");

//   function onSubmit(e: React.FormEvent) {
//     e.preventDefault();
//     const params = new URLSearchParams(searchParams.toString());
//     searchValue ? params.set("q", searchValue) : params.delete("q");
//     params.set("page", "1");
//     router.push(`/explore?${params.toString()}`);
//   }

//   function handleLangSelect(lang: string) {
//     const params = new URLSearchParams(searchParams.toString());
//     if (activeLang === lang) {
//       params.delete("lang");
//     } else {
//       params.set("lang", lang);
//     }
//     params.delete("page");
//     router.push(`/explore?${params.toString()}`);
//     setIsLangOpen(false);
//   }

//   return (
//     <div className="mb-6 sm:mb-8 space-y-4">
//       {/* Title and Search - Stack on mobile */}
//       <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
//         <div>
//           <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
//             Explore Snippets
//           </h1>
//           <p className="text-sm sm:text-base mt-1 sm:mt-2 text-slate-400">
//             Discover public snippets shared by developers
//           </p>
//         </div>

//         <form onSubmit={onSubmit} className="relative w-full sm:w-72">
//           <Search
//             size={16}
//             className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
//           />
//           <input
//             disabled
//             value={searchValue}
//             onChange={(e) => setSearchValue(e.target.value)}
//             placeholder="Search snippets (coming soon)..."
//             className="cursor-not-allowed w-full rounded-xl border border-white/10 bg-[#0b0f0e] py-2.5 pl-9 pr-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500/40 transition-all"
//           />
//         </form>
//       </div>

//       {/* Mobile Language filter for languages */}
//       <div className="lg:hidden relative">
//         <button
//           onClick={() => setIsLangOpen(!isLangOpen)}
//           disabled
//           className="cursor-not-allowed w-full sm:w-auto flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-[#0b0f0e] px-4 py-2.5 text-sm text-white hover:bg-white/[0.02] hover:border-emerald-500/30 transition-all"
//         >
//           <span className="flex items-center gap-2">
//             <span className="text-slate-400 font-medium">Language:</span>
//             <span className="text-white font-semibold">
//               {activeLang || "All"}
//             </span>
//           </span>
//           <div className="flex items-center gap-2">
//             <span className="text-[10px] rounded-full bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 text-emerald-400 font-semibold">
//               Soon
//             </span>
//             <ChevronDown
//               size={16}
//               className={`text-slate-400 transition-transform ${
//                 isLangOpen ? "rotate-180" : ""
//               }`}
//             />
//           </div>
//         </button>

//         {/* Dropdown Menu */}
//         {isLangOpen && (
//           <>
//             <div
//               className="fixed inset-0 z-10 bg-black/60 backdrop-blur-sm"
//               onClick={() => setIsLangOpen(false)}
//             />
//             <div className="absolute top-full left-0 right-0 sm:right-auto sm:w-64 mt-2 z-20 rounded-xl border border-white/10 bg-[#0b0f0e] p-2 shadow-2xl backdrop-blur-xl">
//               <div
//                 onClick={() => handleLangSelect("")}
//                 className={`cursor-pointer rounded-lg px-3 py-2.5 text-sm font-medium transition-all ${
//                   !activeLang
//                     ? "bg-emerald-500/20 border border-emerald-500/30 text-emerald-400"
//                     : "text-slate-300 hover:bg-white/5 hover:text-white"
//                 }`}
//               >
//                 All Languages
//               </div>
//               <div className="my-1 h-px bg-white/5" />
//               {LANGUAGES.map((lang) => (
//                 <div
//                   key={lang}
//                   onClick={() => handleLangSelect(lang)}
//                   className={`cursor-pointer rounded-lg px-3 py-2.5 text-sm font-medium transition-all ${
//                     activeLang === lang
//                       ? "bg-emerald-500/20 border border-emerald-500/30 text-emerald-400"
//                       : "text-slate-300 hover:bg-white/5 hover:text-white"
//                   }`}
//                 >
//                   {lang}
//                 </div>
//               ))}
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }



"use client";

import { Search, ChevronDown } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDebouncedValue } from "@/hooks/useDebouncedValue";

const LANGUAGES = [
  "JavaScript",
  "TypeScript",
  "Python",
  "Java",
  "Cpp",
  "Go",
  "Rust",
];

export default function ExploreHeader() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const activeLang = searchParams.get("lang");
  const initialQuery = searchParams.get("q") ?? "";

  const [searchValue, setSearchValue] = useState(initialQuery);
  const [isLangOpen, setIsLangOpen] = useState(false);

  // 🔑 300ms debounced value
  const debouncedSearch = useDebouncedValue(searchValue, 300);

  /* ---------------- SEARCH (LIVE) ---------------- */
  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());

    if (debouncedSearch.trim().length >= 2) {
      params.set("q", debouncedSearch.trim());
    } else {
      params.delete("q");
    }

    // reset pagination on new search
    params.delete("page");

    router.replace(`/explore?${params.toString()}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearch]);

  /* ---------------- LANGUAGE ---------------- */
  function handleLangSelect(lang: string) {
    const params = new URLSearchParams(searchParams.toString());

    if (activeLang === lang || lang === "") {
      params.delete("lang");
    } else {
      params.set("lang", lang);
    }

    params.delete("page");
    router.push(`/explore?${params.toString()}`);
    setIsLangOpen(false);
  }

  return (
    <div className="mb-6 sm:mb-8 space-y-4">
      {/* Title + Search */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            Explore Snippets
          </h1>
          <p className="text-sm sm:text-base mt-1 sm:mt-2 text-slate-400">
            Discover public snippets shared by developers
          </p>
        </div>

        {/* 🔍 Search */}
        <div className="relative w-full sm:w-72">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />
          <input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search snippets..."
            className="w-full rounded-xl border border-white/10 bg-[#0b0f0e] py-2.5 pl-9 pr-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500/40 transition-all"
          />
        </div>
      </div>

      {/* Mobile Language Filter */}
      <div className="lg:hidden relative">
        <button
          onClick={() => setIsLangOpen((v) => !v)}
          className="w-full sm:w-auto flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-[#0b0f0e] px-4 py-2.5 text-sm text-white hover:bg-white/[0.02] hover:border-emerald-500/30 transition-all"
        >
          <span className="flex items-center gap-2">
            <span className="text-slate-400 font-medium">Language:</span>
            <span className="text-white font-semibold">
              {activeLang || "All"}
            </span>
          </span>
          <ChevronDown
            size={16}
            className={`text-slate-400 transition-transform ${
              isLangOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {isLangOpen && (
          <>
            <div
              className="fixed inset-0 z-10 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsLangOpen(false)}
            />
            <div className="absolute top-full left-0 right-0 sm:right-auto sm:w-64 mt-2 z-20 rounded-xl border border-white/10 bg-[#0b0f0e] p-2 shadow-2xl backdrop-blur-xl">
              <div
                onClick={() => handleLangSelect("")}
                className={`cursor-pointer rounded-lg px-3 py-2.5 text-sm font-medium transition-all ${
                  !activeLang
                    ? "bg-emerald-500/20 border border-emerald-500/30 text-emerald-400"
                    : "text-slate-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                All Languages
              </div>
              <div className="my-1 h-px bg-white/5" />
              {LANGUAGES.map((lang) => (
                <div
                  key={lang}
                  onClick={() => handleLangSelect(lang)}
                  className={`cursor-pointer rounded-lg px-3 py-2.5 text-sm font-medium transition-all ${
                    activeLang === lang
                      ? "bg-emerald-500/20 border border-emerald-500/30 text-emerald-400"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {lang}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
