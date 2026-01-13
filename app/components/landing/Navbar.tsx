// import { createSupabaseServerClient } from "@/lib/supabase/server-client";
// import Link from "next/link";
// import UserMenu from "./UserMenu";
// import { CoolMode } from "@/components/ui/cool-mode";
// import { Codesandbox, Lock } from "lucide-react";

// export default async function Navbar() {
//   const supabase = await createSupabaseServerClient();
//   const {
//     data: { user },
//   } = await supabase.auth.getUser();

//   return (
//     <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#0b0f0e]/70 backdrop-blur">
//       <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">
//         {/* Logo */}
//         <div className="flex items-center w-1/5 shrink-0">
//           <Link href="/" className="text-xl flex items-center justify-center gap-1.5 font-semibold tracking-tight">
//             {/* <CopySlash className="text-emerald-400" size={32} /> */}
//             <Codesandbox className="text-emerald-400" size={28} />
//             <span className="text-white font-bold">SnipHUB</span>
//           </Link>
//         </div>

//         {/* Links */}
//         <div className="hidden items-center gap-10 text-sm text-slate-300 md:flex mr-30">
//           <Link href="/" className="hover:text-emerald-400 transition-all duration-300 text-md font-semibold">
//             Home
//           </Link>
//           <Link href="#features" className="hover:text-emerald-400 transition-all duration-300 text-md font-semibold">
//             Features
//           </Link>
//           <Link href="/pricing" className="hover:text-emerald-400 transition-all duration-300 text-md font-semibold">
//             Pricing
//           </Link>
//           <Link href="#examples" className="hover:text-emerald-400 transition-all duration-300 text-md font-semibold">
//             Examples
//           </Link>
//           <Link href="/dashboard" className={`hover:text-emerald-400 transition-all duration-300 text-md font-semibold ${user ? "block" : "hidden"}`}>
//             Dashboard
//           </Link>
//           <Link href="/explore" className={`hover:text-emerald-400 transition-all duration-300 text-md font-semibold ${user ? "block" : "hidden"}`}>
//             Explore
//           </Link>
//         </div>

//         {user ? (
//           <UserMenu user={user} />
//         ) : (
//           <CoolMode>
//             <Link href="/auth">
//             <button className="cursor-pointer flex flex-row items-center gap-1 bg-emerald-500 rounded-xl px-5 py-2 text-sm font-semibold text-black hover:bg-emerald-400">
//               <span>Login</span>
//               <Lock size={18} className="text-black font-mono" />
//             </button>
//             </Link>
//           </CoolMode>
//         )}
//       </div>
//     </nav>
//   );
// }




// import { createSupabaseServerClient } from "@/lib/supabase/server-client";
// import Link from "next/link";
// import UserMenu from "./UserMenu";
// import { CoolMode } from "@/components/ui/cool-mode";
// import { Codesandbox, Lock } from "lucide-react";
// import MobileNavClient from "../navigation/MobileNavClient";

// export default async function Navbar() {
//   const supabase = await createSupabaseServerClient();
//   const {
//     data: { user },
//   } = await supabase.auth.getUser();

//   return (
//     <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#0b0f0e]/70 backdrop-blur">
//       <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 md:px-8">

//         {/* Logo (always visible) */}
//         <Link
//           href="/"
//           className="flex items-center gap-1.5 text-xl font-semibold tracking-tight"
//         >
//           <Codesandbox className="text-emerald-400" size={28} />
//           <span className="font-bold text-white">SnipHUB</span>
//         </Link>

//         {/* Desktop links (UNCHANGED) */}
//         <div className="hidden items-center gap-10 text-sm text-slate-300 md:flex">
//           <Link href="/" className="font-semibold hover:text-emerald-400">
//             Home
//           </Link>
//           <Link href="#features" className="font-semibold hover:text-emerald-400">
//             Features
//           </Link>
//           <Link href="/pricing" className="font-semibold hover:text-emerald-400">
//             Pricing
//           </Link>
//           <Link href="#examples" className="font-semibold hover:text-emerald-400">
//             Examples
//           </Link>

//           {user && (
//             <>
//               <Link href="/dashboard" className="font-semibold hover:text-emerald-400">
//                 Dashboard
//               </Link>
//               <Link href="/explore" className="font-semibold hover:text-emerald-400">
//                 Explore
//               </Link>
//             </>
//           )}
//         </div>

//         {/* Right side */}
//         <div className="flex items-center gap-3">
//           {/* Desktop auth (UNCHANGED) */}
//           <div className="hidden md:block">
//             {user ? (
//               <UserMenu user={user} />
//             ) : (
//               <CoolMode>
//                 <Link href="/auth">
//                   <button className="cursor-pointer flex items-center gap-1 rounded-xl bg-emerald-500 px-5 py-2 text-sm font-semibold text-[#0b0f0e] hover:bg-emerald-400">
//                     Login
//                     <Lock size={18} />
//                   </button>
//                 </Link>
//               </CoolMode>
//             )}
//           </div>

//           {/* Mobile controls */}
//           <div className="md:hidden flex items-center gap-2">
//             {user && <UserMenu user={user} />}
//             <MobileNavClient isAuthenticated={!!user} />
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }




import { createSupabaseServerClient } from "@/lib/supabase/server-client";
import Link from "next/link";
import UserMenu from "./UserMenu";
import { CoolMode } from "@/components/ui/cool-mode";
import { Codesandbox, Lock } from "lucide-react";
import MobileNavClient from "../navigation/MobileNavClient";

export default async function Navbar() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <nav className="fixed inset-x-0 top-0 z-[60] border-b border-white/5 bg-[#0b0f0e] backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 md:px-8">

        {/* Logo (always visible) */}
        <Link
          href="/"
          className="flex items-center gap-1.5 text-xl font-semibold tracking-tight"
        >
          <Codesandbox className="text-emerald-400" size={28} />
          <span className="font-bold text-white">SnipHUB</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-10 text-sm text-neutral-300 md:flex">
          <Link href="/" className="font-semibold hover:text-emerald-400">
            Home
          </Link>
          <Link href="#features" className="font-semibold hover:text-emerald-400">
            Features
          </Link>
          <Link href="/pricing" className="font-semibold hover:text-emerald-400">
            Pricing
          </Link>
          <Link href="#demo" className="font-semibold hover:text-emerald-400">
            Demo
          </Link>

          {user && (
            <>
              <Link href="/dashboard" className="font-semibold hover:text-emerald-400">
                Dashboard
              </Link>
              <Link href="/explore" className="font-semibold hover:text-emerald-400">
                Explore
              </Link>
            </>
          )}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Desktop auth */}
          <div className="hidden md:block">
            {user ? (
              <UserMenu user={user} />
            ) : (
              <CoolMode>
                <Link href="/auth">
                  <button className="cursor-pointer flex items-center gap-1 rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-600 px-5 py-2 text-sm font-semibold text-[#0b0f0e] text-white hover:bg-emerald-400">
                    Login
                    {/* <Lock size={18} /> */}
                  </button>
                </Link>
              </CoolMode>
            )}
          </div>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-2">
            {user && <UserMenu user={user} />}
            <MobileNavClient isAuthenticated={!!user} />
          </div>
        </div>
      </div>
    </nav>
  );
}