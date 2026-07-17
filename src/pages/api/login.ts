import type { APIRoute } from "astro";


export const POST: APIRoute = async ({cookies}) => {


    cookies.set(
        "admin-session",
        "true",
        {
            path:"/",
            httpOnly:true,
            sameSite:"lax"
        }
    );


    return new Response(
        JSON.stringify({
            success:true
        }),
        {
            status:200
        }
    );

};