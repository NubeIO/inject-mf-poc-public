import { interfaces } from "inversify";
import { useInjection } from "inversify-react";

export interface Store<T> {
  useStore: () => T;
  subscribe: (listener: (state: T, prevState: T) => void) => void;
}

export function useStore<T extends Store<any>>(
  serviceId: interfaces.ServiceIdentifier<T>,
): T {
  const service = useInjection<T>(serviceId).useStore();
  return service as T;
}
