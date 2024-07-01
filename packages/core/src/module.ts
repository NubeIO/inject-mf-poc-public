import "reflect-metadata";

import { ContainerModule } from "inversify";

import { FrontEndApplication, TYPES } from "./common";
import { CoreFrontendApplication } from "./core-application";
import { MenuRegistry } from "./menu";
import { WidgetManager } from "./widget";

const coreContainer = new ContainerModule((bind) => {
  bind(TYPES.MenuRegistry).to(MenuRegistry).inSingletonScope();
  bind(TYPES.WidgetManager).to(WidgetManager).inSingletonScope();

  bind<FrontEndApplication>(TYPES.FrontEndApplication).to(
    CoreFrontendApplication,
  );
  bind<CoreFrontendApplication>(CoreFrontendApplication)
    .toSelf()
    .inSingletonScope();
});

export default coreContainer;
