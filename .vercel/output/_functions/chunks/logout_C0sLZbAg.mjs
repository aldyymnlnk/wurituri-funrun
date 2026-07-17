import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { C as createAstro, u as renderTemplate } from "./server_D6Rm-QtC.mjs";
import { t as createComponent } from "./compiler_Db9x-0at.mjs";
import { t as supabase } from "./supabase_9w9KLbe1.mjs";
//#region src/pages/admin/logout.astro
var logout_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Logout,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://astro.build");
var $$Logout = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Logout;
	await supabase.auth.signOut();
	Astro.redirect("/admin/login");
	return renderTemplate``;
}, "C:/Users/ACER/waruturi-funrun/src/pages/admin/logout.astro", void 0);
var $$file = "C:/Users/ACER/waruturi-funrun/src/pages/admin/logout.astro";
var $$url = "/admin/logout";
//#endregion
//#region \0virtual:astro:page:src/pages/admin/logout@_@astro
var page = () => logout_exports;
//#endregion
export { page };
