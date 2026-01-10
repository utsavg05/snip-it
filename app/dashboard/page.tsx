// import { redirect } from "next/navigation";
// import { createSupabaseServerClient } from "@/lib/supabase/server-client";
// import DashboardTabs from "../components/dashboard/dashboard-tabs";
// import {
//   getMySnippets,
//   getLikedSnippets,
// } from "@/drizzle/src/snippets/action";

// export default async function DashboardPage() {
//   const supabase = await createSupabaseServerClient();
//   const {
//     data: { user },
//   } = await supabase.auth.getUser();

//   if (!user) redirect("/auth");

//   const [mySnippets, likedSnippets] = await Promise.all([
//     getMySnippets(),
//     getLikedSnippets(),
//   ]);

//   return (
//     <main className="mx-auto max-w-7xl px-6 py-20 text-white mt-3 ">
//       <h1 className="text-3xl md:text-4xl font-semibold">Dashboard</h1>
//       <p className="mt-2 text-slate-400">
//         Manage your snippets
//       </p>

//       <div className="mt-10">
//         <DashboardTabs
//           mySnippets={mySnippets}
//           likedSnippets={likedSnippets} // ✅ PASS
//           userId={user.id}
//         />
//       </div>
//     </main>
//   );
// }



// import { redirect } from "next/navigation";
// import { createSupabaseServerClient } from "@/lib/supabase/server-client";
// import DashboardTabs from "../components/dashboard/dashboard-tabs";
// import {
//   getMySnippets,
//   getLikedSnippets,
// } from "@/drizzle/src/snippets/action";
// import { Gauge, Globe, Heart } from "lucide-react";
// import WorldIcon from "@/components/ui/world-icon";
// import GaugeIcon from "@/components/ui/gauge-icon";

// export default async function DashboardPage() {
//   const supabase = await createSupabaseServerClient();
//   const {
//     data: { user },
//   } = await supabase.auth.getUser();

//   if (!user) redirect("/auth");

//   const [mySnippets, likedSnippets] = await Promise.all([
//     getMySnippets(),
//     getLikedSnippets(),
//   ]);

//   const createdCount = mySnippets.length;
//   const likedCount = likedSnippets.length;
//   const FREE_LIMIT = 50;

//   const publicCount = mySnippets.filter(
//     (s) => s.isPublic === true
//   ).length;


//   return (
//     <main className="mx-auto mt-3 max-w-7xl px-6 py-20 text-white">
//       {/* Header */}
//       <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
//         {/* Left */}
//         <div className="mr-4">
//           <h1 className="text-3xl font-semibold md:text-4xl">
//             Dashboard
//           </h1>
//           <p className="mt-2 text-neutral-400">
//             Manage your snippets
//           </p>
//         </div>

//         {/* Right stats */}
//         <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
//           {/* Created — Yellow */}
//           <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/15 p-4 hover:shadow-lg hover:shadow-sky-500/10">
//             <p className="text-md font-medium text-slate-200">
//               Snippets Created
//             </p>
//             <div className="flex items-center justify-between">
//               <p className="mt-2 text-3xl font-semibold text-white">
//                 {createdCount}
//                 <span className="text-base text-slate-300">
//                   {" "} / {FREE_LIMIT}
//                 </span>
//               </p>
//               {/* <Gauge className="h-15 w-15 font-semibold text-white" /> */}
//               <GaugeIcon className="h-15 w-15"/>
//             </div>

//             <div className="mt-4 h-2 w-full rounded bg-black/20">
//               <div
//                 className="h-full rounded bg-yellow-400 transition-all"
//                 style={{
//                   width: `${Math.min(
//                     (createdCount / FREE_LIMIT) * 100,
//                     100
//                   )}%`,
//                 }}
//               />
//             </div>

//             <p className="mt-2 text-xs text-slate-300">
//               Free plan limit
//             </p>
//           </div>

//           {/* Saved — BlueSky */}
//           <div className="rounded-xl border border-sky-500/30 bg-sky-500/15 p-4 hover:shadow-lg hover:shadow-sky-500/10">
//             <p className="text-md font-medium text-slate-200">
//               Snippets Saved
//             </p>
//             <div className="flex items-center justify-between">

//               <p className="mt-2 text-3xl font-semibold text-white">
//                 {likedCount}
//               </p>
//               <Heart className=" h-15 w-15 text-white font-semibold" />
//             </div>

//             <p className="mt-4 text-xs text-slate-300">
//               From the community
//             </p>
//           </div>

//           {/* Public — Green */}
//           <div className="rounded-xl border border-green-500/30 bg-green-500/15 p-4 hover:shadow-lg hover:shadow-green-500/10">
//             <p className="text-md font-medium text-slate-200">
//               Public Snippets
//             </p>
//             <div className="flex items-center justify-between">

//               <p className="mt-2 text-3xl font-semibold text-white">
//                 {publicCount}
//               </p>
//               {/* <Globe className=" h-15 w-15 text-white font-semibold " /> */}
//               <WorldIcon className="h-15 w-15"/>
//             </div>

