import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/booth._id-BNhgvzD1.js
var $$splitComponentImporter = () => import("./booth._id-BdCyYP0V.mjs");
var Route = createFileRoute("/booth/$id")({
	head: ({ params }) => ({ meta: [{ title: `Booth ${params.id} — Live Status | TRISHNA` }, {
		name: "description",
		content: `Live status, water availability and quality for booth ${params.id} at IIT (BHU).`
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
