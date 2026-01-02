export default function SocialProof() {
  return (
    <section className="relative border-t border-white/5 bg-[#0b0f0e]">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-400">
          <span className="font-medium text-slate-300">
            10k+ snippets saved
          </span>
          <span className="hidden sm:inline">•</span>

          <span>
            1k+ developers
          </span>
          <span className="hidden sm:inline">•</span>

          <span>
            Built for open-source workflows
          </span>
          <span className="hidden sm:inline">•</span>

          <span className="text-emerald-400">
            Free during beta
          </span>
        </div>
      </div>
    </section>
  );
}
