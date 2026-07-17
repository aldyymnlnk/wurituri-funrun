import type { APIRoute } from "astro";
import { supabase } from "../../lib/supabase";

export const POST: APIRoute = async ({ request }) => {
    try {
        const data = await request.json();

        const participantCode =
            "WTFR-" +
            Date.now().toString().slice(-6);

        const { error } = await supabase
            .from("participants")
            .insert([
                {
                    participant_code: participantCode,
                    fullname: data.fullname,
                    email: data.email,
                    phone: data.phone,
                    birth_date: data.birth_date,
                    gender: data.gender,
                    category: data.category,
                    jersey_size: data.jersey_size,
                    blood_type: data.blood_type,
                    emergency_name: data.emergency_name,
                    emergency_phone: data.emergency_phone,
                    emergency_relation: data.emergency_relation,
                    payment_method: data.payment_method,
                    payment_status: "Belum Bayar",
                    price: data.price
                }
            ]);

        if (error) {
            console.log(error);

            return new Response(
                JSON.stringify({
                    success: false,
                    message: error.message
                }),
                {
                    status: 500
                }
            );
        }

        return new Response(
            JSON.stringify({
                success: true,
                participantCode
            }),
            {
                status: 200
            }
        );

    } catch (err) {

        return new Response(
            JSON.stringify({
                success: false,
                message: "Server Error"
            }),
            {
                status: 500
            }
        );

    }
};