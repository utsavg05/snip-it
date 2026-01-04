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
    <main className="mx-auto max-w-3xl px-6 py-20 text-white">
      <h1 className="text-3xl font-semibold">
        Create a new snippet
      </h1>
      <p className="mt-2 text-slate-400">
        Save reusable code snippets for later.
      </p>

      <div className="mt-10">
        <CreateSnippetForm />
      </div>
    </main>
  );
}
