


import "reflect-metadata";



import axios from "axios";
import { AsyncContainerModule, ContainerModule } from "inversify";

import { FrontEndApplication, TYPES } from "./common";
import { CoreFrontendApplication } from "./core-application";
import { ExtensionsLoader } from "./extensions-loader";
import { II18nService, ILanguageRegistry } from "./i18n";
import { LanguageRegistry } from "./i18n/i18n-registry";
import { I18nService } from "./i18n/i18n-service";
import { LayoutRegistry } from "./layouts";
import { MenuRegistry } from "./menu";
import { StoreManager } from "./stores";
import { OpenHandler, OpenService, WidgetManager } from "./widget";

const coreContainer = new ContainerModule((bind) => {
  bind(TYPES.MenuRegistry).to(MenuRegistry).inSingletonScope();
  bind(TYPES.WidgetManager).to(WidgetManager).inSingletonScope();
  bind(TYPES.LayoutRegistry).to(LayoutRegistry).inSingletonScope();
  bind(TYPES.ExtensionsLoader).to(ExtensionsLoader).inSingletonScope();
  bind(TYPES.StoreManager).to(StoreManager).inSingletonScope();

  bind(TYPES.I18nService).to(I18nService).inSingletonScope();
  // const res = await axios.get("http://localhost:4000/extension-namespaces");
  // const ns = res?.data?.extensionNamespaces || [];
  // bind<ILanguageRegistry>(TYPES.LanguageRegistry)
  //   .toDynamicValue(async (context) => {
  //     const i18nService = context.container.get<II18nService>(
  //       TYPES.I18nService,
  //     );

  //     return new LanguageRegistry(["flex", "i18n-manager"], i18nService);
  //   })
  //   .inSingletonScope();

  bind<ILanguageRegistry>(TYPES.LanguageRegistry)
    .to(LanguageRegistry)
    .inSingletonScope();

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