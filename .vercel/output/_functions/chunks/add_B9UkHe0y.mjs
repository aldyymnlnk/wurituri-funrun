import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { i as renderComponent, m as maybeRenderHead, u as renderTemplate } from "./server_D6Rm-QtC.mjs";
import { t as createComponent } from "./compiler_Db9x-0at.mjs";
import { n as $$AdminSidebar, t as $$AdminLayout } from "./AdminLayout_VaADziwp.mjs";
import { t as $$AdminNavbar } from "./AdminNavbar_BzRQukDX.mjs";
//#region src/pages/admin/gallery/add.astro
var add_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Add,
	file: () => $$file,
	url: () => $$url
});
var $$Add = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Tambah Gallery" }, { "default": ($$result) => renderTemplate`${renderComponent($$result, "AdminSidebar", $$AdminSidebar, {})}${maybeRenderHead($$result)}<main class="admin-content">${renderComponent($$result, "AdminNavbar", $$AdminNavbar, {})}<section class="table-card"><h2>Tambah Foto Gallery</h2><form action="/api/addGallery" method="POST"><div class="form-group"><label>Judul Foto</label><input type="text" name="title" required></div><div class="form-group"><label>URL Gambar</label><input type="text" name="image" placeholder="https://..." required></div><button class="btn btn-success" type="submit">💾 Simpan</button><a href="/admin/gallery" class="btn btn-warning">⬅ Kembali</a></form></section></main>` })}`;
}, "C:/Users/ACER/waruturi-funrun/src/pages/admin/gallery/add.astro", void 0);
var $$file = "C:/Users/ACER/waruturi-funrun/src/pages/admin/gallery/add.astro";
var $$url = "/admin/gallery/add";
//#endregion
//#region \0virtual:astro:page:src/pages/admin/gallery/add@_@astro
var page = () => add_exports;
//#endregion
export { page };
