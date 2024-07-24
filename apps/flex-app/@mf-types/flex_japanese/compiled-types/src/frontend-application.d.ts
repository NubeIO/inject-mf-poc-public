import { MenuRegistry, FrontEndApplication, LanguageRegistry, LocalizationService } from "@nubeio/flex-core";
export default class FlexJapaneseApplication implements FrontEndApplication {
    protected readonly menuRegistry: MenuRegistry;
    protected readonly languageRegistry: LanguageRegistry;
    protected readonly nls: LocalizationService;
    constructor(menuRegistry: MenuRegistry, languageRegistry: LanguageRegistry, nls: LocalizationService);
    initialize(): void;
}
