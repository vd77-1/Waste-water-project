import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, ImagePlus, Info, MapPin } from "lucide-react";
import { useState } from "react";
import { PublicLayout } from "@/components/trishna/PublicLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { findBooth } from "@/data/booths";
import { fileReport, useBooths } from "@/data/boothStore";

export const Route = createFileRoute("/report")({
  validateSearch: (search: Record<string, unknown>): { booth?: string } =>
    typeof search["booth"] === "string" ? { booth: search["booth"] } : {},
  head: () => ({
    meta: [
      { title: "Report a Water Booth Issue — TRISHNA" },
      {
        name: "description",
        content:
          "Report a faulty drinking-water booth on the IIT (BHU) campus. No login required — takes under a minute.",
      },
      { property: "og:title", content: "Report a Water Booth Issue — TRISHNA" },
      {
        property: "og:description",
        content: "Tell campus maintenance about a faulty water booth.",
      },
    ],
  }),
  component: ReportPage,
});

const categories = [
  "Water not available",
  "Cooler not working",
  "Poor water quality",
  "Leakage",
  "Other",
];

function ReportPage() {
  const { booth: boothParam } = Route.useSearch();
  const [boothId, setBoothId] = useState(boothParam ?? "");
  const [category, setCategory] = useState<string>(categories[0]!);
  const [submitted, setSubmitted] = useState(false);
  const booths = useBooths();
  const booth = findBooth(booths, boothId || "");
  const [ref, setRef] = useState("");

  if (submitted) {
    return (
      <PublicLayout>
        <div className="mx-auto w-full max-w-xl px-4 py-20 text-center sm:px-6">
          <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-ok-soft">
            <CheckCircle2 className="h-8 w-8 text-ok" />
          </span>
          <h1 className="mt-6 font-display text-2xl font-bold text-primary">Report submitted</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Reference <strong className="text-foreground">{ref}</strong> · Thank you for helping
            keep campus water safe. Reports are reviewed before they are reflected in the official
            booth status.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild variant="outline">
              <Link to="/find">Find another booth</Link>
            </Button>
            <Button asChild>
              <Link to="/">Back to home</Link>
            </Button>
          </div>
        </div>
      </PublicLayout>
    );
  }

  return (
    <PublicLayout>
      <div className="mx-auto w-full max-w-2xl px-4 py-8 sm:px-6 sm:py-12">
        <h1 className="font-display text-3xl font-bold text-primary">Report an issue</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          No account needed. The campus is open to visitors, so anyone can report a problem.
        </p>

        {booth ? (
          <div className="mt-6 rounded-2xl border border-aqua/30 bg-accent/60 p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Reporting issue for
            </p>
            <p className="mt-1 font-display text-xl font-bold text-primary">Booth {booth.id}</p>
            <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              {booth.location}
            </p>
          </div>
        ) : (
          <div className="mt-6">
            <Label htmlFor="boothId">Booth ID</Label>
            <Input
              id="boothId"
              list="booth-list"
              value={boothId}
              onChange={(e) => setBoothId(e.target.value)}
              placeholder="e.g. B-17"
              className="mt-2 h-11"
            />
            <datalist id="booth-list">
              {booths.map((b) => (
                <option key={b.id} value={b.id}>
                  {b.location}
                </option>
              ))}
            </datalist>
          </div>
        )}

        <form
          className="card-elevated mt-6 space-y-6 p-6"
          onSubmit={(e) => {
            e.preventDefault();
            if (booth) setRef(fileReport(booth.id, category));
            else setRef("C-2202");
            setSubmitted(true);
          }}
        >
          <fieldset>
            <legend className="text-sm font-semibold">Issue category</legend>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {categories.map((c) => (
                <label
                  key={c}
                  className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-sm font-medium transition-colors ${
                    category === c
                      ? "border-primary bg-accent text-accent-foreground"
                      : "border-border hover:bg-surface"
                  }`}
                >
                  <input
                    type="radio"
                    name="category"
                    value={c}
                    checked={category === c}
                    onChange={() => setCategory(c)}
                    className="h-4 w-4 accent-[var(--primary)]"
                  />
                  {c}
                </label>
              ))}
            </div>
          </fieldset>

          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              rows={4}
              placeholder="Tell us what you observed — for example, the cooler is running but the water is warm."
              className="mt-2"
            />
          </div>

          <div>
            <Label htmlFor="photo">Photo (optional)</Label>
            <label
              htmlFor="photo"
              className="mt-2 flex cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-border bg-surface px-6 py-8 text-center transition-colors hover:border-aqua"
            >
              <ImagePlus className="h-6 w-6 text-aqua" />
              <span className="mt-2 text-sm font-medium">Add a photo of the booth</span>
              <span className="text-xs text-muted-foreground">JPG or PNG, up to 5 MB</span>
              <input id="photo" type="file" accept="image/*" className="sr-only" />
            </label>
          </div>

          <Button type="submit" size="lg" className="w-full">
            Submit Report
          </Button>

          <p className="flex items-start gap-2 text-xs text-muted-foreground">
            <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" />
            Reports are reviewed before they are reflected in the official booth status.
          </p>
        </form>
      </div>
    </PublicLayout>
  );
}
