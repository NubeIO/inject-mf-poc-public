import { inject, injectable } from "inversify";

import { FrontEndApplication } from "./common";
import { TYPES } from "./common/types";
import { MAIN_MENU_BAR, MenuRegistry } from "./menu";

const FILE = [...MAIN_MENU_BAR, "1_file_menu"];
const FILE_NEW = [...FILE, "1_file_new"];
const HELP = [...MAIN_MENU_BAR, "99_help_menu"];
const HELP_ABOUT = [...HELP, "1_about"];

@injectable()
export class CoreFrontendApplication implements FrontEndApplication {
  constructor(
    @inject(TYPES.MenuRegistry) protected readonly menuRegistry: MenuRegistry,
  ) {}

  public initialize() {
    this.menuRegistry.registerMenuAction(FILE, {
      label: "File",
    });

    this.menuRegistry.registerMenuAction(FILE_NEW, {
      label: "New File",
      execute(...args) {
        console.log("File");
      },
    });

    this.menuRegistry.registerMenuAction(HELP, {
      label: "Help",
    });

    this.menuRegistry.registerMenuAction(HELP_ABOUT, {
      label: "About",
      execute(...args) {
        console.log("About");
      },
    });
  }
}
