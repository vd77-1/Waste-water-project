import { Link } from "@tanstack/react-router";
import { Bell, ChevronDown } from "lucide-react";
import type { ReactNode } from "react";
import { Logo } from "./Logo";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const tabs = ["Overview", "Booths", "Complaints", "Maintenance", "Analytics", "Alerts"] as const;

export function AdminShell({
  children,
  active = "Overview",
  role = "Administrator",
  name = "Dr. A. Sharma",
}: {
  children: ReactNode;
  active?: (typeof tabs)[number] | "Tasks";
  role?: string;
  name?: string;
}) {
  return (
    <div className="flex h-screen flex-col bg-surface">
      <header className="z-30 border-b border-border bg-card">
        <div className="flex h-14 items-center gap-4 px-4 sm:px-6">
          <Logo size="sm" subtitle="Control Centre" />
          <nav className="hidden flex-1 items-center gap-1 lg:flex">
            {tabs.map((t) => (
              <button
                key={t}
                type="button"
                className={cn(
                  "rounded-lg px-3 py-1.5 text-sm font-medium transition-colors",
                  active === t
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:bg-surface hover:text-foreground",
                )}
                aria-current={active === t ? "page" : undefined}
              >
                {t}
              </button>
            ))}
          </nav>
          <div className="ml-auto flex items-center gap-2">
            <Button variant="ghost" size="icon" className="relative" aria-label="Notifications">
              <Bell className="h-5 w-5" />
              <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-crit animate-pulse-crit" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-2 rounded-lg px-2 py-1.5 hover:bg-surface">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-brand-gradient text-xs text-primary-foreground">
                      {name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .slice(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  <span className="hidden text-left leading-tight sm:block">
                    <span className="block text-xs font-semibold">{name}</span>
                    <span className="block text-[10px] text-muted-foreground">{role}</span>
                  </span>
                  <ChevronDown className="h-4 w-4 text-muted-foreground" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuLabel>{role}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/admin/dashboard">Admin dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/mts">Maintenance view</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/admin/login">Sign out</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
      <div className="min-h-0 flex-1 overflow-auto">{children}</div>
    </div>
  );
}