//             <p className="mt-4 text-xs text-slate-300">
//               Shared with the community
//             </p>
//           </div>
//         </div>


//       </div>

//       {/* Tabs */}
//       <div className="mt-10">
//         <DashboardTabs
//           mySnippets={mySnippets}
//           likedSnippets={likedSnippets}
//           userId={user.id}
//         />
//       </div>
//     </main>
//   );
// }




// Claude UI
import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server-client";
import DashboardTabs from "../components/dashboard/dashboard-tabs";
import {
  getMySnippets,
  getLikedSnippets,
} from "@/drizzle/src/snippets/action";
import { Gauge, Globe, Heart, Sparkles } from "lucide-react";
import WorldIcon from "@/components/ui/world-icon";
import GaugeIcon from "@/components/ui/gauge-icon";

export default async function DashboardPage() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/auth");

  const [mySnippets, likedSnippets] = await Promise.all([
    getMySnippets(),
    getLikedSnippets(),
  ]);

  const createdCount = mySnippets.length;
  const likedCount = likedSnippets.length;
  const FREE_LIMIT = 50;

  const publicCount = mySnippets.filter((s) => s.isPublic === true).length;

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 pt-20 sm:pt-24 pb-12 text-white">
      {/* Header */}
      <div className="mb-8 sm:mb-10">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-lg shadow-emerald-500/20">
            <Sparkles className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Dashboard
            </h1>
            <p className="mt-1 text-sm sm:text-base text-slate-400">
              Manage and track your snippets
            </p>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-10 sm:mb-12">
        {/* Created — Emerald Gradient */}
        <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/20 via-emerald-500/10 to-transparent p-5 sm:p-6 transition-all hover:scale-[1.02] hover:shadow-2xl hover:shadow-emerald-500/20">
          {/* Glow effect */}
          <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-emerald-500/20 blur-3xl transition-all group-hover:scale-150" />
          
          <div className="relative">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-emerald-400">
                  Created
                </p>
                <div className="mt-2 flex items-baseline gap-2">
                  <p className="text-3xl sm:text-4xl font-bold text-white">
                    {createdCount}
                  </p>
                  <span className="text-base sm:text-lg text-slate-400">
                    / {FREE_LIMIT}
                  </span>
                </div>
              </div>
              <div className="rounded-xl bg-emerald-500/20 p-2.5 sm:p-3 ring-1 ring-emerald-500/30">
                <GaugeIcon className="h-6 w-6 sm:h-7 sm:w-7 text-emerald-400" />
              </div>
            </div>

            {/* Progress bar */}
            <div className="mt-4 sm:mt-5 h-2 w-full rounded-full bg-black/30 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 transition-all duration-500 shadow-lg shadow-emerald-500/50"
                style={{
                  width: `${Math.min((createdCount / FREE_LIMIT) * 100, 100)}%`,
                }}
              />
            </div>

            <p className="mt-3 text-xs sm:text-sm text-slate-400 font-medium">
              Free plan limit ({Math.round((createdCount / FREE_LIMIT) * 100)}% used)
            </p>
          </div>
        </div>

        {/* Saved — Pink/Purple Gradient */}
        <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl border border-pink-500/30 bg-gradient-to-br from-pink-500/20 via-purple-500/10 to-transparent p-5 sm:p-6 transition-all hover:scale-[1.02] hover:shadow-2xl hover:shadow-pink-500/20">
          {/* Glow effect */}
          <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-pink-500/20 blur-3xl transition-all group-hover:scale-150" />
          
          <div className="relative">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-pink-400">
                  Saved
                </p>
                <p className="mt-2 text-3xl sm:text-4xl font-bold text-white">
                  {likedCount}
                </p>
              </div>
              <div className="rounded-xl bg-pink-500/20 p-2.5 sm:p-3 ring-1 ring-pink-500/30">
                <Heart className="h-6 w-6 sm:h-7 sm:w-7 text-pink-400" fill="currentColor" />
              </div>
            </div>

            <p className="mt-4 sm:mt-5 text-xs sm:text-sm text-slate-400 font-medium">
              Snippets from the community
            </p>
          </div>
        </div>

        {/* Public — Cyan/Blue Gradient */}
        <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-transparent p-5 sm:p-6 transition-all hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/20 sm:col-span-2 lg:col-span-1">
          {/* Glow effect */}
          <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-cyan-500/20 blur-3xl transition-all group-hover:scale-150" />
          
          <div className="relative">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-cyan-400">
                  Public
                </p>
                <p className="mt-2 text-3xl sm:text-4xl font-bold text-white">
                  {publicCount}
                </p>
              </div>
              <div className="rounded-xl bg-cyan-500/20 p-2.5 sm:p-3 ring-1 ring-cyan-500/30">
                <WorldIcon className="h-6 w-6 sm:h-7 sm:w-7 text-cyan-400" />
              </div>
            </div>

            <p className="mt-4 sm:mt-5 text-xs sm:text-sm text-slate-400 font-medium">
              Shared with the community
            </p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <DashboardTabs
        mySnippets={mySnippets}
        likedSnippets={likedSnippets}
        userId={user.id}
      />
    </main>
  );
}