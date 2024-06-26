import {
  MenuRegistry,
  MAIN_MENU_BAR,
  inject,
  injectable,
  TYPES,
} from "@nubeio/flex-core";

const EDIT = [...MAIN_MENU_BAR, "3_edit_menu"];
const EDIT_UNDO = [...EDIT, "1_undo"];
const EDIT_REDO = [...EDIT, "2_redo"];
const VIEW = [...MAIN_MENU_BAR, "4_view_menu"];
const VIEW_ZOOM_IN = [...VIEW, "1_zoom_in"];
const VIEW_ZOOM_OUT = [...VIEW, "2_zoom_out"];

@injectable()
export default class FlexUIApplication {
  constructor(
    @inject(TYPES.MenuRegistry) protected readonly menuRegistry: MenuRegistry,
  ) {
    menuRegistry.registerMenuAction(EDIT, {
      label: "Edit",
    });
    menuRegistry.registerMenuAction(EDIT_UNDO, {
      label: "Undo",
      execute(...args) {
        console.log("Undo");
      },
    });
    menuRegistry.registerMenuAction(EDIT_REDO, {
      label: "Redo",
      execute(...args) {
        console.log("Redo");
      },
    });
    menuRegistry.registerMenuAction(VIEW, {
      label: "View",
    });
    menuRegistry.registerMenuAction(VIEW_ZOOM_IN, {
      label: "Zoom In",
      execute(...args) {
        console.log("Zoom In");
      },
    });
    menuRegistry.registerMenuAction(VIEW_ZOOM_OUT, {
      label: "Zoom Out",
      execute(...args) {
        console.log("Zoom Out");
      },
    });
  }
}