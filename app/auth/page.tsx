// "use client";

// import { getSupabaseBrowserClient } from "@/lib/supabase/browser-client";
// import { useEffect, useState } from "react";
// import { User } from "@supabase/supabase-js";
// import { useRouter } from "next/navigation";
// import Image from "next/image";

// export default function AuthPage({ user }: { user: User | null }) {
//   const supabase = getSupabaseBrowserClient();
//   const [mode, setMode] = useState<"signup" | "signin">("signup");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [status, setStatus] = useState("");
//   const [currentUser, setCurrentUser] = useState<User | null>(user);

//   const router = useRouter();

//   // Keep session reactive
//   useEffect(() => {
//     async function loadSession() {
//       const {data} = await supabase.auth.getSession();
//       setCurrentUser(data.session?.user ?? null);
//     }
//     loadSession();

//     const { data: listener } = supabase.auth.onAuthStateChange(
//       (_event, session) => { setCurrentUser(session?.user ?? null) }
//     );
//     return () => listener.subscription.unsubscribe();
//   }, [supabase]);

//   // Email/Password Handler
//   async function handleEmailAuth(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault();

//     if (mode === "signup") {
//       const { error } = await supabase.auth.signUp({
//         email,
//         password,
//         options: { emailRedirectTo: `${window.location.origin}/` },
//       });
//       setStatus(error ? error.message : "Check your inbox to confirm your email.");
//     } else {
//       const { error } = await supabase.auth.signInWithPassword({
//         email,
//         password,
//       });
//       setStatus(error ? error.message : "Signed in successfully");
//     }
//   }

//   // GitHub Handler
//   async function handleGithubLogin() {
//     await supabase.auth.signInWithOAuth({
//       provider: "github",
//       options: {
//         redirectTo: `${window.location.origin}/auth`,
//         skipBrowserRedirect: false,
//       },
//     });
//   }

//   async function handleLogout() {
//     await supabase.auth.signOut();
//     setCurrentUser(null);
//   }

//   return (
//     <div className="max-w-lg mx-auto mt-20 space-y-10 text-white">

//       {/* -------- AUTH FORM -------- */}
//       {!currentUser && (
//         <form
//           onSubmit={handleEmailAuth}
//           className="relative overflow-hidden rounded-[32px] border border-emerald-500/30 bg-gradient-to-br from-[#05130d] via-[#04100c] to-[#0c2a21] p-8 shadow-[0_35px_90px_rgba(2,6,23,0.65)]"
//         >
//           <div className="absolute inset-x-8 top-6 flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.3em] text-emerald-300/80">
//             <span>{mode === "signup" ? "Create Account" : "Sign In"}</span>
//           </div>

//           <div className="flex justify-between mt-8">
//             {["signup", "signin"].map((m) => (
//               <button
//                 key={m}
//                 type="button"
//                 onClick={() => setMode(m as "signup" | "signin")}
//                 className={`px-4 py-1 rounded-full text-sm font-semibold ${mode === m
//                   ? "bg-emerald-500/40 text-white"
//                   : "bg-white/10 text-slate-300"
//                   }`}
//               >
//                 {m === "signup" ? "Sign Up" : "Sign In"}
//               </button>
//             ))}
//           </div>

//           <div className="mt-6 space-y-4">
//             <input
//               type="email"
//               onChange={(e) => setEmail(e.target.value)}
//               value={email}
//               placeholder="you@email.com"
//               required
//               className="w-full rounded-2xl border border-white/10 bg-[#0b1b18] px-3 py-3"
//             />
//             <input
//               type="password"
//               onChange={(e) => setPassword(e.target.value)}
//               value={password}
//               placeholder="Password"
//               required
//               className="w-full rounded-2xl border border-white/10 bg-[#0b1b18] px-3 py-3"
//             />
//           </div>

//           <button className="w-full mt-6 rounded-full bg-emerald-500 py-3 font-semibold">
//             {mode === "signup" ? "Create account" : "Sign in"}
//           </button>

//           {status && <p className="mt-3 text-center text-sm text-emerald-300">{status}</p>}
//         </form>
//       )}

//       {/* -------- GITHUB BUTTON -------- */}
//       {!currentUser && (
//         <button
//           onClick={handleGithubLogin}
//           className="flex items-center justify-center gap-2 w-full rounded-full bg-[#1a73e8] py-3 font-semibold shadow-lg"
//         >
//           Continue with GitHub
//           <Image
//             src="/github-icon.svg"
//             alt="Github logo"
//             width={100}
//             height={30}
//             className="h-6 w-auto  invert"
//           />
//         </button>
//       )}

//       {/* -------- SESSION PANEL -------- */}
//       {currentUser && (
//         <div className="rounded-[28px] border border-white/10 bg-white/5 p-7 text-slate-200 backdrop-blur">
//           <h3 className="text-lg font-semibold">Logged in as:</h3>
//           <p className="mt-1 text-sm text-slate-300">{currentUser.email}</p>
//           <button
//             onClick={handleLogout}
//             className="mt-5 w-full rounded-full bg-red-500 py-2.5 font-semibold"
//           >
//             Logout
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }





