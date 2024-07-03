import React, { forwardRef, useCallback, useRef } from "react";
// import { useMicrolcApiStore } from "@/stores/useMicrolcApiStore";
// import { Icon } from "../../views/components/Icon";
import { Icon } from "@iconify/react";
import { useVirtualizer } from "@tanstack/react-virtual";
import useResizeObserver from "use-resize-observer";

import { cn } from "@nubeio/ui";

import {
  CollapseButton,
  File,
  Folder,
  Tree,
  TreeViewElement,
} from "./tree-view-api";

// TODO: Add the ability to add custom icons

interface TreeViewComponentProps extends React.HTMLAttributes<HTMLDivElement> {}

type TreeViewProps = {
  initialSelectedId?: string;
  elements: TreeViewElement[];
  indicator?: boolean;
  isAllowContextMenu?: boolean;
  isAllowDrag?: boolean;
} & (
  | {
      initialExpendedItems?: string[];
      expandAll?: false;
    }
  | {
      initialExpendedItems?: undefined;
      expandAll: true;
    }
) &
  TreeViewComponentProps;

export const TreeView = ({
  elements,
  className,
  initialSelectedId,
  initialExpendedItems,
  expandAll,
  indicator = false,
  isAllowContextMenu = false,
  isAllowDrag = false,
}: TreeViewProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { getVirtualItems, getTotalSize } = useVirtualizer({
    count: elements.length,
    getScrollElement: () => containerRef.current,
    estimateSize: useCallback(() => 40, []),
    overscan: 5,
  });

  const { height = getTotalSize(), width } = useResizeObserver({
    ref: containerRef,
  });
  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full overflow-hidden rounded-md py-1",
        className,
      )}
    >
      <Tree
        initialSelectedId={initialSelectedId}
        initialExpendedItems={initialExpendedItems}
        elements={elements}
        style={{ height, width }}
        className="h-full w-full overflow-y-auto"
      >
        {getVirtualItems().map((element) => (
          <TreeItem
            aria-label="Root"
            key={element.key}
            elements={[elements[element.index]]}
            indicator={indicator}
            isAllowContextMenu={isAllowContextMenu}
            isAllowDrag={isAllowDrag}
          />
        ))}
        <CollapseButton
          elements={elements}
          expandAll={expandAll}
        ></CollapseButton>
      </Tree>
    </div>
  );
};

TreeView.displayName = "TreeView";

export const TreeItem = forwardRef<
  HTMLUListElement,
  {
    elements?: TreeViewElement[];
    indicator?: boolean;
    isAllowContextMenu?: boolean;
    isAllowDrag?: boolean;
  } & React.HTMLAttributes<HTMLUListElement>
>(
  (
    {
      // className,
      elements,
      indicator,
      isAllowContextMenu = false,
      isAllowDrag = false,
      ...props
    },
    ref,
  ) => {
    // const { api } = useMicrolcApiStore();
    const api = {
      set: (input: any) => {},
    };
    return (
      <ul ref={ref} className="w-full space-y-1" {...props}>
        {elements &&
          elements.map((element) => {
            return (
              <li key={element.id} className="w-full">
                {element.children && element.children?.length > 0 ? (
                  <Folder
                    className="px-[6px] py-[2px]"
                    api={api}
                    node={element}
                    element={element.name}
                    value={element.id}
                    isSelectable={element.isSelectable}
                    isAllowContextMenu={isAllowContextMenu}
                    customIcon={
                      element?.info?.icon ? (
                        <Icon
                          icon={`codicon:${element?.info?.icon || null}`}
                          className="h-4 w-4"
                        />
                      ) : null
                    }
                  >
                    <TreeItem
                      key={element.id}
                      aria-label={`folder ${element.name}`}
                      elements={element.children}
                      indicator={indicator}
                      isAllowContextMenu={isAllowContextMenu}
                      isAllowDrag={isAllowDrag}
                    />
                  </Folder>
                ) : (
                  <File
                    className="px-[6px] py-[2px]"
                    value={element.id}
                    aria-label={`File ${element.name}`}
                    key={element.id}
                    isSelectable={element.isSelectable}
                    isAllowContextMenu={isAllowContextMenu}
                    api={api}
                    fileIcon={
                      // <Icon name={element?.icon || "File"} className="h-4 w-4" />
                      <Icon
                        icon={`codicon:${element?.info?.icon || "file"}`}
                        className="h-4 w-4"
                      />
                    }
                    draggable={isAllowDrag}
                    onDragStart={() => {
                      api.set({ dragItem: element });
                    }}
                  >
                    <span>{element?.name}</span>
                  </File>
                )}
              </li>
            );
          })}
      </ul>
    );
  },
);

TreeItem.displayName = "TreeItem";
