import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, BrainCircuit, ClipboardList, Droplets, FlaskConical, MapPin, UserCog, Wrench } from "lucide-react";
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { AdminShell } from "@/components/trishna/AdminShell";
import { StatusPill } from "@/components/trishna/StatusPill";
import { Button } from "@/components/ui/button";
import { complaints, getBooth, trendData } from "@/data/booths";

export const Route = createFileRoute("/admin/booth/$id")({
  loader: ({ params }) => {
    const booth = getBooth(params.id);
    if (!booth) throw notFound();
    return { booth };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Booth unavailable — TRISHNA" }, { name: "robots", content: "noindex" }] };
    }
    const title = `Booth ${loaderData.booth.id} monitoring — TRISHNA`;
    return {
      meta: [
        { title },
        { name: "description", content: `Sensor history, complaints and maintenance record for booth ${loaderData.booth.id}.` },
        { name: "robots", content: "noindex" },
        { property: "og:title", content: title },
        { property: "og:description", content: "Booth monitoring detail." },
      ],
    };
  },
  component: BoothMonitoring,
});

function Stat({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">{label}</p>
      <p className="mt-1 font-display text-xl font-bold text-primary">{value}</p>
      {sub && <p className="text-xs text-muted-foreground">{sub}</p>}
    </div>
  );
}

function Chart({ title, data, color, unit }: { title: string; data: { t: string; value: number }[]; color: string; unit: string }) {
  return (
    <div className="card-elevated p-5">
      <h3 className="text-sm font-semibold">{title}</h3>
      <p className="text-xs text-muted-foreground">Last 24 hours ({unit})</p>
      <div className="mt-4 h-44">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ left: -20, right: 8, top: 8 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis dataKey="t" tick={{ fontSize: 11 }} stroke="var(--muted-foreground)" />
            <YAxis tick={{ fontSize: 11 }} stroke="var(--muted-foreground)" domain={["auto", "auto"]} />
            <Tooltip
              contentStyle={{
                borderRadius: 12,
                border: "1px solid var(--border)",
                background: "var(--card)",
                fontSize: 12,
              }}
            />
            <Line type="monotone" dataKey="value" stroke={color} strokeWidth={2.5} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function BoothMonitoring() {
  const { booth } = Route.useLoaderData();
  const boothComplaints = complaints.filter((c) => c.boothId === booth.id);

  return (
    <AdminShell active="Booths">
      <div className="mx-auto w-full max-w-7xl p-4 lg:p-6">
        <Link
          to="/admin/dashboard"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" /> Back to dashboard
        </Link>

        <div className="mt-4 flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="font-display text-3xl font-bold text-primary">Booth {booth.id}</h1>
              <StatusPill status={booth.status} />
            </div>
            <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" /> {booth.location} · {booth.building} · {booth.floor}
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Wrench className="mr-2 h-4 w-4" /> Schedule maintenance
            </Button>
            <Button>
              <UserCog className="mr-2 h-4 w-4" /> Reassign MTS
            </Button>
          </div>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-[minmax(0,2fr)_minmax(300px,1fr)]">
          <div className="space-y-4">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <Stat label="Water availability" value={booth.waterAvailable ? "Available" : "Not available"} />
              <Stat label="TDS" value={`${booth.tds} ppm`} sub="Safe range < 300" />
              <Stat label="pH" value={`${booth.ph}`} sub="Safe range 6.5 – 8.5" />
              <Stat label="Last sensor update" value="10:32 AM" sub="30 August 2026" />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <Chart title="TDS trend" data={trendData(booth.tds, 12)} color="var(--aqua)" unit="ppm" />
              <Chart title="pH trend" data={trendData(booth.ph, 0.25)} color="var(--teal)" unit="pH" />
            </div>
            <Chart title="Cooling performance (sensor)" data={trendData(14, 2.5)} color="var(--primary)" unit="°C outlet temperature" />
          </div>

          <div className="space-y-4">
            <section className="card-elevated overflow-hidden">
              <div className="border-b border-border bg-warn-soft px-5 py-4">
                <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-warn-foreground">
                  <BrainCircuit className="h-4 w-4" /> AI Predictive Maintenance
                </p>
              </div>
              <div className="space-y-3 p-5">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                    Predicted malfunction risk
                  </p>
                  <p
                    className={`font-display text-2xl font-bold ${
                      booth.risk === "HIGH" ? "text-crit" : booth.risk === "MEDIUM" ? "text-warn-foreground" : "text-ok"
                    }`}
                  >
                    {booth.risk}
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">
                  Recent sensor trends indicate an increased probability of equipment malfunction.
                </p>
                <div className="rounded-xl bg-surface p-3">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                    Recommended action
                  </p>
                  <p className="text-sm font-semibold text-foreground">Inspect within 24 hours.</p>
                </div>
                <p className="text-[11px] text-muted-foreground">
                  Mock model output — predictive engine not yet connected.
                </p>
              </div>
            </section>

            <section className="card-elevated p-5">
              <h2 className="flex items-center gap-2 text-sm font-semibold">
                <ClipboardList className="h-4 w-4 text-aqua" /> Operations
              </h2>
              <dl className="mt-3 space-y-2 text-sm">
                {[
                  ["Last maintenance", booth.lastMaintenance],
                  ["Open complaints", String(booth.openComplaints)],
                  ["Assigned MTS", booth.assignedMts],
                  ["Category", booth.category],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-4 border-b border-border pb-2 last:border-0">
                    <dt className="text-muted-foreground">{k}</dt>
                    <dd className="text-right font-medium">{v}</dd>
                  </div>
                ))}
              </dl>
            </section>

            <section className="card-elevated p-5">
              <h2 className="flex items-center gap-2 text-sm font-semibold">
                <Droplets className="h-4 w-4 text-aqua" /> Recent complaints
              </h2>
              {boothComplaints.length ? (
                <ul className="mt-3 space-y-3">
                  {boothComplaints.map((c) => (
                    <li key={c.id} className="rounded-xl bg-surface p-3">
                      <p className="text-sm font-semibold">{c.category}</p>
                      <p className="text-xs text-muted-foreground">
                        {c.id} · {c.reported} · {c.status}
                      </p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-3 text-sm text-muted-foreground">No complaints logged for this booth.</p>
              )}
            </section>

            <section className="card-elevated p-5">
              <h2 className="flex items-center gap-2 text-sm font-semibold">
                <FlaskConical className="h-4 w-4 text-aqua" /> Public view
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                See exactly what a student sees after scanning this booth's QR code.
              </p>
              <Button asChild variant="outline" size="sm" className="mt-3 w-full">
                <Link to="/booth/$id" params={{ id: booth.id }}>
                  Open public booth page
                </Link>
              </Button>
            </section>
          </div>
        </div>
      </div>
    </AdminShell>
  );
}
