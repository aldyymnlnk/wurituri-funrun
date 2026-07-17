import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { t as supabase } from "./supabase_9w9KLbe1.mjs";
//#region src/pages/api/addSponsor.ts
var addSponsor_exports = /* @__PURE__ */ __exportAll({ POST: () => POST });
var POST = async ({ request, redirect }) => {
	const form = await request.formData();
	await supabase.from("sponsor").insert({
		name: form.get("name"),
		image: form.get("image"),
		website: form.get("website")
	});
	return redirect("/admin/sponsor");
};
//#endregion
//#region \0virtual:astro:page:src/pages/api/addSponsor@_@ts
var page = () => addSponsor_exports;
//#endregion
export { page };
