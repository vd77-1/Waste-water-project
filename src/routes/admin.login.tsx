import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Lock, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { Logo } from "@/components/trishna/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/admin/login")({
  head: () => ({
    meta: [
      { title: "Staff Sign In — TRISHNA Control Centre" },
      { name: "description", content: "Authorized IIT (BHU) personnel sign-in for the TRISHNA monitoring system." },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Staff Sign In — TRISHNA" },
      { property: "og:description", content: "Authorized personnel only." },
    ],
  }),
  component: AdminLogin,
});

function AdminLogin() {
  const navigate = useNavigate();
  const [role, setRole] = useState<"admin" | "mts">("admin");

  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <div className="relative hidden flex-col justify-between bg-brand-gradient p-12 text-primary-foreground lg:flex">
        <Logo size="sm" withText={false} />
        <div>
          <h1 className="font-display text-4xl font-bold leading-tight">TRISHNA Control Centre</h1>
          <p className="mt-4 max-w-md text-sm text-primary-foreground/80">
            Campus-wide monitoring of drinking-water booths, complaints and maintenance operations for
            IIT (BHU), Varanasi.
          </p>
        </div>
        <p className="text-xs text-primary-foreground/70">Prototype environment · demonstration data</p>
      </div>

      <div className="flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-sm">
          <Logo size="md" subtitle="IIT (BHU) Varanasi" className="lg:hidden" />
          <span className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-foreground lg:mt-0">
            <Lock className="h-3.5 w-3.5" /> Authorized personnel only
          </span>
          <h2 className="mt-4 font-display text-2xl font-bold text-primary">Sign in</h2>
          <p className="mt-1 text-sm text-muted-foreground">Use your institute credentials to continue.</p>

          <div className="mt-6 grid grid-cols-2 gap-2 rounded-xl bg-surface p-1">
            {(
              [
                { key: "admin", label: "Administrator" },
                { key: "mts", label: "Maintenance Staff" },
              ] as const
            ).map((r) => (
              <button
                key={r.key}
                type="button"
                onClick={() => setRole(r.key)}
                aria-pressed={role === r.key}
                className={`rounded-lg px-3 py-2 text-xs font-semibold transition-colors ${
                  role === r.key ? "bg-card text-primary shadow-card" : "text-muted-foreground"
                }`}
              >
                {r.label}
              </button>
            ))}
          </div>

          <form
            className="mt-6 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              navigate({ to: role === "admin" ? "/admin/dashboard" : "/mts" });
            }}
          >
            <div>
              <Label htmlFor="email">Institute Email / Enrollment ID</Label>
              <Input id="email" className="mt-2 h-11" placeholder="name@itbhu.ac.in" defaultValue="" />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" className="mt-2 h-11" placeholder="••••••••" />
            </div>
            <Button type="submit" size="lg" className="w-full">
              <ShieldCheck className="mr-2 h-4 w-4" /> Sign in
            </Button>
          </form>

          <p className="mt-6 text-center text-xs text-muted-foreground">
            Mock authentication for this prototype — any credentials will work.
          </p>
          <p className="mt-2 text-center text-xs">
            <Link to="/" className="text-muted-foreground underline-offset-4 hover:text-primary hover:underline">
              Back to public site
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
