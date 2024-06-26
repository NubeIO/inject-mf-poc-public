import { ContainerModule, FrontEndApplication, TYPES } from "@nubeio/flex-core";
import FlexUIApplication from "./frontend-application";
export * from "./frontend-application";

export default new ContainerModule((bind) => {
  bind<FrontEndApplication>(TYPES.FrontEndApplication).to(FlexUIApplication);
  bind<FlexUIApplication>(FlexUIApplication).toSelf().inSingletonScope();
});
