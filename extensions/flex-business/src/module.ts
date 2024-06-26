import { ContainerModule, FrontEndApplication, TYPES } from "@nubeio/flex-core";
import FlexBusinessApplication from "./frontend-application";
export * from "./frontend-application";

export default new ContainerModule((bind) => {
  bind<FrontEndApplication>(TYPES.FrontEndApplication).toService(
    FlexBusinessApplication,
  );
  bind<FlexBusinessApplication>(FlexBusinessApplication)
    .toSelf()
    .inSingletonScope();
});
