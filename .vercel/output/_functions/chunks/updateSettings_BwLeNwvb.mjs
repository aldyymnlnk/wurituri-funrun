import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { t as supabase } from "./supabase_9w9KLbe1.mjs";
//#region src/pages/api/updateSettings.ts
var updateSettings_exports = /* @__PURE__ */ __exportAll({ POST: () => POST });
var POST = async ({ request, redirect }) => {
	const form = await request.formData();
	await supabase.from("settings").update({
		event_name: form.get("event_name"),
		event_date: form.get("event_date"),
		location: form.get("location"),
		whatsapp: form.get("whatsapp"),
		email: form.get("email"),
		instagram: form.get("instagram"),
		maps: form.get("maps"),
		price: form.get("price")
	}).eq("id", form.get("id"));
	return redirect("/admin/settings");
};
//#endregion
//#region \0virtual:astro:page:src/pages/api/updateSettings@_@ts
var page = () => updateSettings_exports;
//#endregion
export { page };
