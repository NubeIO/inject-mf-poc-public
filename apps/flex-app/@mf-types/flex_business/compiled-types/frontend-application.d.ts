import { MenuRegistry, FrontEndApplication } from "@nubeio/flex-core";
export default class FlexBusinessApplication implements FrontEndApplication {
    protected readonly menuRegistry: MenuRegistry;
    constructor(menuRegistry: MenuRegistry);
    initialize(): void;
}
