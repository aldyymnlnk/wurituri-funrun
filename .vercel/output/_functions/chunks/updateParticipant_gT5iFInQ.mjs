import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { createClient } from "@supabase/supabase-js";
//#region src/pages/api/updateParticipant.ts
var updateParticipant_exports = /* @__PURE__ */ __exportAll({ POST: () => POST });
var supabase = createClient("https://jixcpwfsgdahahjqesbu.supabase.co", "sb_publishable_GjnQtcdt3oJhODkf0ua_qg_Dt72dSfs");
var POST = async ({ request, redirect }) => {
	const form = await request.formData();
	const id = form.get("id")?.toString();
	if (!id) return redirect("/admin/participants");
	const payment_status = form.get("payment_status")?.toString();
	if (payment_status) {
		await supabase.from("participants").update({ payment_status }).eq("id", id);
		if (payment_status === "Lunas") try {
			const { data: participant } = await supabase.from("participants").select("*").eq("id", id).single();
			const webhookUrl = "https://script.google.com/macros/s/AKfycbw4msh8KtzZd36cj2vIQmLoDraYRM8bKb3hgpeSz3FP-5_wP0KBdNiz9xRo4mne65wQ/exec";
			if (participant) await fetch(webhookUrl, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					participant_code: participant.participant_code,
					fullname: participant.fullname,
					email: participant.email,
					phone: participant.phone,
					birth_date: participant.birth_date,
					gender: participant.gender,
					category: participant.category,
					jersey_size: participant.jersey_size,
					blood_type: participant.blood_type,
					emergency_name: participant.emergency_name,
					emergency_phone: participant.emergency_phone,
					emergency_relation: participant.emergency_relation,
					payment_method: participant.payment_method,
					payment_status: participant.payment_status,
					price: participant.price
				})
			});
		} catch (webhookErr) {
			console.log("Gagal mengirim ke Google Sheets:", webhookErr);
		}
		return redirect("/admin/payments");
	}
	await supabase.from("participants").update({
		participant_code: form.get("participant_code"),
		fullname: form.get("fullname"),
		email: form.get("email"),
		phone: form.get("phone"),
		birth_date: form.get("birth_date"),
		gender: form.get("gender"),
		category: form.get("category"),
		jersey_size: form.get("jersey_size"),
		blood_type: form.get("blood_type"),
		emergency_name: form.get("emergency_name"),
		emergency_phone: form.get("emergency_phone"),
		emergency_relation: form.get("emergency_relation"),
		payment_method: form.get("payment_method"),
		payment_status: form.get("payment_status"),
		price: form.get("price")
	}).eq("id", id);
	return redirect("/admin/participants");
};
//#endregion
//#region \0virtual:astro:page:src/pages/api/updateParticipant@_@ts
var page = () => updateParticipant_exports;
//#endregion
export { page };
