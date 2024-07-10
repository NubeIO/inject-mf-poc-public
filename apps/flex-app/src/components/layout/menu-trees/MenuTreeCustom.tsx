import { useInjection } from "inversify-react"
import { StoreManager, TYPES } from "@nubeio/flex-core"
import { TreeView } from "@nubeio/ui/modified-menu-tree/tree-view"
import { useEffect } from "react"
import { TreeViewElement } from "@nubeio/ui"

const defaultCustomMenuBarItem: TreeViewElement[] = [
  {
    id: "root",
    name: "Empty",
    info: undefined,
    isSelectable: undefined,
    children: undefined,
  },
]

export const MenuTreeCustom = (props: any) => {
  const { isExpanded } = props
  const storeManager = useInjection<StoreManager>(TYPES.StoreManager)

  const { customMenuBar } = storeManager.getStore()
  const menuElements = customMenuBar || defaultCustomMenuBarItem

  return (
    <TreeView
      className={`rounded-md h-full bg-background overflow-hidden p-0 `}
      elements={menuElements}
      expandAll={isExpanded}
      isAllowDrag={true}
    />
  )
}
