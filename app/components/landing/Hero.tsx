import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Star } from "lucide-react";
import { AvatarCircles } from "@/components/ui/avatar-circles";

const avatars = [
  {
    imageUrl: "https://avatars.githubusercontent.com/u/16860528",
    profileUrl: "https://github.com/dillionverma",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/20110627",
    profileUrl: "https://github.com/tomonarifeehan",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/106103625",
    profileUrl: "https://github.com/BankkRoll",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/59228569",
    profileUrl: "https://github.com/safethecode",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/59442788",
    profileUrl: "https://github.com/sanjay-mali",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/89768406",
    profileUrl: "https://github.com/itsarghyadas",
  },
]

export default function Hero() {
  return (
    <section className="pt-15 w-full relative  bg-gradient-to-b from-[#0b0f0e] via-[#0d1412] to-[#0b0f0e]">

      {/* subtle background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-120px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[120px]"
      />

      <div className="mx-auto max-w-6xl px-6 pb-24 md:pb-32 md:pt-28 pt-5 text-center">
        <div className="flex items-center gap-2 justify-center mb-8 block md:hidden">

        {/* <div className="flex items-center gap-3 px-2 py-1 w-fit rounded-full
                          border border-white/15
                          bg-white backdrop-blur-md
                          shadow-[0_8px_30px_rgba(0,0,0,0.35)]
                          transition hover:bg-white/80 text-black font-medium text-xs"
                          >
            <span className="h-2 w-2 ml-1 rounded-full bg-emerald-400 animate-caret-blink duration-300" />
            Best experienced on larger screens
        </div> */}
          </div>
        {/* trust badge */}
        <div className="mb-6 flex justify-center">
          <div className="flex items-center gap-3 md:px-1.5 px-1 py-1 pr-3 w-fit rounded-full
                          border border-white/15
                          bg-white/5 backdrop-blur-md
                          shadow-[0_8px_30px_rgba(0,0,0,0.35)]
                          transition hover:bg-white/10"
          >
            <div className="flex -space-x-2">
              <img
                src="https://i.pravatar.cc/100?img=10"
                className="md:h-6 md:w-6 h-5 w-5 rounded-full border-2 border-[#0d1117] object-cover"
                alt="User"
              />
              <img
                src="https://i.pravatar.cc/100?img=12"
                className="md:h-6 md:w-6 h-5 w-5 rounded-full border-2 border-[#0d1117] object-cover"
                alt="User"
              />
              <img
                src="https://i.pravatar.cc/100?img=13"
                className="md:h-6 md:w-6 h-5 w-5 rounded-full border-2 border-[#0d1117] object-cover"
                alt="User"
              />
              <img
                src="https://i.pravatar.cc/100?img=1"
                className="md:h-6 md:w-6 h-5 w-5 rounded-full border-2 border-[#0d1117] object-cover"
                alt="User"
              />
            </div>

            <div className="text-neutral-300 text-xs sm:text-sm font-medium whitespace-nowrap">
              <span className="text-white font-semibold">1k+</span>{" "}
              developers saving & sharing snippets
            </div>
          </div>

        </div>

        {/* headline */}
        <h1 className="mx-auto max-w-5xl text-balance text-3xl font-bold leading-tight tracking-tight text-white sm:text-7xl">
          Stop losing code snippets.
          <br />
          Save them in{" "}
          <span className="relative inline-block px-1">
            <span className="relative z-0 text-white">minutes</span>
            <span aria-hidden="true" className="absolute inset-x-0 top-1/2 translate-y-1/2 h-1 md:h-1.5 bg-red-500"> </span>
          </span>{" "}
          <span className="text-emerald-400">seconds</span>.
        </h1>

        {/* subheading */}
        <p className="mx-auto mt-6 max-w-2xl text-base leading-5 md:leading-relaxed text-neutral-400 sm:text-lg">
          Save, tag, and reuse your best code snippets.
          <br />
          Built for developers who hate digging through old repos and notes.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/explore">
            <Button
              size="lg"
              className="cursor-pointer rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 px-8 py-6 text-base font-semibold text-[#0b0f0e] text-white hover:text-white shadow-lg shadow-emerald-500/30"
            >
              Start saving snippets
            </Button>
          </Link>
          <Link href="/#demo">
            <Button
              size="lg"
              variant="outline"
              className="cursor-pointer rounded-xl border-white/15 bg-transparent px-8 py-6 text-base text-white hover:bg-white/5 hover:text-white"
            >
              Explore examples
            </Button>
          </Link>
        </div>

        {/* reassurance */}
        <p className="mt-4 text-sm text-neutral-400">
          Free to get started • No credit card required
        </p>
      </div>
    </section>
  );
}
