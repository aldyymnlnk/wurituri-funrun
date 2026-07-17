import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { g as addAttribute, i as renderComponent, m as maybeRenderHead, u as renderTemplate } from "./server_D6Rm-QtC.mjs";
import { t as createComponent } from "./compiler_Db9x-0at.mjs";
import { n as $$AdminSidebar, t as $$AdminLayout } from "./AdminLayout_VaADziwp.mjs";
import { t as $$AdminNavbar } from "./AdminNavbar_BzRQukDX.mjs";
import { t as supabase } from "./supabase_9w9KLbe1.mjs";
//#region src/pages/admin/faq.astro
var faq_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Faq,
	file: () => $$file,
	url: () => $$url
});
var $$Faq = createComponent(async ($$result, $$props, $$slots) => {
	const { data: faq } = await supabase.from("faq").select("*").order("created_at", { ascending: false });
	return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "FAQ" }, { "default": ($$result) => renderTemplate`${renderComponent($$result, "AdminSidebar", $$AdminSidebar, {})}${maybeRenderHead($$result)}<main class="admin-content">${renderComponent($$result, "AdminNavbar", $$AdminNavbar, {})}<section class="table-card"><h2>Kelola FAQ</h2><div style="margin-bottom:20px;"><a href="/admin/faq/add" class="btn btn-success">+ Tambah FAQ</a></div><table><thead><tr><th>No</th><th>Pertanyaan</th><th>Jawaban</th><th>Aksi</th></tr></thead><tbody>${faq && faq.length > 0 ? faq.map((item, index) => renderTemplate`<tr><td>${index + 1}</td><td>${item.question}</td><td>${item.answer}</td><td><a${addAttribute(`/admin/faq/edit/${item.id}`, "href")} class="btn btn-warning">✏ Edit</a><form action="/api/deleteFaq" method="POST" style="display:inline-block;" onsubmit="return confirm('Hapus FAQ?')"><input type="hidden" name="id"${addAttribute(item.id, "value")}><button type="submit" class="btn btn-danger">🗑 Hapus</button></form></td></tr>`) : renderTemplate`<tr><td colspan="4" style="text-align:center;">Belum ada FAQ.</td></tr>`}</tbody></table></section></main>` })}`;
}, "C:/Users/ACER/waruturi-funrun/src/pages/admin/faq.astro", void 0);
var $$file = "C:/Users/ACER/waruturi-funrun/src/pages/admin/faq.astro";
var $$url = "/admin/faq";
//#endregion
//#region \0virtual:astro:page:src/pages/admin/faq@_@astro
var page = () => faq_exports;
//#endregion
export { page };
