import { defineMiddleware } from "astro:middleware";


export const onRequest = defineMiddleware(async (context, next) => {


    const pathname = context.url.pathname;



    // halaman yang bebas akses

    if(
        pathname === "/admin/login" ||
        pathname.startsWith("/api")
    ){

        return next();

    }



    // proteksi halaman admin

    if(pathname.startsWith("/admin")){


        const session =
        context.cookies.get("admin-session");



        if(!session){


            return context.redirect("/admin/login");


        }


    }



    return next();


});