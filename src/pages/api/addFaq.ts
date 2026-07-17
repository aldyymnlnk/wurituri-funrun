import type { APIRoute } from "astro";
import { supabase } from "../../lib/supabase";

export const POST: APIRoute = async ({ request, redirect }) => {

const form=await request.formData();

await supabase

.from("faq")

.insert({

question:form.get("question"),

answer:form.get("answer")

});

return redirect("/admin/faq");

};