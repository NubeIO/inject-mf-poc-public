import React, { memo, useEffect, useRef, useState } from "react";
import { useInjection } from "inversify-react";
import { TYPES, URI, OpenService, WidgetManager } from "@nubeio/flex-core";

import { Separator } from "@nubeio/ui/separator";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@nubeio/ui/resizable"
import { Popover, PopoverContent, PopoverTrigger } from "@nubeio/ui/popover"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@nubeio/ui/select"
import {
  Trash2,
  CirclePlus,
  SquareSplitHorizontal,
  SquareSplitVertical,
} from "lucide-react"

import { LayoutRegistry } from "@nubeio/flex-core"

import {
  init,
  loadRemote,
  registerRemotes,
} from "@module-federation/enhanced/runtime"

type LayoutConfig = {
  id: string
  style: string
  parentId: string | null
  children: LayoutConfig[]
  content: React.ReactNode | null
}

const iconStyle = "w-[32px] h-[32px] p-[5px] rounded-lg hover:bg-slate-200"

// const layoutConfig = {
//   id: "a",
//   style: "horizontal",
//   parentId: null,
//   content: null,
//   children: [
//     {
//       id: "b",
//       style: "vertical",
//       parentId: "a",
//       children: [
//         {
//           id: "c",
//           style: "horizontal",
//           parentId: "b",
//           children: [],
//           content: null,
//         },
//         {
//           id: "d",
//           style: "horizontal",
//           parentId: "b",
//           children: [],
//           content: null,
//         },
//       ],
//       content: null,
//     },
//     {
//       id: "e",
//       style: "vertical",
//       parentId: "a",
//       children: [
//         {
//           id: "f",
//           style: "horizontal",
//           parentId: "e",
//           children: [],
//           content: null,
//         },
//         {
//           id: "g",
//           style: "horizontal",
//           parentId: "e",
//           children: [],
//           content: null,
//         },
//       ],
//       content: null,
//     },
//   ],
// }

