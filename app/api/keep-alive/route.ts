import { createSupabaseServerClient } from "@/lib/supabase/server-client";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const supabase = await createSupabaseServerClient();
        await supabase
            .from("snippets")
            .select("id")
            .limit(1);

        return NextResponse.json({ ok: true });
    } catch (error) {
        return NextResponse.json({ ok: false, error })
    }
}