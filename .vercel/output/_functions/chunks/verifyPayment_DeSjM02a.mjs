import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { t as supabase } from "./supabase_9w9KLbe1.mjs";
//#region src/pages/api/verifyPayment.ts
var verifyPayment_exports = /* @__PURE__ */ __exportAll({ POST: () => POST });
var POST = async ({ request, redirect }) => {
	const form = await request.formData();
	const id = Number(form.get("id"));
	const { error } = await supabase.from("participants").update({ payment_status: "Lunas" }).eq("id", id);
	if (error) console.error(error);
	return redirect("/admin/participants");
};
//#endregion
//#region \0virtual:astro:page:src/pages/api/verifyPayment@_@ts
var page = () => verifyPayment_exports;
//#endregion
export { page };
