import { TreeView } from "@nubeio/ui/modified-menu-tree/tree-view";

export const MenuTreeUniversal = (props: any) => {
  const { menuItems, isExpanded } = props;

  return (
    <TreeView
      className={`rounded-md h-full bg-background overflow-hidden p-0 `}
      elements={menuItems}
      expandAll={isExpanded}
      isAllowContextMenu={true}
      isAllowDrag={false}
    />
  );
};
