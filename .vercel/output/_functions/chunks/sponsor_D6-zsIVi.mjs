import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { g as addAttribute, i as renderComponent, m as maybeRenderHead, u as renderTemplate } from "./server_D6Rm-QtC.mjs";
import { t as createComponent } from "./compiler_Db9x-0at.mjs";
import { n as $$AdminSidebar, t as $$AdminLayout } from "./AdminLayout_VaADziwp.mjs";
import { t as $$AdminNavbar } from "./AdminNavbar_BzRQukDX.mjs";
import { t as supabase } from "./supabase_9w9KLbe1.mjs";
//#region src/pages/admin/sponsor.astro
var sponsor_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Sponsor,
	file: () => $$file,
	url: () => $$url
});
var $$Sponsor = createComponent(async ($$result, $$props, $$slots) => {
	const { data: sponsors } = await supabase.from("sponsor").select("*").order("created_at", { ascending: false });
	return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Sponsor" }, { "default": ($$result) => renderTemplate`${renderComponent($$result, "AdminSidebar", $$AdminSidebar, {})}${maybeRenderHead($$result)}<main class="admin-content">${renderComponent($$result, "AdminNavbar", $$AdminNavbar, {})}<section class="table-card"><h2>Kelola Sponsor</h2><div style="margin-bottom:20px;"><a href="/admin/sponsor/add" class="btn btn-success">+ Tambah Sponsor</a></div><table><thead><tr><th>No</th><th>Logo</th><th>Nama</th><th>Website</th><th>Aksi</th></tr></thead><tbody>${sponsors && sponsors.length > 0 ? sponsors.map((item, index) => renderTemplate`<tr><td>${index + 1}</td><td><img${addAttribute(item.image, "src")} width="120"></td><td>${item.name}</td><td>${item.website}</td><td><a${addAttribute(`/admin/sponsor/edit/${item.id}`, "href")} class="btn btn-warning">✏ Edit</a><form action="/api/deleteSponsor" method="POST" style="display:inline-block;" onsubmit="return confirm('Hapus sponsor?')"><input type="hidden" name="id"${addAttribute(item.id, "value")}><button class="btn btn-danger" type="submit">🗑 Hapus</button></form></td></tr>`) : renderTemplate`<tr><td colspan="5" style="text-align:center;">Belum ada sponsor.</td></tr>`}</tbody></table></section></main>` })}`;
}, "C:/Users/ACER/waruturi-funrun/src/pages/admin/sponsor.astro", void 0);
var $$file = "C:/Users/ACER/waruturi-funrun/src/pages/admin/sponsor.astro";
var $$url = "/admin/sponsor";
//#endregion
//#region \0virtual:astro:page:src/pages/admin/sponsor@_@astro
var page = () => sponsor_exports;
//#endregion
export { page };
