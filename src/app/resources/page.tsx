'use client';

import { Loader2 } from "lucide-react";
import { useState } from "react";

export default function ResourcesPage() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative h-[calc(100vh-3.5rem)]">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-background z-10">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Loader2 className="h-5 w-5 animate-spin" />
            <span>Loading resources...</span>
          </div>
        </div>
      )}
      <iframe
        src="https://files.wflaer.space"
        className="w-full h-full border-0"
        onLoad={() => setIsLoading(false)}
        title="External Resources"
      />
    </div>
  );
} 