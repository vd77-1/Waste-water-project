import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { r as cn, t as Button } from "./button-gEHmkZDI.mjs";
import { F as CirclePlay, I as CircleCheck, j as Clock, n as Wrench, o as TriangleAlert, y as MapPin } from "../_libs/lucide-react.mjs";
import { t as AdminShell } from "./AdminShell-BuyhCR5-.mjs";
import { c as tasks } from "./booths-CvW83BBK.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/mts-BTuL9ETC.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var priorityTone = {
	Urgent: "bg-crit-soft text-crit",
	High: "bg-warn-soft text-warn-foreground",
	Normal: "bg-accent text-accent-foreground"
};
var statusTone = {
	Assigned: "bg-info-soft text-primary",
	"In Progress": "bg-warn-soft text-warn-foreground",
	Resolved: "bg-ok-soft text-ok"
};
function MtsDashboard() {
	const [tasks$1, setTasks] = (0, import_react.useState)(tasks);
	const update = (id, status, message) => {
		setTasks((prev) => prev.map((t) => t.id === id ? {
			...t,
			status
		} : t));
		toast.success(message);
	};
	const stats = [
		{
			label: "Assigned Issues",
			value: tasks$1.filter((t) => t.status === "Assigned").length,
			icon: Wrench,
			tone: "text-primary bg-accent"
		},
		{
			label: "Urgent Issues",
			value: tasks$1.filter((t) => t.priority === "Urgent" && t.status !== "Resolved").length,
			icon: TriangleAlert,
			tone: "text-crit bg-crit-soft"
		},
		{
			label: "Pending Maintenance",
			value: tasks$1.filter((t) => t.status !== "Resolved").length,
			icon: Clock,
			tone: "text-warn-foreground bg-warn-soft"
		},
		{
			label: "Recently Resolved",
			value: tasks$1.filter((t) => t.status === "Resolved").length,
			icon: CircleCheck,
			tone: "text-ok bg-ok-soft"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminShell, {
		active: "Tasks",
		role: "Maintenance Staff (MTS)",
		name: "R. Prasad",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-full max-w-5xl p-4 lg:p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-2xl font-bold text-primary",
					children: "My maintenance tasks"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted-foreground",
					children: "30 August 2026 · Zone: Academic & Library block"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4",
					children: stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "card-elevated flex items-center gap-3 px-4 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("flex h-10 w-10 items-center justify-center rounded-xl", s.tone),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-5 w-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] font-semibold uppercase tracking-wider text-muted-foreground",
							children: s.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-2xl font-bold leading-tight text-primary",
							children: s.value
						})] })]
					}, s.label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 space-y-3",
					children: tasks$1.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
						className: "card-elevated p-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-start justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap items-center gap-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
												to: "/admin/booth/$id",
												params: { id: t.boothId },
												className: "font-display text-base font-bold text-primary hover:underline",
												children: ["Booth ", t.boothId]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: cn("rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider", priorityTone[t.priority]),
												children: t.priority
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: cn("rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider", statusTone[t.status]),
												children: t.status
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-1 flex items-center gap-1.5 text-xs text-muted-foreground",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3.5 w-3.5" }),
											" ",
											t.location,
											" · Reported ",
											t.reported
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm font-medium text-foreground",
										children: t.problem
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "sm",
										variant: "outline",
										disabled: t.status !== "Assigned",
										onClick: () => update(t.id, "In Progress", `${t.id} accepted`),
										children: "Accept Task"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										size: "sm",
										variant: "outline",
										disabled: t.status === "Resolved",
										onClick: () => update(t.id, "In Progress", `${t.id} marked in progress`),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CirclePlay, { className: "mr-1.5 h-4 w-4" }), " In Progress"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										size: "sm",
										disabled: t.status === "Resolved",
										onClick: () => update(t.id, "Resolved", `${t.id} resolved`),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mr-1.5 h-4 w-4" }), " Mark Resolved"]
									})
								]
							})]
						})
					}, t.id))
				})
			]
		})
	});
}
//#endregion
export { MtsDashboard as component };
