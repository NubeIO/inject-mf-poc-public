import {
  MenuRegistry,
  MAIN_MENU_BAR,
  inject,
  injectable,
  TYPES,
  FrontEndApplication,
  StoreManager,
  postConstruct,
} from "@nubeio/flex-core"

const ACCOUNT = [...MAIN_MENU_BAR, "2_accounts_menu"]
const ACCOUNT_SUBMENU = [...ACCOUNT, "1_accounts_submenu"]
const ACCOUNT_SUBMENU_RITESH = [...ACCOUNT_SUBMENU, "1_accounts_submenu_ritesh"]

@injectable()
export default class FlexBusinessApplication implements FrontEndApplication {
  store: any

  constructor(
    @inject(TYPES.MenuRegistry) protected readonly menuRegistry: MenuRegistry,
    @inject(TYPES.StoreManager) storeManager: StoreManager
  ) {
    this.store = storeManager.getStore
    this.store.subscribe((state: any) => state.test, console.log)
  }

  initialize(): void {
    this.menuRegistry.registerMenuAction(ACCOUNT, {
      label: "Accounts",
    })
    this.menuRegistry.registerMenuAction(ACCOUNT_SUBMENU, {
      label: "Ritesh",
    })
    this.menuRegistry.registerMenuAction(ACCOUNT_SUBMENU_RITESH, {
      label: "Logout",
      execute: (...args) => {
        this.store.setState({
          test: this.store.getState().test + 1,
        })
        console.log("Logout")
      },
    })
  }
}
