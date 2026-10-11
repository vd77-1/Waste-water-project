import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { g as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { r as cn, t as Button } from "./button-gEHmkZDI.mjs";
import { K as Activity, W as ArrowRight, h as OctagonAlert, l as Search, o as TriangleAlert, r as Waves } from "../_libs/lucide-react.mjs";
import { t as AdminShell } from "./AdminShell-BuyhCR5-.mjs";
import { o as statusMeta, s as summary } from "./booths-CvW83BBK.mjs";
import { t as StatusDot } from "./StatusPill-DcaVMS6T.mjs";
import { f as useBooths } from "./boothStore-Bk6vogBL.mjs";
import { t as CampusMap } from "./CampusMap-ClW0u5B2.mjs";
import { t as Input } from "./input-K22du-wM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.dashboard-P43yA73L.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var order = {
	critical: 0,
	attention: 1,
	unavailable: 2,
	operational: 3
};
function AdminDashboard() {
	const navigate = useNavigate();
	const [selected, setSelected] = (0, import_react.useState)();
	const [query, setQuery] = (0, import_react.useState)("");
	const booths = useBooths();
	const s = summary(booths);
	const list = (0, import_react.useMemo)(() => booths.filter((b) => !query.trim() || b.id.toLowerCase().includes(query.toLowerCase()) || b.location.toLowerCase().includes(query.toLowerCase())).sort((a, b) => order[a.status] - order[b.status] || a.id.localeCompare(b.id)), [booths, query]);
	const cards = [
		{
			label: "Total Booths",
			value: s.total,
			icon: Waves,
			tone: "text-primary",
			bg: "bg-accent"
		},
		{
			label: "Operational",
			value: s.operational,
			icon: Activity,
			tone: "text-ok",
			bg: "bg-ok-soft"
		},
		{
			label: "Attention Needed",
			value: s.attention,
			icon: TriangleAlert,
			tone: "text-warn-foreground",
			bg: "bg-warn-soft"
		},
		{
			label: "Critical",
			value: s.critical,
			icon: OctagonAlert,
			tone: "text-crit",
			bg: "bg-crit-soft"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminShell, {
		active: "Overview",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex h-full flex-col gap-4 p-4 lg:h-[calc(100vh-3.5rem)] lg:p-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid shrink-0 grid-cols-2 gap-3 lg:grid-cols-4",
				children: cards.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "card-elevated flex items-center gap-3 px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("flex h-10 w-10 items-center justify-center rounded-xl", c.bg),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, { className: cn("h-5 w-5", c.tone) })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-semibold uppercase tracking-wider text-muted-foreground",
						children: c.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-2xl font-bold leading-tight text-primary",
						children: c.value
					})] })]
				}, c.label))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid min-h-0 flex-1 gap-4 lg:grid-cols-[minmax(0,3.4fr)_minmax(280px,1fr)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "min-h-[420px] lg:min-h-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CampusMap, {
						booths,
						selectedId: selected,
						onSelect: (b) => {
							setSelected(b.id);
							navigate({
								to: "/admin/booth/$id",
								params: { id: b.id }
							});
						},
						className: "shadow-card"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "card-elevated flex min-h-0 flex-col overflow-hidden",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-b border-border p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground",
								children: "Water Booths"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative mt-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: query,
									onChange: (e) => setQuery(e.target.value),
									placeholder: "Search booths",
									className: "h-9 pl-9 text-sm",
									"aria-label": "Search booths"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "min-h-0 flex-1 divide-y divide-border overflow-y-auto",
							children: list.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/admin/booth/$id",
								params: { id: b.id },
								onMouseEnter: () => setSelected(b.id),
								className: cn("flex items-center gap-3 px-4 py-3 transition-colors hover:bg-surface", selected === b.id && "bg-surface"),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusDot, { status: b.status }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0 flex-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-display text-sm font-bold text-primary",
												children: b.id
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "truncate text-xs text-muted-foreground",
												children: b.location
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: cn("mt-0.5 text-[10px] font-bold uppercase tracking-wider", statusMeta[b.status].text),
												children: statusMeta[b.status].label
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 shrink-0 text-muted-foreground" })
								]
							}) }, b.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-t border-border p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "outline",
								size: "sm",
								className: "w-full",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/mts",
									children: "Open maintenance queue"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "sm",
								className: "mt-2 w-full",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/manage",
									children: "Add / manage booths"
								})
							})]
						})
					]
				})]
			})]
		})
	});
}
//#endregion
export { AdminDashboard as component };
