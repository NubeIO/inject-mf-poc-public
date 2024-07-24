import {
  MenuRegistry,
  MAIN_MENU_BAR,
  inject,
  injectable,
  TYPES,
  FrontEndApplication,
  BearStore,
  LanguageRegistry,
  LocalizationService,
} from "@nubeio/flex-core";

const ACCOUNT = [...MAIN_MENU_BAR, "2_accounts_menu"];
const ACCOUNT_SUBMENU = [...ACCOUNT, "1_accounts_submenu"];
const ACCOUNT_SUBMENU_RITESH = [
  ...ACCOUNT_SUBMENU,
  "1_accounts_submenu_ritesh",
];
const BEARS = [...MAIN_MENU_BAR, "3_bears"];
const BEARS_SUBMENU_ADD = [...BEARS, "1_bears_add"];
const BEARS_SUBMENU_SUBSTRACT = [...BEARS, "2_bears_remove"];

@injectable()
export default class FlexBusinessApplication implements FrontEndApplication {
  constructor(
    @inject(TYPES.MenuRegistry) protected readonly menuRegistry: MenuRegistry,
    @inject(TYPES.BearStore) protected readonly bearsStore: BearStore,
    @inject(TYPES.LanguageRegistry)
    protected readonly languageRegistry: LanguageRegistry,
    @inject(TYPES.LocalizationService)
    protected readonly nls: LocalizationService,
  ) {
    this.bearsStore.subscribe((state, preState) => {
      console.log("Subscribe in Core", state, preState);
    });
  }

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
    this.menuRegistry.registerMenuAction(BEARS, {
      label: "Bears",
    });
    this.menuRegistry.registerMenuAction(BEARS_SUBMENU_ADD, {
      label: "Increase Population",
      execute: (...args) => {
        this.bearsStore.increasePopulation();
      },
    });
    this.menuRegistry.registerMenuAction(BEARS_SUBMENU_SUBSTRACT, {
      label: "Decrease Population",
      execute: (...args) => {
        this.bearsStore.decreasePopulation();
      },
    });
  }
}