// "use client";

// import { getSupabaseBrowserClient } from "@/lib/supabase/browser-client";
// import { useEffect, useState } from "react";
// import { User } from "@supabase/supabase-js";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { ShineBorder } from "@/components/ui/shine-border";
// import { ToastContainer, toast } from 'react-toastify';

// export default function AuthPage({ user }: { user: User | null }) {
//   const supabase = getSupabaseBrowserClient();
//   const [mode, setMode] = useState<"signup" | "signin">("signin");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [status, setStatus] = useState("");
//   const [currentUser, setCurrentUser] = useState<User | null>(user);

//   const router = useRouter();
  
//   useEffect(() => {
//     async function loadSession() {
//       const { data } = await supabase.auth.getSession();
//       setCurrentUser(data.session?.user ?? null);
//     }
//     loadSession();

//     const { data: listener } = supabase.auth.onAuthStateChange(
//       (_event, session) => { setCurrentUser(session?.user ?? null) }
//     );
//     return () => listener.subscription.unsubscribe();
//   }, [supabase]);

//   async function handleEmailAuth(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault();

//     if (mode === "signup") {
//       const { error } = await supabase.auth.signUp({
//         email,
//         password,
//         options: { emailRedirectTo: `${window.location.origin}/auth` },
//       });
//       setStatus(
//         error ? error.message : "Check your email to confirm your account."
//       );
//     } else {
//       const { error } = await supabase.auth.signInWithPassword({
//         email,
//         password,
//       });
//       setStatus(error ? error.message : "Signed in successfully.");
//       router.push("/");
//     }
//   }

//   async function handleGithubLogin() {
//     await supabase.auth.signInWithOAuth({
//       provider: "github",
//       options: {
//         redirectTo: `${window.location.origin}/auth/callback`,
//         skipBrowserRedirect: false,
//       },
//     });
//   }

//   async function handleLogout() {
//     await supabase.auth.signOut();
//     setCurrentUser(null);
//   }

//   return (
//     <div className="mx-auto mt-24 max-w-md px-4 text-white">
//       <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
//       <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
//         {/* Header */}
//         <div className="mb-6 text-center">
//           <h2 className="text-2xl font-semibold">
//             {mode === "signup" ? "Create an account" : "Welcome back"}
//           </h2>
//           <p className="mt-1 text-sm text-slate-400">
//             Save and reuse your best code snippets.
//           </p>
//         </div>

//         {/* GitHub */}
//         <button
//           onClick={handleGithubLogin}
//           className="mb-4 flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 py-2.5 text-sm font-semibold hover:bg-white/10"
//         >
//           <Image
//             src="/github-icon.svg"
//             alt="GitHub"
//             width={20}
//             height={20}
//             className="invert"
//           />
//           Continue with GitHub
//         </button>
//         {/* Divider */}
//         <div className="my-4 flex items-center gap-3 text-xs text-slate-400">
//           <div className="h-px flex-1 bg-white/10" />
//           or
//           <div className="h-px flex-1 bg-white/10" />
//         </div>

//         {/* Email form */}
//         <form onSubmit={handleEmailAuth} className="space-y-4">
//           <input
//             type="email"
//             placeholder="you@email.com"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             className="w-full rounded-xl border border-white/10 bg-[#0b1b18] px-4 py-3 text-sm outline-none focus:border-emerald-400"
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             className="w-full rounded-xl border border-white/10 bg-[#0b1b18] px-4 py-3 text-sm outline-none focus:border-emerald-400"
//           />

//           <button className="w-full rounded-full bg-emerald-500 py-3 text-sm font-semibold text-black hover:bg-emerald-400">
//             {mode === "signup" ? "Create account" : "Sign in"}
//           </button>
//         </form>

//         {/* Toggle */}
//         <p className="mt-4 text-center text-sm text-slate-400">
//           {mode === "signup" ? "Already have an account?" : "New here?"}{" "}
//           <button
//             onClick={() =>
//               setMode(mode === "signup" ? "signin" : "signup")
//             }
//             className="font-medium text-emerald-400 hover:underline"
//           >
//             {mode === "signup" ? "Sign in" : "Create account"}
//           </button>
//         </p>

//         {status && (
//           <p className="mt-4 text-center text-sm text-emerald-300">
//             {status}
//           </p>
//         )}
//       </div>

//       {/* -------- SESSION PANEL -------- */}
//       {currentUser && (
//         <div className="mt-5 rounded-[28px] border border-white/10 bg-white/5 p-7 text-slate-200 backdrop-blur">
//           <h3 className="text-lg font-semibold">Logged in as:</h3>
//           <p className="mt-1 text-sm text-slate-300">{currentUser.email}</p>
//           <button
//             onClick={handleLogout}
//             className="mt-5 w-full rounded-full bg-red-500 py-2.5 font-semibold"
//           >
//             Logout
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }




