import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { t as Button } from "./button-gEHmkZDI.mjs";
import { C as Info, D as FlaskConical, O as Droplets, g as Navigation, j as Clock, o as TriangleAlert, u as ScanLine, y as MapPin } from "../_libs/lucide-react.mjs";
import { n as StatusPill } from "./StatusPill-DcaVMS6T.mjs";
import { d as useBooth, p as useMounted } from "./boothStore-Bk6vogBL.mjs";
import { t as Route } from "./booth._id-BNhgvzD1.mjs";
import { t as PublicLayout } from "./PublicLayout-DF7jZRWL.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/booth._id-BdCyYP0V.js
var import_jsx_runtime = require_jsx_runtime();
function bannerTone(b) {
	switch (b.status) {
		case "operational": return "bg-ok-soft border-ok/25";
		case "critical": return "bg-crit-soft border-crit/25";
		default: return "bg-warn-soft border-warn/30";
	}
}
function headline(b) {
	switch (b.status) {
		case "operational": return "You can drink here";
		case "unavailable": return "No water right now";
		case "attention": return "Usable, but needs attention";
		case "critical": return "This booth is out of service";
	}
}
function QualityStat({ label, value, note, icon: Icon, good }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-border bg-surface p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
					children: label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4 text-aqua" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 font-display text-2xl font-bold text-primary",
				children: value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: `mt-1 text-xs font-medium ${good ? "text-ok" : "text-warn-foreground"}`,
				children: note
			})
		]
	});
}
function BoothStatusPage() {
	const { id } = Route.useParams();
	const booth = useBooth(id);
	const mounted = useMounted();
	if (!booth) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PublicLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto w-full max-w-xl px-4 py-20 text-center sm:px-6",
		children: mounted ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "font-display text-2xl font-bold text-primary",
				children: [
					"Booth \"",
					id,
					"\" not found"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-muted-foreground",
				children: "Check the code printed on the cooler, or scan its QR code again."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex flex-wrap justify-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/scan",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScanLine, { className: "mr-2 h-4 w-4" }), " Scan / enter code"]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "outline",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/find",
						children: "Find a booth"
					})
				})]
			})
		] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted-foreground",
			children: "Loading booth…"
		})
	}) });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BoothView, { booth });
}
function BoothView({ booth }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PublicLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto w-full max-w-3xl px-4 py-8 sm:px-6 sm:py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Booth" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-md bg-accent px-2 py-0.5 text-accent-foreground",
						children: booth.id
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["· ", booth.category] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-2xl font-bold text-primary sm:text-3xl",
				children: booth.location
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1 flex items-center gap-1.5 text-sm text-muted-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4" }),
					booth.building,
					" · ",
					booth.floor
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `mt-6 rounded-2xl border p-6 shadow-card ${bannerTone(booth)}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusPill, {
						status: booth.status,
						size: "lg"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 font-display text-2xl font-bold text-primary sm:text-3xl",
						children: headline(booth)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 grid gap-3 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl bg-card/80 p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
								children: "Water availability"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: `mt-1 text-lg font-bold ${booth.waterAvailable ? "text-ok" : "text-crit"}`,
								children: booth.waterAvailable ? "Available" : "Not available"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl bg-card/80 p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
								children: "Last verified"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 flex items-center gap-1.5 text-sm font-semibold text-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-4 w-4 text-muted-foreground" }), booth.lastVerified]
							})]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "card-elevated mt-6 p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-base font-semibold",
						children: "Water quality"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 grid gap-3 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QualityStat, {
							label: "TDS",
							value: `${booth.tds} ppm`,
							note: booth.tds < 300 ? "Within safe drinking range" : "Above preferred range",
							icon: Droplets,
							good: booth.tds < 300
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QualityStat, {
							label: "pH",
							value: `${booth.ph}`,
							note: booth.ph >= 6.5 && booth.ph <= 8.5 ? "Neutral and safe" : "Outside preferred range",
							icon: FlaskConical,
							good: booth.ph >= 6.5 && booth.ph <= 8.5
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 flex items-start gap-2 text-xs text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, { className: "mt-0.5 h-3.5 w-3.5 shrink-0" }), "Data automatically updated every 24 hours."]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid gap-3 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					size: "lg",
					variant: booth.status === "operational" ? "outline" : "default",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/report",
						search: { booth: booth.id },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "mr-2 h-4 w-4" }), "Report a Problem"]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					size: "lg",
					variant: booth.status === "operational" ? "default" : "outline",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/find",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, { className: "mr-2 h-4 w-4" }), "Find Nearest Booth"]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 text-center text-xs text-muted-foreground",
				children: "Status is derived from verified reports and periodic checks. Prototype data shown."
			})
		]
	}) });
}
//#endregion
export { BoothStatusPage as component };
