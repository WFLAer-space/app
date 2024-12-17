'use client';

import { Card } from "@/components/ui/card";
import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function SettingsPage() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Settings</h1>
        <p className="text-muted-foreground">
          Manage your application preferences and settings.
        </p>
      </div>

      <div className="grid gap-6">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Appearance</h2>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Theme</label>
              <div className="grid grid-cols-3 gap-4">
                <ThemeOption
                  icon={Sun}
                  label="Light"
                  description="Light theme for bright environments"
                  isSelected={theme === 'light'}
                  onClick={() => setTheme('light')}
                />
                <ThemeOption
                  icon={Moon}
                  label="Dark"
                  description="Dark theme for low-light environments"
                  isSelected={theme === 'dark'}
                  onClick={() => setTheme('dark')}
                />
                <ThemeOption
                  icon={Monitor}
                  label="System"
                  description="Follows your system preferences"
                  isSelected={theme === 'system'}
                  onClick={() => setTheme('system')}
                />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

function ThemeOption({
  icon: Icon,
  label,
  description,
  isSelected,
  onClick,
}: {
  icon: typeof Sun;
  label: string;
  description: string;
  isSelected?: boolean;
  onClick?: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className={`flex flex-col items-center justify-center p-4 rounded-lg border bg-background hover:bg-muted transition-colors cursor-pointer ${
        isSelected ? 'border-foreground' : 'border-border'
      }`}
    >
      <Icon className={`h-6 w-6 mb-2 ${isSelected ? 'text-foreground' : 'text-muted-foreground'}`} />
      <div className={`text-sm font-medium ${isSelected ? 'text-foreground' : 'text-muted-foreground'}`}>
        {label}
      </div>
      <div className="text-xs text-muted-foreground text-center">
        {description}
      </div>
    </div>
  );
} 