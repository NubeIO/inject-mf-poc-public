import { memo, useEffect, useState } from "react"
import { Icon } from "@nubeio/ui/universal-icon"
import { TooltipWrapper } from "@nubeio/ui/tooltip-wrapper"
import { SettingsMenu } from "../layout/SettingsMenu"
import { useInjection } from "inversify-react"
import {
  TYPES,
  LayoutRegistry,
  AllLayouts,
  LayoutContextMenuProps,
} from "@nubeio/flex-core"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@nubeio/ui/context-menu"

import { Separator } from "@nubeio/ui/separator"
import { LayoutCreation } from "./LayoutCreationPopover"

const menuItemBaseStyle =
  "h-[50px] w-full flex items-center justify-center cursor-pointer"
export const cardStyle = `h-[34px] w-[34px] hover:bg-gray-200 rounded-lg p-[7px]`

export const ExtensionMenu = memo((props: any) => {
  const { isMenuCollapsed, menuItems } = props
  const layoutRegistry = useInjection<LayoutRegistry>(TYPES.LayoutRegistry)
  const [allLayouts, setAllLayouts] = useState<AllLayouts>({})

  useEffect(() => {
    const layoutChangeCallback = () => {
      const updatedLayouts = { ...layoutRegistry.getAllLayouts }
      setAllLayouts(updatedLayouts)
    }
    // call once to get the initial layouts
    layoutChangeCallback()

    layoutRegistry.onLayoutChange(layoutChangeCallback)
    return () => {
      layoutRegistry.removeOnLayoutChange(layoutChangeCallback)
    }
  }, [layoutRegistry])

  return (
    <div
      className={`w-[50px] h-full flex flex-col items-center border-t justify-between ${
        !isMenuCollapsed && "border-r"
      }`}
    >
      <div className="w-[50px] flex flex-col items-center">
        {menuItems.map((item: any, index: number) => {
          return (
            <TooltipWrapper key={index} content={item.name}>
              <div key={index} className={`${menuItemBaseStyle}`}>
                <Icon name={item.icon} className={cardStyle} />
              </div>
            </TooltipWrapper>
          )
        })}
        <Separator className="my-[5px] w-full" />
        {Object.keys(allLayouts).map((key: string) => {
          const layout = allLayouts[key]
          const handleSelectLayout = () => {
            layoutRegistry.setSelectedLayout = layout
          }

          const selectedLayoutId = layoutRegistry.getSelectedLayout?.id
          const isSelected = selectedLayoutId
            ? selectedLayoutId === layout.id
            : false
          return (
            <LayoutContextMenu key={key} layout={layout}>
              <TooltipWrapper content={layout.name}>
                <div
                  key={key}
                  className={`${menuItemBaseStyle}`}
                  onClick={handleSelectLayout}
                >
                  <Icon
                    name={layout.icon || "LayoutDashboard"}
                    className={`${cardStyle} ${isSelected ? "bg-amber-400" : ""}`}
                  />
                </div>
              </TooltipWrapper>
            </LayoutContextMenu>
          )
        })}
        <TooltipWrapper content={"create new layout"}>
          <LayoutCreation>
            <div key={"add_layout"} className={`${menuItemBaseStyle}`}>
              <Icon name={"Plus"} className={cardStyle} />
            </div>
          </LayoutCreation>
        </TooltipWrapper>
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
  )
})

const LayoutContextMenu = memo((props: LayoutContextMenuProps) => {
  const { children, layout } = props
  const layoutRegistry = useInjection<LayoutRegistry>(TYPES.LayoutRegistry)

  const handleRemoveLayout = () => {
    layoutRegistry.removeLayout(layout.id)
  }

  return (
    <ContextMenu>
      <ContextMenuTrigger>{children}</ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem onClick={handleRemoveLayout}>
          Remove Layout
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
})