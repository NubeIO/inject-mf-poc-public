import { MenuRegistry, FrontEndApplication, StoreManager } from "@nubeio/flex-core";
export default class FlexBusinessApplication implements FrontEndApplication {
    protected readonly menuRegistry: MenuRegistry;
    store: any;
    constructor(menuRegistry: MenuRegistry, storeManager: StoreManager);
    initialize(): void;
}
