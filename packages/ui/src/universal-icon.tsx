import { icons } from "lucide-react";

const Icon = ({ name, className, onClick }: any) => {
  // @ts-expect-error: icons are imported, index by string is allowed
  const LucideIcon = icons[name];

  if (!LucideIcon) {
    const DefaultIcon = icons["LayoutDashboard"];
    return <DefaultIcon className={className} onClick={onClick} />;
  }

  return <LucideIcon className={className} onClick={onClick} />;
};

export { Icon };
