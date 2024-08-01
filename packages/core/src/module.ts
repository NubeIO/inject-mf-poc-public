


import "reflect-metadata";



import axios from "axios";
import { AsyncContainerModule, ContainerModule } from "inversify";



import { AclService } from "./acl/acl-service";
import { FrontEndApplication, TYPES } from "./common";
import { CommunicationService } from "./communication/communication-service";
import { ICommunicationService } from "./communication/communication-service-type";
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
  bind(TYPES.AclService).to(AclService).inSingletonScope();

  bind(TYPES.I18nService).to(I18nService).inSingletonScope();
  bind<ICommunicationService>(TYPES.CommunicationService)
    .to(CommunicationService)
    .inSingletonScope();

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