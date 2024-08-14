"use client";
import { cn } from "@nubeio/ui";
import { ThemeColors } from "@nubeio/ui/colors-theme";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@nubeio/ui/select";
import { useTheme } from "@nubeio/ui/theme-provider";

const availableThemeColors = [
  { name: "Nube", light: "bg-[#1FA38B]", dark: "bg-[#1FA38B]" },
  { name: "Daikin", light: "bg-[#44C7F4]", dark: "bg-[#44C7F4]" },
];

export function ThemeColorToggle() {
  const { theme, themeColor, setThemeColor } = useTheme();

  const createSelectItems = () => {
    return availableThemeColors.map(({ name, light, dark }) => (
      <SelectItem key={name} value={name}>
        <div className="flex item-center space-x-3">
          <div
            className={cn(
              "rounded-full",
              "w-[20px]",
              "h-[20px]",
              theme === "light" ? light : dark,
            )}
          ></div>
          <div className="text-sm">{name}</div>
        </div>
      </SelectItem>
    ));
  };

  return (
    <Select
      onValueChange={(value) => setThemeColor(value as ThemeColors)}
      defaultValue={themeColor}
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
