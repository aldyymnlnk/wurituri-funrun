import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { g as addAttribute, i as renderComponent, m as maybeRenderHead, u as renderTemplate } from "./server_D6Rm-QtC.mjs";
import { t as createComponent } from "./compiler_Db9x-0at.mjs";
import { n as $$AdminSidebar, t as $$AdminLayout } from "./AdminLayout_VaADziwp.mjs";
import { t as $$AdminNavbar } from "./AdminNavbar_BzRQukDX.mjs";
import { t as supabase } from "./supabase_9w9KLbe1.mjs";
//#region src/pages/admin/gallery.astro
var gallery_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Gallery,
	file: () => $$file,
	url: () => $$url
});
var $$Gallery = createComponent(async ($$result, $$props, $$slots) => {
	const { data: gallery } = await supabase.from("gallery").select("*").order("created_at", { ascending: false });
	return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Gallery" }, { "default": ($$result) => renderTemplate`${renderComponent($$result, "AdminSidebar", $$AdminSidebar, {})}${maybeRenderHead($$result)}<main class="admin-content">${renderComponent($$result, "AdminNavbar", $$AdminNavbar, {})}<section class="table-card"><h2>Gallery Event</h2><div style="margin-bottom:20px;"><a href="/admin/gallery/add" class="btn btn-success">+ Tambah Foto</a></div><table><thead><tr><th>No</th><th>Preview</th><th>Judul</th><th>Aksi</th></tr></thead><tbody>${gallery && gallery.length > 0 ? gallery.map((item, index) => renderTemplate`<tr><td>${index + 1}</td><td><img${addAttribute(item.image, "src")} width="120"></td><td>${item.title}</td><td><a${addAttribute(`/admin/gallery/edit/${item.id}`, "href")} class="btn btn-warning">✏ Edit</a><form action="/api/deleteGallery" method="POST" style="display:inline-block;" onsubmit="return confirm('Hapus foto ini?')"><input type="hidden" name="id"${addAttribute(item.id, "value")}><button class="btn btn-danger" type="submit">🗑 Hapus</button></form></td></tr>`) : renderTemplate`<tr><td colspan="4" style="text-align:center;padding:40px;">Belum ada foto gallery.</td></tr>`}</tbody></table></section></main>` })}`;
}, "C:/Users/ACER/waruturi-funrun/src/pages/admin/gallery.astro", void 0);
var $$file = "C:/Users/ACER/waruturi-funrun/src/pages/admin/gallery.astro";
var $$url = "/admin/gallery";
//#endregion
//#region \0virtual:astro:page:src/pages/admin/gallery@_@astro
var page = () => gallery_exports;
//#endregion
export { page };
