import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Activity, AlertOctagon, ArrowRight, Search, TriangleAlert, Waves } from "lucide-react";
import { useMemo, useState } from "react";
import { AdminShell } from "@/components/trishna/AdminShell";
import { CampusMap } from "@/components/trishna/CampusMap";
import { StatusDot } from "@/components/trishna/StatusPill";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { statusMeta, summary } from "@/data/booths";
import { useBooths } from "@/data/boothStore";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/admin/dashboard")({
  head: () => ({
    meta: [
      { title: "Admin Dashboard — TRISHNA Control Centre" },
      {
        name: "description",
        content: "Campus-wide monitoring map of all TRISHNA drinking-water booths.",
      },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Admin Dashboard — TRISHNA" },
      { property: "og:description", content: "Live campus water booth monitoring." },
    ],
  }),
  component: AdminDashboard,
});

const order = { critical: 0, attention: 1, unavailable: 2, operational: 3 } as const;

function AdminDashboard() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string | undefined>();
  const [query, setQuery] = useState("");
  const booths = useBooths();
  const s = summary(booths);

  const list = useMemo(
    () =>
      booths
        .filter(
          (b) =>
            !query.trim() ||
            b.id.toLowerCase().includes(query.toLowerCase()) ||
            b.location.toLowerCase().includes(query.toLowerCase()),
        )
        .sort((a, b) => order[a.status] - order[b.status] || a.id.localeCompare(b.id)),
    [booths, query],
  );

  const cards = [
    { label: "Total Booths", value: s.total, icon: Waves, tone: "text-primary", bg: "bg-accent" },
    {
      label: "Operational",
      value: s.operational,
      icon: Activity,
      tone: "text-ok",
      bg: "bg-ok-soft",
    },
    {
      label: "Attention Needed",
      value: s.attention,
      icon: TriangleAlert,
      tone: "text-warn-foreground",
      bg: "bg-warn-soft",
    },
    {
      label: "Critical",
      value: s.critical,
      icon: AlertOctagon,
      tone: "text-crit",
      bg: "bg-crit-soft",
    },
  ];

  return (
    <AdminShell active="Overview">
      <div className="flex h-full flex-col gap-4 p-4 lg:h-[calc(100vh-3.5rem)] lg:p-5">
        <div className="grid shrink-0 grid-cols-2 gap-3 lg:grid-cols-4">
          {cards.map((c) => (
            <div key={c.label} className="card-elevated flex items-center gap-3 px-4 py-3">
              <span className={cn("flex h-10 w-10 items-center justify-center rounded-xl", c.bg)}>
                <c.icon className={cn("h-5 w-5", c.tone)} />
              </span>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  {c.label}
                </p>
                <p className="font-display text-2xl font-bold leading-tight text-primary">
                  {c.value}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid min-h-0 flex-1 gap-4 lg:grid-cols-[minmax(0,3.4fr)_minmax(280px,1fr)]">
          <div className="min-h-[420px] lg:min-h-0">
            <CampusMap
              booths={booths}
              selectedId={selected}
              onSelect={(b) => {
                setSelected(b.id);
                navigate({ to: "/admin/booth/$id", params: { id: b.id } });
              }}
              className="shadow-card"
            />
          </div>

          <aside className="card-elevated flex min-h-0 flex-col overflow-hidden">
            <div className="border-b border-border p-4">
              <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
                Water Booths
              </h2>
              <div className="relative mt-3">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search booths"
                  className="h-9 pl-9 text-sm"
                  aria-label="Search booths"
                />
              </div>
            </div>
            <ul className="min-h-0 flex-1 divide-y divide-border overflow-y-auto">
              {list.map((b) => (
                <li key={b.id}>
                  <Link
                    to="/admin/booth/$id"
                    params={{ id: b.id }}
                    onMouseEnter={() => setSelected(b.id)}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 transition-colors hover:bg-surface",
                      selected === b.id && "bg-surface",
                    )}
                  >
                    <StatusDot status={b.status} />
                    <div className="min-w-0 flex-1">
                      <p className="font-display text-sm font-bold text-primary">{b.id}</p>
                      <p className="truncate text-xs text-muted-foreground">{b.location}</p>
                      <p
                        className={cn(
                          "mt-0.5 text-[10px] font-bold uppercase tracking-wider",
                          statusMeta[b.status].text,
                        )}
                      >
                        {statusMeta[b.status].label}
                      </p>
                    </div>
                    <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground" />
                  </Link>
                </li>
              ))}
            </ul>
            <div className="border-t border-border p-3">
              <Button asChild variant="outline" size="sm" className="w-full">
                <Link to="/mts">Open maintenance queue</Link>
              </Button>
              <Button asChild size="sm" className="mt-2 w-full">
                <Link to="/manage">Add / manage booths</Link>
              </Button>
            </div>
          </aside>
        </div>
      </div>
    </AdminShell>
  );
}
