"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const [mounted, setMounted] = React.useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  // useEffect only runs on the client, so we can safely update mounted state
  React.useEffect(() => {
    setMounted(true);
  }, []);

  const cycleTheme = () => {
    if (resolvedTheme === "light") {
      setTheme("dark");
    } else {
      setTheme("light"); // Handles resolvedTheme === 'dark' or if resolvedTheme is somehow not 'light'
    }
  };

  // Before mounting, render a placeholder or null to avoid mismatch
  if (!mounted) {
    // You can return null or a placeholder that matches the button's dimensions
    // to prevent layout shifts.
    return <div className="size-5" />; // Example placeholder
  }

  // Now that we're mounted, `resolvedTheme` is reliable for client-side rendering
  return (
    <button onClick={cycleTheme} aria-label="Toggle theme">
      {resolvedTheme === "light" && (
        <Sun className="size-5 text-foreground hover:text-muted-foreground transition-colors" />
      )}
      {resolvedTheme === "dark" && (
        <Moon className="size-5 text-foreground hover:text-muted-foreground transition-colors" />
      )}
    </button>
  );
}
