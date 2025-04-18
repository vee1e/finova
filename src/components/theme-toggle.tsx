import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/lib/theme-provider"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label="Toggle theme"
    >
      <Sun
        className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${theme === "dark" ? "scale-0" : "scale-100"}`}
      />
      <Moon
        className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${theme === "light" ? "scale-0" : "scale-100"}`}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

