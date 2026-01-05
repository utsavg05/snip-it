import { createSupabaseServerClient } from "@/lib/supabase/server-client";

export async function getAuthUser() {
  const supabase = await createSupabaseServerClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) {
    console.error("Auth error:", error.message);
    return null;
  }

  return user;
}
