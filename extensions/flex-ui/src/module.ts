import { ContainerModule, FrontEndApplication, TYPES } from "@nubeio/flex-core";
import FlexUIApplication from "./frontend-application";
import { FlowContribution } from "./flow/flow-contribution";
import FlowComponent from "./flow/flow-component";
export * from "./frontend-application";

export default new ContainerModule((bind) => {
  bind<FrontEndApplication>(TYPES.FrontEndApplication).to(FlexUIApplication);
  bind<FlexUIApplication>(FlexUIApplication).toSelf().inSingletonScope();

  bind(TYPES.OpenHandler).to(FlowContribution);

  bind(FlowComponent).toSelf();
  bind(TYPES.WidgetFactory)
    .toDynamicValue((ctx) => ({
      id: FlowComponent.ID,
      createWidget: () => ctx.container.get<FlowComponent>(FlowComponent),
    }))
    .inSingletonScope();
});
