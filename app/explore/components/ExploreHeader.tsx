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



"use client";

import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function ExploreHeader({
  //   initialQuery,
}: {
    //   initialQuery: string;
  }) {
  const [value, setValue] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    const params = new URLSearchParams(searchParams.toString());
    value ? params.set("q", value) : params.delete("q");
    params.set("page", "1");
    router.push(`/explore?${params.toString()}`);
  }

  return (
    <div className="mb-6 flex items-center justify-between">
      <div>
        <h1 className="text-2xl md:text-4xl font-semibold text-white">
          Explore Snippets
        </h1>
        <p className="text-sm mt-2 text-slate-400">
          Discover public snippets shared by developers
        </p>
      </div>

      <form onSubmit={onSubmit} className="relative w-72">
        <Search
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
        />
        <input
          disabled
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search snippets (coming soon)..."
          className="cursor-not-allowed opacity-60 w-full rounded-xl border border-white/10 bg-black/40 py-2 pl-9 pr-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-emerald-500/40"
        />
      </form>
    </div>
  );
}

