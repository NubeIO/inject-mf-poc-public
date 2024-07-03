import { MaybePromise, URI, WidgetManager } from "@nubeio/flex-core";
import { WidgetOpenHandler, WidgetOpenerOptions } from "@nubeio/flex-core";
import FlowComponent from "./flow-component";
export type FlowWidgetOpenerOptions = {
    uri: URI;
    id: string | null;
};
export default class FlowContribution extends WidgetOpenHandler<FlowComponent> {
    protected readonly widgetManager: WidgetManager;
    readonly id: string;
    constructor(widgetManager: WidgetManager);
    canHandle(uri: URI, options?: WidgetOpenerOptions | undefined): MaybePromise<number>;
    protected createWidgetOptions(uri: URI, options?: WidgetOpenerOptions | undefined): FlowWidgetOpenerOptions;
}
