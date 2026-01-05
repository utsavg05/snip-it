// import { Button } from "@/components/ui/button";
// import { CoolMode } from "@/components/ui/cool-mode";
// import { RainbowButton } from "@/components/ui/rainbow-button";
// import Link from "next/link";

// const testimonials = [
//     {
//         name: "Aman Verma",
//         role: "Frontend Developer",
//         quote:
//             "I stopped dumping snippets into random Notion pages. This finally feels built for developers.",
//     },
//     {
//         name: "Riya Sharma",
//         role: "Full Stack Engineer",
//         quote:
//             "The dashboard is clean and fast. I save small utilities here and reuse them all the time.",
//     },
//     {
//         name: "Kunal Mehta",
//         role: "Backend Developer",
//         quote:
//             "Sharing snippets with teammates using links is surprisingly useful. Simple and effective.",
//     },
// ];

// export default function Testimonials() {
//     return (
//         <section className="relative border-white/5 bg-[#0b0f0e]">
//             <div className="mx-auto max-w-6xl px-6 py-24">
//                 <div className="mb-14 text-center">
//                     <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400">
//                         Testimonials
//                     </p>
//                     <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
//                         Loved by developers
//                     </h2>
//                 </div>

//                 <div className="grid gap-8 md:grid-cols-3">
//                     {testimonials.map((t, i) => (
//                         <div
//                             key={i}
//                             className="rounded-2xl border border-white/10 bg-white/5 p-6"
//                         >
//                             <p className="text-slate-300">“{t.quote}”</p>
//                             <div className="mt-4">
//                                 <p className="font-semibold text-white">{t.name}</p>
//                                 <p className="text-sm text-slate-400">{t.role}</p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             <div className="mx-auto max-w-6xl px-6 pb-10 text-center">
//                 <CoolMode>
//                 <Link href="https://x.com/0xdevug" target="_blank" rel="noopener noreferrer">
//                     {/* <Button
//                         size="lg"
//                         variant="outline"
//                         className="text-center cursor-pointer rounded-none border-white/15 px-8 py-6 text-base text-black bg-white hover:bg-white/80"
//                     >
//                         Follow us on X (formerly Twitter)
//                     </Button> */}
//                     <RainbowButton variant={"outline"}>Follow us on X (formerly Twitter)</RainbowButton>
//                 </Link>
//                 </CoolMode>
//             </div>
//         </section>
//     );
// }



import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";
import { reviews } from "@/content/review";

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  body,
}: {
  img: string;
  name: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-50/[.1] ",
        // dark styles
        "dark:border-gray-400/[.1] "
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width={32} height={32} alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium ">
            {name}
          </figcaption>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="w-full px-6 md:px-20 py-24 relative"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight pb-1">
          Real Voices,
          <span className="text-primary"> Real Impact </span>
        </h2>
        <p className="text-gray-400 text-lg">
          Discover how Smriti AI helps learners retain knowledge longer and
          faster.
        </p>
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
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-linear-to-r from-foreground"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-foreground"></div>
      </div>
    </section>
  );
}