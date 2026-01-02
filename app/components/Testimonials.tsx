import { Button } from "@/components/ui/button";
import Link from "next/link";

const testimonials = [
    {
        name: "Aman Verma",
        role: "Frontend Developer",
        quote:
            "I stopped dumping snippets into random Notion pages. This finally feels built for developers.",
    },
    {
        name: "Riya Sharma",
        role: "Full Stack Engineer",
        quote:
            "The dashboard is clean and fast. I save small utilities here and reuse them all the time.",
    },
    {
        name: "Kunal Mehta",
        role: "Backend Developer",
        quote:
            "Sharing snippets with teammates using links is surprisingly useful. Simple and effective.",
    },
];

export default function Testimonials() {
    return (
        <section className="relative border-white/5 bg-[#0b0f0e]">
            <div className="mx-auto max-w-6xl px-6 py-24">
                <div className="mb-14 text-center">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400">
                        Testimonials
                    </p>
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                        Loved by developers
                    </h2>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {testimonials.map((t, i) => (
                        <div
                            key={i}
                            className="rounded-2xl border border-white/10 bg-white/5 p-6"
                        >
                            <p className="text-slate-300">“{t.quote}”</p>
                            <div className="mt-4">
                                <p className="font-semibold text-white">{t.name}</p>
                                <p className="text-sm text-slate-400">{t.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mx-auto max-w-6xl px-6 pb-10 text-center">
                <Link href="https://x.com/0xdevug" target="_blank" rel="noopener noreferrer">
                    <Button
                        size="lg"
                        variant="outline"
                        className="text-center cursor-pointer rounded-none border-white/15 px-8 py-6 text-base text-black bg-white hover:bg-white/80"
                    >
                        Follow us on X (formerly Twitter)
                    </Button>
                </Link>
            </div>
        </section>
    );
}
