import "reflect-metadata";

import { ContainerModule } from "inversify";

import { FrontEndApplication, TYPES } from "./common";
import { CoreFrontendApplication } from "./core-application";
import { LayoutRegistry } from "./layouts";
import { MenuRegistry } from "./menu";
import { OpenHandler, OpenService, WidgetManager } from "./widget";

const coreContainer = new ContainerModule((bind) => {
  bind(TYPES.MenuRegistry).to(MenuRegistry).inSingletonScope();
  bind(TYPES.WidgetManager).to(WidgetManager).inSingletonScope();
  bind(TYPES.LayoutRegistry).to(LayoutRegistry).inSingletonScope();

  bind<FrontEndApplication>(TYPES.FrontEndApplication).to(
    CoreFrontendApplication,
  );
  bind<CoreFrontendApplication>(CoreFrontendApplication)
    .toSelf()
    .inSingletonScope();

  bind(TYPES.OpenService)
    .toDynamicValue((context) => {
      const bindings = context.container.getAll<OpenHandler>(TYPES.OpenHandler);
      const widgetManager = context.container.get<WidgetManager>(
        TYPES.WidgetManager,
      );

      return new OpenService(bindings, widgetManager);
    })
    .inSingletonScope();
});

export default coreContainer;
