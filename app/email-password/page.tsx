import { createSupabaseServerClient } from "@/lib/supabase/server-client";
import EmailPasswordDemo from "./EmailPasswordDemo"

const EmailPasswordPage = async () => {
    const supabase = await createSupabaseServerClient();
    const { data: { user } } = await supabase.auth.getUser();
    console.log({ user })
    return (
        <div><EmailPasswordDemo user={user} /></div>
    )
}

export default EmailPasswordPage