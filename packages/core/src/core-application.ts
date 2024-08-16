import { inject, injectable, named } from "inversify";

import enTranslations from "../assets/locales/en.json";
import zhTranslations from "../assets/locales/zh.json";
import nubeTheme from "../assets/themes/nube.json";
import { FrontEndApplication } from "./common";
import { TYPES } from "./common/types";
import { DEFAULT_NAMESPACE } from "./i18n";
import { LanguageNSRegistry } from "./i18n/language-namespace-service";
import { FILE_MENU, HELP_MENU, LANGUAGE_MENU, MenuRegistry } from "./menu";
import { ThemeRegistry } from "./themes/theme-registry";

const FILE_NEW = [...FILE_MENU, "1_file_new"];
const LANGUAGE_EN = [...LANGUAGE_MENU, "1_language_en"];
const LANGUAGE_ZH = [...LANGUAGE_MENU, "2_language_zh"];
const HELP_ABOUT = [...HELP_MENU, "1_about"];

@injectable()
export class CoreFrontendApplication implements FrontEndApplication {
  constructor(
    @inject(TYPES.MenuRegistry) protected readonly menuRegistry: MenuRegistry,
    @inject(TYPES.LanguageNSRegistry)
    @named(DEFAULT_NAMESPACE)
    protected readonly nls: LanguageNSRegistry,
    @inject(TYPES.ThemeRegistry)
    protected readonly themeRegistry: ThemeRegistry,
  ) {}

  public initialize() {
    this.nls.registerLanguage("en", enTranslations);
    this.nls.registerLanguage("zh", zhTranslations);
    this.themeRegistry.registerTheme("Nube", nubeTheme);

    this.menuRegistry.registerMenuAction(FILE_MENU, {
      label: this.nls.localize("menu.file", "File"),
    });

    this.menuRegistry.registerMenuAction(FILE_NEW, {
      label: this.nls.localize("menu.new_file", "New File"),
      execute(...args) {
        console.log("File");
      },
    });

    this.menuRegistry.registerMenuAction(HELP_MENU, {
      label: this.nls.localize("menu.help", "Help"),
    });

    this.menuRegistry.registerMenuAction(HELP_ABOUT, {
      label: this.nls.localize("menu.about", "About"),
      execute(...args) {
        console.log("About");
      },
    });

    this.menuRegistry.registerMenuAction(LANGUAGE_MENU, {
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
