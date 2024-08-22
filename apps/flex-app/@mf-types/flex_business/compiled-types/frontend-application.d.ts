import { MenuRegistry, FrontEndApplication, BearStore, LanguageRegistry, LocalizationService, ACLRegistry } from "@nubeio/flex-core";
export default class FlexBusinessApplication implements FrontEndApplication {
    protected readonly menuRegistry: MenuRegistry;
    protected readonly bearsStore: BearStore;
    protected readonly aclRegistry: ACLRegistry;
    protected readonly languageRegistry: LanguageRegistry;
    protected readonly nls: LocalizationService;
    constructor(menuRegistry: MenuRegistry, bearsStore: BearStore, aclRegistry: ACLRegistry, languageRegistry: LanguageRegistry, nls: LocalizationService);
    initialize(): void;
}
