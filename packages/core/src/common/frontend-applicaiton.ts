import { Container } from "inversify";

import { TYPES } from "./types";

export interface FrontEndApplication {
  initialize(): void;
}

export const initializeApplication = (container: Container) => {
  const bindings = container.getAll<FrontEndApplication>(
    TYPES.FrontEndApplication,
  );
  bindings.forEach((binding) => binding.initialize());
};
