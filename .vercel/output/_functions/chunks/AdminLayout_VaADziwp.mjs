import { C as createAstro, g as addAttribute, h as renderHead, i as renderComponent, m as maybeRenderHead, s as renderSlot, u as renderTemplate } from "./server_D6Rm-QtC.mjs";
import { t as createComponent } from "./compiler_Db9x-0at.mjs";
//#region src/components/admin/AdminSidebar.astro
createAstro("https://astro.build");
var $$AdminSidebar = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$AdminSidebar;
	const currentPath = Astro.url.pathname;
	return renderTemplate`${maybeRenderHead($$result)}<aside class="sidebar"><div class="sidebar-header"><h2>Waru Turi Run</h2></div><nav>${[
		{
			href: "/admin/dashboard",
			label: "Dashboard"
		},
		{
			href: "/admin/participants",
			label: "Peserta"
		},
		{
			href: "/admin/payments",
			label: "Pembayaran"
		},
		{
			href: "/admin/statistics",
			label: "Statistik"
		},
		{
			href: "/admin/settings",
			label: "settings"
		}
	].map((item) => renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute(currentPath.startsWith(item.href) ? "active" : "", "class")}>${item.label}</a>`)}</nav><div class="sidebar-footer"><a href="/admin/logout">Logout</a></div></aside>`;
}, "C:/Users/ACER/waruturi-funrun/src/components/admin/AdminSidebar.astro", void 0);
//#endregion
//#region src/layouts/AdminLayout.astro
createAstro("https://astro.build");
var $$AdminLayout = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$AdminLayout;
	const { title, auth = false } = Astro.props;
	return renderTemplate`<html lang="id"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title}</title>${renderHead($$result)}</head><body>${auth ? renderTemplate`${renderSlot($$result, $$slots["default"])}` : renderTemplate`<div class="admin-layout">${renderComponent($$result, "AdminSidebar", $$AdminSidebar, {})}<main class="admin-content">${renderSlot($$result, $$slots["default"])}</main></div>`}</body></html>`;
}, "C:/Users/ACER/waruturi-funrun/src/layouts/AdminLayout.astro", void 0);
//#endregion
export { $$AdminSidebar as n, $$AdminLayout as t };
