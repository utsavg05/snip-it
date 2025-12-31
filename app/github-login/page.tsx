import GithubLoginDemo from "./GithubLoginDemo";
import { createSupabaseServerClient } from "@/lib/supabase/server-client";

export default async function GithubLoginPage() {
  const supabase = await createSupabaseServerClient()
  const {
    data: { user },
  } = await supabase.auth.getUser();

  console.log( { user });
  return <GithubLoginDemo user={user} />;
}