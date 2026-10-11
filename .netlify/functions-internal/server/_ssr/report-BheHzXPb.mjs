import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { r as cn, t as Button } from "./button-gEHmkZDI.mjs";
import { C as Info, I as CircleCheck, T as ImagePlus, y as MapPin } from "../_libs/lucide-react.mjs";
import { a as findBooth } from "./booths-CvW83BBK.mjs";
import { f as useBooths, r as fileReport } from "./boothStore-Bk6vogBL.mjs";
import { t as Input } from "./input-K22du-wM.mjs";
import { t as Label } from "./label-CuiC1qJu.mjs";
import { t as PublicLayout } from "./PublicLayout-DF7jZRWL.mjs";
import { t as Route } from "./report-CLrlZbnC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/report-BheHzXPb.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
var categories = [
	"Water not available",
	"Cooler not working",
	"Poor water quality",
	"Leakage",
	"Other"
];
function ReportPage() {
	const { booth: boothParam } = Route.useSearch();
	const [boothId, setBoothId] = (0, import_react.useState)(boothParam ?? "");
	const [category, setCategory] = (0, import_react.useState)(categories[0]);
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
	const booths = useBooths();
	const booth = findBooth(booths, boothId || "");
	const [ref, setRef] = (0, import_react.useState)("");
	if (submitted) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PublicLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto w-full max-w-xl px-4 py-20 text-center sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-ok-soft",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-8 w-8 text-ok" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-6 font-display text-2xl font-bold text-primary",
				children: "Report submitted"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-sm text-muted-foreground",
				children: [
					"Reference ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						className: "text-foreground",
						children: ref
					}),
					" · Thank you for helping keep campus water safe. Reports are reviewed before they are reflected in the official booth status."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex flex-wrap justify-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "outline",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/find",
						children: "Find another booth"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						children: "Back to home"
					})
				})]
			})
		]
	}) });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PublicLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto w-full max-w-2xl px-4 py-8 sm:px-6 sm:py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl font-bold text-primary",
				children: "Report an issue"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted-foreground",
				children: "No account needed. The campus is open to visitors, so anyone can report a problem."
			}),
			booth ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 rounded-2xl border border-aqua/30 bg-accent/60 p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
						children: "Reporting issue for"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 font-display text-xl font-bold text-primary",
						children: ["Booth ", booth.id]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "flex items-center gap-1.5 text-sm text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4" }), booth.location]
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "boothId",
						children: "Booth ID"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "boothId",
						list: "booth-list",
						value: boothId,
						onChange: (e) => setBoothId(e.target.value),
						placeholder: "e.g. B-17",
						className: "mt-2 h-11"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("datalist", {
						id: "booth-list",
						children: booths.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: b.id,
							children: b.location
						}, b.id))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "card-elevated mt-6 space-y-6 p-6",
				onSubmit: (e) => {
					e.preventDefault();
					if (booth) setRef(fileReport(booth.id, category));
					else setRef("C-2202");
					setSubmitted(true);
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
						className: "text-sm font-semibold",
						children: "Issue category"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 grid gap-2 sm:grid-cols-2",
						children: categories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: `flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-sm font-medium transition-colors ${category === c ? "border-primary bg-accent text-accent-foreground" : "border-border hover:bg-surface"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "radio",
								name: "category",
								value: c,
								checked: category === c,
								onChange: () => setCategory(c),
								className: "h-4 w-4 accent-[var(--primary)]"
							}), c]
						}, c))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "description",
						children: "Description"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						id: "description",
						rows: 4,
						placeholder: "Tell us what you observed — for example, the cooler is running but the water is warm.",
						className: "mt-2"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "photo",
						children: "Photo (optional)"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						htmlFor: "photo",
						className: "mt-2 flex cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-border bg-surface px-6 py-8 text-center transition-colors hover:border-aqua",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePlus, { className: "h-6 w-6 text-aqua" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-2 text-sm font-medium",
								children: "Add a photo of the booth"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-muted-foreground",
								children: "JPG or PNG, up to 5 MB"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "photo",
								type: "file",
								accept: "image/*",
								className: "sr-only"
							})
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						size: "lg",
						className: "w-full",
						children: "Submit Report"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "flex items-start gap-2 text-xs text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, { className: "mt-0.5 h-3.5 w-3.5 shrink-0" }), "Reports are reviewed before they are reflected in the official booth status."]
					})
				]
			})
		]
	}) });
}
//#endregion
export { ReportPage as component };
