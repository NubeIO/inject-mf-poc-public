import {
  MenuRegistry,
  MAIN_MENU_BAR,
  inject,
  injectable,
  TYPES,
  FrontEndApplication,
  URI,
  LanguageNSRegistry,
  named,
  ThemeRegistry,
} from "@nubeio/flex-core";

import enTranslations from "../assets/locales/en.json";
import zhTranslations from "../assets/locales/zh.json";
import daikinTheme from "../assets/themes/daikin.json";

import * as flexCore from "@nubeio/flex-core";

const EDIT = [...MAIN_MENU_BAR, "3_edit_menu"];
const EDIT_UNDO = [...EDIT, "1_undo"];
const EDIT_REDO = [...EDIT, "2_redo"];
const VIEW = [...MAIN_MENU_BAR, "4_view_menu"];
const VIEW_ZOOM_IN = [...VIEW, "1_zoom_in"];
const VIEW_ZOOM_OUT = [...VIEW, "2_zoom_out"];

export const LANGUAGE_NAMESPACE = "flex-ui";

@injectable()
export default class FlexUIApplication implements FrontEndApplication {
  constructor(
    @inject(TYPES.MenuRegistry) protected readonly menuRegistry: MenuRegistry,
    @inject(TYPES.OpenHandler)
    protected readonly openHandler: flexCore.OpenHandler,
    @inject(TYPES.LanguageNSRegistry)
    @named(LANGUAGE_NAMESPACE)
    protected readonly nls: LanguageNSRegistry,
    @inject(TYPES.ThemeRegistry)
    protected readonly themeRegistry: ThemeRegistry,
  ) {}
  initialize(): void {
    this.nls.registerLanguage("en", enTranslations);
    this.nls.registerLanguage("zh", zhTranslations);
    this.themeRegistry.registerTheme("Daikin", daikinTheme);
    // this.themeRegistry.overrideTheme("Daikin", daikinTheme);

    this.menuRegistry.registerMenuAction(EDIT, {
      label: this.nls.localize("menu.edit", "Edit"),
    });

    this.menuRegistry.registerMenuAction(EDIT_UNDO, {
      label: this.nls.localize("menu.undo", "Undo"),
      execute: (...args) => {
        this.openHandler.open(URI.parse("wires://nube.wires/?id=undo"));
      },
    });
    this.menuRegistry.registerMenuAction(EDIT_REDO, {
      label: this.nls.localize("menu.redo", "Redo"),
      execute: (...args) => {
        this.openHandler.open(URI.parse("wires://nube.wires/?id=redo"));
      },
    });
    this.menuRegistry.registerMenuAction(VIEW, {
      label: this.nls.localize("menu.view", "View"),
    });
    this.menuRegistry.registerMenuAction(VIEW_ZOOM_IN, {
      label: this.nls.localize("menu.zoom_in", "Zoom In"),
      execute(...args) {
        console.log("Zoom In");
      },
    });
    this.menuRegistry.registerMenuAction(VIEW_ZOOM_OUT, {
      label: this.nls.localize("menu.zoom_out", "Zoom Out"),
      execute(...args) {
        console.log("Zoom Out");
      },
    });
  }
}
