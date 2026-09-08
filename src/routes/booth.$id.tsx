import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Clock, Droplets, FlaskConical, Info, MapPin, Navigation, TriangleAlert } from "lucide-react";
import { PublicLayout } from "@/components/trishna/PublicLayout";
import { StatusPill } from "@/components/trishna/StatusPill";
import { Button } from "@/components/ui/button";
import { getBooth, statusMeta, type Booth } from "@/data/booths";

export const Route = createFileRoute("/booth/$id")({
  loader: ({ params }) => {
    const booth = getBooth(params.id);
    if (!booth) throw notFound();
    return { booth };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Booth unavailable — TRISHNA" }, { name: "robots", content: "noindex" }] };
    }
    const title = `Booth ${loaderData.booth.id} — ${statusMeta[loaderData.booth.status].short} | TRISHNA`;
    const description = `Live status, water availability and quality for booth ${loaderData.booth.id} at ${loaderData.booth.location}, IIT (BHU).`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: BoothStatusPage,
});

function bannerTone(b: Booth) {
  switch (b.status) {
    case "operational":
      return "bg-ok-soft border-ok/25";
    case "critical":
      return "bg-crit-soft border-crit/25";
    default:
      return "bg-warn-soft border-warn/30";
  }
}

function headline(b: Booth) {
  switch (b.status) {
    case "operational":
      return "You can drink here";
    case "unavailable":
      return "No water right now";
    case "attention":
      return "Usable, but needs attention";
    case "critical":
      return "This booth is out of service";
  }
}

function QualityStat({
  label,
  value,
  note,
  icon: Icon,
  good,
}: {
  label: string;
  value: string;
  note: string;
  icon: typeof Droplets;
  good: boolean;
}) {
  return (
    <div className="rounded-xl border border-border bg-surface p-4">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</span>
        <Icon className="h-4 w-4 text-aqua" />
      </div>
      <p className="mt-2 font-display text-2xl font-bold text-primary">{value}</p>
      <p className={`mt-1 text-xs font-medium ${good ? "text-ok" : "text-warn-foreground"}`}>{note}</p>
    </div>
  );
}

function BoothStatusPage() {
  const { booth } = Route.useLoaderData();
  const meta = statusMeta[booth.status];

  return (
    <PublicLayout>
      <div className="mx-auto w-full max-w-3xl px-4 py-8 sm:px-6 sm:py-12">
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          <span>Booth</span>
          <span className="rounded-md bg-accent px-2 py-0.5 text-accent-foreground">{booth.id}</span>
          <span>· {booth.category}</span>
        </div>

        <h1 className="mt-3 font-display text-2xl font-bold text-primary sm:text-3xl">{booth.location}</h1>
        <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" />
          {booth.building} · {booth.floor}
        </p>

        <div className={`mt-6 rounded-2xl border p-6 shadow-card ${bannerTone(booth)}`}>
          <StatusPill status={booth.status} size="lg" />
          <p className="mt-4 font-display text-2xl font-bold text-primary sm:text-3xl">{headline(booth)}</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl bg-card/80 p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Water availability
              </p>
              <p className={`mt-1 text-lg font-bold ${booth.waterAvailable ? "text-ok" : "text-crit"}`}>
                {booth.waterAvailable ? "Available" : "Not available"}
              </p>
            </div>
            <div className="rounded-xl bg-card/80 p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Last verified
              </p>
              <p className="mt-1 flex items-center gap-1.5 text-sm font-semibold text-foreground">
                <Clock className="h-4 w-4 text-muted-foreground" />
                {booth.lastVerified}
              </p>
            </div>
          </div>
        </div>

        <section className="card-elevated mt-6 p-6">
          <h2 className="text-base font-semibold">Water quality</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <QualityStat
              label="TDS"
              value={`${booth.tds} ppm`}
              note={booth.tds < 300 ? "Within safe drinking range" : "Above preferred range"}
              icon={Droplets}
              good={booth.tds < 300}
            />
            <QualityStat
              label="pH"
              value={`${booth.ph}`}
              note={booth.ph >= 6.5 && booth.ph <= 8.5 ? "Neutral and safe" : "Outside preferred range"}
              icon={FlaskConical}
              good={booth.ph >= 6.5 && booth.ph <= 8.5}
            />
          </div>
          <p className="mt-4 flex items-start gap-2 text-xs text-muted-foreground">
            <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" />
            Data automatically updated every 24 hours.
          </p>
        </section>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <Button asChild size="lg" variant={booth.status === "operational" ? "outline" : "default"}>
            <Link to="/report" search={{ booth: booth.id }}>
              <TriangleAlert className="mr-2 h-4 w-4" />
              Report a Problem
            </Link>
          </Button>
          <Button asChild size="lg" variant={booth.status === "operational" ? "default" : "outline"}>
            <Link to="/find">
              <Navigation className="mr-2 h-4 w-4" />
              Find Nearest Booth
            </Link>
          </Button>
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          Status is derived from verified reports and periodic checks. Prototype data shown.
        </p>
      </div>
    </PublicLayout>
  );
}
