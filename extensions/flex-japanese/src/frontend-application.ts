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

import jaCoreTranslations from "../assets/locales/ja.core.json";
import jaUITranslations from "../assets/locales/ja.ui.json";

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
    this.languageRegistry.registerLanguage("ja", jaCoreTranslations);
    this.languageRegistry.registerLanguage("ja", jaUITranslations, "flex-ui");

    this.menuRegistry.registerMenuAction(LANGUAGE_JA, {
      label: this.nls.localize("menu.language.ja", "core", "日本語"),
      execute: (...args) => {
        this.nls.changeLanguage("ja");
      },
    });
  }
}
