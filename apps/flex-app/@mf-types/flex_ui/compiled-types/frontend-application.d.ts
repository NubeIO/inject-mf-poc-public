import { MenuRegistry, FrontEndApplication } from "@nubeio/flex-core";
export default class FlexUIApplication implements FrontEndApplication {
    protected readonly menuRegistry: MenuRegistry;
    constructor(menuRegistry: MenuRegistry);
    initialize(): void;
}
