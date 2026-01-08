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



import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server-client";
import DashboardTabs from "../components/dashboard/dashboard-tabs";
import {
  getMySnippets,
  getLikedSnippets,
} from "@/drizzle/src/snippets/action";

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

  const publicCount = mySnippets.filter(
    (s) => s.isPublic === true
  ).length;


  return (
    <main className="mx-auto mt-3 max-w-7xl px-6 py-20 text-white">
      {/* Header */}
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        {/* Left */}
        <div className="mr-4">
          <h1 className="text-3xl font-semibold md:text-4xl">
            Dashboard
          </h1>
          <p className="mt-2 text-slate-400">
            Manage your snippets
          </p>
        </div>
        
        {/* Right stats */}
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Created — Yellow */}
          <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/15 p-3 hover:shadow-lg hover:shadow-sky-500/10">
            <p className="text-md font-medium text-slate-200">
              Snippets Created
            </p>

            <p className="mt-2 text-3xl font-semibold text-white">
              {createdCount}
              <span className="text-base text-slate-300">
                {" "} / {FREE_LIMIT}
              </span>
            </p>

            <div className="mt-4 h-2 w-full rounded bg-black/20">
              <div
                className="h-full rounded bg-yellow-400 transition-all"
                style={{
                  width: `${Math.min(
                    (createdCount / FREE_LIMIT) * 100,
                    100
                  )}%`,
                }}
              />
            </div>

            <p className="mt-2 text-xs text-slate-300">
              Free plan limit
            </p>
          </div>

          {/* Saved — BlueSky */}
          <div className="rounded-xl border border-sky-500/30 bg-sky-500/15 p-3 hover:shadow-lg hover:shadow-sky-500/10">
            <p className="text-md font-medium text-slate-200">
              Snippets Saved
            </p>

            <p className="mt-2 text-3xl font-semibold text-white">
              {likedCount}
            </p>

            <p className="mt-4 text-xs text-slate-300">
              From the community
            </p>
          </div>

          {/* Public — Green */}
          <div className="rounded-xl border border-green-500/30 bg-green-500/15 p-3 hover:shadow-lg hover:shadow-green-500/10">
            <p className="text-md font-medium text-slate-200">
              Public Snippets
            </p>

            <p className="mt-2 text-3xl font-semibold text-white">
              {publicCount}
            </p>

            <p className="mt-4 text-xs text-slate-300">
              Shared with the community
            </p>
          </div>
        </div>


      </div>

      {/* Tabs */}
      <div className="mt-10">
        <DashboardTabs
          mySnippets={mySnippets}
          likedSnippets={likedSnippets}
          userId={user.id}
        />
      </div>
    </main>
  );
}
