import {
  MenuRegistry,
  MAIN_MENU_BAR,
  inject,
  injectable,
  TYPES,
  FrontEndApplication,
} from "@nubeio/flex-core";

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
  ) {}
  initialize(): void {
    this.menuRegistry.registerMenuAction(EDIT, {
      label: "Edit",
    });
    this.menuRegistry.registerMenuAction(EDIT_UNDO, {
      label: "Undo",
      execute(...args) {
        console.log("Undo");
      },
    });
    this.menuRegistry.registerMenuAction(EDIT_REDO, {
      label: "Redo",
      execute(...args) {
        console.log("Redo");
      },
    });
    this.menuRegistry.registerMenuAction(VIEW, {
      label: "View",
    });
    this.menuRegistry.registerMenuAction(VIEW_ZOOM_IN, {
      label: "Zoom In",
      execute(...args) {
        console.log("Zoom In");
      },
    });
    this.menuRegistry.registerMenuAction(VIEW_ZOOM_OUT, {
      label: "Zoom Out",
      execute(...args) {
        console.log("Zoom Out");
      },
    });
  }
}
