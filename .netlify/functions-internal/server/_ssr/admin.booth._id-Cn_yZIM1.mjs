import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { t as Route } from "./admin.booth._id-5xJTidtJ.mjs";
import { t as Button } from "./button-gEHmkZDI.mjs";
import { D as FlaskConical, G as ArrowLeft, H as BrainCircuit, M as ClipboardList, O as Droplets, a as UserCog, n as Wrench, y as MapPin } from "../_libs/lucide-react.mjs";
import { t as AdminShell } from "./AdminShell-BuyhCR5-.mjs";
import { i as complaints, l as trendData } from "./booths-CvW83BBK.mjs";
import { n as StatusPill } from "./StatusPill-DcaVMS6T.mjs";
import { d as useBooth, p as useMounted } from "./boothStore-Bk6vogBL.mjs";
import { a as CartesianGrid, i as Line, n as YAxis, o as ResponsiveContainer, r as XAxis, s as Tooltip, t as LineChart } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.booth._id-Cn_yZIM1.js
var import_jsx_runtime = require_jsx_runtime();
function Stat({ label, value, sub }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-border bg-card p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] font-semibold uppercase tracking-wider text-muted-foreground",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 font-display text-xl font-bold text-primary",
				children: value
			}),
			sub && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted-foreground",
				children: sub
			})
		]
	});
}
function Chart({ title, data, color, unit }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "card-elevated p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-sm font-semibold",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs text-muted-foreground",
				children: [
					"Last 24 hours (",
					unit,
					")"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 h-44",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
					width: "100%",
					height: "100%",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LineChart, {
						data,
						margin: {
							left: -20,
							right: 8,
							top: 8
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
								strokeDasharray: "3 3",
								stroke: "var(--border)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
								dataKey: "t",
								tick: { fontSize: 11 },
								stroke: "var(--muted-foreground)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
								tick: { fontSize: 11 },
								stroke: "var(--muted-foreground)",
								domain: ["auto", "auto"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: {
								borderRadius: 12,
								border: "1px solid var(--border)",
								background: "var(--card)",
								fontSize: 12
							} }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
								type: "monotone",
								dataKey: "value",
								stroke: color,
								strokeWidth: 2.5,
								dot: false
							})
						]
					})
				})
			})
		]
	});
}
function BoothMonitoringPage() {
	const { id } = Route.useParams();
	const booth = useBooth(id);
	const mounted = useMounted();
	if (!booth) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminShell, {
		active: "Booths",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-xl p-12 text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-2xl font-bold text-primary",
				children: mounted ? `Booth "${id}" not found` : "Loading booth…"
			}), mounted && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				className: "mt-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/admin/dashboard",
					children: "Back to dashboard"
				})
			})]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BoothMonitoring, { booth });
}
function BoothMonitoring({ booth }) {
	const boothComplaints = complaints.filter((c) => c.boothId === booth.id);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminShell, {
		active: "Booths",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-full max-w-7xl p-4 lg:p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/admin/dashboard",
					className: "inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), " Back to dashboard"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex flex-wrap items-start justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "font-display text-3xl font-bold text-primary",
							children: ["Booth ", booth.id]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusPill, { status: booth.status })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 flex items-center gap-1.5 text-sm text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4" }),
							" ",
							booth.location,
							" · ",
							booth.building,
							" · ",
							booth.floor
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wrench, { className: "mr-2 h-4 w-4" }), " Schedule maintenance"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserCog, { className: "mr-2 h-4 w-4" }), " Reassign MTS"] })]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 grid gap-4 lg:grid-cols-[minmax(0,2fr)_minmax(300px,1fr)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
										label: "Water availability",
										value: booth.waterAvailable ? "Available" : "Not available"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
										label: "TDS",
										value: `${booth.tds} ppm`,
										sub: "Safe range < 300"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
										label: "pH",
										value: `${booth.ph}`,
										sub: "Safe range 6.5 – 8.5"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
										label: "Last sensor update",
										value: "10:32 AM",
										sub: "30 August 2026"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-4 md:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chart, {
									title: "TDS trend",
									data: trendData(booth.tds, 12),
									color: "var(--aqua)",
									unit: "ppm"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chart, {
									title: "pH trend",
									data: trendData(booth.ph, .25),
									color: "var(--teal)",
									unit: "pH"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chart, {
								title: "Cooling performance (sensor)",
								data: trendData(14, 2.5),
								color: "var(--primary)",
								unit: "°C outlet temperature"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
								className: "card-elevated overflow-hidden",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "border-b border-border bg-warn-soft px-5 py-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-warn-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrainCircuit, { className: "h-4 w-4" }), " AI Predictive Maintenance"]
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-3 p-5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[11px] font-semibold uppercase tracking-wider text-muted-foreground",
											children: "Predicted malfunction risk"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: `font-display text-2xl font-bold ${booth.risk === "HIGH" ? "text-crit" : booth.risk === "MEDIUM" ? "text-warn-foreground" : "text-ok"}`,
											children: booth.risk
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm text-muted-foreground",
											children: "Recent sensor trends indicate an increased probability of equipment malfunction."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-xl bg-surface p-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[11px] font-semibold uppercase tracking-wider text-muted-foreground",
												children: "Recommended action"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm font-semibold text-foreground",
												children: "Inspect within 24 hours."
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[11px] text-muted-foreground",
											children: "Mock model output — predictive engine not yet connected."
										})
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
								className: "card-elevated p-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									className: "flex items-center gap-2 text-sm font-semibold",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClipboardList, { className: "h-4 w-4 text-aqua" }), " Operations"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
									className: "mt-3 space-y-2 text-sm",
									children: [
										["Last maintenance", booth.lastMaintenance],
										["Open complaints", String(booth.openComplaints)],
										["Assigned MTS", booth.assignedMts],
										["Category", booth.category]
									].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between gap-4 border-b border-border pb-2 last:border-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "text-muted-foreground",
											children: k
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
											className: "text-right font-medium",
											children: v
										})]
									}, k))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
								className: "card-elevated p-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									className: "flex items-center gap-2 text-sm font-semibold",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Droplets, { className: "h-4 w-4 text-aqua" }), " Recent complaints"]
								}), boothComplaints.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-3 space-y-3",
									children: boothComplaints.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "rounded-xl bg-surface p-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm font-semibold",
											children: c.category
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-xs text-muted-foreground",
											children: [
												c.id,
												" · ",
												c.reported,
												" · ",
												c.status
											]
										})]
									}, c.id))
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm text-muted-foreground",
									children: "No complaints logged for this booth."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
								className: "card-elevated p-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
										className: "flex items-center gap-2 text-sm font-semibold",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlaskConical, { className: "h-4 w-4 text-aqua" }), " Public view"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-muted-foreground",
										children: "See exactly what a student sees after scanning this booth's QR code."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										asChild: true,
										variant: "outline",
										size: "sm",
										className: "mt-3 w-full",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/booth/$id",
											params: { id: booth.id },
											children: "Open public booth page"
										})
									})
								]
							})
						]
					})]
				})
			]
		})
	});
}
//#endregion
export { BoothMonitoringPage as component };
