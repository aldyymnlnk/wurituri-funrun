import type { APIRoute } from "astro";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
    import.meta.env.PUBLIC_SUPABASE_URL!,
    import.meta.env.PUBLIC_SUPABASE_ANON_KEY!
);

export const POST: APIRoute = async ({ request, redirect }) => {

    const form = await request.formData();

    const id = form.get("id")?.toString();

    if (!id) {

        return redirect("/admin/participants");

    }

    const payment_status = form.get("payment_status")?.toString();

    // =============================
    // Jika hanya verifikasi pembayaran
    // =============================

    if (payment_status) {

        await supabase
            .from("participants")
            .update({
                payment_status
            })
            .eq("id", id);

        // =============================
        // Kalau baru jadi Lunas, kirim ke Google Sheets
        // =============================

        if (payment_status === "Lunas") {

            try {

                const { data: participant } = await supabase
                    .from("participants")
                    .select("*")
                    .eq("id", id)
                    .single();

                const webhookUrl = import.meta.env.GOOGLE_SHEET_WEBHOOK_URL;

                if (webhookUrl && participant) {

                    await fetch(webhookUrl, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
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

                }

            } catch (webhookErr) {

                console.log("Gagal mengirim ke Google Sheets:", webhookErr);

            }

        }

        return redirect("/admin/payments");

    }

    // =============================
    // Update data peserta
    // =============================

    await supabase
        .from("participants")
        .update({

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

        })
        .eq("id", id);

    return redirect("/admin/participants");

};