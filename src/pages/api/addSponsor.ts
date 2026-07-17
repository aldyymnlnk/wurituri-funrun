import type { APIRoute } from "astro";
import { supabase } from "../../lib/supabase";

export const POST: APIRoute = async ({ request, redirect }) => {

    const form = await request.formData();

    await supabase
        .from("sponsor")
        .insert({

            name: form.get("name"),
            image: form.get("image"),
            website: form.get("website")

        });

    return redirect("/admin/sponsor");

};