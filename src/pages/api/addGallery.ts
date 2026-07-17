import type { APIRoute } from "astro";
import { supabase } from "../../lib/supabase";

export const POST: APIRoute = async ({ request, redirect }) => {

    const form = await request.formData();

    await supabase
        .from("gallery")
        .insert({

            title: form.get("title"),
            image: form.get("image")

        });

    return redirect("/admin/gallery");

};