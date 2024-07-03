import { icons } from "lucide-react";

const Icon = ({ name, className, onClick }: any) => {
  // @ts-expect-error: icons are imported, index by string is allowed
  const LucideIcon = icons[name];

  return <LucideIcon className={className} onClick={onClick} />;
};

export { Icon };
