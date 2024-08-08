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
  ACLRegistry,
} from "@nubeio/flex-core";

const ACCOUNT = [...MAIN_MENU_BAR, "2_accounts_menu"];
const ACCOUNT_SUBMENU_RITESH = [...ACCOUNT, "1_accounts_submenu_ritesh"];
const ACCOUNT_SUBMENU_BINOD = [...ACCOUNT, "1_accounts_submenu_binod"];
const BEARS = [...MAIN_MENU_BAR, "3_bears"];
const BEARS_SUBMENU_ADD = [...BEARS, "1_bears_add"];
const BEARS_SUBMENU_SUBSTRACT = [...BEARS, "2_bears_remove"];

const permDefs = {
  BINOD: {
    read: [],
  },
  RITESH: {
    read: ["Bears", "Database"],
    delete: ["Database"],
  },
};

@injectable()
export default class FlexBusinessApplication implements FrontEndApplication {
  constructor(
    @inject(TYPES.MenuRegistry) protected readonly menuRegistry: MenuRegistry,
    @inject(TYPES.BearStore) protected readonly bearsStore: BearStore,
    @inject(TYPES.ACLRegistry) protected readonly aclRegistry: ACLRegistry,
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
    this.menuRegistry.registerMenuAction(ACCOUNT_SUBMENU_RITESH, {
      label: "Ritesh (Admin)",
      execute: (...args) => {
        this.aclRegistry.setRules(permDefs.RITESH);
      },
    });
    this.menuRegistry.registerMenuAction(ACCOUNT_SUBMENU_BINOD, {
      label: "Binod (Basic)",
      execute: (...args) => {
        this.aclRegistry.setRules(permDefs.BINOD);
      },
    });
    this.menuRegistry.registerMenuAction(BEARS, {
      label: "Bears",
      permission: this.aclRegistry.permission("read", "Bears"),
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
