import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Activity,
  BrainCircuit,
  Droplets,
  Gauge,
  MapPin,
  QrCode,
  ScanLine,
  ShieldCheck,
  TriangleAlert,
} from "lucide-react";
import heroImage from "@/assets/hero-booth.jpg";
import { PublicLayout } from "@/components/trishna/PublicLayout";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TRISHNA — Smart Water. Smarter Campus. | IIT (BHU)" },
      {
        name: "description",
        content:
          "Check live status and water quality of drinking-water booths across IIT (BHU), Varanasi. Scan, view status, report issues.",
      },
      { property: "og:title", content: "TRISHNA — Smart Water. Smarter Campus." },
      {
        property: "og:description",
        content: "Smart campus drinking-water monitoring for IIT (BHU), Varanasi.",
      },
    ],
  }),
  component: Landing,
});

const features = [
  {
    icon: Activity,
    title: "Check Water Status",
    text: "See whether a booth is operational before you walk across campus.",
  },
  {
    icon: Gauge,
    title: "Water Quality Information",
    text: "TDS and pH readings, verified and refreshed regularly.",
  },
  {
    icon: TriangleAlert,
    title: "Report a Problem",
    text: "Flag a faulty cooler in seconds — no account needed.",
  },
  {
    icon: MapPin,
    title: "Find the Nearest Booth",
    text: "Locate the closest working drinking-water point around you.",
  },
];

const steps = [
  { icon: QrCode, title: "QR code on booth", text: "Every cooler carries a unique TRISHNA code." },
  { icon: ScanLine, title: "Scan", text: "Open the booth page instantly on your phone." },
  {
    icon: Droplets,
    title: "View current status",
    text: "Availability, quality and last verification.",
  },
  {
    icon: TriangleAlert,
    title: "Report if needed",
    text: "One tap sends the issue to campus maintenance.",
  },
];

function Landing() {
  return (
    <PublicLayout>
      <section className="relative overflow-hidden bg-hero-gradient">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
          <div className="animate-rise">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary shadow-card">
              <ShieldCheck className="h-3.5 w-3.5" /> IIT (BHU) Varanasi
            </span>
            <h1 className="mt-5 font-display text-5xl font-bold leading-[1.05] text-primary sm:text-6xl">
              TRISHNA
            </h1>
            <p className="mt-3 text-xl font-semibold text-brand-gradient sm:text-2xl">
              Smart Water. Smarter Campus.
            </p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              TRISHNA lets students, staff and visitors check the operational status and
              water-quality information of drinking-water booths across the campus — from academic
              departments and hostels to the Central Library. Scan the code on any cooler and know
              before you drink.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/scan">
                  <ScanLine className="mr-2 h-4 w-4" /> Scan QR / Enter Code
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/find">Find a Water Booth</Link>
              </Button>
            </div>
            <p className="mt-5 text-xs uppercase tracking-wider text-muted-foreground">
              Tracking &amp; Reporting Infrastructure for Safe Hydration Network Access
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-aqua/10 blur-2xl" aria-hidden />
            <img
              src={heroImage}
              alt="Smart campus drinking-water booth with sensor display, QR code and connectivity indicators"
              width={1280}
              height={1024}
              className="relative w-full rounded-3xl border border-border bg-card shadow-float"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="card-elevated p-6 transition-shadow hover:shadow-float">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-aqua-gradient text-primary-foreground">
                <f.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-base font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="text-3xl font-bold text-primary">How TRISHNA works</h2>
          <p className="mt-2 max-w-xl text-sm text-muted-foreground">
            Designed around the way people actually use a water cooler: walk up, scan, decide.
          </p>
          <ol className="mt-10 grid gap-5 md:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.title} className="card-elevated relative p-6">
                <span className="absolute right-5 top-5 font-display text-3xl font-bold text-accent">
                  {i + 1}
                </span>
                <s.icon className="h-6 w-6 text-aqua" />
                <h3 className="mt-4 text-sm font-semibold uppercase tracking-wide">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <div className="card-elevated grid gap-8 overflow-hidden p-8 md:grid-cols-[1.4fr_1fr] md:p-12">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-foreground">
              <BrainCircuit className="h-3.5 w-3.5" /> Coming next
            </span>
            <h2 className="mt-4 text-2xl font-bold text-primary sm:text-3xl">
              Connected sensors and predictive maintenance
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Future stages of TRISHNA will attach low-cost IoT sensors to each booth to stream TDS,
              pH, flow and cooling-performance data. Predictive analytics will then flag units that
              are likely to fail before students notice — turning campus water maintenance from
              reactive to proactive.
            </p>
          </div>
          <div className="grid gap-3 self-center">
            {[
              "Continuous sensor telemetry",
              "Automated quality alerts",
              "Predicted failure risk scoring",
            ].map((t) => (
              <div
                key={t}
                className="flex items-center gap-3 rounded-xl bg-surface px-4 py-3 text-sm font-medium"
              >
                <span className="h-2 w-2 rounded-full bg-teal" />
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
