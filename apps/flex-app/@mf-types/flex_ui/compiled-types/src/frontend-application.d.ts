import { MenuRegistry, FrontEndApplication } from "@nubeio/flex-core";
import * as flexCore from "@nubeio/flex-core";
import { LanguageNSRegistry } from "@nubeio/flex-core/i18n/language-namespace-service";
export default class FlexUIApplication implements FrontEndApplication {
  protected readonly menuRegistry: MenuRegistry;
  protected readonly openHandler: flexCore.OpenHandler;
  protected readonly nls: LanguageNSRegistry;
  constructor(
    menuRegistry: MenuRegistry,
    openHandler: flexCore.OpenHandler,
    nls: LanguageNSRegistry,
  );
  initialize(): void;
}
