import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { C as createAstro, _ as defineScriptVars, g as addAttribute, i as renderComponent, m as maybeRenderHead, u as renderTemplate } from "./server_D6Rm-QtC.mjs";
import { t as createComponent } from "./compiler_Db9x-0at.mjs";
import { t as $$AdminLayout } from "./AdminLayout_VaADziwp.mjs";
import { t as $$AdminNavbar } from "./AdminNavbar_BzRQukDX.mjs";
import { t as supabase } from "./supabase_9w9KLbe1.mjs";
//#region src/components/admin/AdminChart.astro
createAstro("https://astro.build");
var $$AdminChart = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$AdminChart;
	const { paid = 0, unpaid = 0 } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<div class="table-card"><h2>Status Pembayaran</h2><canvas id="paymentChart"></canvas></div><script>(function(){${defineScriptVars({
		paid,
		unpaid
	})}

import Chart from "chart.js/auto";

new Chart(document.getElementById("paymentChart"),{

type:"doughnut",

data:{

labels:[

"Lunas",

"Belum Bayar"

],

datasets:[{

data:[paid,unpaid]

}]

},

options:{

responsive:true,

plugins:{

legend:{

position:"bottom"

}

}

}

});

})();<\/script>`;
}, "C:/Users/ACER/waruturi-funrun/src/components/admin/AdminChart.astro", void 0);
//#endregion
//#region src/pages/admin/dashboard.astro
var dashboard_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Dashboard,
	file: () => $$file,
	url: () => $$url
});
var $$Dashboard = createComponent(async ($$result, $$props, $$slots) => {
	const { count: totalPeserta } = await supabase.from("participants").select("*", {
		count: "exact",
		head: true
	});
	const { count: paid } = await supabase.from("participants").select("*", {
		count: "exact",
		head: true
	}).eq("payment_status", "Lunas");
	const { count: unpaid } = await supabase.from("participants").select("*", {
		count: "exact",
		head: true
	}).eq("payment_status", "Belum Bayar");
	const { data: incomeData } = await supabase.from("participants").select("price").eq("payment_status", "Lunas");
	const income = incomeData?.reduce((sum, item) => sum + Number(item.price || 0), 0) || 0;
	const { data: participants } = await supabase.from("participants").select("*").order("id", { ascending: false });
	const sheetUrl = "https://docs.google.com/spreadsheets/d/1S2YJO7OBnZKpwMxjmZPClLP_Jq18bMUgzzc4rDfZrnk/edit?gid=0";
	return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, {
		"title": "Dashboard Admin",
		"data-astro-cid-qknfvum6": true
	}, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "AdminNavbar", $$AdminNavbar, { "data-astro-cid-qknfvum6": true })}${maybeRenderHead($$result2)}<div class="dashboard-header" data-astro-cid-qknfvum6><h1 data-astro-cid-qknfvum6>Dashboard Admin</h1><a${addAttribute(sheetUrl, "href")} target="_blank" rel="noopener noreferrer" class="btn-sheet" data-astro-cid-qknfvum6>📊 Buka Google Sheets</a></div><section class="cards" data-astro-cid-qknfvum6>${renderComponent($$result2, "AdminChart", $$AdminChart, {
		"paid": paid,
		"unpaid": unpaid,
		"data-astro-cid-qknfvum6": true
	})}<div class="card" data-astro-cid-qknfvum6><h3 data-astro-cid-qknfvum6>Total Peserta</h3><h1 data-astro-cid-qknfvum6>${totalPeserta ?? 0}</h1></div><div class="card" data-astro-cid-qknfvum6><h3 data-astro-cid-qknfvum6>Sudah Bayar</h3><h1 data-astro-cid-qknfvum6>${paid ?? 0}</h1></div><div class="card" data-astro-cid-qknfvum6><h3 data-astro-cid-qknfvum6>Belum Bayar</h3><h1 data-astro-cid-qknfvum6>${unpaid ?? 0}</h1></div><div class="card" data-astro-cid-qknfvum6><h3 data-astro-cid-qknfvum6>Pendapatan</h3><h1 data-astro-cid-qknfvum6>Rp ${income.toLocaleString("id-ID")}</h1></div></section><section class="table-card" data-astro-cid-qknfvum6><h2 data-astro-cid-qknfvum6>Data Peserta</h2><table data-astro-cid-qknfvum6><thead data-astro-cid-qknfvum6><tr data-astro-cid-qknfvum6><th data-astro-cid-qknfvum6>Kode</th><th data-astro-cid-qknfvum6>Nama</th><th data-astro-cid-qknfvum6>Email</th><th data-astro-cid-qknfvum6>Kategori</th><th data-astro-cid-qknfvum6>Status</th></tr></thead><tbody data-astro-cid-qknfvum6>${participants?.map((item) => renderTemplate`<tr data-astro-cid-qknfvum6><td data-astro-cid-qknfvum6>${item.participant_code}</td><td data-astro-cid-qknfvum6>${item.fullname}</td><td data-astro-cid-qknfvum6>${item.email}</td><td data-astro-cid-qknfvum6>${item.category}</td><td data-astro-cid-qknfvum6>${item.payment_status === "Lunas" ? "✅ Lunas" : "🟡 Belum Bayar"}</td></tr>`)}</tbody></table></section>` })}`;
}, "C:/Users/ACER/waruturi-funrun/src/pages/admin/dashboard.astro", void 0);
var $$file = "C:/Users/ACER/waruturi-funrun/src/pages/admin/dashboard.astro";
var $$url = "/admin/dashboard";
//#endregion
//#region \0virtual:astro:page:src/pages/admin/dashboard@_@astro
var page = () => dashboard_exports;
//#endregion
export { page };
