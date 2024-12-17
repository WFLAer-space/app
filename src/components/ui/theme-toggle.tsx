'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className="rounded-md p-2 hover:bg-muted transition-colors w-9 h-9"
        disabled
        aria-label="Toggle theme"
      >
        <div className="h-5 w-5 animate-pulse bg-muted-foreground/20 rounded-full" />
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="rounded-md p-2 hover:bg-muted transition-colors relative w-9 h-9"
      aria-label="Toggle theme"
    >
      <Sun className="h-5 w-5 transition-all scale-100 rotate-0 dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute h-5 w-5 transition-all scale-0 rotate-90 dark:scale-100 dark:rotate-0 top-2 left-2" />
      <span className="sr-only">
        {theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
      </span>
    </button>
  );
} 