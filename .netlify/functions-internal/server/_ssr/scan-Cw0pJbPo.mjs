import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { g as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { t as Button } from "./button-gEHmkZDI.mjs";
import { L as CircleAlert, S as Keyboard, V as Camera, W as ArrowRight, i as VideoOff, u as ScanLine, w as ImageUp, x as LoaderCircle } from "../_libs/lucide-react.mjs";
import { a as findBooth } from "./booths-CvW83BBK.mjs";
import { f as useBooths, o as parseBoothCode } from "./boothStore-Bk6vogBL.mjs";
import { t as Input } from "./input-K22du-wM.mjs";
import { t as PublicLayout } from "./PublicLayout-DF7jZRWL.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/scan-Cw0pJbPo.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/** Live camera QR scanner (falls back to uploading a photo of the QR). */
function BoothScanner({ onScan }) {
	const videoRef = (0, import_react.useRef)(null);
	const fileRef = (0, import_react.useRef)(null);
	const onScanRef = (0, import_react.useRef)(onScan);
	onScanRef.current = onScan;
	const [state, setState] = (0, import_react.useState)("starting");
	const [error, setError] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		let scanner;
		let cancelled = false;
		let last = {
			text: "",
			at: 0
		};
		(async () => {
			try {
				const QrScanner = (await import("../_libs/qr-scanner.mjs").then((n) => n.t)).default;
				if (cancelled || !videoRef.current) return;
				if (!await QrScanner.hasCamera()) throw new Error("No camera found on this device.");
				scanner = new QrScanner(videoRef.current, (result) => {
					const now = Date.now();
					if (result.data === last.text && now - last.at < 3e3) return;
					last = {
						text: result.data,
						at: now
					};
					onScanRef.current(result.data);
				}, {
					preferredCamera: "environment",
					highlightScanRegion: true,
					highlightCodeOutline: true,
					returnDetailedScanResult: true,
					maxScansPerSecond: 8
				});
				await scanner.start();
				if (!cancelled) setState("scanning");
			} catch (e) {
				if (cancelled) return;
				const msg = e instanceof Error ? e.message : String(e);
				setError(/denied|permission|NotAllowed/i.test(msg) ? "Camera permission was blocked. Allow camera access in your browser, or upload a photo of the QR instead." : /secure|https/i.test(msg) ? "Camera needs HTTPS (or localhost). Upload a photo of the QR instead." : msg || "Could not start the camera.");
				setState("error");
			}
		})();
		return () => {
			cancelled = true;
			scanner?.stop();
			scanner?.destroy();
		};
	}, []);
	async function onFile(file) {
		if (!file) return;
		setBusy(true);
		try {
			const result = await (await import("../_libs/qr-scanner.mjs").then((n) => n.t)).default.scanImage(file, { returnDetailedScanResult: true });
			onScanRef.current(result.data);
		} catch {
			onScanRef.current("");
		} finally {
			setBusy(false);
			if (fileRef.current) fileRef.current.value = "";
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative aspect-square w-full overflow-hidden rounded-2xl border border-border bg-black sm:aspect-video",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
				ref: videoRef,
				className: "h-full w-full object-cover",
				muted: true,
				playsInline: true
			}),
			state === "starting" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0 flex flex-col items-center justify-center gap-2 text-sm text-white/80",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-6 w-6 animate-spin" }), " Starting camera…"]
			}),
			state === "error" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0 flex flex-col items-center justify-center gap-3 bg-card p-6 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VideoOff, { className: "h-8 w-8 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-sm text-sm text-muted-foreground",
					children: error
				})]
			}),
			state === "scanning" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "pointer-events-none absolute inset-x-0 bottom-3 text-center text-xs font-medium text-white drop-shadow",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, { className: "mr-1 inline h-3.5 w-3.5" }), " Point the camera at the booth's QR code"]
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-3 flex items-center gap-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				ref: fileRef,
				type: "file",
				accept: "image/*",
				className: "hidden",
				onChange: (e) => onFile(e.target.files?.[0])
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				type: "button",
				variant: "outline",
				size: "sm",
				disabled: busy,
				onClick: () => fileRef.current?.click(),
				children: [busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageUp, { className: "mr-2 h-4 w-4" }), "Upload a QR photo"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs text-muted-foreground",
				children: "Handy on a desktop without a camera."
			})
		]
	})] });
}
function ScanPage() {
	const navigate = useNavigate();
	const booths = useBooths();
	const [tab, setTab] = (0, import_react.useState)("scan");
	const [code, setCode] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	function open(raw) {
		const id = parseBoothCode(raw);
		if (!id) {
			setError("That doesn't look like a TRISHNA booth code.");
			return false;
		}
		const booth = findBooth(booths, id);
		if (!booth) {
			setError(`No booth found for "${id}". Check the code printed under the QR and try again.`);
			return false;
		}
		setError("");
		navigate({
			to: "/booth/$id",
			params: { id: booth.id }
		});
		return true;
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PublicLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto w-full max-w-2xl px-4 py-8 sm:px-6 sm:py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl font-bold text-primary",
				children: "Check a water booth"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted-foreground",
				children: "Scan the QR code on the cooler, or type the booth code printed next to it."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid grid-cols-2 gap-2 rounded-xl bg-surface p-1",
				children: [{
					key: "scan",
					label: "Scan QR",
					icon: ScanLine
				}, {
					key: "code",
					label: "Enter code",
					icon: Keyboard
				}].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					"aria-pressed": tab === t.key,
					onClick: () => {
						setTab(t.key);
						setError("");
					},
					className: `flex items-center justify-center gap-2 rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors ${tab === t.key ? "bg-card text-primary shadow-card" : "text-muted-foreground"}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(t.icon, { className: "h-4 w-4" }),
						" ",
						t.label
					]
				}, t.key))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6",
				children: tab === "scan" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BoothScanner, { onScan: (text) => open(text) }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "card-elevated space-y-4 p-6",
					onSubmit: (e) => {
						e.preventDefault();
						open(code);
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							htmlFor: "booth-code",
							className: "text-sm font-semibold",
							children: "Booth code"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "booth-code",
							value: code,
							onChange: (e) => {
								setCode(e.target.value);
								setError("");
							},
							list: "scan-booth-list",
							placeholder: "e.g. B-17",
							autoComplete: "off",
							autoCapitalize: "characters",
							className: "h-12 text-lg font-semibold uppercase tracking-wider"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("datalist", {
							id: "scan-booth-list",
							children: booths.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: b.id,
								children: b.location
							}, b.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "submit",
							size: "lg",
							className: "w-full",
							disabled: !code.trim(),
							children: ["View booth status ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-2 h-4 w-4" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
							children: "Try a demo code"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 flex flex-wrap gap-2",
							children: booths.slice(0, 6).map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => open(b.id),
								className: "rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold text-primary hover:bg-accent",
								children: b.id
							}, b.id))
						})] })
					]
				})
			}),
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				role: "alert",
				className: "mt-4 flex items-start gap-2 rounded-xl border border-crit/25 bg-crit-soft p-4 text-sm text-crit",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "mt-0.5 h-4 w-4 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: error })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-8 text-center text-xs text-muted-foreground",
				children: [
					"Need a QR to test with? Open",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/manage",
						className: "font-semibold text-primary underline-offset-4 hover:underline",
						children: "Add & manage booths"
					}),
					" ",
					"and click the QR button on any booth."
				]
			})
		]
	}) });
}
//#endregion
export { ScanPage as component };
