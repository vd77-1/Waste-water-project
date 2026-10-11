import { useSyncExternalStore } from "react";
import {
  booths as seedBooths,
  boothKey,
  findBooth,
  type Booth,
  type BoothCategory,
  type BoothStatus,
} from "./booths";

/**
 * Prototype booth store. Booths live in localStorage so that booths you add,
 * status changes and reports survive a page refresh. Swap this file for a real
 * API / database later - every page only talks to the functions below.
 */
const STORAGE_KEY = "trishna.booths.v1";
const listeners = new Set<() => void>();
let cache: Booth[] | null = null;

function load(): Booth[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as Booth[];
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch {
    /* ignore corrupt / unavailable storage */
  }
  return seedBooths;
}

function getSnapshot(): Booth[] {
  if (cache === null) cache = load();
  return cache;
}

function getServerSnapshot(): Booth[] {
  return seedBooths;
}

function emit() {
  listeners.forEach((l) => l());
}

function commit(next: Booth[]) {
  cache = next;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    /* storage full / blocked - keep in-memory state */
  }
  emit();
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  const onStorage = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY) {
      cache = null; // another tab changed it
      emit();
    }
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", onStorage);
  };
}

export function useBooths(): Booth[] {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export function useBooth(id: string | undefined): Booth | undefined {
  const list = useBooths();
  return id ? findBooth(list, id) : undefined;
}

const nowLabel = () =>
  new Date().toLocaleString("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

const hasWater = (s: BoothStatus) => s === "operational" || s === "attention";

const riskFor = (status: BoothStatus): Booth["risk"] =>
  status === "critical" || status === "attention" ? "HIGH" : "LOW";

export function suggestBoothId(list: Booth[] = getSnapshot()): string {
  const used = list
    .filter((b) => /^P-?\d+$/i.test(b.id))
    .map((b) => Number(b.id.replace(/\D/g, "")));
  const next = (used.length ? Math.max(...used) : 0) + 1;
  return `P-${String(next).padStart(2, "0")}`;
}

export type NewBooth = {
  id: string;
  location: string;
  building: string;
  floor: string;
  category: BoothCategory;
  status: BoothStatus;
  lat: number;
  lng: number;
};

export function addBooth(
  input: NewBooth,
): { ok: true; booth: Booth } | { ok: false; error: string } {
  const id = input.id.trim().toUpperCase();
  if (!/^[A-Z]+-?\d+$/.test(id)) {
    return { ok: false, error: "Code must be letters then numbers, e.g. P-01 or LAB-7." };
  }
  const list = getSnapshot();
  if (list.some((b) => boothKey(b.id) === boothKey(id))) {
    return { ok: false, error: `A booth with code ${id} already exists.` };
  }
  if (!input.location.trim()) return { ok: false, error: "Enter a location name." };
  if (!Number.isFinite(input.lat) || !Number.isFinite(input.lng)) {
    return { ok: false, error: "Click the map to choose where the booth is." };
  }

  const booth: Booth = {
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
    custom: true,
  };
  commit([...list, booth]);
  return { ok: true, booth };
}

export function updateBooth(id: string, patch: Partial<Booth>) {
  commit(getSnapshot().map((b) => (b.id === id ? { ...b, ...patch } : b)));
}

export function setBoothStatus(id: string, status: BoothStatus) {
  updateBooth(id, {
    status,
    waterAvailable: hasWater(status),
    risk: riskFor(status),
    lastVerified: nowLabel(),
  });
}

export function moveBooth(id: string, lat: number, lng: number) {
  updateBooth(id, { lat: Number(lat.toFixed(6)), lng: Number(lng.toFixed(6)) });
}

export function removeBooth(id: string) {
  commit(getSnapshot().filter((b) => b.id !== id));
}

export function resetBooths() {
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    /* ignore */
  }
  cache = seedBooths;
  emit();
}

/** A public report raises the open-complaint count and flags the booth. */
export function fileReport(id: string, category: string): string {
  const booth = findBooth(getSnapshot(), id);
  const ref = `C-${2200 + Math.floor(Math.random() * 800)}`;
  if (!booth) return ref;
  let status = booth.status;
  if (status === "operational")
    status = category === "Water not available" ? "unavailable" : "attention";
  updateBooth(booth.id, {
    status,
    waterAvailable: hasWater(status),
    risk: riskFor(status),
    openComplaints: booth.openComplaints + 1,
  });
  return ref;
}

/** Accepts a raw code ("B-17"), "TRISHNA:B-17", or a URL ending in /booth/B-17. */
export function parseBoothCode(text: string): string | null {
  const t = text.trim();
  if (!t) return null;
  const fromUrl = t.match(/\/booth\/([^/?#\s]+)/i);
  if (fromUrl?.[1]) return decodeURIComponent(fromUrl[1]);
  const prefixed = t.match(/^trishna[:\s]+(.+)$/i);
  if (prefixed?.[1]) return prefixed[1].trim();
  return t;
}

/** Great-circle distance in metres. */
export function distanceMetres(aLat: number, aLng: number, bLat: number, bLng: number): number {
  const R = 6371000;
  const toRad = (d: number) => (d * Math.PI) / 180;
  const dLat = toRad(bLat - aLat);
  const dLng = toRad(bLng - aLng);
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(aLat)) * Math.cos(toRad(bLat)) * Math.sin(dLng / 2) ** 2;
  return Math.round(2 * R * Math.asin(Math.sqrt(h)));
}

export const formatDistance = (m: number) => (m >= 1000 ? `${(m / 1000).toFixed(1)} km` : `${m} m`);

const noopSubscribe = () => () => {};
/** false during SSR / first render, true once running in the browser (avoids a "not found" flash for locally-added booths). */
export function useMounted(): boolean {
  return useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false,
  );
}
