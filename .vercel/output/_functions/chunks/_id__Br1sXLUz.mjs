import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { C as createAstro, g as addAttribute, i as renderComponent, m as maybeRenderHead, u as renderTemplate } from "./server_D6Rm-QtC.mjs";
import { t as createComponent } from "./compiler_Db9x-0at.mjs";
import { n as $$AdminSidebar, t as $$AdminLayout } from "./AdminLayout_VaADziwp.mjs";
import { t as $$AdminNavbar } from "./AdminNavbar_BzRQukDX.mjs";
import { t as supabase } from "./supabase_9w9KLbe1.mjs";
//#region src/pages/admin/edit/[id].astro
var _id__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Id,
	file: () => $$file,
	prerender: () => false,
	url: () => $$url
});
createAstro("https://astro.build");
var $$Id = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Id;
	const id = Astro.params.id;
	const { data: participant } = await supabase.from("participants").select("*").eq("id", id).single();
	if (!participant) return Astro.redirect("/admin/participants");
	return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Edit Peserta" }, { "default": ($$result) => renderTemplate`${renderComponent($$result, "AdminSidebar", $$AdminSidebar, {})}${maybeRenderHead($$result)}<main class="admin-content">${renderComponent($$result, "AdminNavbar", $$AdminNavbar, {})}<section class="table-card"><h2>Edit Data Peserta</h2><form action="/api/updateParticipant" method="POST"><input type="hidden" name="id"${addAttribute(participant.id, "value")}><div class="form-group"><label>Kode Peserta</label><input type="text" name="participant_code"${addAttribute(participant.participant_code, "value")}></div><div class="form-group"><label>Nama Lengkap</label><input type="text" name="fullname"${addAttribute(participant.fullname, "value")}></div><div class="form-group"><label>Email</label><input type="email" name="email"${addAttribute(participant.email, "value")}></div><div class="form-group"><label>Nomor WhatsApp</label><input type="text" name="phone"${addAttribute(participant.phone, "value")}></div><div class="form-group"><label>Tanggal Lahir</label><input type="date" name="birth_date"${addAttribute(participant.birth_date, "value")}></div><div class="form-group"><label>Jenis Kelamin</label><select name="gender"><option value="Laki-laki"${addAttribute(participant.gender === "Laki-laki", "selected")}>Laki-laki</option><option value="Perempuan"${addAttribute(participant.gender === "Perempuan", "selected")}>Perempuan</option></select></div><div class="form-group"><label>Kategori</label><select name="category"><option value="5K Fun Run"${addAttribute(participant.category === "5K Fun Run", "selected")}>5K Fun Run</option><option value="10K Challenge"${addAttribute(participant.category === "10K Challenge", "selected")}>10K Challenge</option></select></div><div class="form-group"><label>Ukuran Jersey</label><select name="jersey_size"><option value="S"${addAttribute(participant.jersey_size === "S", "selected")}>S</option><option value="M"${addAttribute(participant.jersey_size === "M", "selected")}>M</option><option value="L"${addAttribute(participant.jersey_size === "L", "selected")}>L</option><option value="XL"${addAttribute(participant.jersey_size === "XL", "selected")}>XL</option><option value="XXL"${addAttribute(participant.jersey_size === "XXL", "selected")}>XXL</option></select></div><div class="form-group"><label>Golongan Darah</label><select name="blood_type"><option value="A"${addAttribute(participant.blood_type === "A", "selected")}>A</option><option value="B"${addAttribute(participant.blood_type === "B", "selected")}>B</option><option value="AB"${addAttribute(participant.blood_type === "AB", "selected")}>AB</option><option value="O"${addAttribute(participant.blood_type === "O", "selected")}>O</option></select></div><hr style="margin:30px 0;"><h2>Kontak Darurat</h2><div class="form-group"><label>Nama Kontak Darurat</label><input type="text" name="emergency_name"${addAttribute(participant.emergency_name, "value")}></div><div class="form-group"><label>Nomor Kontak Darurat</label><input type="text" name="emergency_phone"${addAttribute(participant.emergency_phone, "value")}></div><div class="form-group"><label>Hubungan</label><input type="text" name="emergency_relation"${addAttribute(participant.emergency_relation, "value")}></div><hr style="margin:30px 0;"><h2>Pembayaran</h2><div class="form-group"><label>Metode Pembayaran</label><select name="payment_method"><option value="BRI"${addAttribute(participant.payment_method === "BRI", "selected")}>BRI</option><option value="BCA"${addAttribute(participant.payment_method === "BCA", "selected")}>BCA</option><option value="Website"${addAttribute(participant.payment_method === "Website", "selected")}>Website</option></select></div><div class="form-group"><label>Status Pembayaran</label><select name="payment_status"><option value="Belum Bayar"${addAttribute(participant.payment_status === "Belum Bayar", "selected")}>Belum Bayar</option><option value="Lunas"${addAttribute(participant.payment_status === "Lunas", "selected")}>Lunas</option></select></div><div class="form-group"><label>Harga</label><input type="number" name="price"${addAttribute(participant.price, "value")}></div><div style="
display:flex;
gap:15px;
margin-top:35px;
"><button type="submit" class="btn btn-success">💾 Simpan Perubahan</button><a href="/admin/participants" class="btn btn-warning">⬅ Kembali</a></div></form></section></main>` })}`;
}, "C:/Users/ACER/waruturi-funrun/src/pages/admin/edit/[id].astro", void 0);
var $$file = "C:/Users/ACER/waruturi-funrun/src/pages/admin/edit/[id].astro";
var $$url = "/admin/edit/[id]";
//#endregion
//#region \0virtual:astro:page:src/pages/admin/edit/[id]@_@astro
var page = () => _id__exports;
//#endregion
export { page };
