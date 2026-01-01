"use client";

import { getSupabaseBrowserClient } from "@/lib/supabase/browser-client";
import { useEffect, useState } from "react";
import { User } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";

export default function AuthPage({ user }: { user: User | null }) {
  const supabase = getSupabaseBrowserClient();
  const [mode, setMode] = useState<"signup" | "signin">("signup");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const [currentUser, setCurrentUser] = useState<User | null>(user);

  const router = useRouter();

  // Keep session reactive
  useEffect(() => {
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => setCurrentUser(session?.user ?? null)
    );
    return () => listener.subscription.unsubscribe();
  }, []);

  // Email/Password Handler
  async function handleEmailAuth(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (mode === "signup") {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: { emailRedirectTo: `${window.location.origin}/` },
      });
      setStatus(error ? error.message : "Check your inbox to confirm your email.");
    } else {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      setStatus(error ? error.message : "Signed in successfully");
      if (!error) router.push("/");
    }
  }

  // GitHub Handler
  async function handleGithubLogin() {
    await supabase.auth.signInWithOAuth({
      provider: "github",
      options: { redirectTo: window.location.origin },
    });
  }

  async function handleLogout() {
    await supabase.auth.signOut();
    setCurrentUser(null);
  }

  return (
    <div className="max-w-lg mx-auto mt-20 space-y-10 text-white">

      {/* -------- AUTH FORM -------- */}
      {!currentUser && (
        <form
          onSubmit={handleEmailAuth}
          className="relative overflow-hidden rounded-[32px] border border-emerald-500/30 bg-gradient-to-br from-[#05130d] via-[#04100c] to-[#0c2a21] p-8 shadow-[0_35px_90px_rgba(2,6,23,0.65)]"
        >
          <div className="absolute inset-x-8 top-6 flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.3em] text-emerald-300/80">
            <span>{mode === "signup" ? "Create Account" : "Sign In"}</span>
          </div>

          <div className="flex justify-between mt-8">
            {["signup", "signin"].map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => setMode(m as "signup" | "signin")}
                className={`px-4 py-1 rounded-full text-sm font-semibold ${mode === m
                    ? "bg-emerald-500/40 text-white"
                    : "bg-white/10 text-slate-300"
                  }`}
              >
                {m === "signup" ? "Sign Up" : "Sign In"}
              </button>
            ))}
          </div>

          <div className="mt-6 space-y-4">
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="you@email.com"
              required
              className="w-full rounded-2xl border border-white/10 bg-[#0b1b18] px-3 py-3"
            />
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="Password"
              required
              className="w-full rounded-2xl border border-white/10 bg-[#0b1b18] px-3 py-3"
            />
          </div>

          <button className="w-full mt-6 rounded-full bg-emerald-500 py-3 font-semibold">
            {mode === "signup" ? "Create account" : "Sign in"}
          </button>

          {status && <p className="mt-3 text-center text-sm text-emerald-300">{status}</p>}
        </form>
      )}

      {/* -------- GITHUB BUTTON -------- */}
      {!currentUser && (
        <button
          onClick={handleGithubLogin}
          className="w-full rounded-full bg-[#1a73e8] py-3 font-semibold shadow-lg"
        >
          Continue with GitHub
        </button>
      )}

      {/* -------- SESSION PANEL -------- */}
      {currentUser && (
        <div className="rounded-[28px] border border-white/10 bg-white/5 p-7 text-slate-200 backdrop-blur">
          <h3 className="text-lg font-semibold">Logged in as:</h3>
          <p className="mt-1 text-sm text-slate-300">{currentUser.email}</p>
          <button
            onClick={handleLogout}
            className="mt-5 w-full rounded-full bg-red-500 py-2.5 font-semibold"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
