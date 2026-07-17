import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { _ as defineScriptVars, i as renderComponent, m as maybeRenderHead, u as renderTemplate } from "./server_D6Rm-QtC.mjs";
import { t as createComponent } from "./compiler_Db9x-0at.mjs";
import { t as $$AdminLayout } from "./AdminLayout_VaADziwp.mjs";
import { t as $$AdminNavbar } from "./AdminNavbar_BzRQukDX.mjs";
import { t as supabase } from "./supabase_9w9KLbe1.mjs";
//#region src/pages/admin/statistics.astro
var statistics_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Statistics,
	file: () => $$file,
	url: () => $$url
});
var $$Statistics = createComponent(async ($$result, $$props, $$slots) => {
	const { data: participants } = await supabase.from("participants").select("*");
	const list = participants ?? [];
	function countBy(arr, key) {
		return arr.reduce((acc, item) => {
			const val = item[key] || "Tidak diisi";
			acc[val] = (acc[val] || 0) + 1;
			return acc;
		}, {});
	}
	const byCategory = countBy(list, "category");
	const byJersey = countBy(list, "jersey_size");
	const byPaymentStatus = countBy(list, "payment_status");
	const revenueByMethod = list.filter((p) => p.payment_status === "Lunas").reduce((acc, item) => {
		const method = item.payment_method || "Lainnya";
		acc[method] = (acc[method] || 0) + Number(item.price || 0);
		return acc;
	}, {});
	const totalRevenue = Object.values(revenueByMethod).reduce((sum, val) => sum + val, 0);
	const byGender = countBy(list, "gender");
	const byBloodType = countBy(list, "blood_type");
	const byDate = list.reduce((acc, item) => {
		if (!item.created_at) return acc;
		const date = new Date(item.created_at).toISOString().slice(0, 10);
		acc[date] = (acc[date] || 0) + 1;
		return acc;
	}, {});
	const sortedDates = Object.keys(byDate).sort();
	const trendLabels = sortedDates;
	const trendValues = sortedDates.map((d) => byDate[d]);
	return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, {
		"title": "Statistik",
		"data-astro-cid-yvhkoans": true
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "AdminNavbar", $$AdminNavbar, { "data-astro-cid-yvhkoans": true })}${maybeRenderHead($$result)}<div class="dashboard-header" data-astro-cid-yvhkoans><h1 data-astro-cid-yvhkoans>Statistik</h1></div><section class="stats-grid" data-astro-cid-yvhkoans><div class="table-card" data-astro-cid-yvhkoans><h2 data-astro-cid-yvhkoans>Peserta per Kategori</h2><div class="chart-box" data-astro-cid-yvhkoans><canvas id="categoryChart" data-astro-cid-yvhkoans></canvas></div></div><div class="table-card" data-astro-cid-yvhkoans><h2 data-astro-cid-yvhkoans>Ukuran Jersey</h2><div class="chart-box" data-astro-cid-yvhkoans><canvas id="jerseyChart" data-astro-cid-yvhkoans></canvas></div></div><div class="table-card" data-astro-cid-yvhkoans><h2 data-astro-cid-yvhkoans>Status Pembayaran</h2><div class="chart-box" data-astro-cid-yvhkoans><canvas id="paymentChart" data-astro-cid-yvhkoans></canvas></div></div><div class="table-card" data-astro-cid-yvhkoans><h2 data-astro-cid-yvhkoans>Jenis Kelamin</h2><div class="chart-box" data-astro-cid-yvhkoans><canvas id="genderChart" data-astro-cid-yvhkoans></canvas></div></div><div class="table-card" data-astro-cid-yvhkoans><h2 data-astro-cid-yvhkoans>Golongan Darah</h2><div class="chart-box" data-astro-cid-yvhkoans><canvas id="bloodChart" data-astro-cid-yvhkoans></canvas></div></div><div class="table-card wide" data-astro-cid-yvhkoans><h2 data-astro-cid-yvhkoans>Tren Pendaftaran Harian</h2><div class="chart-box" data-astro-cid-yvhkoans><canvas id="trendChart" data-astro-cid-yvhkoans></canvas></div></div></section><section class="table-card" data-astro-cid-yvhkoans><h2 data-astro-cid-yvhkoans>Ringkasan Pendapatan per Metode</h2><table data-astro-cid-yvhkoans><thead data-astro-cid-yvhkoans><tr data-astro-cid-yvhkoans><th data-astro-cid-yvhkoans>Metode Pembayaran</th><th data-astro-cid-yvhkoans>Total</th></tr></thead><tbody data-astro-cid-yvhkoans>${Object.entries(revenueByMethod).map(([method, total]) => renderTemplate`<tr data-astro-cid-yvhkoans><td data-astro-cid-yvhkoans>${method}</td><td data-astro-cid-yvhkoans>Rp ${total.toLocaleString("id-ID")}</td></tr>`)}<tr data-astro-cid-yvhkoans><td data-astro-cid-yvhkoans><strong data-astro-cid-yvhkoans>Total Keseluruhan</strong></td><td data-astro-cid-yvhkoans><strong data-astro-cid-yvhkoans>Rp ${totalRevenue.toLocaleString("id-ID")}</strong></td></tr></tbody></table></section>` })}<script>(function(){${defineScriptVars({
		byCategory,
		byJersey,
		byPaymentStatus,
		byGender,
		byBloodType,
		trendLabels,
		trendValues
	})}

import Chart from "chart.js/auto";

function makeBarChart(id, labelsData, title) {
    const el = document.getElementById(id);
    if (!el) return;

    new Chart(el, {
        type: "bar",
        data: {
            labels: Object.keys(labelsData),
            datasets: [
                {
                    label: title,
                    data: Object.values(labelsData),
                    backgroundColor: "#2E7D32",
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
        },
    });
}

function makePieChart(id, labelsData) {
    const el = document.getElementById(id);
    if (!el) return;

    new Chart(el, {
        type: "doughnut",
        data: {
            labels: Object.keys(labelsData),
            datasets: [
                {
                    data: Object.values(labelsData),
                    backgroundColor: [
                        "#2E7D32",
                        "#FB8C00",
                        "#1565C0",
                        "#C62828",
                        "#6A1B9A",
                    ],
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { position: "bottom", labels: { boxWidth: 10, font: { size: 10 } } } },
        },
    });
}

makeBarChart("categoryChart", byCategory, "Peserta");
makeBarChart("jerseyChart", byJersey, "Jumlah");
makePieChart("paymentChart", byPaymentStatus);
makePieChart("genderChart", byGender);
makePieChart("bloodChart", byBloodType);

const trendEl = document.getElementById("trendChart");
if (trendEl) {
    new Chart(trendEl, {
        type: "line",
        data: {
            labels: trendLabels,
            datasets: [
                {
                    label: "Pendaftar per Hari",
                    data: trendValues,
                    borderColor: "#2E7D32",
                    backgroundColor: "rgba(46,125,50,0.1)",
                    fill: true,
                    tension: 0.3,
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
        },
    });
}

})();<\/script>`;
}, "C:/Users/ACER/waruturi-funrun/src/pages/admin/statistics.astro", void 0);
var $$file = "C:/Users/ACER/waruturi-funrun/src/pages/admin/statistics.astro";
var $$url = "/admin/statistics";
//#endregion
//#region \0virtual:astro:page:src/pages/admin/statistics@_@astro
var page = () => statistics_exports;
//#endregion
export { page };
