import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { f as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { r as cn } from "./button-gEHmkZDI.mjs";
import { o as statusMeta, t as CAMPUS_CENTER } from "./booths-CvW83BBK.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/CampusMap-ClW0u5B2.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var STATUS_COLOR = {
	operational: "#16a34a",
	attention: "#f59e0b",
	unavailable: "#f59e0b",
	critical: "#dc2626"
};
/** Real OpenStreetMap / satellite map of IIT (BHU) with one marker per booth. */
function CampusMap({ booths, selectedId, onSelect, className, onMapClick, pending, editable, onMove, userLocation }) {
	const containerRef = (0, import_react.useRef)(null);
	const mapRef = (0, import_react.useRef)(null);
	const leafletRef = (0, import_react.useRef)(null);
	const layerRef = (0, import_react.useRef)(null);
	const markersRef = (0, import_react.useRef)(/* @__PURE__ */ new Map());
	const pendingRef = (0, import_react.useRef)(null);
	const userRef = (0, import_react.useRef)(null);
	const fittedRef = (0, import_react.useRef)(false);
	const [ready, setReady] = (0, import_react.useState)(false);
	const cb = (0, import_react.useRef)({
		onSelect,
		onMapClick,
		onMove
	});
	cb.current = {
		onSelect,
		onMapClick,
		onMove
	};
	(0, import_react.useEffect)(() => {
		let cancelled = false;
		let observer;
		(async () => {
			const L = (await import("../_libs/leaflet.mjs").then((n) => /* @__PURE__ */ __toESM(n.t()))).default;
			if (cancelled || !containerRef.current) return;
			leafletRef.current = L;
			const map = L.map(containerRef.current, {
				center: [CAMPUS_CENTER.lat, CAMPUS_CENTER.lng],
				zoom: 16,
				minZoom: 13,
				zoomControl: true
			});
			const street = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
				maxZoom: 19,
				attribution: "&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors"
			}).addTo(map);
			const satellite = L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}", {
				maxZoom: 19,
				attribution: "Tiles &copy; Esri"
			});
			L.control.layers({
				Map: street,
				Satellite: satellite
			}, void 0, { position: "topright" }).addTo(map);
			layerRef.current = L.layerGroup().addTo(map);
			map.on("click", (e) => cb.current.onMapClick?.({
				lat: e.latlng.lat,
				lng: e.latlng.lng
			}));
			mapRef.current = map;
			observer = new ResizeObserver(() => map.invalidateSize());
			observer.observe(containerRef.current);
			setReady(true);
		})();
		return () => {
			cancelled = true;
			observer?.disconnect();
			mapRef.current?.remove();
			mapRef.current = null;
			layerRef.current = null;
			markersRef.current.clear();
			pendingRef.current = null;
			userRef.current = null;
			fittedRef.current = false;
			setReady(false);
		};
	}, []);
	(0, import_react.useEffect)(() => {
		const L = leafletRef.current;
		const map = mapRef.current;
		const layer = layerRef.current;
		if (!ready || !L || !map || !layer) return;
		layer.clearLayers();
		markersRef.current.clear();
		booths.forEach((b) => {
			const active = selectedId === b.id;
			const color = STATUS_COLOR[b.status];
			const icon = L.divIcon({
				className: "",
				iconSize: [26, 26],
				iconAnchor: [13, 13],
				html: `<span style="display:block;width:${active ? 26 : 20}px;height:${active ? 26 : 20}px;margin:${active ? 0 : 3}px;border-radius:9999px;background:${color};border:3px solid #fff;box-shadow:0 1px 6px rgba(0,0,0,.45);${active ? "outline:3px solid #0b3c5d;" : ""}${b.status === "critical" ? "animation:pulse-crit 1.8s ease-in-out infinite;" : ""}"></span>`
			});
			const marker = L.marker([b.lat, b.lng], {
				icon,
				draggable: !!editable,
				keyboard: true,
				title: `${b.id} · ${b.location}`,
				zIndexOffset: active ? 1e3 : 0
			});
			marker.bindTooltip(`${b.id} · ${statusMeta[b.status].short}`, {
				direction: "top",
				offset: [0, -10]
			});
			marker.on("click", () => cb.current.onSelect?.(b));
			marker.on("dragend", () => {
				const p = marker.getLatLng();
				cb.current.onMove?.(b.id, {
					lat: p.lat,
					lng: p.lng
				});
			});
			marker.addTo(layer);
			markersRef.current.set(b.id, marker);
		});
		if (!fittedRef.current && booths.length > 0) {
			fittedRef.current = true;
			const bounds = L.latLngBounds(booths.map((b) => [b.lat, b.lng]));
			map.fitBounds(bounds, {
				padding: [40, 40],
				maxZoom: 17
			});
		}
	}, [
		ready,
		booths,
		selectedId,
		editable
	]);
	(0, import_react.useEffect)(() => {
		if (!ready || !selectedId) return;
		const m = markersRef.current.get(selectedId);
		if (m) mapRef.current?.panTo(m.getLatLng(), { animate: true });
	}, [ready, selectedId]);
	(0, import_react.useEffect)(() => {
		const L = leafletRef.current;
		const map = mapRef.current;
		if (!ready || !L || !map) return;
		pendingRef.current?.remove();
		pendingRef.current = null;
		if (pending) pendingRef.current = L.marker([pending.lat, pending.lng], {
			icon: L.divIcon({
				className: "",
				iconSize: [30, 30],
				iconAnchor: [15, 15],
				html: `<span style="display:flex;align-items:center;justify-content:center;width:30px;height:30px;border-radius:9999px;background:#0b3c5d;color:#fff;font-weight:700;font-size:18px;border:3px solid #fff;box-shadow:0 1px 8px rgba(0,0,0,.5)">+</span>`
			}),
			interactive: false,
			zIndexOffset: 2e3
		}).addTo(map);
	}, [ready, pending]);
	(0, import_react.useEffect)(() => {
		const L = leafletRef.current;
		const map = mapRef.current;
		if (!ready || !L || !map) return;
		userRef.current?.remove();
		userRef.current = null;
		if (userLocation) userRef.current = L.circleMarker([userLocation.lat, userLocation.lng], {
			radius: 9,
			color: "#fff",
			weight: 3,
			fillColor: "#2563eb",
			fillOpacity: 1
		}).bindTooltip("You are here").addTo(map);
	}, [ready, userLocation]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("relative isolate h-full min-h-[260px] w-full overflow-hidden rounded-2xl border border-border bg-surface", className),
		role: "group",
		"aria-label": "IIT (BHU) campus water booth map",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: containerRef,
				className: cn("absolute inset-0 z-0", onMapClick && "cursor-crosshair")
			}),
			!ready && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 z-10 flex items-center justify-center text-sm text-muted-foreground",
				children: "Loading map…"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-none absolute bottom-6 left-3 z-[500] flex flex-wrap gap-3 rounded-xl border border-border bg-card/90 px-3 py-2 text-[11px] font-medium shadow-card backdrop-blur",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-ok" }), " Operational"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-warn" }), " Attention"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-crit" }), " Critical"]
					})
				]
			})
		]
	});
}
//#endregion
export { CampusMap as t };
