import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { g as addAttribute, i as renderComponent, m as maybeRenderHead, u as renderTemplate } from "./server_D6Rm-QtC.mjs";
import { t as createComponent } from "./compiler_Db9x-0at.mjs";
import { t as $$AdminLayout } from "./AdminLayout_VaADziwp.mjs";
import { t as $$AdminNavbar } from "./AdminNavbar_BzRQukDX.mjs";
import { t as supabase } from "./supabase_9w9KLbe1.mjs";
//#region src/pages/admin/payments.astro
var payments_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Payments,
	file: () => $$file,
	url: () => $$url
});
var $$Payments = createComponent(async ($$result, $$props, $$slots) => {
	const { data: payments } = await supabase.from("participants").select("*").order("created_at", { ascending: false });
	return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Pembayaran" }, { "default": ($$result) => renderTemplate`${renderComponent($$result, "AdminNavbar", $$AdminNavbar, {})}${maybeRenderHead($$result)}<section class="table-card"><h2>Verifikasi Pembayaran</h2><div class="search-box"><input id="searchPayment" type="text" placeholder="Cari peserta..."></div><table id="paymentTable"><thead><tr><th>No</th><th>Kode</th><th>Nama</th><th>Kategori</th><th>Metode</th><th>Nominal</th><th>Status</th><th>Aksi</th></tr></thead><tbody>${payments && payments.length > 0 ? payments.map((item, index) => renderTemplate`<tr><td>${index + 1}</td><td>${item.participant_code}</td><td>${item.fullname}</td><td>${item.category}</td><td>${item.payment_method}</td><td>Rp${Number(item.price).toLocaleString("id-ID")}</td><td>${item.payment_status === "Lunas" ? renderTemplate`<span class="status-paid">✅ Lunas</span>` : renderTemplate`<span class="status-unpaid">🟡 Belum Bayar</span>`}</td><td>${item.payment_status !== "Lunas" ? renderTemplate`<form action="/api/updateParticipant" method="POST" style="display:inline-block;"><input type="hidden" name="id"${addAttribute(item.id, "value")}><input type="hidden" name="payment_status" value="Lunas"><button class="btn btn-success" type="submit">✔ Verifikasi</button></form>` : renderTemplate`<button class="btn btn-success" disabled>✔ Sudah Lunas</button>`}</td></tr>`) : renderTemplate`<tr><td colspan="8" style="text-align:center;padding:40px;">Belum ada data pembayaran.</td></tr>`}</tbody></table></section><script>

const input=document.getElementById("searchPayment");

const rows=document.querySelectorAll("#paymentTable tbody tr");

input.addEventListener("keyup",()=>{

const keyword=input.value.toLowerCase();

rows.forEach((row)=>{

const nama=row.children[2].textContent.toLowerCase();

row.style.display=

nama.includes(keyword)

?

""

:

"none";

});

});

<\/script>` })}`;
}, "C:/Users/ACER/waruturi-funrun/src/pages/admin/payments.astro", void 0);
var $$file = "C:/Users/ACER/waruturi-funrun/src/pages/admin/payments.astro";
var $$url = "/admin/payments";
//#endregion
//#region \0virtual:astro:page:src/pages/admin/payments@_@astro
var page = () => payments_exports;
//#endregion
export { page };
