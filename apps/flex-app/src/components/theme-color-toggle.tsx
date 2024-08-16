"use client";
import { useInjection, TYPES } from "@nubeio/flex-core";
import { ThemeRegistry } from "@nubeio/flex-core/themes/theme-registry";
import { cn } from "@nubeio/ui";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@nubeio/ui/select";

export function ThemeColorToggle() {
  const themeRegistry = useInjection<ThemeRegistry>(TYPES.ThemeRegistry);

  const availableThemes = themeRegistry.availableThemes;

  if (Object.keys(availableThemes).length <= 1) return <div></div>;
  const createSelectItems = () => {
    return Object.keys(availableThemes).map(function (name) {
      const colors = availableThemes[name];
      const primary = `bg-[rgb(${themeRegistry.theme === "light" ? colors.light?.primary : colors.dark?.primary})]/[.05]`;

      return (
        <SelectItem key={name} value={name}>
          <div className="flex item-center space-x-3">
            <div
              className={cn("rounded-full", "w-[20px]", "h-[20px]", primary)}
            ></div>
            <div className="text-sm">{name}</div>
          </div>
        </SelectItem>
      );
    });
  };

  return (
    <Select
      onValueChange={(value) => themeRegistry.setTheme(value)}
      defaultValue={themeRegistry.theme}
    >
      <SelectTrigger className="w-[180px] ring-offset-transparent focus:ring-transparent">
        <SelectValue placeholder="Select Color" />
      </SelectTrigger>
      <SelectContent className="border-muted">
        {createSelectItems()}
      </SelectContent>
    </Select>
  );
}
