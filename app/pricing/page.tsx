import { Button } from "@/components/ui/button";
import { createSupabaseServerClient } from "@/lib/supabase/server-client";
import Link from "next/link";

export default async function Pricing() {

  const supabase = await createSupabaseServerClient();
  const {data: {user}} = await supabase.auth.getUser();

  return (
    <section
      id="pricing"
      className="relative border-white/5 bg-[#0b0f0e]"
    >
      <div className="mx-auto max-w-6xl px-6 py-24">
        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400">
            Pricing
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Simple pricing. No surprises.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-400">
            Start for free. Upgrade once when you need more power.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Free Plan */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold text-white">Free</h3>
            <p className="mt-2 text-slate-400">
              Everything you need to get started.
            </p>

            <div className="mt-6 flex items-end gap-1">
              <span className="text-4xl font-bold text-white">$0</span>
              <span className="text-slate-400">forever</span>
            </div>

            <ul className="mt-8 space-y-3 text-slate-300">
              <li><span className="text-emerald-400">✓</span> Create upto 50 snippets</li>
              <li><span className="text-emerald-400">✓</span> Private dashboard</li>
              <li><span className="text-emerald-400">✓</span> Tags & languages</li>
              <li><span className="text-emerald-400">✓</span> Copy snippets instantly</li>
              <li><span className="text-emerald-400">✓</span> Public share links</li>
              <li><span className="text-emerald-400">✓</span> Community support</li>
            </ul>

          {
            user ? (
              <Button disabled className="mt-8 w-full rounded-full bg-white/10 text-white hover:bg-white/20">
              Your Current Plan
            </Button>
            ) : (
              <Link href="/auth">
              <Button className="mt-8 w-full rounded-full bg-white/10 text-white hover:bg-white/20">
              Get started for free
            </Button>
            </Link>
            )
          }
            
          </div>

          {/* Pro Plan */}
          <div className="relative rounded-3xl border border-emerald-400/40 bg-gradient-to-br from-emerald-500/10 to-white/5 p-8">
            <span className="absolute right-6 top-6 rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-400">
              Coming soon
            </span>

            <h3 className="text-xl font-semibold text-white">
              Pro <span className="text-emerald-400">(Lifetime)</span>
            </h3>
            <p className="mt-2 text-slate-300">
              For developers who live in snippets.
            </p>

            <div className="mt-6 flex items-end gap-1">
              <span className="text-4xl font-bold text-white">$20</span>
              <span className="text-slate-400">one-time</span>
            </div>

            <ul className="mt-8 space-y-3 text-slate-200">
              <li><span className="text-emerald-400">✓</span> Unlimited snippets</li>
              <li><span className="text-emerald-400">✓</span> Advanced search & filters</li>
              <li><span className="text-emerald-400">✓</span> Favorites & bookmarks</li>
              <li><span className="text-emerald-400">✓</span> Snippet analytics</li>
              <li><span className="text-emerald-400">✓</span> Priority support</li>
              <li><span className="text-emerald-400">✓</span> Early access to new features</li>
            </ul>

            <Button
              disabled
              className="mt-8 w-full rounded-full bg-emerald-500 text-black opacity-60"
            >
              Coming soon
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
