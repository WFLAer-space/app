import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Github, Twitter } from "lucide-react";

export default function ComponentsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Components</h1>
        <p className="text-muted-foreground">
          A collection of pre-built components using Tailwind CSS.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="p-6 space-y-4">
          <h2 className="text-xl font-semibold">Buttons</h2>
          <div className="space-y-2">
            <Button>Default Button</Button>
            <Button variant="outline" className="w-full">
              Outline Button
            </Button>
            <Button variant="ghost" className="w-full">
              Ghost Button
            </Button>
          </div>
        </Card>

        <Card className="p-6 space-y-4">
          <h2 className="text-xl font-semibold">Icons</h2>
          <div className="flex gap-4">
            <Github className="h-6 w-6" />
            <Twitter className="h-6 w-6" />
            <ArrowRight className="h-6 w-6" />
          </div>
        </Card>

        <Card className="p-6 space-y-4">
          <h2 className="text-xl font-semibold">Typography</h2>
          <div className="space-y-2">
            <h1 className="text-2xl font-bold">Heading 1</h1>
            <h2 className="text-xl font-semibold">Heading 2</h2>
            <p className="text-muted-foreground">Regular paragraph text</p>
          </div>
        </Card>
      </div>
    </div>
  );
} 