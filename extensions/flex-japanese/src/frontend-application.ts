import {
  MenuRegistry,
  MAIN_MENU_BAR,
  inject,
  injectable,
  TYPES,
  FrontEndApplication,
  LanguageRegistry,
  LocalizationService,
} from "@nubeio/flex-core";

import jaTranslations from "../assets/locales/ja.json";

const LANGUAGE = [...MAIN_MENU_BAR, "8_language"];
const LANGUAGE_JA = [...LANGUAGE, "3_language_ja"];

@injectable()
export default class FlexJapaneseApplication implements FrontEndApplication {
  constructor(
    @inject(TYPES.MenuRegistry) protected readonly menuRegistry: MenuRegistry,
    @inject(TYPES.LanguageRegistry)
    protected readonly languageRegistry: LanguageRegistry,
    @inject(TYPES.LocalizationService)
    protected readonly nls: LocalizationService,
  ) {}
  initialize(): void {
    this.languageRegistry.registerLanguage("ja", jaTranslations);

    this.menuRegistry.registerMenuAction(LANGUAGE_JA, {
      label: this.nls.localize("menu.language.ja", "日本語"),
      execute: (...args) => {
        this.nls.changeLanguage("ja");
      },
    });
  }
}
