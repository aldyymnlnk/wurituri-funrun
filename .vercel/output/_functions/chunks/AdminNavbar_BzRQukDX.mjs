import { m as maybeRenderHead, u as renderTemplate } from "./server_D6Rm-QtC.mjs";
import { t as createComponent } from "./compiler_Db9x-0at.mjs";
//#region src/components/admin/AdminNavbar.astro
var $$AdminNavbar = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<header class="admin-navbar"><div><h2>Dashboard Admin</h2><small>Waru Turi Fun Run 2026</small></div><img src="/images/logo_waruturi.png" class="avatar" alt="Logo"><a href="/admin/logout" class="btn btn-danger">Logout</a></header>`;
}, "C:/Users/ACER/waruturi-funrun/src/components/admin/AdminNavbar.astro", void 0);
//#endregion
export { $$AdminNavbar as t };