"use client";

import { getSupabaseBrowserClient } from "@/lib/supabase/browser-client";
import { useEffect, useState } from "react";
import { User } from "@supabase/supabase-js";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ShineBorder } from "@/components/ui/shine-border";
import { toast } from "react-toastify";
import { Eye, EyeOff } from "lucide-react";

export default function AuthPage({ user }: { user: User | null }) {
  const supabase = getSupabaseBrowserClient();
  const router = useRouter();

  const [mode, setMode] = useState<"signup" | "signin">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [currentUser, setCurrentUser] = useState<User | null>(user);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
  const url = new URL(window.location.href);

  if (url.searchParams.get("auth") === "success") {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session?.user) {
        setCurrentUser(data.session.user);
        toast.success("Signed in successfully");
        router.replace("/");
      }
    });
  }
}, [supabase, router]);


  async function handleEmailAuth(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (loading) return;

    setLoading(true);

    try {
      if (mode === "signup") {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${window.location.origin}/auth/callback`,
          },
        });

        if (error) {
          toast.error(error.message);
        } else {
          toast.info("Check your email to confirm your account");
        }
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) {
          toast.error(error.message);
        }
        // ❗ No redirect here — handled by auth listener
      }
    } finally {
      setLoading(false);
    }
  }

  async function handleGithubLogin() {
    await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });
    toast.success("Signed in successfully");
  }

  async function handleLogout() {
    await supabase.auth.signOut();
    setCurrentUser(null);
  }

  useEffect(() => {
  const {
    data: { subscription },
  } = supabase.auth.onAuthStateChange((event, session) => {
    if (event === "SIGNED_IN" && session?.user) {
      setCurrentUser(session.user);
      toast.success("Signed in successfully");
      router.replace("/");
      router.refresh();
    }
  });

  return () => subscription.unsubscribe();
}, [supabase, router]);


  return (
    <>

      <div className="mx-auto w-screen max-h-screen mt-24 max-w-md px-4 text-white">
        <div className="relative overflow-hidden  rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />

          {/* Header */}
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-semibold">
              {mode === "signup" ? "Create an account" : "Welcome back"}
            </h2>
            <p className="mt-1 text-sm text-slate-400">
              Save and reuse your best code snippets.
            </p>
          </div>

          {/* GitHub OAuth */}
          <button
            onClick={handleGithubLogin}
            className="mb-4 flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 py-2.5 text-sm font-semibold hover:bg-white/10"
          >
            <Image
              src="/github-icon.svg"
              alt="GitHub"
              width={20}
              height={20}
              className="invert"
            />
            Continue with GitHub
          </button>

          {/* Divider */}
          <div className="my-4 flex items-center gap-3 text-xs text-slate-400">
            <div className="h-px flex-1 bg-white/10" />
            or
            <div className="h-px flex-1 bg-white/10" />
          </div>

          {/* Email Auth */}
          <form onSubmit={handleEmailAuth} className="space-y-4">
            <input
              type="email"
              placeholder="you@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-xl border border-white/10 bg-[#0b1b18] px-4 py-3 text-sm outline-none focus:border-emerald-400"
            />

          <div className="relative">

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full rounded-xl border border-white/10 bg-[#0b1b18] px-4 py-3 text-sm outline-none focus:border-emerald-400"
              /> 
              <button type="button" onClick={() => setShowPassword(!showPassword)} >
              {showPassword ? (
                <Eye size={16} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-xs cursor-pointer" />
              ) : (
                <EyeOff size={16} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-xs cursor-pointer" />
              )}
              </button>
              </div>


            <button
              disabled={loading}
              className="w-full rounded-full bg-emerald-500 py-3 text-sm font-semibold text-black hover:bg-emerald-400 disabled:opacity-60"
            >
              {mode === "signup" ? "Create account" : "Sign in"}
            </button>
          </form>

          {/* Toggle */}
          <p className="mt-4 text-center text-sm text-slate-400">
            {mode === "signup" ? "Already have an account?" : "New here?"}{" "}
            <button
              onClick={() =>
                setMode(mode === "signup" ? "signin" : "signup")
              }
              className="font-medium text-emerald-400 hover:underline"
            >
              {mode === "signup" ? "Sign in" : "Create account"}
            </button>
          </p>
        </div>

        {/* Session panel (optional / debug) */}
        {currentUser && (
          <div className="mt-5 rounded-[28px] border border-white/10 bg-white/5 p-7 text-slate-200 backdrop-blur">
            <h3 className="text-lg font-semibold">Logged in as:</h3>
            <p className="mt-1 text-sm text-slate-300">
              {currentUser.email}
            </p>
            <button
              onClick={handleLogout}
              className="mt-5 w-full rounded-full bg-red-500 py-2.5 font-semibold"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </>
  );
}
