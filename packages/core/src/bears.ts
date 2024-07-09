import { injectable } from "inversify";
import { create } from "zustand";

import { Store } from "./common/store";

export type Bears = {
  readonly bears: number;
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

  get bears() {
    return this.getState().bears;
  }

  increasePopulation = () => this.getState().increasePopulation();
  removeAllBears = () => this.getState().removeAllBears();
  decreasePopulation = () => this.getState().decreasePopulation();

  useStore(): Bears {
    return this.store();
  }

  getState(): Bears {
    return this.store.getState();
  }

  subscribe = (listener: (state: Bears, prevState: Bears) => void) =>
    this.store.subscribe(listener);
}
