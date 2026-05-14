"use client";

import { useTheme } from "@/hooks/use-theme";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="btn-primary px-4 py-2"
    >
      {theme === "light"
        ? "Dark Mode"
        : "Light Mode"}
    </button>
  );
}
