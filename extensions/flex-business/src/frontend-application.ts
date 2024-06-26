import {
  MenuRegistry,
  MAIN_MENU_BAR,
  inject,
  injectable,
  TYPES,
  FrontEndApplication,
} from "@nubeio/flex-core";

const ACCOUNT = [...MAIN_MENU_BAR, "2_accounts_menu"];
const ACCOUNT_SUBMENU = [...ACCOUNT, "1_accounts_submenu"];
const ACCOUNT_SUBMENU_RITESH = [
  ...ACCOUNT_SUBMENU,
  "1_accounts_submenu_ritesh",
];

@injectable()
export default class FlexBusinessApplication implements FrontEndApplication {
  constructor(
    @inject(TYPES.MenuRegistry) protected readonly menuRegistry: MenuRegistry,
  ) {}

  initialize(): void {
    this.menuRegistry.registerMenuAction(ACCOUNT, {
      label: "Accounts",
    });
    this.menuRegistry.registerMenuAction(ACCOUNT_SUBMENU, {
      label: "Ritesh",
    });
    this.menuRegistry.registerMenuAction(ACCOUNT_SUBMENU_RITESH, {
      label: "Logout",
      execute(...args) {
        console.log("Logout");
      },
    });
  }
}
