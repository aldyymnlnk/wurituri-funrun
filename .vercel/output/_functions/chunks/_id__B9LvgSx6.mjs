import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { C as createAstro, g as addAttribute, i as renderComponent, m as maybeRenderHead, u as renderTemplate } from "./server_D6Rm-QtC.mjs";
import { t as createComponent } from "./compiler_Db9x-0at.mjs";
import { n as $$AdminSidebar, t as $$AdminLayout } from "./AdminLayout_VaADziwp.mjs";
import { t as $$AdminNavbar } from "./AdminNavbar_BzRQukDX.mjs";
import { t as supabase } from "./supabase_9w9KLbe1.mjs";
//#region src/pages/admin/gallery/edit/[id].astro
var _id__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Id,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://astro.build");
var $$Id = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Id;
	const id = Astro.params.id;
	const { data: gallery } = await supabase.from("gallery").select("*").eq("id", id).single();
	if (!gallery) return Astro.redirect("/admin/gallery");
	return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Edit Gallery" }, { "default": ($$result) => renderTemplate`${renderComponent($$result, "AdminSidebar", $$AdminSidebar, {})}${maybeRenderHead($$result)}<main class="admin-content">${renderComponent($$result, "AdminNavbar", $$AdminNavbar, {})}<section class="table-card"><h2>Edit Gallery</h2><form action="/api/updateGallery" method="POST"><input type="hidden" name="id"${addAttribute(gallery.id, "value")}><div class="form-group"><label>Judul</label><input type="text" name="title"${addAttribute(gallery.title, "value")} required></div><div class="form-group"><label>URL Gambar</label><input type="text" name="image"${addAttribute(gallery.image, "value")} required></div><button class="btn btn-success" type="submit">💾 Simpan</button><a href="/admin/gallery" class="btn btn-warning">⬅ Kembali</a></form></section></main>` })}`;
}, "C:/Users/ACER/waruturi-funrun/src/pages/admin/gallery/edit/[id].astro", void 0);
var $$file = "C:/Users/ACER/waruturi-funrun/src/pages/admin/gallery/edit/[id].astro";
var $$url = "/admin/gallery/edit/[id]";
//#endregion
//#region \0virtual:astro:page:src/pages/admin/gallery/edit/[id]@_@astro
var page = () => _id__exports;
//#endregion
export { page };
