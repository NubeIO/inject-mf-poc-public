import React, { memo, useEffect, useRef, useState } from "react";
import { useInjection } from "inversify-react";
import { TYPES, LayoutRegistry, LayoutConfig } from "@nubeio/flex-core"

import { Separator } from "@nubeio/ui/separator";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@nubeio/ui/resizable"
import {
  Trash2,
  CirclePlus,
  SquareSplitHorizontal,
  SquareSplitVertical,
} from "lucide-react"
import { WidgetSelection } from "./ExtensionSeletor"

const iconStyle = "w-[32px] h-[32px] p-[5px] rounded-lg hover:bg-slate-200"

export const MainDisplay = memo((props: any) => {
  const { extensionManifest, isManagingLayout } = props
  const layoutRegistry = useInjection<LayoutRegistry>(TYPES.LayoutRegistry)
  const [layout, setLayout] = useState<LayoutConfig | undefined>(undefined)

  useEffect(() => {
    const selectedLayoutChangeCallback = () => {
      const updatedSelectedLayout = { ...layoutRegistry.getSelectedLayout }

      setLayout(updatedSelectedLayout.layout)
    }
    // call once to get the initial layouts
    selectedLayoutChangeCallback()

    layoutRegistry.onSelectedLayoutChange(selectedLayoutChangeCallback)
    return () => {
      layoutRegistry.removeOnSelectedLayoutChange(selectedLayoutChangeCallback)
    }
  }, [layoutRegistry])

  const renderLayout = (config: LayoutConfig) => {
    const actionGroup = (child: LayoutConfig, floating: boolean) => {
      return (
        <div
          className={`w-full h-full flex flex-col items-center justify-center ${floating && "bg-white/80 absolute z-[1]"}`}
        >
          <span className="font-semibold">{child.id}</span>
          <WidgetSelection
            extensionManifest={extensionManifest}
            setLayout={setLayout}
            selectedPanel={child}
          >
            <CirclePlus className={iconStyle} />
          </WidgetSelection>
          <Separator className="my-4 w-[150px]" />
          <div className="flex flex-row items-center">
            <SquareSplitHorizontal
              className={iconStyle}
              onClick={() => {
                layoutRegistry.changeLayout(child, "horizontal", "add")
              }}
            />
            <Separator className="mx-4" orientation="vertical" />
            <SquareSplitVertical
              className={iconStyle}
              onClick={() => {
                layoutRegistry.changeLayout(child, "vertical", "add")
              }}
            />
            {child.parentId && (
              <>
                <Separator className="mx-4" orientation="vertical" />
                <Trash2
                  className={iconStyle}
                  onClick={() => {
                    layoutRegistry.changeLayout(child, child.style, "remove")
                  }}
                />
              </>
            )}
          </div>
        </div>
      )
    }

    // if the layout has no children then render the content or the action group
    if (config.children.length === 0) {
      return (
        <div
          key={config.id}
          className="flex flex-col w-full h-full items-center justify-center relative"
        >
          {config.content !== null ? (
            isManagingLayout ? (
              <>
                {actionGroup(config, true)}
                {config.content}
              </>
            ) : (
              config.content
            )
          ) : (
            actionGroup(config, false)
          )}
        </div>
      )
    }

    // if the layout has children then render the resizable panel group
    return (
      <ResizablePanelGroup
        direction={config.style as any}
        className={`w-full h-full p-0`}
      >
        {config.children.map((child: LayoutConfig, index: number) => {
          const hasChildren = child.children.length !== 0
          const initSize = hasChildren ? 100 / config.children.length : 100
          return (
            <>
              <ResizablePanel defaultSize={initSize} minSize={20} maxSize={80}>
                <div className="flex flex-col w-full h-full items-center justify-center relative">
                  {hasChildren ? (
                    renderLayout(child)
                  ) : child.content !== null ? (
                    isManagingLayout ? (
                      <>
                        {actionGroup(child, true)}
                        {child.content}
                      </>
                    ) : (
                      child.content
                    )
                  ) : (
                    actionGroup(child, false)
                  )}
                </div>
              </ResizablePanel>
              {index !== config.children.length - 1 && <ResizableHandle />}
            </>
          )
        })}
      </ResizablePanelGroup>
    )
  }

  return (
    <div id="main-display-area" className="flex w-full h-full">
      {layout ? (
        renderLayout(layout)
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center">
          <h1 className="text-[40px]">💪 Welcome to Flex 💪</h1>
        </div>
      )}
    </div>
  )
})