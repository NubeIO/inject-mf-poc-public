import { ContainerModule, FrontEndApplication, TYPES } from "@nubeio/flex-core";
import FlexJapaneseApplication from "./frontend-application";
export * from "./frontend-application";

export default new ContainerModule((bind) => {
  bind<FrontEndApplication>(TYPES.FrontEndApplication).to(
    FlexJapaneseApplication,
  );
  bind<FlexJapaneseApplication>(FlexJapaneseApplication)
    .toSelf()
    .inSingletonScope();
});
