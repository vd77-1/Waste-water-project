import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { a as findBooth, n as boothKey, r as booths } from "./booths-CvW83BBK.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/boothStore-Bk6vogBL.js
var import_react = /* @__PURE__ */ __toESM(require_react());
/**
* Prototype booth store. Booths live in localStorage so that booths you add,
* status changes and reports survive a page refresh. Swap this file for a real
* API / database later - every page only talks to the functions below.
*/
var STORAGE_KEY = "trishna.booths.v1";
var listeners = /* @__PURE__ */ new Set();
var cache = null;
function load() {
	try {
		const raw = window.localStorage.getItem(STORAGE_KEY);
		if (raw) {
			const parsed = JSON.parse(raw);
			if (Array.isArray(parsed) && parsed.length > 0) return parsed;
		}
	} catch {}
	return booths;
}
function getSnapshot() {
	if (cache === null) cache = load();
	return cache;
}
function getServerSnapshot() {
	return booths;
}
function emit() {
	listeners.forEach((l) => l());
}
function commit(next) {
	cache = next;
	try {
		window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
	} catch {}
	emit();
}
function subscribe(listener) {
	listeners.add(listener);
	const onStorage = (e) => {
		if (e.key === STORAGE_KEY) {
			cache = null;
			emit();
		}
	};
	window.addEventListener("storage", onStorage);
	return () => {
		listeners.delete(listener);
		window.removeEventListener("storage", onStorage);
	};
}
function useBooths() {
	return (0, import_react.useSyncExternalStore)(subscribe, getSnapshot, getServerSnapshot);
}
function useBooth(id) {
	const list = useBooths();
	return id ? findBooth(list, id) : void 0;
}
var nowLabel = () => (/* @__PURE__ */ new Date()).toLocaleString("en-IN", {
	day: "2-digit",
	month: "long",
	year: "numeric",
	hour: "2-digit",
	minute: "2-digit"
});
var hasWater = (s) => s === "operational" || s === "attention";
var riskFor = (status) => status === "critical" || status === "attention" ? "HIGH" : "LOW";
function suggestBoothId(list = getSnapshot()) {
	const used = list.filter((b) => /^P-?\d+$/i.test(b.id)).map((b) => Number(b.id.replace(/\D/g, "")));
	const next = (used.length ? Math.max(...used) : 0) + 1;
	return `P-${String(next).padStart(2, "0")}`;
}
function addBooth(input) {
	const id = input.id.trim().toUpperCase();
	if (!/^[A-Z]+-?\d+$/.test(id)) return {
		ok: false,
		error: "Code must be letters then numbers, e.g. P-01 or LAB-7."
	};
	const list = getSnapshot();
	if (list.some((b) => boothKey(b.id) === boothKey(id))) return {
		ok: false,
		error: `A booth with code ${id} already exists.`
	};
	if (!input.location.trim()) return {
		ok: false,
		error: "Enter a location name."
	};
	if (!Number.isFinite(input.lat) || !Number.isFinite(input.lng)) return {
		ok: false,
		error: "Click the map to choose where the booth is."
	};
	const booth = {
		id,
		location: input.location.trim(),
		building: input.building.trim() || input.location.trim(),
		floor: input.floor.trim() || "Ground Floor",
		category: input.category,
		status: input.status,
		waterAvailable: hasWater(input.status),
		tds: 140,
		ph: 7.2,
		lastVerified: nowLabel(),
		lastMaintenance: "—",
		openComplaints: 0,
		assignedMts: "Unassigned",
		risk: riskFor(input.status),
		lat: Number(input.lat.toFixed(6)),
		lng: Number(input.lng.toFixed(6)),
		custom: true
	};
	commit([...list, booth]);
	return {
		ok: true,
		booth
	};
}
function updateBooth(id, patch) {
	commit(getSnapshot().map((b) => b.id === id ? {
		...b,
		...patch
	} : b));
}
function setBoothStatus(id, status) {
	updateBooth(id, {
		status,
		waterAvailable: hasWater(status),
		risk: riskFor(status),
		lastVerified: nowLabel()
	});
}
function moveBooth(id, lat, lng) {
	updateBooth(id, {
		lat: Number(lat.toFixed(6)),
		lng: Number(lng.toFixed(6))
	});
}
function removeBooth(id) {
	commit(getSnapshot().filter((b) => b.id !== id));
}
function resetBooths() {
	try {
		window.localStorage.removeItem(STORAGE_KEY);
	} catch {}
	cache = booths;
	emit();
}
/** A public report raises the open-complaint count and flags the booth. */
function fileReport(id, category) {
	const booth = findBooth(getSnapshot(), id);
	const ref = `C-${2200 + Math.floor(Math.random() * 800)}`;
	if (!booth) return ref;
	let status = booth.status;
	if (status === "operational") status = category === "Water not available" ? "unavailable" : "attention";
	updateBooth(booth.id, {
		status,
		waterAvailable: hasWater(status),
		risk: riskFor(status),
		openComplaints: booth.openComplaints + 1
	});
	return ref;
}
/** Accepts a raw code ("B-17"), "TRISHNA:B-17", or a URL ending in /booth/B-17. */
function parseBoothCode(text) {
	const t = text.trim();
	if (!t) return null;
	const fromUrl = t.match(/\/booth\/([^/?#\s]+)/i);
	if (fromUrl?.[1]) return decodeURIComponent(fromUrl[1]);
	const prefixed = t.match(/^trishna[:\s]+(.+)$/i);
	if (prefixed?.[1]) return prefixed[1].trim();
	return t;
}
/** Great-circle distance in metres. */
function distanceMetres(aLat, aLng, bLat, bLng) {
	const R = 6371e3;
	const toRad = (d) => d * Math.PI / 180;
	const dLat = toRad(bLat - aLat);
	const dLng = toRad(bLng - aLng);
	const h = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(aLat)) * Math.cos(toRad(bLat)) * Math.sin(dLng / 2) ** 2;
	return Math.round(2 * R * Math.asin(Math.sqrt(h)));
}
var formatDistance = (m) => m >= 1e3 ? `${(m / 1e3).toFixed(1)} km` : `${m} m`;
var noopSubscribe = () => () => {};
/** false during SSR / first render, true once running in the browser (avoids a "not found" flash for locally-added booths). */
function useMounted() {
	return (0, import_react.useSyncExternalStore)(noopSubscribe, () => true, () => false);
}
//#endregion
export { moveBooth as a, resetBooths as c, useBooth as d, useBooths as f, formatDistance as i, setBoothStatus as l, distanceMetres as n, parseBoothCode as o, useMounted as p, fileReport as r, removeBooth as s, addBooth as t, suggestBoothId as u };
