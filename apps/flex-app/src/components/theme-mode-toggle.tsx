import { TYPES, useInjection } from "@nubeio/flex-core";
import { ThemeRegistry } from "@nubeio/flex-core/themes/theme-registry";
import { Button } from "@nubeio/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@nubeio/ui/dropdown-menu";

export function ThemeModeToggle() {
  const themeRegistry = useInjection<ThemeRegistry>(TYPES.ThemeRegistry);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <span className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0">
            Sun
          </span>
          <span className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100">
            Moon
          </span>
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => themeRegistry.setMode("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => themeRegistry.setMode("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => themeRegistry.setMode("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
