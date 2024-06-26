import PBUi from "flex_ui/button";
import PBBusiness from "flex_business/button";

import businessContainer from "flex_business/module";
import uiContainer from "flex_ui/module";
import FlexBusinessApplication from "flex_business/frontend-application";
import FlexUIApplication from "flex_ui/frontend-application";
import coreContainer from "@nubeio/flex-core/module";

import { Button } from "@nubeio/ui/button";
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

import {
  Container,
  MenuNode,
  MenuRegistry,
  TYPES,
  CoreFrontendApplication,
} from "@nubeio/flex-core";
import React, { useState } from "react";

const App = () => {
  const [container, setContainer] = useState<Container | null>(null);

  React.useEffect(() => {
    const newContainer = new Container();
    newContainer.load(coreContainer, uiContainer, businessContainer);

    // todo find better way to initialize
    newContainer.get<CoreFrontendApplication>(CoreFrontendApplication);
    newContainer.get<FlexBusinessApplication>(FlexBusinessApplication);
    newContainer.get<FlexUIApplication>(FlexUIApplication);

    setContainer(newContainer);
  }, []);

  if (!container) {
    return <div>Loading...</div>;
  }

  return (
    <ChildComponent
      menu={container.get<MenuRegistry>(TYPES.MenuRegistry).root}
    />
  );
};

interface ChildComponentProps {
  menu: MenuNode; // Define the type of 'menu' here
}

const ChildComponent: React.FC<ChildComponentProps> = ({ menu }) => {
  return (
    <div>
      {renderMenu(menu)}
      <div className="flex flex-col items-center justify-center h-screen">
        <p>Start building amazing things with Rsbuild.</p>
        <div className="flex gap-2">
          <PBUi />
          <PBBusiness />
        </div>
        <Button className="mt-2">Hi from App</Button>
      </div>
    </div>
  );
};

const renderMenu = (menuNode: MenuNode): React.ReactNode => {
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

export default App;
