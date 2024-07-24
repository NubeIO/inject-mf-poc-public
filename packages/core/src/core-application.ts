import { inject, injectable } from "inversify";

import enTranslations from "../assets/locales/en.json";
import zhTranslations from "../assets/locales/zh.json";
import { FrontEndApplication } from "./common";
import { TYPES } from "./common/types";
import { LanguageRegistry, LocalizationService } from "./i18n";
import { MAIN_MENU_BAR, MenuRegistry } from "./menu";

const FILE = [...MAIN_MENU_BAR, "1_file_menu"];
const FILE_NEW = [...FILE, "1_file_new"];
const HELP = [...MAIN_MENU_BAR, "99_help_menu"];
const LANGUAGE = [...MAIN_MENU_BAR, "8_language"];
const LANGUAGE_EN = [...LANGUAGE, "1_language_en"];
const LANGUAGE_ZH = [...LANGUAGE, "2_language_zh"];
const HELP_ABOUT = [...HELP, "1_about"];

@injectable()
export class CoreFrontendApplication implements FrontEndApplication {
  constructor(
    @inject(TYPES.MenuRegistry) protected readonly menuRegistry: MenuRegistry,
    @inject(TYPES.LanguageRegistry)
    protected readonly languageRegistry: LanguageRegistry,
    @inject(TYPES.LocalizationService)
    protected readonly nls: LocalizationService,
  ) {}

  public initialize() {
    this.languageRegistry.registerLanguage("en", "English", enTranslations);
    this.languageRegistry.registerLanguage("zh", "语言", zhTranslations);

    this.menuRegistry.registerMenuAction(FILE, {
      label: this.nls.localize("menu.file", "File"),
    });

    this.menuRegistry.registerMenuAction(FILE_NEW, {
      label: this.nls.localize("menu.new_file", "New File"),
      execute(...args) {
        console.log("File");
      },
    });

    this.menuRegistry.registerMenuAction(HELP, {
      label: this.nls.localize("menu.help", "Help"),
    });

    this.menuRegistry.registerMenuAction(HELP_ABOUT, {
      label: this.nls.localize("menu.about", "About"),
      execute(...args) {
        console.log("About");
      },
    });

    this.menuRegistry.registerMenuAction(LANGUAGE, {
      label: this.nls.localize("menu.language", "Language"),
    });

    this.menuRegistry.registerMenuAction(LANGUAGE_EN, {
      label: this.nls.localize("menu.language.en", "English"),
      execute: (...args) => {
        this.nls.changeLanguage("en");
      },
    });

    this.menuRegistry.registerMenuAction(LANGUAGE_ZH, {
      label: this.nls.localize("menu.language.zh", "语言"),
      execute: (...args) => {
        this.nls.changeLanguage("zh");
      },
    });
  }
}
