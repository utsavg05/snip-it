// import { Button } from "@/components/ui/button";

// const snippets = [
//   {
//     title: "Debounce function",
//     language: "JavaScript",
//     author: "utsav.dev",
//     code: `function debounce(fn, delay = 300) {
//   let timeout;
//   return (...args) => {
//     clearTimeout(timeout);
//     timeout = setTimeout(() => {
//       fn.apply(this, args);
//     }, delay);
//   };
// }`,
//   },
//   {
//     title: "Reusable fetch wrapper",
//     language: "TypeScript",
//     author: "frontendguy",
//     code: `export async function api<T>(
//   url: string,
//   options?: RequestInit
// ): Promise<T> {
//   const res = await fetch(url, {
//     headers: { "Content-Type": "application/json" },
//     ...options,
//   });
//   if (!res.ok) throw new Error("Request failed");
//   return res.json();
// }`,
//   },
//   {
//     title: "Postgres connection (Node)",
//     language: "SQL",
//     author: "dbwizard",
//     code: `import { Pool } from "pg";

// export const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl: true,
// });`,
//   },
// ];

// export default function ExampleSnippets() {
//   return (
//     <section
//       id="examples"
//       className="relative border-t border-white/5 bg-[#0b0f0e]"
//     >
//       <div className="mx-auto max-w-6xl px-6 py-20">
//         {/* Heading */}
//         <div className="mb-12 text-center">
//           <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400">
//             Examples
//           </p>
//           <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
//             Snippets developers actually save
//           </h2>
//           <p className="mx-auto mt-4 max-w-xl text-lg text-slate-400">
//             Real-world code snippets you’ll reuse again and again.
//           </p>
//         </div>

//         {/* Snippet Cards */}
//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {snippets.map((snippet, idx) => (
//             <div
//               key={idx}
//               className="group relative flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-emerald-400/30 hover:bg-white/[0.08]"
//             >
//               {/* Header */}
//               <div className="mb-4 flex items-center justify-between">
//                 <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-400">
//                   {snippet.language}
//                 </span>
//                 <span className="text-xs text-slate-400">
//                   @{snippet.author}
//                 </span>
//               </div>

//               {/* Title */}
//               <h3 className="mb-3 text-lg font-semibold text-white">
//                 {snippet.title}
//               </h3>

//               {/* Code Preview */}
//               <pre className="mb-4 max-h-[180px] overflow-hidden rounded-xl bg-[#050807] p-4 text-sm text-slate-200">
//                 <code className="font-mono leading-relaxed">
//                   {snippet.code}
//                 </code>
//               </pre>

//               {/* Footer */}
//               <Button
//                 variant="outline"
//                 className="mt-auto w-full border-white/10 bg-transparent text-white hover:bg-white/5 hover:text-white"
//               >
//                 Copy snippet
//               </Button>
//             </div>
//           ))}
//         </div>

//         {/* CTA */}
//         <div className="mt-12 text-center">
//           <Button
//             size="lg"
//             className="rounded-full bg-emerald-500 px-8 py-6 text-base font-semibold text-black hover:bg-emerald-400"
//           >
//             Explore all snippets
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// }


import { Button } from "@/components/ui/button";
import { getAuthUser } from "@/lib/auth";
import Link from "next/link";

const snippets = [
  {
    title: "Debounce input handler",
    language: "JavaScript",
    author: "utsav.dev",
    code: `export function debounce(fn, delay = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}`,
  },
  {
    title: "Typed API fetch helper",
    language: "TypeScript",
    author: "frontendguy",
    code: `export async function api<T>(url: string): Promise<T> {
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed request");
  return res.json();
}`,
  },
  {
    title: "Postgres pool setup",
    language: "Node.js",
    author: "dbwizard",
    code: `import { Pool } from "pg";

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});`,
  },
  {
    title: "JWT auth middleware",
    language: "Express",
    author: "backendnerd",
    code: `export function auth(req, res, next) {
  const token = req.headers.authorization;
  if (!token) return res.sendStatus(401);
  next();
}`,
  },
  {
    title: "CSS center utility",
    language: "CSS",
    author: "ui.dev",
    code: `.center {
  display: flex;
  align-items: center;
  justify-content: center;
}`,
  },
  {
    title: "Array chunk utility",
    language: "JavaScript",
    author: "algo.dev",
    code: `export function chunk(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size)
    out.push(arr.slice(i, i + size));
  return out;
}`,
  },
];

export default async function ExampleSnippets() {

  const user = await getAuthUser();

  return (
    <section
      id="examples"
      className="relative border-white/5 bg-[#0b0f0e]"
    >
      <div className="mx-auto max-w-7xl px-6 py-20">
        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400">
            See it in action
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Real snippets developers actually use
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
            From frontend utilities to backend helpers — save code you’ll
            reuse across projects.
          </p>
        </div>

        {/* Snippet Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {snippets.map((snippet, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-emerald-400/30 hover:bg-white/[0.08]"
            >
              {/* Meta */}
              <div className="mb-3 flex items-center justify-between text-xs">
                <span className="rounded-full bg-emerald-500/15 px-3 py-1 font-semibold text-emerald-400">
                  {snippet.language}
                </span>
                <span className="text-slate-400">@{snippet.author}</span>
              </div>

              {/* Title */}
              <h3 className="mb-3 text-lg font-semibold text-white">
                {snippet.title}
              </h3>

              {/* Code */}
              <pre className="max-h-[160px] overflow-hidden rounded-xl bg-[#050807] p-4 text-sm text-slate-200">
                <code className="font-mono leading-relaxed">
                  {snippet.code}
                </code>
              </pre>

              {/* Action */}
              <button className="mt-4 w-full rounded-full border border-white/10 py-2 text-sm font-semibold text-white transition hover:bg-white/10">
                Copy snippet
              </button>
            </div>
          ))}
        </div>

        {/* Value Highlights */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h4 className="mb-2 font-semibold text-white">
              Built for speed
            </h4>
            <p className="text-sm text-slate-400">
              Save snippets in seconds and reuse them instantly
              without context switching.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h4 className="mb-2 font-semibold text-white">
              Language-agnostic
            </h4>
            <p className="text-sm text-slate-400">
              JavaScript, TypeScript, SQL, CSS, backend or frontend —
              everything lives in one place.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h4 className="mb-2 font-semibold text-white">
              Reuse Rewrite
            </h4>
            <p className="text-sm text-slate-400">
              Stop rewriting the same utilities across projects.
              Copy, paste, ship.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <Link href={`${user ? "/explore" : "/auth"}`}>
          <Button
            size="lg"
            className="rounded-none cursor-pointer bg-emerald-500 px-8 py-6 text-base font-semibold text-black hover:bg-emerald-400"
          >
            Explore all snippets
          </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
