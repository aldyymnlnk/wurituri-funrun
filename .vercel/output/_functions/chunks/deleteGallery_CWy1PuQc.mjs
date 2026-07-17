import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { t as supabase } from "./supabase_9w9KLbe1.mjs";
//#region src/pages/api/deleteGallery.ts
var deleteGallery_exports = /* @__PURE__ */ __exportAll({ POST: () => POST });
var POST = async ({ request, redirect }) => {
	const form = await request.formData();
	await supabase.from("gallery").delete().eq("id", form.get("id"));
	return redirect("/admin/gallery");
};
//#endregion
//#region \0virtual:astro:page:src/pages/api/deleteGallery@_@ts
var page = () => deleteGallery_exports;
//#endregion
export { page };
