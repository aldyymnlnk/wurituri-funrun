import type { APIRoute } from "astro";
import * as XLSX from "xlsx";
import { supabase } from "../../lib/supabase";

export const GET: APIRoute = async () => {

const {data}=await supabase

.from("participants")

.select("*");

const workbook=XLSX.utils.book_new();

const worksheet=XLSX.utils.json_to_sheet(data||[]);

XLSX.utils.book_append_sheet(

workbook,

worksheet,

"Participants"

);

const buffer=XLSX.write(

workbook,

{

type:"buffer",

bookType:"xlsx"

}

);

return new Response(buffer,{

headers:{

"Content-Type":"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",

"Content-Disposition":"attachment; filename=participants.xlsx"

}

});

};