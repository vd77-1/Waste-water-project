import { createFileRoute, Link } from "@tanstack/react-router";
import { Crosshair, MapPin, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { CampusMap } from "@/components/trishna/CampusMap";
import { PublicLayout } from "@/components/trishna/PublicLayout";
import { StatusPill } from "@/components/trishna/StatusPill";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { booths } from "@/data/booths";

export const Route = createFileRoute("/find")({
  head: () => ({
    meta: [
      { title: "Find the Nearest Water Booth — TRISHNA" },
      {
        name: "description",
        content:
          "Locate the nearest working drinking-water booth on the IIT (BHU) campus with distance and live operational status.",
      },
      { property: "og:title", content: "Find the Nearest Water Booth — TRISHNA" },
      {
        property: "og:description",
        content: "Nearby campus drinking-water booths with distance and status.",
      },
    ],
  }),
  component: FindPage,
});

const filters = ["All", "Operational only", "Academic", "Hostel", "Library"] as const;

function FindPage() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [selected, setSelected] = useState<string | undefined>();

  const results = useMemo(() => {
    return booths
      .filter((b) => {
        const q = query.trim().toLowerCase();
        const matches = !q || b.id.toLowerCase().includes(q) || b.location.toLowerCase().includes(q) || b.building.toLowerCase().includes(q);
        const cat =
          filter === "All" ||
          (filter === "Operational only" && b.status === "operational") ||
          b.category === filter;
        return matches && cat;
      })
      .sort((a, b) => a.distance - b.distance);
  }, [query, filter]);

  return (
    <PublicLayout>
      <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
        <h1 className="font-display text-3xl font-bold text-primary">Find a water booth near you</h1>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          Distances are shown from your approximate location on campus. Prototype uses mock location data.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search department, hostel or booth ID"
              className="h-11 pl-9"
              aria-label="Search booths"
            />
          </div>
          <Button variant="outline" size="lg" className="shrink-0">
            <Crosshair className="mr-2 h-4 w-4" /> Use my location
          </Button>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${
                filter === f
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-muted-foreground hover:bg-accent"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <div className="order-2 space-y-3 lg:order-1">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {results.length} booths nearby
            </p>
            <div className="max-h-[560px] space-y-3 overflow-y-auto pr-1">
              {results.map((b) => (
                <article
                  key={b.id}
                  onMouseEnter={() => setSelected(b.id)}
                  className="card-elevated flex flex-wrap items-center gap-4 p-4 transition-shadow hover:shadow-float"
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <h2 className="font-display text-base font-bold text-primary">Booth {b.id}</h2>
                      <span className="rounded-md bg-accent px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent-foreground">
                        {b.category}
                      </span>
                    </div>
                    <p className="truncate text-sm text-muted-foreground">{b.location}</p>
                    <p className="mt-1 flex items-center gap-1 text-xs font-semibold text-foreground">
                      <MapPin className="h-3.5 w-3.5 text-aqua" />
                      {b.distance} m away · {b.waterAvailable ? "Water available" : "No water"}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <StatusPill status={b.status} size="sm" />
                    <Button asChild size="sm" variant="outline">
                      <Link to="/booth/$id" params={{ id: b.id }}>
                        View Booth
                      </Link>
                    </Button>
                  </div>
                </article>
              ))}
              {results.length === 0 && (
                <p className="rounded-xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground">
                  No booths match your search.
                </p>
              )}
            </div>
          </div>

          <div className="order-1 h-[320px] lg:order-2 lg:sticky lg:top-24 lg:h-[560px]">
            <CampusMap booths={results} selectedId={selected} onSelect={(b) => setSelected(b.id)} />
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}
