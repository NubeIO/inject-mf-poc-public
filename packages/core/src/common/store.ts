import { interfaces } from "inversify";
import { useInjection } from "inversify-react";

import { use } from "../scope";

export interface Store<T> {
  useStore: () => T;
  getState: () => T;
  subscribe: (listener: (state: T, prevState: T) => void) => void;
}

export function useStore<T extends Store<any>>(
  serviceId: interfaces.ServiceIdentifier<T>,
): T {
  return use(useInjection<T>(serviceId))
    ?.apply(function () {
      this.useStore();
    })
    .item() as T;
}
