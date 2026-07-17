import type { APIRoute } from "astro";
import { supabase } from "../../lib/supabase";

export const POST: APIRoute = async ({ request, redirect }) => {

    const form = await request.formData();

    await supabase
        .from("gallery")
        .delete()
        .eq("id", form.get("id"));

    return redirect("/admin/gallery");

};