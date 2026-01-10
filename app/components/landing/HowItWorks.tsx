// export default function HowItWorks() {
//   return (
//     <section
//       id="features"
//       className="relative  border-white/5 bg-[#0b0f0e]"
//     >
//       <div className="mx-auto max-w-6xl px-6 py-16">
//         {/* Heading */}
//         <div className="mb-12 text-center">
//           <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400">
//             How it works
//           </p>

//           <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
//             Save once.
//             <br />
//             <span className="text-emerald-400">Reuse forever.</span>
//           </h2>

//           <p className="mx-auto mt-3 max-w-xl text-lg text-slate-400">
//             A dead-simple workflow designed to keep your best code
//             always within reach.
//           </p>
//         </div>

//         {/* Steps */}
//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {/* Step 1 */}
//           <div className="group rounded-2xl border border-white/10 bg-white/5 p-8 transition hover:border-emerald-400/30 hover:bg-white/[0.08]">
//             <span className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20 text-base font-bold text-emerald-400">
//               1
//             </span>

//             <h3 className="mb-3 text-xl font-semibold text-white">
//               Save snippets
//             </h3>

//             <p className="text-base leading-relaxed text-slate-400">
//               Store frequently used code — functions, configs,
//               fixes, or patterns — in one secure place.
//             </p>
//           </div>

//           {/* Step 2 */}
//           <div className="group rounded-2xl border border-white/10 bg-white/5 p-8 transition hover:border-emerald-400/30 hover:bg-white/[0.08]">
//             <span className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20 text-base font-bold text-emerald-400">
//               2
//             </span>

//             <h3 className="mb-3 text-xl font-semibold text-white">
//               Tag & organize
//             </h3>

//             <p className="text-base leading-relaxed text-slate-400">
//               Add tags, languages, or notes so the right snippet
//               shows up exactly when you need it.
//             </p>
//           </div>

//           {/* Step 3 */}
//           <div className="group rounded-2xl border border-white/10 bg-white/5 p-8 transition hover:border-emerald-400/30 hover:bg-white/[0.08]">
//             <span className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20 text-base font-bold text-emerald-400">
//               3
//             </span>

//             <h3 className="mb-3 text-xl font-semibold text-white">
//               Reuse & share
//             </h3>

//             <p className="text-base leading-relaxed text-slate-400">
//               Copy snippets instantly or share them with others.
//               Stop rewriting the same code again and again.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


export default function HowItWorks() {
  return (
    <section
      id="features"
      className="relative border-white/5 bg-[#0b0f0e]"
    >
      <div className="mx-auto max-w-6xl px-6 py-16">
        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400">
            How it works
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Build your
            <br />
            <span className="text-emerald-400">
              personal snippet hub.
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-lg text-neutral-400">
            SnipHub lets you create, organize, and share code snippets —
            privately for yourself or publicly to help the community.
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Step 1 */}
          <div className="group rounded-2xl border border-white/10 bg-white/5 p-8 transition hover:border-emerald-400/30 hover:bg-white/[0.08]">
            <span className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20 text-base font-bold text-emerald-400">
              1
            </span>

            <h3 className="mb-3 text-xl font-semibold text-white">
              Create snippets
            </h3>

            <p className="text-base leading-relaxed text-neutral-400">
              Save functions, configs, fixes, or patterns you use
              often — with language support and clean previews.
            </p>
          </div>

          {/* Step 2 */}
          <div className="group rounded-2xl border border-white/10 bg-white/5 p-8 transition hover:border-emerald-400/30 hover:bg-white/[0.08]">
            <span className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20 text-base font-bold text-emerald-400">
              2
            </span>

            <h3 className="mb-3 text-xl font-semibold text-white">
              Control visibility
            </h3>

            <p className="text-base leading-relaxed text-neutral-400">
              Keep snippets private for personal use or make them
              public to help other developers learn and reuse.
            </p>
          </div>

          {/* Step 3 */}
          <div className="group rounded-2xl border border-white/10 bg-white/5 p-8 transition hover:border-emerald-400/30 hover:bg-white/[0.08]">
            <span className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20 text-base font-bold text-emerald-400">
              3
            </span>

            <h3 className="mb-3 text-xl font-semibold text-white">
              Organize & reuse
            </h3>

            <p className="text-base leading-relaxed text-neutral-400">
              Tag, search, and organize snippets so the right code
              is always easy to find and reuse when needed.
            </p>
          </div>

          {/* Step 4 */}
          <div className="group rounded-2xl border border-white/10 bg-white/5 p-8 transition hover:border-emerald-400/30 hover:bg-white/[0.08]">
            <span className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20 text-base font-bold text-emerald-400">
              4
            </span>

            <h3 className="mb-3 text-xl font-semibold text-white">
              Explore & engage
            </h3>

            <p className="text-base leading-relaxed text-neutral-400">
              Discover snippets shared by others, like useful ones,
              and build a collection you trust and grow over time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
