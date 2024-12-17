import { Card } from "@/components/ui/card";
import { Code2, FileText, Lightbulb, Palette } from "lucide-react";

export default function DocsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Documentation</h1>
        <p className="text-muted-foreground">
          Learn how to build and customize your application.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-6">
          <div className="mb-4 flex items-center gap-2">
            <FileText className="h-5 w-5" />
            <h2 className="text-xl font-semibold">Getting Started</h2>
          </div>
          <div className="space-y-4">
            <div className="rounded-md bg-muted p-4">
              <pre className="text-sm">
                <code>{`npm install
npm run dev`}</code>
              </pre>
            </div>
            <p className="text-sm text-muted-foreground">
              Start by installing dependencies and running the development server.
            </p>
          </div>
        </Card>

        <Card className="p-6">
          <div className="mb-4 flex items-center gap-2">
            <Palette className="h-5 w-5" />
            <h2 className="text-xl font-semibold">Theme System</h2>
          </div>
          <div className="space-y-4">
            <div className="rounded-md bg-muted p-4">
              <pre className="text-sm">
                <code>{`const { theme, setTheme } = useTheme();
setTheme('dark');`}</code>
              </pre>
            </div>
            <p className="text-sm text-muted-foreground">
              Use the theme provider to implement dark mode in your components.
            </p>
          </div>
        </Card>

        <Card className="p-6">
          <div className="mb-4 flex items-center gap-2">
            <Code2 className="h-5 w-5" />
            <h2 className="text-xl font-semibold">Components</h2>
          </div>
          <div className="space-y-4">
            <div className="rounded-md bg-muted p-4">
              <pre className="text-sm">
                <code>{`import { Button } from "@/components/ui/button";

<Button variant="outline">
  Click me
</Button>`}</code>
              </pre>
            </div>
            <p className="text-sm text-muted-foreground">
              Import and use pre-built components in your pages.
            </p>
          </div>
        </Card>

        <Card className="p-6">
          <div className="mb-4 flex items-center gap-2">
            <Lightbulb className="h-5 w-5" />
            <h2 className="text-xl font-semibold">Best Practices</h2>
          </div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Use TypeScript for better type safety</li>
            <li>• Follow the mobile-first approach</li>
            <li>• Implement proper error boundaries</li>
            <li>• Optimize images and assets</li>
            <li>• Write meaningful comments</li>
          </ul>
        </Card>
      </div>
    </div>
  );
} 