import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { t as supabase } from "./supabase_9w9KLbe1.mjs";
//#region src/pages/api/addFaq.ts
var addFaq_exports = /* @__PURE__ */ __exportAll({ POST: () => POST });
var POST = async ({ request, redirect }) => {
	const form = await request.formData();
	await supabase.from("faq").insert({
		question: form.get("question"),
		answer: form.get("answer")
	});
	return redirect("/admin/faq");
};
//#endregion
//#region \0virtual:astro:page:src/pages/api/addFaq@_@ts
var page = () => addFaq_exports;
//#endregion
export { page };
