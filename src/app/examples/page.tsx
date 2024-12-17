import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Bell, Search, User, Sparkles } from "lucide-react";

export default function ExamplesPage() {
  return (
    <div className="space-y-12">
      <div className="relative">
        <div className="absolute inset-0 gradient-bg opacity-50" />
        <div className="relative space-y-2">
          <div className="inline-flex items-center rounded-full bg-muted/50 backdrop-blur-sm px-3 py-1 text-sm mb-4">
            <Sparkles className="h-3 w-3 mr-2" />
            Interactive Examples
          </div>
          <h1 className="text-3xl font-bold mb-2 text-gradient">Examples</h1>
          <p className="text-muted-foreground max-w-[600px]">
            Explore different components and patterns in action. Each example demonstrates
            our design principles and best practices.
          </p>
        </div>
      </div>

      <div className="grid gap-8">
        {/* Search Bar Example */}
        <Card className="p-6 hover-card-shadow smooth-transition overflow-hidden">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Search Bar</h2>
            <div className="text-sm text-muted-foreground">Interactive Demo</div>
          </div>
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground transition-colors group-hover:text-foreground" />
            <input
              type="text"
              placeholder="Search anything..."
              className="w-full rounded-md border bg-background px-9 py-2 text-sm outline-none focus:border-foreground transition-all hover:border-foreground/50 focus:ring-2 focus:ring-primary/10"
            />
          </div>
        </Card>

        {/* Notification Card Example */}
        <Card className="p-6 hover-card-shadow smooth-transition overflow-hidden">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Notification</h2>
            <div className="text-sm text-muted-foreground">Alert Pattern</div>
          </div>
          <div className="rounded-lg border bg-muted/50 p-4 group hover:bg-muted/80 transition-colors">
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-background p-2 group-hover:scale-110 transition-transform">
                <Bell className="h-4 w-4" />
              </div>
              <div className="flex-1">
                <p className="font-medium">New Message</p>
                <p className="text-sm text-muted-foreground">
                  You have a new message from the team.
                </p>
              </div>
              <Button variant="outline" size="sm" className="button-hover">
                View
              </Button>
            </div>
          </div>
        </Card>

        {/* Profile Card Example */}
        <Card className="p-6 hover-card-shadow smooth-transition overflow-hidden">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Profile Card</h2>
            <div className="text-sm text-muted-foreground">User Interface</div>
          </div>
          <div className="flex items-center gap-4 group">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted transition-transform group-hover:scale-110">
              <User className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium">John Doe</h3>
              <p className="text-sm text-muted-foreground">Software Engineer</p>
            </div>
            <Button className="ml-auto button-hover" variant="ghost" size="sm">
              View Profile
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </Card>

        {/* Stats Grid Example */}
        <Card className="p-6 hover-card-shadow smooth-transition overflow-hidden">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Stats Overview</h2>
            <div className="text-sm text-muted-foreground">Data Display</div>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { label: 'Total Users', value: '1,234' },
              { label: 'Active Now', value: '321' },
              { label: 'Revenue', value: '$12,345' },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="rounded-lg border bg-muted/50 p-4 text-center hover:bg-muted/80 transition-all hover:-translate-y-1"
                style={{
                  transitionDelay: `${index * 50}ms`,
                }}
              >
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <p className="text-2xl font-bold text-gradient">{stat.value}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
} 