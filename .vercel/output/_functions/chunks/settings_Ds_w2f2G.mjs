import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { g as addAttribute, i as renderComponent, m as maybeRenderHead, u as renderTemplate } from "./server_D6Rm-QtC.mjs";
import { t as createComponent } from "./compiler_Db9x-0at.mjs";
import { t as $$AdminLayout } from "./AdminLayout_VaADziwp.mjs";
import { t as $$AdminNavbar } from "./AdminNavbar_BzRQukDX.mjs";
import { t as supabase } from "./supabase_9w9KLbe1.mjs";
//#region src/pages/admin/settings.astro
var settings_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Settings,
	file: () => $$file,
	url: () => $$url
});
var $$Settings = createComponent(async ($$result, $$props, $$slots) => {
	const { data } = await supabase.from("settings").select("*").single();
	return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, {
		"title": "Settings",
		"data-astro-cid-ubtfzxgo": true
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "AdminNavbar", $$AdminNavbar, { "data-astro-cid-ubtfzxgo": true })}${maybeRenderHead($$result)}<section class="table-card" data-astro-cid-ubtfzxgo><h2 data-astro-cid-ubtfzxgo>Pengaturan Website</h2><form action="/api/updateSettings" method="POST" data-astro-cid-ubtfzxgo><input type="hidden" name="id"${addAttribute(data.id, "value")} data-astro-cid-ubtfzxgo><div class="form-group" data-astro-cid-ubtfzxgo><label data-astro-cid-ubtfzxgo>Nama Event</label><input name="event_name"${addAttribute(data.event_name, "value")} data-astro-cid-ubtfzxgo></div><div class="form-group" data-astro-cid-ubtfzxgo><label data-astro-cid-ubtfzxgo>Tanggal Event</label><input type="date" name="event_date"${addAttribute(data.event_date, "value")} data-astro-cid-ubtfzxgo></div><div class="form-group" data-astro-cid-ubtfzxgo><label data-astro-cid-ubtfzxgo>Lokasi</label><input name="location"${addAttribute(data.location, "value")} data-astro-cid-ubtfzxgo></div><div class="form-group" data-astro-cid-ubtfzxgo><label data-astro-cid-ubtfzxgo>WhatsApp</label><input name="whatsapp"${addAttribute(data.whatsapp, "value")} data-astro-cid-ubtfzxgo></div><div class="form-group" data-astro-cid-ubtfzxgo><label data-astro-cid-ubtfzxgo>Email</label><input name="email"${addAttribute(data.email, "value")} data-astro-cid-ubtfzxgo></div><div class="form-group" data-astro-cid-ubtfzxgo><label data-astro-cid-ubtfzxgo>Instagram</label><input name="instagram"${addAttribute(data.instagram, "value")} data-astro-cid-ubtfzxgo></div><div class="form-group" data-astro-cid-ubtfzxgo><label data-astro-cid-ubtfzxgo>Google Maps</label><input name="maps"${addAttribute(data.maps, "value")} data-astro-cid-ubtfzxgo></div><div class="form-group" data-astro-cid-ubtfzxgo><label data-astro-cid-ubtfzxgo>Harga</label><input type="number" name="price"${addAttribute(data.price, "value")} data-astro-cid-ubtfzxgo></div><div class="form-group" data-astro-cid-ubtfzxgo><label data-astro-cid-ubtfzxgo>Tanggal Pendaftaran Dibuka</label><input type="date" name="reg_open_date"${addAttribute(data.reg_open_date, "value")} data-astro-cid-ubtfzxgo></div><div class="form-group" data-astro-cid-ubtfzxgo><label data-astro-cid-ubtfzxgo>Tanggal Pendaftaran Ditutup</label><input type="date" name="reg_close_date"${addAttribute(data.reg_close_date, "value")} data-astro-cid-ubtfzxgo></div><div class="form-group" data-astro-cid-ubtfzxgo><label data-astro-cid-ubtfzxgo>Tanggal Race Pack Collection</label><input type="date" name="race_pack_date"${addAttribute(data.race_pack_date, "value")} data-astro-cid-ubtfzxgo></div><div class="form-group" data-astro-cid-ubtfzxgo><label data-astro-cid-ubtfzxgo>Tanggal Awarding</label><input type="date" name="awarding_date"${addAttribute(data.awarding_date, "value")} data-astro-cid-ubtfzxgo></div><button class="btn btn-success" data-astro-cid-ubtfzxgo>💾 Simpan</button></form></section>` })}`;
}, "C:/Users/ACER/waruturi-funrun/src/pages/admin/settings.astro", void 0);
var $$file = "C:/Users/ACER/waruturi-funrun/src/pages/admin/settings.astro";
var $$url = "/admin/settings";
//#endregion
//#region \0virtual:astro:page:src/pages/admin/settings@_@astro
var page = () => settings_exports;
//#endregion
export { page };
