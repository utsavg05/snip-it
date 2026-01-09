import CreateSnippetForm from "@/app/components/snippets/createSnippetFrom";
import { createSupabaseServerClient } from "@/lib/supabase/server-client";
import { redirect } from "next/navigation";

export default async function NewSnippetPage() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/auth");
  }

  return (
    <main className="mx-auto max-w-3xl mt-4 px-6 py-20 text-white">
      {/* subtle background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-120px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[120px]"
      />
      <h1 className="text-3xl font-semibold">
        
        Create a new snippet
      </h1>
      <p className="mt-2 text-slate-400">
        Save snippets for yourself or share them to help the community.
      </p>

      <div className="mt-10">
        <CreateSnippetForm />
      </div>
    </main>
  );
}
