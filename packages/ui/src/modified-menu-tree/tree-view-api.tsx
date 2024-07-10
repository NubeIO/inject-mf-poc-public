"use client";

import React, {
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { FileIcon, SquareMinus, SquarePlus } from "lucide-react";

import { cn } from "@nubeio/ui";
import { Button } from "@nubeio/ui/button";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@nubeio/ui/context-menu";
import { ScrollArea } from "@nubeio/ui/scroll-area";

type TreeViewElement = {
  id: string;
  name: string;
  // icon?: string;
  info?: any;
  isSelectable?: boolean;
  children?: TreeViewElement[];
};

type TreeContextProps = {
  selectedId: string | undefined;
  expendedItems: string[] | undefined;
  indicator: boolean;
  handleExpand: (id: string, e: React.MouseEvent) => void;
  selectItem: (id: string) => void;
  setExpendedItems?: React.Dispatch<React.SetStateAction<string[] | undefined>>;
  openIcon?: React.ReactNode;
  closeIcon?: React.ReactNode;
  direction: "rtl" | "ltr";
};

const TreeContext = createContext<TreeContextProps | null>(null);

const useTree = () => {
  const context = useContext(TreeContext);
  if (!context) {
    throw new Error("useTree must be used within a TreeProvider");
  }
  return context;
};

interface TreeViewComponentProps extends React.HTMLAttributes<HTMLDivElement> {}

type Direction = "rtl" | "ltr" | undefined;

type TreeViewProps = {
  initialSelectedId?: string;
  indicator?: boolean;
  elements?: TreeViewElement[];
  initialExpendedItems?: string[];
  openIcon?: React.ReactNode;
  closeIcon?: React.ReactNode;
} & TreeViewComponentProps;

const Tree = forwardRef<HTMLDivElement, TreeViewProps>(
  (
    {
      className,
      elements,
      initialSelectedId,
      initialExpendedItems,
      children,
      indicator = true,
      openIcon,
      closeIcon,
      dir,
      ...props
    },
    ref,
  ) => {
    const [selectedId, setSelectedId] = useState<string | undefined>(
      initialSelectedId,
    );
    const [expendedItems, setExpendedItems] = useState<string[] | undefined>(
      initialExpendedItems,
    );

    const selectItem = useCallback((id: string) => {
      setSelectedId(id);
    }, []);

    const handleExpand = useCallback((id: string, e: React.MouseEvent) => {
      const element: HTMLElement = e.target as HTMLElement;
      if (["svg", "span"].includes(element.tagName.toLowerCase())) {
        setExpendedItems((prev) => {
          if (prev?.includes(id)) {
            return prev.filter((item) => item !== id);
          }
          return [...(prev ?? []), id];
        });
      }
    }, []);

    const expandSpecificTargetedElements = useCallback(
      (elements?: TreeViewElement[], selectId?: string) => {
        if (!elements || !selectId) return;
        const findParent = (
          currentElement: TreeViewElement,
          currentPath: string[] = [],
        ) => {
          const isSelectable = currentElement.isSelectable ?? true;
          const newPath = [...currentPath, currentElement.id];
          if (currentElement.id === selectId) {
            if (isSelectable) {
              setExpendedItems((prev) => [...(prev ?? []), ...newPath]);
            } else {
              if (newPath.includes(currentElement.id)) {
                newPath.pop();
                setExpendedItems((prev) => [...(prev ?? []), ...newPath]);
              }
            }
            return;
          }
          if (
            isSelectable &&
            currentElement.children &&
            currentElement.children.length > 0
          ) {
            currentElement.children.forEach((child) => {
              findParent(child, newPath);
            });
          }
        };
        elements.forEach((element) => {
          findParent(element);
        });
      },
      [],
    );

    useEffect(() => {
      if (initialSelectedId) {
        expandSpecificTargetedElements(elements, initialSelectedId);
      }
    }, [initialSelectedId, elements]);

    const direction = dir === "rtl" ? "rtl" : "ltr";

    return (
      <TreeContext.Provider
        value={{
          selectedId,
          expendedItems,
          handleExpand,
          selectItem,
          setExpendedItems,
          indicator,
          openIcon,
          closeIcon,
          direction,
        }}
      >
        <div className={cn("size-full", className)}>
          <ScrollArea
            ref={ref}
            className="relative h-full px-2"
            dir={dir as Direction}
          >
            <AccordionPrimitive.Root
              {...props}
              type="multiple"
              defaultValue={expendedItems}
              value={expendedItems}
              className="flex flex-col gap-1"
              onValueChange={(value) =>
                setExpendedItems((prev) => [...(prev ?? []), value[0]])
              }
              dir={dir as Direction}
            >
              {children}
            </AccordionPrimitive.Root>
          </ScrollArea>
        </div>
      </TreeContext.Provider>
    );
  },
);

Tree.displayName = "Tree";

const TreeIndicator = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { direction } = useTree();

  return (
    <div
      dir={direction}
      ref={ref}
      className={cn(
        "absolute left-1.5 h-full w-px rounded-md bg-muted py-3 duration-300 ease-in-out hover:bg-slate-300 rtl:right-1.5",
        className,
      )}
      {...props}
    />
  );
});

