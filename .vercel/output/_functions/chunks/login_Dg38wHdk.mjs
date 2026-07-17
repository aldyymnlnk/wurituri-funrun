import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
//#region src/pages/api/login.ts
var login_exports = /* @__PURE__ */ __exportAll({ POST: () => POST });
var POST = async ({ cookies }) => {
	cookies.set("admin-session", "true", {
		path: "/",
		httpOnly: true,
		sameSite: "lax"
	});
	return new Response(JSON.stringify({ success: true }), { status: 200 });
};
//#endregion
//#region \0virtual:astro:page:src/pages/api/login@_@ts
var page = () => login_exports;
//#endregion
export { page };
