import React from "react";
import { icons } from "lucide-react";

const Icon = React.forwardRef(
  ({ name, className, onClick }: any, forwardRef: any) => {
    // @ts-expect-error: icons are imported, index by string is allowed
    const LucideIcon = icons[name];

    if (!LucideIcon) {
      const DefaultIcon = icons["LayoutDashboard"];
      return <DefaultIcon className={className} onClick={onClick} />;
    }

    return <LucideIcon className={className} onClick={onClick} />;
  },
);

export { Icon };
