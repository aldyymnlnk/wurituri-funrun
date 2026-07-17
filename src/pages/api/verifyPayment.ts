import type { APIRoute } from "astro";
import { supabase } from "../../lib/supabase";

export const POST: APIRoute = async ({ request, redirect }) => {

    const form = await request.formData();

    const id = Number(form.get("id"));

    const { error } = await supabase
        .from("participants")
        .update({
            payment_status: "Lunas"
        })
        .eq("id", id);

    if (error) {
        console.error(error);
    }

    return redirect("/admin/participants");
};