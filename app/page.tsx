import { supabase } from "@/lib/initSupabase";

export default async function Home() {

  const { data, error } = await supabase.from("table").select("*")
  console.log("DATA:", data);
  console.log("ERROR: ", error);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1>Snip It</h1>
    </div>
  );
}
