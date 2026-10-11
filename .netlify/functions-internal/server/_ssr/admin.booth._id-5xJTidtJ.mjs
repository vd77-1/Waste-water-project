import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.booth._id-5xJTidtJ.js
var $$splitComponentImporter = () => import("./admin.booth._id-Cn_yZIM1.mjs");
var Route = createFileRoute("/admin/booth/$id")({
	head: ({ params }) => ({ meta: [{ title: `Booth ${params.id} monitoring — TRISHNA` }, {
		name: "robots",
		content: "noindex"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
