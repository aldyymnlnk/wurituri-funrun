import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { createClient } from "@supabase/supabase-js";
//#region src/pages/api/deleteParticipant.ts
var deleteParticipant_exports = /* @__PURE__ */ __exportAll({ POST: () => POST });
var supabase = createClient("https://jixcpwfsgdahahjqesbu.supabase.co", "sb_publishable_GjnQtcdt3oJhODkf0ua_qg_Dt72dSfs");
var POST = async ({ request, redirect }) => {
	const id = (await request.formData()).get("id")?.toString();
	if (!id) return redirect("/admin/participants");
	const { error } = await supabase.from("participants").delete().eq("id", id);
	if (error) console.error(error);
	return redirect("/admin/participants");
};
//#endregion
//#region \0virtual:astro:page:src/pages/api/deleteParticipant@_@ts
var page = () => deleteParticipant_exports;
//#endregion
export { page };
