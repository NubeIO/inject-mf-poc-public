import {
  MenuRegistry,
  FrontEndApplication,
  BearStore,
} from "@nubeio/flex-core";
export default class FlexBusinessApplication implements FrontEndApplication {
  protected readonly menuRegistry: MenuRegistry;
  protected readonly bearsStore: BearStore;
  constructor(menuRegistry: MenuRegistry, bearsStore: BearStore);
  initialize(): void;
}
