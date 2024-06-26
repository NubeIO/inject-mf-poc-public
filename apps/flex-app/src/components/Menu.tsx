import { MenuNode, MenuRegistry, TYPES } from "@nubeio/flex-core";
import { useInjection } from "inversify-react";
import {
  Menubar,
  MenubarItem,
  MenubarMenu,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
  MenubarContent,
} from "@nubeio/ui/menubar";

export const LayoutMenu = (): React.ReactNode => {
  const menuRegistry = useInjection<MenuRegistry>(TYPES.MenuRegistry);
  const menuNode = menuRegistry.root;

  return (
    <Menubar key={menuNode.id}>
      {menuNode.children?.map((menuNode) => (
        <MenubarMenu key={menuNode.id}>
          <MenubarTrigger>{menuNode.label}</MenubarTrigger>
          {menuNode.children && (
            <MenubarContent>
              {menuNode.children.map((item) => renderSubMenu(item))}
            </MenubarContent>
          )}
        </MenubarMenu>
      ))}
    </Menubar>
  );
};

const renderSubMenu = (menuNode: MenuNode): React.ReactNode => {
  if (menuNode.children && menuNode.children.length)
    return (
      <MenubarSub key={menuNode.id}>
        <MenubarSubTrigger
          onClick={menuNode.execute}
          key={menuNode.id + "trigger"}
        >
          {menuNode.label}
        </MenubarSubTrigger>
        <MenubarSubContent key={menuNode.id + "content"}>
          {menuNode.children.map((item) => renderSubMenu(item))}
        </MenubarSubContent>
      </MenubarSub>
    );

  return (
    <MenubarItem onClick={menuNode.execute} key={menuNode.id}>
      {menuNode.label}
    </MenubarItem>
  );
};
