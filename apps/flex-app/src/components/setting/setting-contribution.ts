import {
  MaybePromise,
  TYPES,
  URI,
  WidgetManager,
  inject,
  injectable,
} from "@nubeio/flex-core";
import { WidgetOpenHandler, WidgetOpenerOptions } from "@nubeio/flex-core";
import SettingComponent from "./setting-component";

export type SettingWidgetOpenerOptions = {
  uri: URI;
};

@injectable()
export default class SettingContribution extends WidgetOpenHandler<SettingComponent> {
  readonly id: string = SettingComponent.ID;

  constructor(
    @inject(TYPES.WidgetManager)
    protected readonly widgetManager: WidgetManager,
  ) {
    super(widgetManager);

    widgetManager.registerFactory({
      id: SettingComponent.ID,
      createWidget(options: SettingWidgetOpenerOptions) {
        return new SettingComponent(options);
      },
    });
  }

  canHandle(
    uri: URI,
    options?: WidgetOpenerOptions | undefined,
  ): MaybePromise<number> {
    if (uri.scheme === "nube" && uri.path.endsWith("settings")) {
      return 1000;
    }

    return 0;
  }

  protected createWidgetOptions(
    uri: URI,
    options?: WidgetOpenerOptions | undefined,
  ): SettingWidgetOpenerOptions {
    const queryParams = new URLSearchParams(uri.query);

    return {
      ...options,
      uri: uri,
    };
  }
}
