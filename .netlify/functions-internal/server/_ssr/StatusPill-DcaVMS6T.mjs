import { f as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { r as cn } from "./button-gEHmkZDI.mjs";
import { I as CircleCheck, O as Droplets, P as CircleX, o as TriangleAlert } from "../_libs/lucide-react.mjs";
import { o as statusMeta } from "./booths-CvW83BBK.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/StatusPill-DcaVMS6T.js
var import_jsx_runtime = require_jsx_runtime();
var icons = {
	operational: CircleCheck,
	attention: TriangleAlert,
	unavailable: Droplets,
	critical: CircleX
};
function StatusPill({ status, size = "md", className }) {
	const meta = statusMeta[status];
	const Icon = icons[status];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("inline-flex items-center gap-2 rounded-full font-semibold uppercase tracking-wide", meta.chip, size === "lg" ? "px-4 py-2 text-sm" : size === "sm" ? "px-2.5 py-1 text-[11px]" : "px-3 py-1.5 text-xs", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
			className: size === "lg" ? "h-5 w-5" : "h-3.5 w-3.5",
			"aria-hidden": true
		}), meta.label]
	});
}
function StatusDot({ status, pulse = true }) {
	const meta = statusMeta[status];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-block h-2.5 w-2.5 shrink-0 rounded-full", meta.dot, status === "critical" && pulse && "animate-pulse-crit"),
		"aria-hidden": true
	});
}
//#endregion
export { StatusPill as n, StatusDot as t };
