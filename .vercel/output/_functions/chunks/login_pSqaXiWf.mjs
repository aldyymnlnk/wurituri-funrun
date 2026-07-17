import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { i as renderComponent, m as maybeRenderHead, u as renderTemplate, v as createRenderInstruction } from "./server_D6Rm-QtC.mjs";
import { t as createComponent } from "./compiler_Db9x-0at.mjs";
import { t as $$AdminLayout } from "./AdminLayout_VaADziwp.mjs";
//#region node_modules/astro/dist/runtime/server/render/script.js
async function renderScript(result, id) {
	const inlined = result.inlinedScripts.get(id);
	let content = "";
	if (inlined != null) {
		if (inlined) content = `<script type="module">${inlined}<\/script>`;
	} else {
		const resolved = await result.resolve(id);
		content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"><\/script>`;
	}
	return createRenderInstruction({
		type: "script",
		id,
		content
	});
}
//#endregion
//#region src/pages/admin/login.astro
var login_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Login,
	file: () => $$file,
	url: () => $$url
});
var $$Login = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, {
		"title": "Login Admin",
		"auth": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<main class="login-page"><div class="login-card"><h1>Admin Login</h1><form id="loginForm"><div class="form-group"><label for="email">Email</label><input id="email" type="email" placeholder="Masukkan Email" required></div><div class="form-group"><label for="password">Password</label><input id="password" type="password" placeholder="Masukkan Password" required></div><button type="submit" class="submit-btn">Login</button><p id="error"></p></form></div></main>` })}${renderScript($$result, "C:/Users/ACER/waruturi-funrun/src/pages/admin/login.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/ACER/waruturi-funrun/src/pages/admin/login.astro", void 0);
var $$file = "C:/Users/ACER/waruturi-funrun/src/pages/admin/login.astro";
var $$url = "/admin/login";
//#endregion
//#region \0virtual:astro:page:src/pages/admin/login@_@astro
var page = () => login_exports;
//#endregion
export { page };
