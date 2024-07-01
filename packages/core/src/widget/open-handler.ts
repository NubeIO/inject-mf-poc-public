import { inject, injectable, postConstruct } from "inversify";
import { URI } from "vscode-uri";

import { MaybePromise, TYPES, Widget } from "../common";
import NotFoundComponent from "./not-found";
import { WidgetManager } from "./widget-factory";

export interface OpenerOptions {}

export interface OpenHandler {
  readonly id: string;
  canHandle(uri: URI, options?: OpenerOptions): MaybePromise<number>;
  open(uri: URI, options?: OpenerOptions): MaybePromise<object | undefined>;
}

export interface WidgetOpenerOptions extends OpenerOptions {}

@injectable()
export abstract class WidgetOpenHandler<W extends Widget>
  implements OpenHandler
{
  constructor(
    @inject(TYPES.WidgetManager)
    protected readonly widgetManager: WidgetManager,
  ) {}

  abstract readonly id: string;
  abstract canHandle(
    uri: URI,
    options?: WidgetOpenerOptions,
  ): MaybePromise<number>;

  async open(uri: URI, options?: WidgetOpenerOptions): Promise<W> {
    const widget = await this.getOrCreateWidget(uri, options);
    return widget;
  }

  protected getOrCreateWidget(
    uri: URI,
    options?: WidgetOpenerOptions,
  ): Promise<W> {
    const widgetOptions = this.createWidgetOptions(uri, options);
    return this.widgetManager.getOrCreateWidget<W>(this.id, widgetOptions);
  }

  protected abstract createWidgetOptions(
    uri: URI,
    options?: WidgetOpenerOptions,
  ): Object;
}