TreeIndicator.displayName = "TreeIndicator";

interface FolderComponentProps
  extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> {}

type FolderProps = {
  api: any;
  expendedItems?: string[];
  element: string;
  node: any;
  isSelectable?: boolean;
  isSelect?: boolean;
  isAllowContextMenu?: boolean;
  customIcon?: React.ReactNode;
} & FolderComponentProps;

const Folder = forwardRef<
  HTMLDivElement,
  FolderProps & React.HTMLAttributes<HTMLDivElement>
>(
  ({
    api,
    className,
    element,
    node,
    value,
    isSelectable = true,
    isAllowContextMenu = false,
    isSelect,
    children,
    customIcon,
    ...props
  },
  ref
) =>
    {
      const {
        direction,
        handleExpand,
        expendedItems,
        indicator,
        setExpendedItems,
        openIcon,
        closeIcon,
      } = useTree();

      return (
        <AccordionPrimitive.Item
          ref={ref}
          {...props}
          value={value}
          className="relative h-full overflow-hidden"
        >
          <AccordionPrimitive.Trigger
            className={cn(
              `flex items-center gap-1 rounded-md text-sm`,
              className,
              {
                "rounded-md bg-muted": isSelect && isSelectable,
                "cursor-pointer": isSelectable,
                "cursor-not-allowed opacity-50": !isSelectable,
                "bg-amber-400": node?.isHighlighted || false,
              },
            )}
            disabled={!isSelectable}
            onClick={(e: React.MouseEvent) => handleExpand(value, e)}
          >
            {expendedItems?.includes(value)
              ? openIcon ?? <SquareMinus className="h-4 w-4" />
              : closeIcon ?? <SquarePlus className="h-4 w-4" />}
            {customIcon}
            <ContextMenuWrapper
              isEnabled={isAllowContextMenu}
              uuid={value}
              api={api}
            >
              <span>{element}</span>
            </ContextMenuWrapper>
          </AccordionPrimitive.Trigger>
          <AccordionPrimitive.Content className="relative h-full overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
            {element && indicator && <TreeIndicator aria-hidden="true" />}
            <AccordionPrimitive.Root
              dir={direction}
              type="multiple"
              className="ml-5 flex flex-col gap-1 py-1 rtl:mr-5"
              defaultValue={expendedItems}
              value={expendedItems}
              onValueChange={(value) => {
                setExpendedItems?.((prev) => [...(prev ?? []), value[0]]);
              }}
            >
              {children}
            </AccordionPrimitive.Root>
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      );
    },
);

Folder.displayName = "Folder";

