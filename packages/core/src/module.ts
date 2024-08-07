import "reflect-metadata";

import { ContainerModule } from "inversify";

import { ACLRegistry } from "./acl";
import { BearStore } from "./bears";
import { FrontEndApplication, TYPES } from "./common";
import { CoreFrontendApplication } from "./core-application";
import {
  DEFAULT_NAMESPACE,
  LanguageRegistry,
  LocalizationService,
} from "./i18n";
import { LanguageNSRegistry } from "./i18n/language-namespace-service";
import { MenuRegistry } from "./menu";
import { OpenHandler, OpenService, WidgetManager } from "./widget";

const coreContainer = new ContainerModule((bind) => {
  bind(TYPES.MenuRegistry).to(MenuRegistry).inSingletonScope();
  bind(TYPES.WidgetManager).to(WidgetManager).inSingletonScope();
  bind(TYPES.BearStore).to(BearStore).inSingletonScope();
  bind(TYPES.LanguageRegistry).to(LanguageRegistry).inSingletonScope();
  bind(TYPES.LocalizationService).to(LocalizationService).inSingletonScope();
  bind(TYPES.ACLRegistry).to(ACLRegistry).inSingletonScope();

  bind<FrontEndApplication>(TYPES.FrontEndApplication).to(
    CoreFrontendApplication,
  );

  bind<CoreFrontendApplication>(CoreFrontendApplication)
    .toSelf()
    .inSingletonScope();

  LanguageNSRegistry.createBinding(bind, DEFAULT_NAMESPACE);

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
