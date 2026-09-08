import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Clock, MapPin, PlayCircle, TriangleAlert, Wrench } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { AdminShell } from "@/components/trishna/AdminShell";
import { Button } from "@/components/ui/button";
import { tasks as seedTasks, type Task } from "@/data/booths";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/mts")({
  head: () => ({
    meta: [
      { title: "Maintenance Dashboard — TRISHNA" },
      { name: "description", content: "Assigned, urgent and pending water-booth maintenance tasks for MTS personnel." },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Maintenance Dashboard — TRISHNA" },
      { property: "og:description", content: "Actionable maintenance queue for campus water booths." },
    ],
  }),
  component: MtsDashboard,
});

const priorityTone: Record<Task["priority"], string> = {
  Urgent: "bg-crit-soft text-crit",
  High: "bg-warn-soft text-warn-foreground",
  Normal: "bg-accent text-accent-foreground",
};

const statusTone: Record<Task["status"], string> = {
  Assigned: "bg-info-soft text-primary",
  "In Progress": "bg-warn-soft text-warn-foreground",
  Resolved: "bg-ok-soft text-ok",
};

function MtsDashboard() {
  const [tasks, setTasks] = useState<Task[]>(seedTasks);

  const update = (id: string, status: Task["status"], message: string) => {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, status } : t)));
    toast.success(message);
  };

  const stats = [
    { label: "Assigned Issues", value: tasks.filter((t) => t.status === "Assigned").length, icon: Wrench, tone: "text-primary bg-accent" },
    { label: "Urgent Issues", value: tasks.filter((t) => t.priority === "Urgent" && t.status !== "Resolved").length, icon: TriangleAlert, tone: "text-crit bg-crit-soft" },
    { label: "Pending Maintenance", value: tasks.filter((t) => t.status !== "Resolved").length, icon: Clock, tone: "text-warn-foreground bg-warn-soft" },
    { label: "Recently Resolved", value: tasks.filter((t) => t.status === "Resolved").length, icon: CheckCircle2, tone: "text-ok bg-ok-soft" },
  ];

  return (
    <AdminShell active="Tasks" role="Maintenance Staff (MTS)" name="R. Prasad">
      <div className="mx-auto w-full max-w-5xl p-4 lg:p-6">
        <h1 className="font-display text-2xl font-bold text-primary">My maintenance tasks</h1>
        <p className="mt-1 text-sm text-muted-foreground">30 August 2026 · Zone: Academic &amp; Library block</p>

        <div className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="card-elevated flex items-center gap-3 px-4 py-3">
              <span className={cn("flex h-10 w-10 items-center justify-center rounded-xl", s.tone)}>
                <s.icon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">{s.label}</p>
                <p className="font-display text-2xl font-bold leading-tight text-primary">{s.value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 space-y-3">
          {tasks.map((t) => (
            <article key={t.id} className="card-elevated p-5">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <Link
                      to="/admin/booth/$id"
                      params={{ id: t.boothId }}
                      className="font-display text-base font-bold text-primary hover:underline"
                    >
                      Booth {t.boothId}
                    </Link>
                    <span className={cn("rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider", priorityTone[t.priority])}>
                      {t.priority}
                    </span>
                    <span className={cn("rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider", statusTone[t.status])}>
                      {t.status}
                    </span>
                  </div>
                  <p className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" /> {t.location} · Reported {t.reported}
                  </p>
                  <p className="mt-2 text-sm font-medium text-foreground">{t.problem}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    disabled={t.status !== "Assigned"}
                    onClick={() => update(t.id, "In Progress", `${t.id} accepted`)}
                  >
                    Accept Task
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    disabled={t.status === "Resolved"}
                    onClick={() => update(t.id, "In Progress", `${t.id} marked in progress`)}
                  >
                    <PlayCircle className="mr-1.5 h-4 w-4" /> In Progress
                  </Button>
                  <Button size="sm" disabled={t.status === "Resolved"} onClick={() => update(t.id, "Resolved", `${t.id} resolved`)}>
                    <CheckCircle2 className="mr-1.5 h-4 w-4" /> Mark Resolved
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </AdminShell>
  );
}