const File = forwardRef<
  HTMLButtonElement,
  {
    value: string;
    handleSelect?: (id: string) => void;
    isSelectable?: boolean;
    isSelect?: boolean;
    fileIcon?: React.ReactNode;
    api?: any;
    isAllowContextMenu?: boolean;
  } & React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(
  (
    {
      value,
      className,
      // handleSelect,
      isSelectable = true,
      isSelect,
      fileIcon,
      children,
      api,
      isAllowContextMenu = false,
      ...props
    },
    ref,
  ) => {
    const timeoutHandle = useRef<any>(null);
    const { direction, selectedId, selectItem } = useTree();
    const isSelected = isSelect ?? selectedId === value;
    return (
      <AccordionPrimitive.Item value={value} className="relative">
        <AccordionPrimitive.Trigger
          ref={ref}
          {...props}
          dir={direction}
          disabled={!isSelectable}
          aria-label="File"
          className={cn(
            "flex cursor-pointer items-center gap-1 rounded-md pr-1 text-sm duration-200 ease-in-out rtl:pl-1 rtl:pr-0",
            {
              "bg-muted": isSelected && isSelectable,
            },
            isSelectable ? "cursor-pointer" : "cursor-not-allowed opacity-50",
            className,
          )}
          onClick={() => {
            clearTimeout(timeoutHandle.current);
            timeoutHandle.current = setTimeout(() => {
              selectItem(value);
              if (!props.draggable && api) {
                api.set({ selectNodeSignal: value });
                // clear the state in case user want to select the same node again
                api.set({ selectNodeSignal: "" });
              }
            }, 200);
          }}
          onDoubleClick={() => {
            clearTimeout(timeoutHandle.current);
            selectItem(value);
            if (!props.draggable && api) {
              api.set({ jumpToNodeSignal: value });
              // clear the state in case user want to select the same node again
              api.set({ jumpToNodeSignal: "" });
            }
          }}
        >
          {fileIcon ?? <FileIcon className="h-4 w-4" />}
          <ContextMenuWrapper
            isEnabled={isAllowContextMenu}
            uuid={value}
            api={api}
          >
            {children}
          </ContextMenuWrapper>
        </AccordionPrimitive.Trigger>
      </AccordionPrimitive.Item>
    );
  },
);

File.displayName = "File";

const CollapseButton = forwardRef<
  HTMLButtonElement,
  {
    elements: TreeViewElement[];
    expandAll?: boolean;
  } & React.HTMLAttributes<HTMLButtonElement>
>(
  (
    {
      // className,
      elements,
      expandAll = false,
      children,
      ...props
    },
    ref,
  ) => {
    const { expendedItems, setExpendedItems } = useTree();

    const expendAllTree = useCallback((elements: TreeViewElement[]) => {
      const expandTree = (element: TreeViewElement) => {
        const isSelectable = element.isSelectable ?? true;
        if (isSelectable && element.children && element.children.length > 0) {
          setExpendedItems?.((prev) => [...(prev ?? []), element.id]);
          element.children.forEach(expandTree);
        }
      };

      elements.forEach(expandTree);
    }, []);

    const closeAll = useCallback(() => {
      setExpendedItems?.([]);
    }, []);

    useEffect(() => {
      if (expandAll) {
        expendAllTree(elements);
      } else {
        closeAll();
      }
    }, [expandAll]);

    return (
      <Button
        variant={"ghost"}
        className="absolute bottom-1 right-2 h-8 w-fit p-1"
        onClick={
          expendedItems && expendedItems.length > 0
            ? closeAll
            : () => expendAllTree(elements)
        }
        ref={ref}
        {...props}
      >
        {children}
        <span className="sr-only">Toggle</span>
      </Button>
    );
  },
);

CollapseButton.displayName = "CollapseButton";

const ContextMenuWrapper = (props: any) => {
  const { children, isEnabled, uuid, api } = props;
  if (!isEnabled) {
    return <>{children}</>;
  }

  const handleSendOpenNodeSignal = (e: React.MouseEvent) => {
    e.stopPropagation();
    api.set({ jumpToNodeSignal: uuid });
    // clear the state in case user want to select the same node again
    api.set({ jumpToNodeSignal: "" });
  };

  const handleGoToNode = (e: React.MouseEvent) => {
    e.stopPropagation();
    api.set({ selectNodeSignal: uuid });
    // clear the state in case user want to select the same node again
    api.set({ selectNodeSignal: "" });
  };

  return (
    <ContextMenu>
      <ContextMenuTrigger>{children}</ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem onClick={(e: React.MouseEvent) => handleGoToNode(e)}>
          Go To Node
        </ContextMenuItem>
        <ContextMenuItem
          onClick={(e: React.MouseEvent) => handleSendOpenNodeSignal(e)}
        >
          Open
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
};

export { Tree, Folder, File, CollapseButton, type TreeViewElement };
