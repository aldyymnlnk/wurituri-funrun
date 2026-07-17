import type { APIRoute } from "astro";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
    import.meta.env.PUBLIC_SUPABASE_URL!,
    import.meta.env.PUBLIC_SUPABASE_ANON_KEY!
);

export const POST: APIRoute = async ({ request, redirect }) => {

    const form = await request.formData();

    const id = form.get("id")?.toString();

    if (!id) {

        return redirect("/admin/participants");

    }

    const { error } = await supabase
        .from("participants")
        .delete()
        .eq("id", id);

    if (error) {

        console.error(error);

    }

    return redirect("/admin/participants");

};