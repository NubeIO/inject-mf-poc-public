import { injectable } from "inversify";
import { createStore } from "zustand";

const flexStore = createStore<any>((set: any) => ({
  test: 10,
  setTest: (input: any) => set({ test: input }),
}));

@injectable()
export class StoreManager {
  protected store: any = {};

  constructor() {
    this.store = flexStore;
  }

  get getStore(): any {
    return this.store;
  }
}
