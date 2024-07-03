import { memo } from "react";
import { Icon } from "@nubeio/ui/universal-icon";
import { TooltipWrapper } from "@nubeio/ui/tooltip-wrapper";
import { SettingsMenu } from "../layout/SettingsMenu";
// import { useApi } from "../App";

// import {
//   init,
//   loadRemote,
//   registerRemotes,
// } from "@module-federation/enhanced/runtime";
// import { ExtensionType } from "../extensions.type";

const menuItemBaseStyle =
  "h-[50px] w-full flex items-center justify-center cursor-pointer";
export const ExtensionMenu = memo((props: any) => {
  const { isMenuCollapsed, menuItems } = props;
  // const { test, setSingleAppDisplay } = useApi();

  const cardStyle = `h-[34px] w-[34px] hover:bg-gray-200 rounded-lg p-[7px] `;

  // const handleLoadSingleApp = async (item: ExtensionType) => {
  //   const res: any = await loadRemote(item.url);
  //   const Extension = res.default;
  //   console.log("Extension", Extension);
  //   setSingleAppDisplay(<Extension api={useApi} />);
  // };

  return (
    <div
      className={`w-[50px] h-full flex flex-col items-center border-t justify-between ${
        !isMenuCollapsed && "border-r"
      }`}
    >
      <div className="w-[50px] flex flex-col items-center">
        {menuItems.map((item: any, index: number) => {
          return (
            <TooltipWrapper content={item.name}>
              <div key={index} className={`${menuItemBaseStyle}`}>
                <Icon
                  name={item.icon}
                  className={cardStyle}
                  // onClick={() => handleLoadSingleApp(item)}
                />
              </div>
            </TooltipWrapper>
          );
        })}
      </div>

      <div className="w-[50px] flex flex-col items-center">
        <SettingsMenu>
          <div className={`${menuItemBaseStyle}`}>
            <TooltipWrapper content={"Settings"}>
              <Icon name="Settings" className={cardStyle} />
            </TooltipWrapper>
          </div>
        </SettingsMenu>
      </div>
    </div>
  );
});
