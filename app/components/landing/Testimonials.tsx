import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";
import { reviews } from "@/content/review";
import Link from "next/link";
import { RainbowButton } from "@/components/ui/rainbow-button";

const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string
  name: string
  username: string
  body: string
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-56 sm:w-64 cursor-pointer overflow-hidden rounded-xl p-4",
        "bg-white/[0.04] hover:bg-white/[0.07]",
        "backdrop-blur-sm transition-shadow",
        "shadow-[0_0_0_1px_rgba(255,255,255,0.04)]",
        "hover:shadow-[0_0_0_1px_rgba(255,255,255,0.08)]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm leading-relaxed">{body}</blockquote>
    </figure>
  )
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="w-full px-4 sm:px-6 md:px-12 py-16 sm:py-20 md:py-24 relative bg-[#0b0f0e]"
    >
      <div className="text-center mb-12 sm:mb-14 md:mb-16">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400">
          Testimonials
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white px-4">
          Loved by developers
        </h2>
      </div>

      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        
        {/* Responsive gradient overlays */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 sm:w-1/4 bg-gradient-to-r from-[#0b0f0e] via-[#0b0f0e]/80 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 sm:w-1/4 bg-gradient-to-l from-[#0b0f0e] via-[#0b0f0e]/80 to-transparent" />
      </div>

      <div className="mx-auto mt-12 sm:mt-14 md:mt-16 max-w-6xl px-4 sm:px-6 text-center">
        <Link href="https://x.com/0xdevug" target="_blank" rel="noopener noreferrer">
          <RainbowButton variant={"outline"} className="w-full sm:w-auto">
            Follow us on X
          </RainbowButton>
        </Link>
      </div>
    </section>
  );
}