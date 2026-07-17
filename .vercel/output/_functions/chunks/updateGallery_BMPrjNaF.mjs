import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { t as supabase } from "./supabase_9w9KLbe1.mjs";
//#region src/pages/api/updateGallery.ts
var updateGallery_exports = /* @__PURE__ */ __exportAll({ POST: () => POST });
var POST = async ({ request, redirect }) => {
	const form = await request.formData();
	await supabase.from("gallery").update({
		title: form.get("title"),
		image: form.get("image")
	}).eq("id", form.get("id"));
	return redirect("/admin/gallery");
};
//#endregion
//#region \0virtual:astro:page:src/pages/api/updateGallery@_@ts
var page = () => updateGallery_exports;
//#endregion
export { page };
