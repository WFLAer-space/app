import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Code, Layout, Moon, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 gradient-bg" />
        <div className="relative flex flex-col items-center justify-center min-h-[calc(100vh-16rem)] text-center">
          <div className="rounded-full bg-muted/50 backdrop-blur-sm p-3 text-sm mb-8 flex items-center gap-2 hover-card-shadow smooth-transition">
            <Sparkles className="h-4 w-4" />
            <span>Built with Next.js 15.1.0</span>
          </div>
          <h1 className="text-4xl font-bold mb-6 sm:text-6xl lg:text-7xl text-gradient">
            Modern Web Development
          </h1>
          <p className="text-lg text-muted-foreground max-w-[600px] mb-8">
            A clean and modern web application template with dark mode support,
            responsive design, and best practices built in.
          </p>
          <div className="flex gap-4">
            <Link href="/docs">
              <Button size="lg" className="button-hover">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/examples">
              <Button variant="outline" size="lg" className="button-hover">
                View Examples
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid gap-6 md:grid-cols-3">
        {[
          {
            icon: Layout,
            title: "Responsive Design",
            description:
              "Mobile-first approach with clean and modern responsive layouts for all devices.",
          },
          {
            icon: Moon,
            title: "Dark Mode",
            description:
              "Seamless dark mode integration with pure black theme option for OLED displays.",
          },
          {
            icon: Code,
            title: "TypeScript",
            description:
              "Built with TypeScript for better development experience and type safety.",
          },
        ].map((feature, index) => (
          <Card
            key={feature.title}
            className="p-6 hover-card-shadow smooth-transition"
          >
            <div
              className="mb-4 rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center smooth-transition"
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <feature.icon className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-xl font-semibold mb-2">{feature.title}</h2>
            <p className="text-muted-foreground">{feature.description}</p>
          </Card>
        ))}
      </div>

      {/* Stats Section */}
      <div className="py-12 border-y relative">
        <div className="absolute inset-0 gradient-bg opacity-50" />
        <div className="relative grid gap-8 md:grid-cols-4 text-center">
          {[
            { label: "Components", value: "20+" },
            { label: "Themes", value: "2" },
            { label: "Examples", value: "10+" },
            { label: "Documentation", value: "100%" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="smooth-transition"
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <p className="text-4xl font-bold mb-2 text-gradient">
                {stat.value}
              </p>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-24">
        <div className="absolute inset-0 gradient-bg opacity-50" />
        <div className="relative flex flex-col items-center text-center">
          <div className="max-w-[600px] space-y-4">
            <h2 className="text-4xl font-bold text-gradient">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground">
              Join us and start building modern web applications with the latest
              technologies.
            </p>
            <div className="flex justify-center gap-4 pt-8">
              <Link href="/docs">
                <Button size="lg" className="button-hover">
                  Read the Docs
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/components">
                <Button
                  variant="outline"
                  size="lg"
                  className="button-hover"
                >
                  Browse Components
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
