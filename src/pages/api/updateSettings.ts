import type { APIRoute } from "astro";
import { supabase } from "../../lib/supabase";

export const POST: APIRoute=async({request,redirect})=>{

const form=await request.formData();

await supabase

.from("settings")

.update({

event_name:form.get("event_name"),

event_date:form.get("event_date"),

location:form.get("location"),

whatsapp:form.get("whatsapp"),

email:form.get("email"),

instagram:form.get("instagram"),

maps:form.get("maps"),

price:form.get("price")

})

.eq("id",form.get("id"));

return redirect("/admin/settings");

};