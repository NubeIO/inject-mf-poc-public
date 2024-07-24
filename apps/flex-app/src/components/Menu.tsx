import {
  MenuNode,
  MenuRegistry,
  TYPES,
  useInjection,
  useTranslation,
} from "@nubeio/flex-core";
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
  const { localize } = useTranslation();

  return (
    <Menubar key={menuNode.id}>
      {menuNode.children?.map((menuNode) => (
        <MenubarMenu key={menuNode.id}>
          <MenubarTrigger>{localize(menuNode.label)}</MenubarTrigger>
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
  const { localize } = useTranslation();

  if (menuNode.children && menuNode.children.length)
    return (
      <MenubarSub key={menuNode.id}>
        <MenubarSubTrigger
          onClick={menuNode.execute}
          key={menuNode.id + "trigger"}
        >
          {localize(menuNode.label)}
        </MenubarSubTrigger>
        <MenubarSubContent key={menuNode.id + "content"}>
          {menuNode.children.map((item) => renderSubMenu(item))}
        </MenubarSubContent>
      </MenubarSub>
    );

  return (
    <MenubarItem onClick={menuNode.execute} key={menuNode.id}>
      {localize(menuNode.label)}
    </MenubarItem>
  );
};
