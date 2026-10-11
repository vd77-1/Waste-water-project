import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/report-CLrlZbnC.js
var $$splitComponentImporter = () => import("./report-BheHzXPb.mjs");
var Route = createFileRoute("/report")({
	validateSearch: (search) => typeof search["booth"] === "string" ? { booth: search["booth"] } : {},
	head: () => ({ meta: [
		{ title: "Report a Water Booth Issue — TRISHNA" },
		{
			name: "description",
			content: "Report a faulty drinking-water booth on the IIT (BHU) campus. No login required — takes under a minute."
		},
		{
			property: "og:title",
			content: "Report a Water Booth Issue — TRISHNA"
		},
		{
			property: "og:description",
			content: "Tell campus maintenance about a faulty water booth."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
