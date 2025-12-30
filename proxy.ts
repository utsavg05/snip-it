import { proxy } from "@/lib/supabase/proxy";

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};

export { proxy };