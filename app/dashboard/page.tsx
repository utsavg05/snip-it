import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server-client";
import DashboardTabs from "../components/dashboard/dashboard-tabs";
import { getMySnippets, getPublicSnippets } from "@/drizzle/src/snippets/action";

export default async function DashboardPage() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/auth");

  const [mySnippets, publicSnippets] = await Promise.all([
    getMySnippets(),
    getPublicSnippets(),
  ]);

  return (
    <main className="mx-auto max-w-7xl px-6 py-20 text-white">
      <h1 className="text-3xl font-semibold">Dashboard</h1>
      <p className="mt-2 text-slate-400">
        Manage and explore your code snippets
      </p>

      <div className="mt-10">
        <DashboardTabs
          mySnippets={mySnippets}
          publicSnippets={publicSnippets}
          userId={user.id}
        />
      </div>
    </main>
  );
}
