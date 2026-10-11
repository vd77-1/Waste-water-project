import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { t as Button } from "./button-gEHmkZDI.mjs";
import { E as Gauge, H as BrainCircuit, K as Activity, O as Droplets, c as ShieldCheck, f as QrCode, o as TriangleAlert, u as ScanLine, y as MapPin } from "../_libs/lucide-react.mjs";
import { t as PublicLayout } from "./PublicLayout-DF7jZRWL.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DG8vdzHS.js
var import_jsx_runtime = require_jsx_runtime();
var hero_booth_default = "/assets/hero-booth-zZG0ZHMt.jpg";
var features = [
	{
		icon: Activity,
		title: "Check Water Status",
		text: "See whether a booth is operational before you walk across campus."
	},
	{
		icon: Gauge,
		title: "Water Quality Information",
		text: "TDS and pH readings, verified and refreshed regularly."
	},
	{
		icon: TriangleAlert,
		title: "Report a Problem",
		text: "Flag a faulty cooler in seconds — no account needed."
	},
	{
		icon: MapPin,
		title: "Find the Nearest Booth",
		text: "Locate the closest working drinking-water point around you."
	}
];
var steps = [
	{
		icon: QrCode,
		title: "QR code on booth",
		text: "Every cooler carries a unique TRISHNA code."
	},
	{
		icon: ScanLine,
		title: "Scan",
		text: "Open the booth page instantly on your phone."
	},
	{
		icon: Droplets,
		title: "View current status",
		text: "Availability, quality and last verification."
	},
	{
		icon: TriangleAlert,
		title: "Report if needed",
		text: "One tap sends the issue to campus maintenance."
	}
];
function Landing() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PublicLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "relative overflow-hidden bg-hero-gradient",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid w-full max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "animate-rise",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary shadow-card",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-3.5 w-3.5" }), " IIT (BHU) Varanasi"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-5 font-display text-5xl font-bold leading-[1.05] text-primary sm:text-6xl",
							children: "TRISHNA"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-xl font-semibold text-brand-gradient sm:text-2xl",
							children: "Smart Water. Smarter Campus."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-xl text-base leading-relaxed text-muted-foreground",
							children: "TRISHNA lets students, staff and visitors check the operational status and water-quality information of drinking-water booths across the campus — from academic departments and hostels to the Central Library. Scan the code on any cooler and know before you drink."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/scan",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScanLine, { className: "mr-2 h-4 w-4" }), " Scan QR / Enter Code"]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								variant: "outline",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/find",
									children: "Find a Water Booth"
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-xs uppercase tracking-wider text-muted-foreground",
							children: "Tracking & Reporting Infrastructure for Safe Hydration Network Access"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute -inset-6 rounded-[2.5rem] bg-aqua/10 blur-2xl",
						"aria-hidden": true
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: hero_booth_default,
						alt: "Smart campus drinking-water booth with sensor display, QR code and connectivity indicators",
						width: 1280,
						height: 1024,
						className: "relative w-full rounded-3xl border border-border bg-card shadow-float"
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto w-full max-w-6xl px-4 py-16 sm:px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
				children: features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "card-elevated p-6 transition-shadow hover:shadow-float",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex h-11 w-11 items-center justify-center rounded-xl bg-aqua-gradient text-primary-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(f.icon, { className: "h-5 w-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 text-base font-semibold",
							children: f.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted-foreground",
							children: f.text
						})
					]
				}, f.title))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto w-full max-w-6xl px-4 py-16 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl font-bold text-primary",
						children: "How TRISHNA works"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-xl text-sm text-muted-foreground",
						children: "Designed around the way people actually use a water cooler: walk up, scan, decide."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-10 grid gap-5 md:grid-cols-4",
						children: steps.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "card-elevated relative p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute right-5 top-5 font-display text-3xl font-bold text-accent",
									children: i + 1
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-6 w-6 text-aqua" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 text-sm font-semibold uppercase tracking-wide",
									children: s.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground",
									children: s.text
								})
							]
						}, s.title))
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto w-full max-w-6xl px-4 py-16 sm:px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "card-elevated grid gap-8 overflow-hidden p-8 md:grid-cols-[1.4fr_1fr] md:p-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrainCircuit, { className: "h-3.5 w-3.5" }), " Coming next"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 text-2xl font-bold text-primary sm:text-3xl",
						children: "Connected sensors and predictive maintenance"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground",
						children: "Future stages of TRISHNA will attach low-cost IoT sensors to each booth to stream TDS, pH, flow and cooling-performance data. Predictive analytics will then flag units that are likely to fail before students notice — turning campus water maintenance from reactive to proactive."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-3 self-center",
					children: [
						"Continuous sensor telemetry",
						"Automated quality alerts",
						"Predicted failure risk scoring"
					].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 rounded-xl bg-surface px-4 py-3 text-sm font-medium",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-teal" }), t]
					}, t))
				})]
			})
		})
	] });
}
//#endregion
export { Landing as component };
