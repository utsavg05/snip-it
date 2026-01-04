
// import { createSupabaseServerClient } from "@/lib/supabase/server-client";
// import Image from "next/image";
// import Link from "next/link";

// export default async function Navbar() {
//   const supabase = await createSupabaseServerClient();
//       const { data: { user } } = await supabase.auth.getUser();
//       console.log("USER IN NAVBAR:", user);

//   return (
//     <nav className="w-full flex justify-between px-14 py-6 border-b">
//       <p className="font-bold">Snip-It</p>
//       {user ? (
//         <div className="flex gap-4 items-center">
//           <Link href="/auth">
//           {user.user_metadata?.avatar_url ? (
//             <Image
//               src={user.user_metadata.avatar_url}
//               width={36}
//               height={36}
//               alt="User avatar"
//               className="rounded-full border border-white/10"
//             />
//           ) : (
//             <span >{user.email}</span>
//           )}
//           </Link>
//         </div>
//       ) : (
//         <Link href="/auth" className="text-blue-600">Login</Link>
//       )}
//     </nav>
//   );
// }



import { createSupabaseServerClient } from "@/lib/supabase/server-client";
import Image from "next/image";
import Link from "next/link";
import UserMenu from "./UserMenu";
import { CoolMode } from "@/components/ui/cool-mode";

export default async function Navbar() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#0b0f0e]/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">
        {/* Logo */}
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Snip<span className="text-emerald-400">-</span>It
        </Link>

        {/* Links */}
        <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          <Link href="#features" className="hover:text-white">
            Features
          </Link>
          <Link href="/pricing" className="hover:text-white">
            Pricing
          </Link>
          <Link href="#examples" className="hover:text-white">
            Examples
          </Link>
          <Link href="/dashboard" className="hover:text-white">
            Dashboard
          </Link>
        </div>

        {/* Right side */}
        {/* {user ? (
          <Link href="/auth" className="group relative">
            {user.user_metadata?.avatar_url ? (
              <Image
                src={user.user_metadata.avatar_url}
                width={36}
                height={36}
                alt="User avatar"
                className="rounded-full border border-white/10 transition group-hover:ring-2 group-hover:ring-emerald-400/40"
              />
            ) : (
              // <span className="text-sm text-slate-300">{user.email}</span>
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/20 text-sm font-semibold text-emerald-400">
                {user.email?.[0]?.toUpperCase()}
              </div>

            )}
          </Link>
        ) : (
          <Link
            href="/auth"
            className="rounded-none bg-emerald-500 px-5 py-2 text-sm font-semibold text-black transition hover:bg-emerald-400"
          >
            Login
          </Link>
        )} */}

        {user ? (
          <UserMenu user={user} />
        ) : (
          <CoolMode>
          <Link
            href="/auth"
            className="bg-emerald-500 px-5 py-2 text-sm font-semibold text-black hover:bg-emerald-400"
          >
            Login
          </Link>
          </CoolMode>
        )}
      </div>
    </nav>
  );
}
