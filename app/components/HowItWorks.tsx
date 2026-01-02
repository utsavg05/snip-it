export default function HowItWorks() {
  return (
    <section
      id="features"
      className="relative border-white/5 bg-[#0b0f0e]"
    >
      <div className="mx-auto max-w-6xl px-6 py-24">
        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
            How it works
          </p>
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Save code once.
            <br />
            Reuse it forever.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-slate-400">
            A simple workflow designed for developers who want speed,
            clarity, and zero friction.
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Step 1 */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <span className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/20 text-sm font-semibold text-emerald-400">
              1
            </span>
            <h3 className="mb-2 text-lg font-semibold text-white">
              Save snippets
            </h3>
            <p className="text-sm leading-relaxed text-slate-400">
              Store code snippets you actually use — functions, configs,
              fixes, or patterns — all in one place.
            </p>
          </div>

          {/* Step 2 */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <span className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/20 text-sm font-semibold text-emerald-400">
              2
            </span>
            <h3 className="mb-2 text-lg font-semibold text-white">
              Tag & organize
            </h3>
            <p className="text-sm leading-relaxed text-slate-400">
              Add tags, languages, or notes so you can instantly find
              the right snippet when you need it.
            </p>
          </div>

          {/* Step 3 */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <span className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/20 text-sm font-semibold text-emerald-400">
              3
            </span>
            <h3 className="mb-2 text-lg font-semibold text-white">
              Reuse & share
            </h3>
            <p className="text-sm leading-relaxed text-slate-400">
              Copy snippets instantly or share them with others.
              Stop rewriting the same code again and again.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
