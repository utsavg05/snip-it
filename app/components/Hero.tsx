import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="pt-15 relative overflow-hidden bg-gradient-to-b from-[#0b0f0e] via-[#0d1412] to-[#0b0f0e]">
      {/* subtle background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-120px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[120px]"
      />

      <div className="mx-auto max-w-6xl px-6 pb-32 pt-28 text-center">
        {/* trust badge */}
        <div className="mb-6 flex justify-center">
          <Badge
            variant="secondary"
            className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-md text-slate-200 backdrop-blur"
          >
            <span className="mr-2">👥</span>
            1k+ developers save snippets daily
          </Badge>
        </div>

        {/* headline */}
        <h1 className="mx-auto max-w-5xl text-balance text-5xl font-bold leading-tight tracking-tight text-white sm:text-7xl">
          Stop losing code snippets.
          <br />
          Save them in{" "}
          <span className="relative inline-block">
            <span className="absolute left-0 top-1/2 h-[3px] w-full -translate-y-1/2 bg-red-500/70" />
            <span className="relative text-slate-400">minutes</span>
          </span>{" "}
          <span className="text-emerald-400">seconds</span>.
        </h1>

        {/* subheading */}
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
          Save, tag, and reuse your best code snippets.
          <br />
          Built for developers who hate digging through old repos and notes.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            className="cursor-pointer rounded-none bg-emerald-500 px-8 py-6 text-base font-semibold text-black hover:bg-emerald-400"
          >
            Start saving snippets
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="cursor-pointer rounded-none border-white/15 bg-transparent px-8 py-6 text-base text-white hover:bg-white/5 hover:text-white"
          >
            Explore examples
          </Button>
        </div>

        {/* reassurance */}
        <p className="mt-4 text-sm text-slate-500">
          Free to use • No credit card required
        </p>
      </div>
    </section>
  );
}
