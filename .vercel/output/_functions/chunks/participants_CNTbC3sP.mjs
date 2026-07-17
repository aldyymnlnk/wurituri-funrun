import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { g as addAttribute, i as renderComponent, m as maybeRenderHead, u as renderTemplate } from "./server_D6Rm-QtC.mjs";
import { t as createComponent } from "./compiler_Db9x-0at.mjs";
import { t as $$AdminLayout } from "./AdminLayout_VaADziwp.mjs";
import { t as $$AdminNavbar } from "./AdminNavbar_BzRQukDX.mjs";
import { t as supabase } from "./supabase_9w9KLbe1.mjs";
//#region src/pages/admin/participants.astro
var participants_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Participants,
	file: () => $$file,
	url: () => $$url
});
var $$Participants = createComponent(async ($$result, $$props, $$slots) => {
	const { data: participants, error } = await supabase.from("participants").select("*").order("created_at", { ascending: false });
	if (error) console.error(error);
	return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Data Peserta" }, { "default": ($$result) => renderTemplate`${renderComponent($$result, "AdminNavbar", $$AdminNavbar, {})}${maybeRenderHead($$result)}<section class="table-card"><div class="search-box"><input id="searchInput" type="text" placeholder="🔍 Cari nama peserta..."><select id="filterCategory"><option value="">Semua Kategori</option><option value="5K Fun Run">5K Fun Run</option><option value="10K Challenge">10K Challenge</option></select></div><h2>Daftar Peserta</h2><table id="participantTable"><thead><tr><th>No</th><th>Kode</th><th>Nama</th><th>Email</th><th>No. WhatsApp</th><th>Kategori</th><th>Status</th><th>Aksi</th></tr></thead><tbody>${participants && participants.length > 0 ? participants.map((item, index) => renderTemplate`<tr><td>${index + 1}</td><td>${item.participant_code}</td><td>${item.fullname}</td><td>${item.email}</td><td>${item.phone}</td><td>${item.category}</td><td>${item.payment_status === "Lunas" ? renderTemplate`<span class="status-paid">✅ Lunas</span>` : renderTemplate`<span class="status-unpaid">🟡 Belum Bayar</span>`}</td><td><a${addAttribute(`/admin/edit/${item.id}`, "href")} class="btn btn-warning">✏ Edit</a><form action="/api/deleteParticipant" method="POST" style="display:inline-block;" onsubmit="return confirm('Yakin ingin menghapus peserta ini?')"><input type="hidden" name="id"${addAttribute(item.id, "value")}><button type="submit" class="btn btn-danger">🗑 Hapus</button></form>${item.payment_status !== "Lunas" && renderTemplate`<form action="/api/updateParticipant" method="POST" style="display:inline-block;"><input type="hidden" name="id"${addAttribute(item.id, "value")}><input type="hidden" name="payment_status" value="Lunas"><button type="submit" class="btn btn-success">✔ Verifikasi</button></form>`}</td></tr>`) : renderTemplate`<tr><td colspan="8" style="text-align:center;padding:35px;">Belum ada peserta yang mendaftar.</td></tr>`}</tbody></table></section><script>

const searchInput = document.getElementById("searchInput");

const filterCategory = document.getElementById("filterCategory");

const rows = document.querySelectorAll("#participantTable tbody tr");

function filterTable(){

const keyword = searchInput.value.toLowerCase();

const category = filterCategory.value;

rows.forEach((row)=>{

const nama = row.children[2].textContent.toLowerCase();

const kategori = row.children[5].textContent.trim();

const cocokNama = nama.includes(keyword);

const cocokKategori = category === "" || kategori === category;

row.style.display = (cocokNama && cocokKategori)

? ""

: "none";

});

}

searchInput.addEventListener("keyup",filterTable);

filterCategory.addEventListener("change",filterTable);

<\/script>` })}`;
}, "C:/Users/ACER/waruturi-funrun/src/pages/admin/participants.astro", void 0);
var $$file = "C:/Users/ACER/waruturi-funrun/src/pages/admin/participants.astro";
var $$url = "/admin/participants";
//#endregion
//#region \0virtual:astro:page:src/pages/admin/participants@_@astro
var page = () => participants_exports;
//#endregion
export { page };
