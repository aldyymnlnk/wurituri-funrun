import { O as defineMiddleware, v as sequence } from "./chunks/render_uOXr6F14.mjs";
//#endregion
//#region \0virtual:astro:middleware
var onRequest = sequence(defineMiddleware(async (context, next) => {
	const pathname = context.url.pathname;
	if (pathname === "/admin/login" || pathname.startsWith("/api")) return next();
	if (pathname.startsWith("/admin")) {
		if (!context.cookies.get("admin-session")) return context.redirect("/admin/login");
	}
	return next();
}));
//#endregion
export { onRequest };
