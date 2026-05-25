import * as React from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "dark" | "light";

const storageKey = "qc-theme";

function isTheme(value: string | null): value is Theme {
  return value === "dark" || value === "light";
}

function getInitialTheme(): Theme {
  if (typeof document === "undefined") {
    return "dark";
  }

  const current = document.documentElement.dataset.theme;

  if (isTheme(current || null)) {
    return current;
  }

  return "dark";
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
  window.localStorage.setItem(storageKey, theme);
}

export function ThemeToggle({ className = "" }: { className?: string }) {
  const [theme, setTheme] = React.useState<Theme>(getInitialTheme);

  React.useEffect(() => {
    const stored = window.localStorage.getItem(storageKey);
    const nextTheme = isTheme(stored) ? stored : getInitialTheme();
    setTheme(nextTheme);
    applyTheme(nextTheme);
  }, []);

  function chooseTheme(nextTheme: Theme) {
    setTheme(nextTheme);
    applyTheme(nextTheme);
  }

  return (
    <div className={`theme-toggle ${className}`} role="group" aria-label="Color theme" suppressHydrationWarning>
      <button
        type="button"
        className="theme-toggle-option"
        data-active={theme === "dark"}
        aria-pressed={theme === "dark"}
        onClick={() => chooseTheme("dark")}
        suppressHydrationWarning
      >
        <Moon className="h-4 w-4" aria-hidden="true" />
        <span>Dark</span>
      </button>
      <button
        type="button"
        className="theme-toggle-option"
        data-active={theme === "light"}
        aria-pressed={theme === "light"}
        onClick={() => chooseTheme("light")}
        suppressHydrationWarning
      >
        <Sun className="h-4 w-4" aria-hidden="true" />
        <span>Light</span>
      </button>
    </div>
  );
}
