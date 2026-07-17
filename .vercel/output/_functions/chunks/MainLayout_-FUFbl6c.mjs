import { C as createAstro, h as renderHead, s as renderSlot, u as renderTemplate } from "./server_D6Rm-QtC.mjs";
import { t as createComponent } from "./compiler_Db9x-0at.mjs";
//#region src/layouts/MainLayout.astro
createAstro("https://astro.build");
var $$MainLayout = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$MainLayout;
	const { title = "Waru Turi Fun Run" } = Astro.props;
	return renderTemplate`<html lang="id"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><title>${title}</title>${renderHead($$result)}</head><body>${renderSlot($$result, $$slots["default"])}</body></html>`;
}, "C:/Users/ACER/waruturi-funrun/src/layouts/MainLayout.astro", void 0);
//#endregion
export { $$MainLayout as t };
