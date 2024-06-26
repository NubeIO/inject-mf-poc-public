import "reflect-metadata";

import { ContainerModule } from "inversify";

import { CoreFrontendApplication } from "./core-application";
import { MenuRegistry, TYPES } from "./menu";

const coreContainer = new ContainerModule((bind) => {
  bind(TYPES.MenuRegistry).to(MenuRegistry).inSingletonScope();
  bind(CoreFrontendApplication).toSelf().inSingletonScope();
});

export default coreContainer;
