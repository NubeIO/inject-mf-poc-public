import React, { useState, useEffect, Suspense } from "react"
import { useInjection, useContainer } from "inversify-react"
import { interfaces } from "inversify"
import { LayoutMenu } from "./Menu"
import { WelcomeLayout } from "./WelcomeLayout"
import {
  WidgetManager,
  ExtensionsLoader,
  TYPES,
  Widget,
  LanguageRegistry,
  ILanguageRegistry,
} from "@nubeio/flex-core"

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@nubeio/ui/resizable"
import { Badge } from "@nubeio/ui/badge"
import { ExpandButton } from "./layout/ExpandButton"
import { TreeViewElement } from "@nubeio/ui/modified-menu-tree/tree-view-api"
import { MenuTreeUniversal } from "./layout/menu-trees/MenuTreeUniversal"
import { MenuTreeCustom } from "./layout/menu-trees/MenuTreeCustom"
import { ExtensionMenu } from "./layout/ExtensionMenu"
import { MainDisplay } from "./layout/MainDisplay"
import { useTranslation } from "react-i18next"

interface ChildComponentProps {}

const minSize = 15
const maxSize = 35

export const ChildComponent: React.FC<ChildComponentProps> = () => {
  const widgetManager = useInjection<WidgetManager>(TYPES.WidgetManager)
  const extensionLoader = useInjection<ExtensionsLoader>(TYPES.ExtensionsLoader)
  const languageRegistry = useInjection<LanguageRegistry>(
    TYPES.LanguageRegistry
  )

  const [widgets, setWidgets] = useState<Map<string, Widget>>(new Map())
  const [selectedWidget, setSelectedWidget] = useState<string | undefined>()
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isSupervisorMenuExpanded, setIsSupervisorMenuExpanded] =
    useState(false)
  const [isCustomMenuExpanded, setIsCustomMenuExpanded] = useState(false)
  const [customMenuName, setCustomMenuName] = useState<string>(
    "Application Specific Menu"
  )
  const [customMenuItems, setCustomMenuItems] = useState<TreeViewElement[]>([])
  const [nodeTree, setNodeTree] = useState<TreeViewElement[]>([])
  const [isManagingLayout, setIsManagingLayout] = useState(false)

  const extensionManifest = extensionLoader.getManifest

  useEffect(() => {
    setCustomMenuName("Test")
    setCustomMenuItems([
      {
        id: "1",
        name: "Test",
        children: [],
      },
    ])
    setNodeTree([
      {
        id: "root",
        name: "R-1",
        children: [],
      },
    ])
  }, [])

  const onUpdateSelectedTab = (tab: string | undefined) => {
    setSelectedWidget(tab)
  }

  const onCloseWidget = (tab: string) => {
    widgetManager.onCloseWidget(tab)
  }

  useEffect(() => {
    const updateWidgets = () => {
      const newWidgets = new Map(widgetManager.widgets)
      setWidgets(newWidgets)
      if (newWidgets.size > 0 && !selectedWidget) {
        setSelectedWidget(newWidgets.keys().next().value)
      }
    }

    const handleWidgetOpened = (key: string | undefined) => {
      onUpdateSelectedTab(key)
    }

    widgetManager.onWidgetChange(updateWidgets)
    widgetManager.onWidgetOpened(handleWidgetOpened)
    updateWidgets()

    return () => {
      widgetManager.removeOnWidgetChange(updateWidgets)
      widgetManager.removeOnWidgetOpened(handleWidgetOpened)
    }
  }, [widgetManager, selectedWidget])

  return (
    <div className="flex flex-col h-screen">
      <LayoutMenu
        isManagingLayout={isManagingLayout}
        setIsManagingLayout={setIsManagingLayout}
      />
      <div className="flex flex-1">
        <div id="content-panel" className={`w-full h-full flex flex-row`}>
          <ExtensionMenu
            isMenuCollapsed={isCollapsed}
            menuItems={extensionManifest}
          />
          <ResizablePanelGroup
            id={"main-content-resize-group"}
            direction="horizontal"
            className={`h-full w-full border-t`}
          >
            <ResizablePanel
              defaultSize={minSize}
              collapsible
              minSize={minSize}
              maxSize={maxSize}
              onCollapse={() => setIsCollapsed(true)}
              onExpand={() => setIsCollapsed(false)}
            >
              <div className="flex flex-col h-full items-center justify-start p-[5px]">
                <ResizablePanelGroup direction="vertical">
                  <ResizablePanel defaultSize={50}>
                    <div className="flex flex-col h-full items-start justify-start pt-[5px]">
                      <div className="flex flex-row w-full items-center justify-between">
                        <Badge className="text-sm m-[5px]">
                          Supervisor View
                        </Badge>
                        <ExpandButton
                          isExpanded={isSupervisorMenuExpanded}
                          setIsExpanded={setIsSupervisorMenuExpanded}
                        />
                      </div>
                      <MenuTreeUniversal
                        menuItems={nodeTree}
                        isExpanded={isSupervisorMenuExpanded}
                      />
                    </div>
                  </ResizablePanel>
                  <ResizableHandle withHandle />
                  <ResizablePanel defaultSize={50}>
                    <div className="flex flex-col h-full items-start justify-start pt-[5px]">
                      <div className="flex flex-row w-full items-center justify-between">
                        <Badge className="text-sm m-[5px]">
                          {customMenuName}
                        </Badge>
                        <ExpandButton
                          isExpanded={isCustomMenuExpanded}
                          setIsExpanded={setIsCustomMenuExpanded}
                        />
                      </div>
                      <MenuTreeCustom isExpanded={isCustomMenuExpanded} />
                    </div>
                  </ResizablePanel>
                </ResizablePanelGroup>
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={100 - minSize}>
              <div id="nube-main-content-container" className="w-full h-full">
                <MainDisplay
                  extensionManifest={extensionManifest}
                  isManagingLayout={isManagingLayout}
                />
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
        {/* <LeftTree />
        <div className="flex-1">
          {widgets.size === 0 ? (
            <WelcomeLayout />
          ) : (
            <Tabs
              key={selectedWidget}
              defaultValue={selectedWidget}
              className="flex flex-col h-full"
              onValueChange={onUpdateSelectedTab}
            >
              <TabsList className="flex gap-0 border-b-0 justify-start">
                {Array.from(widgets.entries()).map(([key, widget]) => (
                  <div className="flex relative">
                    <TabsTrigger key={key} value={key}>
                      {widget.name}
                      <div className="w-12"></div>
                    </TabsTrigger>
                    <div className="absolute right-1">
                      <Button
                        size="iconOnly"
                        variant="ghost"
                        className="relative top-0 right-0"
                        onClick={(event) => {
                          event.stopPropagation();
                          onCloseWidget(key);
                        }}
                      >
                        x<span className="sr-only">Close</span>
                      </Button>
                    </div>
                  </div>
                ))}
              </TabsList>
              {Array.from(widgets.entries()).map(([key, widget]) => (
                <TabsContent key={key} value={key}>
                  {widget.render()}
                </TabsContent>
              ))}
            </Tabs>
          )}
        </div> */}
      </div>
    </div>
  )
}
