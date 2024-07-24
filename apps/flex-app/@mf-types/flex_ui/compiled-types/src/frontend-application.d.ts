import {
  MenuRegistry,
  FrontEndApplication,
  LanguageNSRegistry,
} from "@nubeio/flex-core";
import * as flexCore from "@nubeio/flex-core";
export declare const LANGUAGE_NAMESPACE = "flex-ui";
export default class FlexUIApplication implements FrontEndApplication {
  protected readonly menuRegistry: MenuRegistry;
  protected readonly openHandler: flexCore.OpenHandler;
  protected readonly nls: LanguageNSRegistry;
  constructor(
    menuRegistry: MenuRegistry,
    openHandler: flexCore.OpenHandler,
    nls: LanguageNSRegistry,
  );
  initialize(): void;
}
