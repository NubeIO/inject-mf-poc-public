import { inject, injectable } from "inversify";

import { MAIN_MENU_BAR, MenuRegistry, TYPES } from "./menu";

const FILE = [...MAIN_MENU_BAR, "1_file_menu"];
const FILE_NEW = [...FILE, "1_file_new"];
const HELP = [...MAIN_MENU_BAR, "99_help_menu"];
const HELP_ABOUT = [...HELP, "1_about"];

@injectable()
export class CoreFrontendApplication {
  constructor(
    @inject(TYPES.MenuRegistry) protected readonly menuRegistry: MenuRegistry,
  ) {
    menuRegistry.registerMenuAction(FILE, {
      label: "File",
    });
    menuRegistry.registerMenuAction(FILE_NEW, {
      label: "New File",
      execute(...args) {
        console.log("File");
      },
    });

    menuRegistry.registerMenuAction(HELP, {
      label: "Help",
    });
    menuRegistry.registerMenuAction(HELP_ABOUT, {
      label: "About",
      execute(...args) {
        console.log("About");
      },
    });
  }
}
