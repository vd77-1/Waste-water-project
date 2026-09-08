import { Building2, Landmark, Trees } from "lucide-react";
import type { Booth } from "@/data/booths";
import { statusMeta } from "@/data/booths";
import { cn } from "@/lib/utils";

export function CampusMap({
  booths,
  selectedId,
  onSelect,
  className,
}: {
  booths: Booth[];
  selectedId?: string | undefined;
  onSelect?: ((booth: Booth) => void) | undefined;
  className?: string | undefined;
}) {
  return (
    <div
      className={cn(
        "relative h-full w-full overflow-hidden rounded-2xl border border-border bg-surface grid-campus",
        className,
      )}
      role="group"
      aria-label="Campus water booth map"
    >
      {/* mock campus geometry */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[6%] top-[10%] h-[30%] w-[22%] rounded-xl bg-primary/[0.06] ring-1 ring-primary/10" />
        <div className="absolute left-[4%] top-[46%] h-[46%] w-[26%] rounded-xl bg-primary/[0.06] ring-1 ring-primary/10" />
        <div className="absolute left-[36%] top-[8%] h-[34%] w-[30%] rounded-xl bg-primary/[0.06] ring-1 ring-primary/10" />
        <div className="absolute left-[36%] top-[52%] h-[38%] w-[24%] rounded-xl bg-teal/10 ring-1 ring-teal/20" />
        <div className="absolute left-[66%] top-[20%] h-[52%] w-[28%] rounded-xl bg-primary/[0.06] ring-1 ring-primary/10" />
        <div className="absolute left-[32%] top-[46%] h-[4%] w-[62%] rounded-full bg-aqua/15" />
        <div className="absolute left-[31%] top-[6%] h-[86%] w-[3%] rounded-full bg-aqua/15" />
        <span className="absolute left-[7%] top-[12%] text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
          <Building2 className="mr-1 inline h-3 w-3" />
          Hostel zone
        </span>
        <span className="absolute left-[37%] top-[10%] text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
          <Landmark className="mr-1 inline h-3 w-3" />
          Academic zone
        </span>
        <span className="absolute left-[37%] top-[54%] text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
          <Trees className="mr-1 inline h-3 w-3" />
          Common area
        </span>
        <span className="absolute left-[67%] top-[22%] text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
          <Landmark className="mr-1 inline h-3 w-3" />
          Administrative
        </span>
      </div>

      {booths.map((b) => {
        const meta = statusMeta[b.status];
        const active = selectedId === b.id;
        return (
          <button
            key={b.id}
            type="button"
            onClick={() => onSelect?.(b)}
            style={{ left: `${b.x}%`, top: `${b.y}%` }}
            className={cn(
              "group absolute -translate-x-1/2 -translate-y-1/2 rounded-full outline-none transition-transform focus-visible:ring-2 focus-visible:ring-ring",
              active ? "z-20 scale-125" : "z-10 hover:scale-110",
            )}
            aria-label={`Booth ${b.id}, ${b.location}, ${meta.label}`}
          >
            <span
              className={cn(
                "flex h-5 w-5 items-center justify-center rounded-full border-2 border-card shadow-card",
                meta.dot,
                b.status === "critical" && "animate-pulse-crit",
                active && "ring-2 ring-primary ring-offset-2 ring-offset-surface",
              )}
            />
            <span className="pointer-events-none absolute left-1/2 top-6 hidden -translate-x-1/2 whitespace-nowrap rounded-md bg-primary px-2 py-1 text-[10px] font-semibold text-primary-foreground shadow-float group-hover:block">
              {b.id} · {meta.short}
            </span>
          </button>
        );
      })}

      <div className="absolute bottom-3 left-3 flex flex-wrap gap-3 rounded-xl border border-border bg-card/90 px-3 py-2 text-[11px] font-medium shadow-card backdrop-blur">
        <span className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-ok" /> Operational
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-warn" /> Attention
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-crit" /> Critical
        </span>
      </div>
      <div className="absolute right-3 top-3 rounded-lg border border-border bg-card/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground backdrop-blur">
        Mock campus map
      </div>
    </div>
  );
}
