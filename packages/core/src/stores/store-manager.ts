import { injectable } from "inversify";
import { create, StoreApi, UseBoundStore } from "zustand";

import { TreeViewElement } from "@nubeio/ui";

import { LayoutConfig } from "../layouts/layout-type";
import { StoreType } from "./store-types";
@injectable()
export class StoreManager {
  private store = create<StoreType>((set) => ({
    customMenuBar: undefined,
    currentSelectedPanel: undefined,
    setCustomMenuBar: (input: TreeViewElement[] | undefined) =>
      set({ customMenuBar: input }),
    setCurrentSelectedPanel: (input: LayoutConfig | undefined) =>
      set({ currentSelectedPanel: input }),
  }));

  get getStore(): UseBoundStore<StoreApi<StoreType>> {
    return this.store;
  }
}