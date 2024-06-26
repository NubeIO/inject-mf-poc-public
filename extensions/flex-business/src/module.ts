import { ContainerModule } from "@nubeio/flex-core";
import FlexBusinessApplication from "./frontend-application";
export * from "./frontend-application";

export default new ContainerModule((bind) => {
  bind(FlexBusinessApplication).toSelf().inSingletonScope();
});
