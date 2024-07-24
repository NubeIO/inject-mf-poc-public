import {
  MenuRegistry,
  MAIN_MENU_BAR,
  inject,
  injectable,
  TYPES,
  FrontEndApplication,
  URI,
  LanguageRegistry,
  LocalizationService,
} from "@nubeio/flex-core";

import enTranslations from "../assets/locales/en.json";
import zhTranslations from "../assets/locales/zh.json";

import * as flexCore from "@nubeio/flex-core";

const EDIT = [...MAIN_MENU_BAR, "3_edit_menu"];
const EDIT_UNDO = [...EDIT, "1_undo"];
const EDIT_REDO = [...EDIT, "2_redo"];
const VIEW = [...MAIN_MENU_BAR, "4_view_menu"];
const VIEW_ZOOM_IN = [...VIEW, "1_zoom_in"];
const VIEW_ZOOM_OUT = [...VIEW, "2_zoom_out"];

@injectable()
export default class FlexUIApplication implements FrontEndApplication {
  constructor(
    @inject(TYPES.MenuRegistry) protected readonly menuRegistry: MenuRegistry,
    @inject(TYPES.OpenHandler)
    protected readonly openHandler: flexCore.OpenHandler,
    @inject(TYPES.LanguageRegistry)
    protected readonly languageRegistry: LanguageRegistry,
    @inject(TYPES.LocalizationService)
    protected readonly nls: LocalizationService,
  ) {}
  initialize(): void {
    this.languageRegistry.registerLanguage("en", "English", enTranslations);
    this.languageRegistry.registerLanguage("zh", "语言", zhTranslations);

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