export const MainDisplay = memo((props: any) => {
  const { extensionManifest, isManagingLayout } = props
  const layoutRegistry = useInjection<LayoutRegistry>(TYPES.LayoutRegistry)
  const [layout, setLayout] = useState<LayoutConfig | undefined>(undefined)

  useEffect(() => {
    const selectedLayoutChangeCallback = () => {
      const updatedSelectedLayout = { ...layoutRegistry.getSelectedLayout }
      console.log("selected layout changed: ", updatedSelectedLayout)

      setLayout(updatedSelectedLayout.layout)
    }
    // call once to get the initial layouts
    selectedLayoutChangeCallback()

    layoutRegistry.onSelectedLayoutChange(selectedLayoutChangeCallback)
    return () => {
      layoutRegistry.removeOnSelectedLayoutChange(selectedLayoutChangeCallback)
    }
  }, [layoutRegistry])

  // const changeLayout = (
  //   selectedPanel: LayoutConfig,
  //   orientation: string,
  //   op: string
  // ) => {
  //   const newConfig = {
  //     id: generateUuid(),
  //     style: orientation,
  //     parentId: selectedPanel.parentId,
  //     children: [],
  //     content: null,
  //   };

  //   // create a copy of the initial layout and modify it
  //   const copy: LayoutConfig = { ...layout };

  //   const traverseAndModify = (copyLayout: LayoutConfig) => {
  //     // find the parent of the current selected panel
  //     // check if the children of each level of the old layout and modified the parent of the selected panel
  //     let positionInChildrenArray = -1;
  //     const hasChild = copyLayout.children.some(
  //       (child: LayoutConfig, index: number) => {
  //         if (child.id === selectedPanel.id) {
  //           positionInChildrenArray = index;
  //           return true;
  //         } else {
  //           return false;
  //         }
  //       }
  //     );

  //     if (hasChild && positionInChildrenArray !== -1) {
  //       const parent = copyLayout;

  //       if (op === "add") {
  //         if (parent.style === orientation) {
  //           // if the newly added style is the same with the parent style then add the new config to the parent's children
  //           parent.children.splice(positionInChildrenArray + 1, 0, newConfig);
  //         } else {
  //           // else make the current selected panel a new parent and add its former self and the new panel to its children
  //           const newParentId = generateUuid();
  //           const newParent = {
  //             id: newParentId,
  //             style: orientation,
  //             parentId: parent.id,
  //             children: [
  //               {
  //                 ...selectedPanel,
  //                 parentId: newParentId,
  //               },
  //               { ...newConfig, parentId: newParentId },
  //             ],
  //             content: null,
  //           };
  //           parent.children[positionInChildrenArray] = newParent;
  //         }
  //       } else if (op === "remove") {
  //         // parent.children.splice(positionInChildrenArray, 1);
  //         if (parent.children.length > 2) {
  //           // if the number of children is greater than 2 then remove the selected panel from the parent's children
  //           parent.children.splice(positionInChildrenArray, 1);
  //         } else {
  //           // else remove the selected panel and make its sibling the parent
  //           // find the sibling of the selected panel
  //           const sibling = parent.children.filter(
  //             (child: LayoutConfig) => child.id !== selectedPanel.id
  //           )[0];

  //           // if the style of sibling is the same with its grandparent then spread all the children of the sibling to the grandparent
  //           // find grandparent style
  //           const grandParent = findPanelById(copy, parent.parentId);
  //           if (
  //             sibling.children.length !== 0 &&
  //             grandParent &&
  //             grandParent.style === sibling.style
  //           ) {
  //             const updatedSibilingChildren = sibling.children.map(
  //               (child: LayoutConfig) => {
  //                 child.parentId = grandParent.id;
  //                 return child;
  //               }
  //             );
  //             // find the index of the parent in the grandparent's children array
  //             const parentIndex = grandParent.children.findIndex(
  //               (child: LayoutConfig) => child.id === parent.id
  //             );
  //             // remove the parent from the grandparent's children array
  //             grandParent.children.splice(parentIndex, 1);
  //             // spread the updated sibling children to the grandparent's children array
  //             grandParent.children.splice(
  //               parentIndex,
  //               0,
  //               ...updatedSibilingChildren
  //             );
  //           } else {
  //             parent.children = [...sibling.children];
  //             parent.style = sibling.style;
  //             parent.id = sibling.id;
  //             parent.content = sibling.content;
  //           }
  //         }
  //       }
  //     } else {
  //       copyLayout.children.forEach((child: LayoutConfig) => {
  //         traverseAndModify(child);
  //       });
  //     }
  //   };

  //   if (copy.children.length === 0 && copy.parentId === null) {
  //     // if the layout has no children, then the selected panel is the root
  //     // make a new root and the old root its child
  //     copy.id = generateUuid();
  //     copy.style = orientation;
  //     copy.children = [
  //       { ...selectedPanel, parentId: copy.id },
  //       { ...newConfig, parentId: copy.id },
  //     ];
  //   } else {
  //     traverseAndModify(copy);
  //   }

  //   setLayout(copy);
  // };

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

// const findPanelById = (
//   layout: LayoutConfig,
//   id: string | null
// ): LayoutConfig | null => {
//   if (id === null) {
//     return layout;
//   } else if (layout.id === id) {
//     return layout;
//   } else if (layout.children.length !== 0) {
//     for (let i = 0; i < layout.children.length; i++) {
//       const res = findPanelById(layout.children[i], id);
//       if (res !== null) {
//         return res;
//       }
//     }
//   }

//   return null;
// };

const WidgetSelection = (props: any) => {
  const { children, extensionManifest, setLayout, selectedPanel } = props
  const widgetManager = useInjection<WidgetManager>(TYPES.WidgetManager)
  const layoutRegistry = useInjection<LayoutRegistry>(TYPES.LayoutRegistry)
  const [isPopoverOpen, setIsPopoverOpen] = useState(false)

  const extraOptions = [
    {
      name: "wires_counter",
      url: "wires://nube.app/?id=counter",
    },
    {
      name: "wires_todo",
      url: "wires://nube.app/?id=todo",
    },
    {
      name: "wires_trigger",
      url: "wires://nube.app/?id=trigger",
    },
  ]

  const handleExtensionChange = async (value: string) => {
    let Extension: any = null
    if (value.includes("wires")) {
      const uri = URI.parse(value)
      const queryParams = new URLSearchParams(uri.query)
      const id = queryParams.get("id")
      const widget: any = await widgetManager.getOrCreateWidget("widget:flow", {
        uri: uri,
        id: id,
      })
      Extension = widget.render()
    } else {
      const res: any = await loadRemote(value)
      Extension = res.default
    }

    setLayout((prevLayout: LayoutConfig) => {
      // create a copy of the previous layout
      const copy: LayoutConfig = { ...prevLayout }
      // find the selected panel in the layout
      const currentPanel = layoutRegistry.findPanelById(copy, selectedPanel.id)
      if (currentPanel === null) return copy
      // add the new extension to the children of the selected panel
      currentPanel.content = value.includes("wires") ? Extension : <Extension />
      return copy
    })

    // close the popover
    setIsPopoverOpen(false)
  }

  return (
    <Popover
      open={isPopoverOpen}
      onOpenChange={(open: boolean) => setIsPopoverOpen(open)}
    >
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Extension Selection</h4>
            <p className="text-sm text-muted-foreground">
              Select an extension to add to this panel
            </p>
          </div>
          <div className="grid gap-2">
            <Select onValueChange={handleExtensionChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select an extension" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Available Extensions</SelectLabel>
                  {[...extraOptions, ...extensionManifest].map(
                    (item: any, index: number) => {
                      return (
                        <SelectItem value={item.url}>{item.name}</SelectItem>
                      )
                    }
                  )}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
