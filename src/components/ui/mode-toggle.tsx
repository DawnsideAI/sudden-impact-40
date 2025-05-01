
import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

interface ModeToggleProps {
  enableSystem?: boolean;
  onChange?: (mode: string) => void;
}

export function ModeToggle({ enableSystem = true, onChange }: ModeToggleProps) {
  const { setTheme, theme } = useTheme();

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
    if (onChange) {
      onChange(newTheme);
    }
  };

  return (
    <button
      onClick={() => handleThemeChange(theme === "light" ? "dark" : "light")}
      className="p-2 rounded-md hover:bg-accent hover:text-accent-foreground"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
