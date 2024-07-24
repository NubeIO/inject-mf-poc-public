import {
  MenuRegistry,
  FrontEndApplication,
  LanguageRegistry,
  LocalizationService,
} from "@nubeio/flex-core";
import * as flexCore from "@nubeio/flex-core";
export default class FlexUIApplication implements FrontEndApplication {
  protected readonly menuRegistry: MenuRegistry;
  protected readonly openHandler: flexCore.OpenHandler;
  protected readonly languageRegistry: LanguageRegistry;
  protected readonly nls: LocalizationService;
  constructor(
    menuRegistry: MenuRegistry,
    openHandler: flexCore.OpenHandler,
    languageRegistry: LanguageRegistry,
    nls: LocalizationService,
  );
  initialize(): void;
}
