import { MaybePromise, URI } from "@nubeio/flex-core";
import { WidgetOpenHandler, WidgetOpenerOptions } from "@nubeio/flex-core";
import FlowComponent from "./flow-component";
export declare class FlowContribution extends WidgetOpenHandler<FlowComponent> {
  readonly id: string;
  canHandle(
    uri: URI,
    options?: WidgetOpenerOptions | undefined,
  ): MaybePromise<number>;
  protected createWidgetOptions(
    uri: URI,
    options?: WidgetOpenerOptions | undefined,
  ): Object;
}
