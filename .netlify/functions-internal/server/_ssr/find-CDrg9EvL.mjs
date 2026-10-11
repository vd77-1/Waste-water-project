import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { t as Button } from "./button-gEHmkZDI.mjs";
import { A as Crosshair, l as Search, x as LoaderCircle, y as MapPin } from "../_libs/lucide-react.mjs";
import { t as CAMPUS_CENTER } from "./booths-CvW83BBK.mjs";
import { n as StatusPill } from "./StatusPill-DcaVMS6T.mjs";
import { f as useBooths, i as formatDistance, n as distanceMetres } from "./boothStore-Bk6vogBL.mjs";
import { t as CampusMap } from "./CampusMap-ClW0u5B2.mjs";
import { t as Input } from "./input-K22du-wM.mjs";
import { t as PublicLayout } from "./PublicLayout-DF7jZRWL.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/find-CDrg9EvL.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var filters = [
	"All",
	"Operational only",
	"Academic",
	"Hostel",
	"Library"
];
function FindPage() {
	const [query, setQuery] = (0, import_react.useState)("");
	const [filter, setFilter] = (0, import_react.useState)("All");
	const [selected, setSelected] = (0, import_react.useState)();
	const booths = useBooths();
	const [me, setMe] = (0, import_react.useState)(null);
	const [locating, setLocating] = (0, import_react.useState)(false);
	const [locError, setLocError] = (0, import_react.useState)("");
	const origin = me ?? CAMPUS_CENTER;
	function locate() {
		if (!("geolocation" in navigator)) {
			setLocError("Location isn't available in this browser.");
			return;
		}
		setLocating(true);
		setLocError("");
		navigator.geolocation.getCurrentPosition((pos) => {
			setMe({
				lat: pos.coords.latitude,
				lng: pos.coords.longitude
			});
			setLocating(false);
		}, () => {
			setLocError("Couldn't get your location. Allow location access and try again.");
			setLocating(false);
		}, {
			enableHighAccuracy: true,
			timeout: 1e4
		});
	}
	const results = (0, import_react.useMemo)(() => {
		return booths.map((b) => ({
			...b,
			distance: distanceMetres(origin.lat, origin.lng, b.lat, b.lng)
		})).filter((b) => {
			const q = query.trim().toLowerCase();
			const matches = !q || b.id.toLowerCase().includes(q) || b.location.toLowerCase().includes(q) || b.building.toLowerCase().includes(q);
			const cat = filter === "All" || filter === "Operational only" && b.status === "operational" || b.category === filter;
			return matches && cat;
		}).sort((a, b) => a.distance - b.distance);
	}, [
		booths,
		query,
		filter,
		origin.lat,
		origin.lng
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PublicLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl font-bold text-primary",
				children: "Find a water booth near you"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-2xl text-sm text-muted-foreground",
				children: me ? "Distances are measured from your current location." : "Distances are measured from the campus centre. Tap \"Use my location\" for distances from where you are."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex flex-col gap-3 sm:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: query,
						onChange: (e) => setQuery(e.target.value),
						placeholder: "Search department, hostel or booth ID",
						className: "h-11 pl-9",
						"aria-label": "Search booths"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					size: "lg",
					className: "shrink-0",
					onClick: locate,
					disabled: locating,
					children: [locating ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crosshair, { className: "mr-2 h-4 w-4" }), "Use my location"]
				})]
			}),
			locError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-xs text-crit",
				children: locError
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 flex flex-wrap gap-2",
				children: filters.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setFilter(f),
					"aria-pressed": filter === f,
					className: `rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${filter === f ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-muted-foreground hover:bg-accent"}`,
					children: f
				}, f))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-6 lg:grid-cols-[1fr_1.1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "order-2 space-y-3 lg:order-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
						children: [results.length, " booths nearby"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-h-[560px] space-y-3 overflow-y-auto pr-1",
						children: [results.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							onMouseEnter: () => setSelected(b.id),
							className: "card-elevated flex flex-wrap items-center gap-4 p-4 transition-shadow hover:shadow-float",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
											className: "font-display text-base font-bold text-primary",
											children: ["Booth ", b.id]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-md bg-accent px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent-foreground",
											children: b.category
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "truncate text-sm text-muted-foreground",
										children: b.location
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-1 flex items-center gap-1 text-xs font-semibold text-foreground",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3.5 w-3.5 text-aqua" }),
											formatDistance(b.distance),
											" away ·",
											" ",
											b.waterAvailable ? "Water available" : "No water"
										]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusPill, {
									status: b.status,
									size: "sm"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "sm",
									variant: "outline",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/booth/$id",
										params: { id: b.id },
										children: "View Booth"
									})
								})]
							})]
						}, b.id)), results.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "rounded-xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground",
							children: "No booths match your search."
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "order-1 h-[320px] lg:order-2 lg:sticky lg:top-24 lg:h-[560px]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CampusMap, {
						booths: results,
						selectedId: selected,
						onSelect: (b) => setSelected(b.id),
						userLocation: me
					})
				})]
			})
		]
	}) });
}
//#endregion
export { FindPage as component };
