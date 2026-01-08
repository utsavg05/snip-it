// "use client";

// import { useState, useRef, useEffect } from "react";
// import Image from "next/image";
// import { getSupabaseBrowserClient } from "@/lib/supabase/browser-client";

// export default function UserMenu({ user }: { user: any }) {
//   const [open, setOpen] = useState(false);
//   const supabase = getSupabaseBrowserClient();
//   const ref = useRef<HTMLDivElement>(null);

//   // Close on outside click
//   useEffect(() => {
//     function handleClickOutside(e: MouseEvent) {
//       if (ref.current && !ref.current.contains(e.target as Node)) {
//         setOpen(false);
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   async function handleLogout() {
//     await supabase.auth.signOut();
//     window.location.href = "/";
//   }

//   return (
//     <div ref={ref} className="relative">
//       {/* Avatar Button */}
//       <button
//         onClick={() => setOpen(!open)}
//         className="rounded-full transition focus:outline-none"
//       >
//         {user.user_metadata?.avatar_url ? (
//           <Image
//             src={user.user_metadata.avatar_url}
//             width={36}
//             height={36}
//             alt="User avatar"
//             className="rounded-full border border-white/10 hover:ring-2 hover:ring-emerald-400/40"
//           />
//         ) : (
//           <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/20 text-sm font-semibold text-emerald-400">
//             {user.email?.[0]?.toUpperCase()}
//           </div>
//         )}
//       </button>

//       {/* Dropdown */}
//       {open && (
//         <div className="absolute right-0 mt-3 w-56 rounded-2xl border border-white/10 bg-[#0b0f0e] p-3 shadow-xl backdrop-blur">
//           <p className="truncate px-3 py-2 text-sm text-slate-300">
//             {user.email}
//           </p>

//           <div className="my-2 h-px bg-white/10" />

//           <button
//             onClick={handleLogout}
//             className="w-full cursor-pointer rounded-xl px-3 py-2 text-left text-sm font-medium text-red-400 hover:bg-white/5"
//           >
//             Log out
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }



"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { getSupabaseBrowserClient } from "@/lib/supabase/browser-client";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

export default function UserMenu({ user }: { user: any }) {
  const [open, setOpen] = useState(false);
  const supabase = getSupabaseBrowserClient();
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  async function handleLogout() {
    await supabase.auth.signOut();
    window.location.href = "/";
  }

  const name =
    user.user_metadata?.name ||
    user.user_metadata?.full_name ||
    user.email?.split("@")[0];

  return (
    <div ref={ref} className="relative">
      {/* Avatar Button */}
      <button
        onClick={() => setOpen(!open)}
        className="rounded-full transition focus:outline-none"
      >
        {user.user_metadata?.avatar_url ? (
          <Image
            src={user.user_metadata.avatar_url}
            width={36}
            height={36}
            alt="User avatar"
            className="rounded-full border border-white/10 hover:ring-2 hover:ring-emerald-400/40"
          />
        ) : (
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/20 text-sm font-semibold text-emerald-400">
            {user.email?.[0]?.toUpperCase()}
          </div>
        )}
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-4 w-72 rounded-2xl border border-white/10 bg-[#0b0f0e] p-4 shadow-2xl backdrop-blur">
          {/* Greeting */}
          <p className="mb-3 text-sm text-slate-300">
            Hi{" "}
            <span className="font-medium text-white">
              {name}
            </span>{" "}
            👋
          </p>

          {/* User info */}
          <div className="flex items-center gap-3 rounded-xl bg-white/5 p-3">
            {user.user_metadata?.avatar_url ? (
              <Image
                src={user.user_metadata.avatar_url}
                width={40}
                height={40}
                alt="User avatar"
                className="rounded-full"
              />
            ) : (
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20 text-sm font-semibold text-emerald-400">
                {user.email?.[0]?.toUpperCase()}
              </div>
            )}

            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-white">
                {name}
              </p>
              <p className="truncate text-xs text-slate-400">
                {user.email}
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="my-4 h-px bg-white/10" />

          {/* Actions */}
          <Button
            variant="destructive"
            className="w-full justify-start gap-2 cursor-pointer"
            onClick={handleLogout}
          >
            <LogOut className="h-4 w-4" />
            Log out
          </Button>
        </div>
      )}
    </div>
  );
}
