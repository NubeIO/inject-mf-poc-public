import SettingContribution from "./components/setting/setting-contribution";
import SettingComponent from "./components/setting/setting-component";
import { ContainerModule, OpenHandler, TYPES } from "@nubeio/flex-core";

const appContainer = new ContainerModule((bind) => {
  bind<OpenHandler>(TYPES.OpenHandler)
    .to(SettingContribution)
    .whenTargetNamed("setting");
  bind<SettingContribution>(SettingContribution).toSelf().inSingletonScope();

  bind(SettingComponent).toSelf();
  bind(TYPES.WidgetFactory)
    .toDynamicValue((ctx) => ({
      id: SettingComponent.ID,
      createWidget: () => ctx.container.get<SettingComponent>(SettingComponent),
    }))
    .inSingletonScope();
});

export default appContainer;
