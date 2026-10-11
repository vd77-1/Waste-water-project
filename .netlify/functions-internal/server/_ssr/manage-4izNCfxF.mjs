import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { r as cn, t as Button } from "./button-gEHmkZDI.mjs";
import { _ as Move, d as RotateCcw, f as QrCode, k as Download, m as Plus, p as Printer, s as Trash2, t as X, y as MapPin } from "../_libs/lucide-react.mjs";
import { a as DialogOverlay$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { o as statusMeta } from "./booths-CvW83BBK.mjs";
import { t as StatusDot } from "./StatusPill-DcaVMS6T.mjs";
import { a as moveBooth, c as resetBooths, f as useBooths, l as setBoothStatus, s as removeBooth, t as addBooth, u as suggestBoothId } from "./boothStore-Bk6vogBL.mjs";
import { t as CampusMap } from "./CampusMap-ClW0u5B2.mjs";
import { t as Input } from "./input-K22du-wM.mjs";
import { t as Label } from "./label-CuiC1qJu.mjs";
import { t as PublicLayout } from "./PublicLayout-DF7jZRWL.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as require_lib } from "../_libs/qrcode.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/manage-4izNCfxF.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var import_lib = /* @__PURE__ */ __toESM(require_lib());
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
/** Shows (and lets you download / print) the QR code for a booth. */
function QrDialog({ booth, onClose }) {
	const [dataUrl, setDataUrl] = (0, import_react.useState)("");
	const url = booth ? `${window.location.origin}/booth/${encodeURIComponent(booth.id)}` : "";
	(0, import_react.useEffect)(() => {
		if (!booth) {
			setDataUrl("");
			return;
		}
		import_lib.toDataURL(url, {
			width: 560,
			margin: 2,
			errorCorrectionLevel: "M"
		}).then(setDataUrl);
	}, [booth, url]);
	function print() {
		const w = window.open("", "_blank", "width=480,height=640");
		if (!w || !booth) return;
		w.document.write(`<title>${booth.id}</title><body style="font-family:sans-serif;text-align:center;padding:24px"><h2 style="margin:0">TRISHNA · Booth ${booth.id}</h2><p>${booth.location}</p><img src="${dataUrl}" style="width:320px;height:320px"/><p style="font-size:12px">Scan to check water status</p><script>window.onload=()=>window.print()<\/script></body>`);
		w.document.close();
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: !!booth,
		onOpenChange: (o) => !o && onClose(),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "max-w-sm",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, { children: [
					"Booth ",
					booth?.id,
					" · QR code"
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Stick this on the booth. Scanning it on the Scan page opens its live status." })] }),
				dataUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: dataUrl,
					alt: `QR code for booth ${booth?.id}`,
					className: "mx-auto h-64 w-64"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-auto h-64 w-64 animate-pulse rounded-xl bg-surface" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "break-all text-center text-[11px] text-muted-foreground",
					children: url
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						className: "flex-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: dataUrl,
							download: `trishna-${booth?.id ?? "booth"}.png`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "mr-2 h-4 w-4" }), " Download"]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						className: "flex-1",
						onClick: print,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, { className: "mr-2 h-4 w-4" }), " Print"]
					})]
				})
			]
		})
	});
}
var categories = [
	"Academic",
	"Hostel",
	"Library",
	"Administrative",
	"Common Area"
];
var statuses = [
	"operational",
	"attention",
	"unavailable",
	"critical"
];
var selectClass = "h-10 w-full rounded-md border border-input bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring";
function ManagePage() {
	const booths = useBooths();
	const [pending, setPending] = (0, import_react.useState)(null);
	const [selected, setSelected] = (0, import_react.useState)();
	const [editable, setEditable] = (0, import_react.useState)(false);
	const [qrBooth, setQrBooth] = (0, import_react.useState)(null);
	const [error, setError] = (0, import_react.useState)("");
	const [form, setForm] = (0, import_react.useState)({
		id: "",
		location: "",
		building: "",
		floor: "Ground Floor",
		category: "Academic",
		status: "operational"
	});
	const suggestedId = (0, import_react.useMemo)(() => suggestBoothId(booths), [booths]);
	const sorted = (0, import_react.useMemo)(() => [...booths].sort((a, b) => Number(!!b.custom) - Number(!!a.custom) || a.id.localeCompare(b.id)), [booths]);
	function submit(e) {
		e.preventDefault();
		const result = addBooth({
			...form,
			id: form.id || suggestedId,
			lat: pending?.lat ?? NaN,
			lng: pending?.lng ?? NaN
		});
		if (!result.ok) {
			setError(result.error);
			return;
		}
		setError("");
		setPending(null);
		setSelected(result.booth.id);
		setForm((f) => ({
			...f,
			id: "",
			location: "",
			building: ""
		}));
		toast.success(`Booth ${result.booth.id} added`);
		setQrBooth(result.booth);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PublicLayout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl font-bold text-primary",
				children: "Add & manage booths"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-2xl text-sm text-muted-foreground",
				children: "Prototype tool: click the map to drop a new booth, fill in the details, then print its QR code. Booths are saved in this browser only."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid gap-6 lg:grid-cols-[1.3fr_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-[420px] lg:h-[560px]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CampusMap, {
							booths,
							selectedId: selected,
							onSelect: (b) => setSelected(b.id),
							onMapClick: editable ? void 0 : (p) => setPending(p),
							pending,
							editable,
							onMove: (id, p) => {
								moveBooth(id, p.lat, p.lng);
								toast.success(`Moved ${id}`);
							}
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex cursor-pointer items-center gap-2 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "checkbox",
								checked: editable,
								onChange: (e) => {
									setEditable(e.target.checked);
									setPending(null);
								},
								className: "h-4 w-4 accent-[var(--primary)]"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Move, { className: "h-4 w-4 text-muted-foreground" }),
							"Drag existing booths to fix their position on the map"
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: submit,
					className: "card-elevated space-y-4 p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-lg font-bold text-primary",
							children: "New booth"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "flex items-center gap-2 rounded-lg bg-surface px-3 py-2 text-xs text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 shrink-0 text-aqua" }), pending ? `Location chosen: ${pending.lat.toFixed(5)}, ${pending.lng.toFixed(5)}` : editable ? "Turn off \"drag booths\" to place a new one." : "Click the map to choose the booth's location."]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "b-id",
								children: "Booth code"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "b-id",
								className: "mt-1 uppercase",
								value: form.id,
								placeholder: suggestedId,
								onChange: (e) => setForm({
									...form,
									id: e.target.value
								})
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "b-cat",
								children: "Category"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								id: "b-cat",
								className: `${selectClass} mt-1`,
								value: form.category,
								onChange: (e) => setForm({
									...form,
									category: e.target.value
								}),
								children: categories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: c }, c))
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "b-loc",
							children: "Location name"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "b-loc",
							className: "mt-1",
							placeholder: "e.g. Department of Electronics Engineering",
							value: form.location,
							onChange: (e) => setForm({
								...form,
								location: e.target.value
							})
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "b-bld",
								children: "Building"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "b-bld",
								className: "mt-1",
								value: form.building,
								onChange: (e) => setForm({
									...form,
									building: e.target.value
								})
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "b-floor",
								children: "Floor"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "b-floor",
								className: "mt-1",
								value: form.floor,
								onChange: (e) => setForm({
									...form,
									floor: e.target.value
								})
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "b-status",
							children: "Starting status"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							id: "b-status",
							className: `${selectClass} mt-1`,
							value: form.status,
							onChange: (e) => setForm({
								...form,
								status: e.target.value
							}),
							children: statuses.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: s,
								children: statusMeta[s].short
							}, s))
						})] }),
						error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							role: "alert",
							className: "rounded-lg bg-crit-soft px-3 py-2 text-sm text-crit",
							children: error
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "submit",
							size: "lg",
							className: "w-full",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "mr-2 h-4 w-4" }), " Add booth"]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display text-xl font-bold text-primary",
						children: [
							"All booths (",
							booths.length,
							")"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						size: "sm",
						onClick: () => {
							if (window.confirm("Remove added booths and restore the demo data?")) {
								resetBooths();
								setPending(null);
								toast.success("Demo data restored");
							}
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "mr-2 h-4 w-4" }), " Reset demo data"]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card",
					children: sorted.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: `flex flex-wrap items-center gap-3 px-4 py-3 ${selected === b.id ? "bg-surface" : ""}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusDot, { status: b.status }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setSelected(b.id),
								className: "min-w-0 flex-1 text-left",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "font-display text-sm font-bold text-primary",
									children: [b.id, b.custom && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "ml-2 rounded bg-accent px-1.5 py-0.5 text-[10px] uppercase text-accent-foreground",
										children: "added"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "truncate text-xs text-muted-foreground",
									children: b.location
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								"aria-label": `Status of ${b.id}`,
								className: `${selectClass} w-44`,
								value: b.status,
								onChange: (e) => setBoothStatus(b.id, e.target.value),
								children: statuses.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: s,
									children: statusMeta[s].short
								}, s))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "outline",
								size: "sm",
								onClick: () => setQrBooth(b),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QrCode, { className: "mr-1.5 h-4 w-4" }), " QR"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "ghost",
								size: "sm",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/booth/$id",
									params: { id: b.id },
									children: "Open"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon",
								"aria-label": `Delete ${b.id}`,
								onClick: () => {
									if (window.confirm(`Delete booth ${b.id}?`)) removeBooth(b.id);
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4 text-crit" })
							})
						]
					}, b.id))
				})]
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QrDialog, {
		booth: qrBooth,
		onClose: () => setQrBooth(null)
	})] });
}
//#endregion
export { ManagePage as component };
