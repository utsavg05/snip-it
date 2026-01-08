import { createSupabaseServerClient } from "@/lib/supabase/server-client";

export async function getAuthUser() {
  const supabase = await createSupabaseServerClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  return user ?? null;
}
