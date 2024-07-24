import {
  MenuRegistry,
  FrontEndApplication,
  BearStore,
  LanguageRegistry,
  LocalizationService,
} from "@nubeio/flex-core";
export default class FlexBusinessApplication implements FrontEndApplication {
  protected readonly menuRegistry: MenuRegistry;
  protected readonly bearsStore: BearStore;
  protected readonly languageRegistry: LanguageRegistry;
  protected readonly nls: LocalizationService;
  constructor(
    menuRegistry: MenuRegistry,
    bearsStore: BearStore,
    languageRegistry: LanguageRegistry,
    nls: LocalizationService,
  );
  initialize(): void;
}
