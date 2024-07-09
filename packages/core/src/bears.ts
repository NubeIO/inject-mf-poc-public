import { injectable } from "inversify";
import { create } from "zustand";

import { Store } from "./common/store";

export type Bears = {
  bears: number;
  increasePopulation: () => void;
  decreasePopulation: () => void;
  removeAllBears: () => void;
};

@injectable()
export class BearStore implements Bears, Store<Bears> {
  private store = create<Bears>((set) => ({
    bears: 0,
    increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
    decreasePopulation: () => set((state) => ({ bears: state.bears - 1 })),
    removeAllBears: () => set({ bears: 0 }),
  }));

  useStore() {
    return this.store();
  }

  get bears() {
    return this.store.getState().bears;
  }

  subscribe = this.store.subscribe;
  increasePopulation = this.store((state) => state.increasePopulation);
  removeAllBears = this.store((state) => state.removeAllBears);
  decreasePopulation = this.store((state) => state.decreasePopulation);
}
