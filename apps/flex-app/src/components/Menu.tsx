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
import { Icon } from "@nubeio/ui/universal-icon";
import { TooltipWrapper } from "@nubeio/ui/tooltip-wrapper";
import { Button } from "@nubeio/ui/button"

export const LayoutMenu = (props: any): React.ReactNode => {
  const { isManagingLayout, setIsManagingLayout, test, setTest } = props
  const menuRegistry = useInjection<MenuRegistry>(TYPES.MenuRegistry)
  const menuNode = menuRegistry.root

  return (
    <div className="w-full flex flex-row items-center justify-between">
      <Menubar key={menuNode.id} className={`border-0`}>
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

      <div className="flex flex-row items-center">
        {test}
        <Button onClick={() => setTest(test + 1)}>ADD</Button>
      </div>

      <TooltipWrapper content={"manage layout"}>
        <div
          className={`h-[40px] w-[40px] flex items-center cursor-pointer`}
          onClick={() => {
            setIsManagingLayout((prevState: boolean) => !prevState)
          }}
        >
          <Icon
            name="LayoutDashboard"
            className={`h-[35px] w-[35px] hover:bg-gray-200 rounded-lg p-[7px] ${isManagingLayout && "text-amber-400"}`}
          />
        </div>
      </TooltipWrapper>
    </div>
  )
}

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
