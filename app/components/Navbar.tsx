// import { createClient } from "@/lib/supabase/client";

// export default async function Navbar() {
//   const supabase = createClient();
//   const { data: { user } } = await supabase.auth.getUser();
//   console.log("USER IN NAVBAR:", user);

//   return (
//     <nav className="w-full flex justify-between p-4 border-b">
//       <p className="font-bold">Snip-It</p>

//       {user ? (
//         <div className="flex gap-4 items-center">
//           <span>{user.email}</span>
//           <form action="/logout" method="post">
//             <button className="text-red-600">Logout</button>
//           </form>
//         </div>
//       ) : (
//         <a href="/login" className="text-blue-600">Login</a>
//       )}
//     </nav>
//   );
// }


import { createClient } from "@/lib/supabase/server";
import { createSupabaseServerClient } from "@/lib/supabase/server-client";
import Image from "next/image";
import Link from "next/link";

export default async function Navbar() {
  // const supabase = await createClient();
  // const { data } = await supabase.auth.getUser();
  // console.log("USER IN NAVBAR:", data.user);

  const supabase = await createSupabaseServerClient();
      const { data: { user } } = await supabase.auth.getUser();
      console.log("USER IN NAVBAR:", user);

  // return user ? <p>{user.email}</p> : <a href="/login">Login</a>;

  return (
    <nav className="w-full flex justify-between px-14 py-6 border-b">
      <p className="font-bold">Snip-It</p>
      {user ? (
        <div className="flex gap-4 items-center">
          <Link href="/auth">
          {user.user_metadata?.avatar_url && (
            <Image
              src={user.user_metadata.avatar_url}
              width={36}
              height={36}
              alt="User avatar"
              className="rounded-full border border-white/10"
            />
          )}
          </Link>
        </div>
      ) : (
        <Link href="/auth" className="text-blue-600">Login</Link>
      )}
    </nav>
  );
}
