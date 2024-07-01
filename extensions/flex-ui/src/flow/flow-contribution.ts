import {
  MaybePromise,
  TYPES,
  URI,
  WidgetManager,
  inject,
  injectable,
} from "@nubeio/flex-core";
import { WidgetOpenHandler, WidgetOpenerOptions } from "@nubeio/flex-core";
import FlowComponent from "./flow-component";

export type FlowWidgetOpenerOptions = {
  uri: URI;
  id: string | null;
};

@injectable()
export class FlowContribution extends WidgetOpenHandler<FlowComponent> {
  readonly id: string = FlowComponent.ID;

  constructor(
    @inject(TYPES.WidgetManager)
    protected readonly widgetManager: WidgetManager,
  ) {
    super(widgetManager);

    widgetManager.registerFactory({
      id: FlowComponent.ID,
      createWidget(options: FlowWidgetOpenerOptions) {
        return new FlowComponent(options);
      },
    });
  }

  canHandle(
    uri: URI,
    options?: WidgetOpenerOptions | undefined,
  ): MaybePromise<number> {
    if (uri.scheme === "wires") {
      return 1000;
    }

    return 0;
  }

  protected createWidgetOptions(
    uri: URI,
    options?: WidgetOpenerOptions | undefined,
  ): FlowWidgetOpenerOptions {
    const queryParams = new URLSearchParams(uri.query);
    const id = queryParams.get("id");

    return {
      ...options,
      uri: uri,
      id: id,
    };
  }
}
