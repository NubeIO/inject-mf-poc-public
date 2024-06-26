import { ContainerModule } from "@nubeio/flex-core";
import FlexUIApplication from "./frontend-application";
export * from "./frontend-application";

export default new ContainerModule((bind) => {
  bind(FlexUIApplication).toSelf().inSingletonScope();
});
