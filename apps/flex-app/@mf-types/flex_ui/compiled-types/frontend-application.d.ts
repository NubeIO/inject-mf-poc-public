import { MenuRegistry, FrontEndApplication } from "@nubeio/flex-core";
import * as flexCore from "@nubeio/flex-core";
export default class FlexUIApplication implements FrontEndApplication {
  protected readonly menuRegistry: MenuRegistry;
  protected readonly openHandler: flexCore.OpenHandler;
  constructor(menuRegistry: MenuRegistry, openHandler: flexCore.OpenHandler);
  initialize(): void;
}
