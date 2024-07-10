import { TreeViewElement } from "@nubeio/ui";

import { LayoutConfig } from "../layouts/layout-type";

export type StoreType = {
  customMenuBar: TreeViewElement[] | undefined;
  currentSelectedPanel: LayoutConfig | undefined;
  setCustomMenuBar: (input: TreeViewElement[] | undefined) => void;
  setCurrentSelectedPanel: (input: LayoutConfig | undefined) => void;
};
