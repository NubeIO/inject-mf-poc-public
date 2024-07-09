import { injectable } from "inversify";
import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

const testApi = create<any>(
  subscribeWithSelector((set: any) => ({
    test: 10,
    setTest: (input: any) => set({ test: input }),
  })),
);

@injectable()
export class StoreManager {
  protected store: any = {};

  constructor() {
    this.store = testApi;
  }

  get getStore(): any {
    return this.store;
  }
}
