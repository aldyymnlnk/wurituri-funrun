import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { t as supabase } from "./supabase_9w9KLbe1.mjs";
import * as XLSX from "xlsx";
//#region src/pages/api/exportExcel.ts
var exportExcel_exports = /* @__PURE__ */ __exportAll({ GET: () => GET });
var GET = async () => {
	const { data } = await supabase.from("participants").select("*");
	const workbook = XLSX.utils.book_new();
	const worksheet = XLSX.utils.json_to_sheet(data || []);
	XLSX.utils.book_append_sheet(workbook, worksheet, "Participants");
	const buffer = XLSX.write(workbook, {
		type: "buffer",
		bookType: "xlsx"
	});
	return new Response(buffer, { headers: {
		"Content-Type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
		"Content-Disposition": "attachment; filename=participants.xlsx"
	} });
};
//#endregion
//#region \0virtual:astro:page:src/pages/api/exportExcel@_@ts
var page = () => exportExcel_exports;
//#endregion
export { page };
