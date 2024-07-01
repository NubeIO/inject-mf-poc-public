import { injectable } from "inversify";
import { URI } from "vscode-uri";

import { MaybePromise } from "../common";
import NotFoundComponent from "./not-found";
import { OpenerOptions, OpenHandler } from "./open-handler";
import { WidgetManager } from "./widget-factory";

@injectable()
export class OpenService {
  constructor(
    private handlers: OpenHandler[],
    private widgetManager: WidgetManager,
  ) {}

  private async getHighestHandler(
    uri: URI,
    options?: OpenerOptions,
  ): Promise<OpenHandler | undefined> {
    let highestPriority = 0;
    let highestHandler: OpenHandler | undefined;

    for (const handler of this.handlers) {
      const priority = await handler.canHandle(uri, options);
      if (priority > highestPriority) {
        highestPriority = priority;
        highestHandler = handler;
      }
    }

    return highestHandler;
  }

  async canHandle(
    uri: URI,
    options?: OpenerOptions,
  ): Promise<MaybePromise<number>> {
    const highestHandler = await this.getHighestHandler(uri, options);
    return highestHandler ? highestHandler.canHandle(uri, options) : 0;
  }

  async open(
    uri: URI,
    options?: OpenerOptions,
  ): Promise<MaybePromise<object | undefined>> {
    const highestHandler = await this.getHighestHandler(uri, options);
    return highestHandler
      ? highestHandler.open(uri, options)
      : this.widgetManager.getOrCreateWidget(NotFoundComponent.ID, {
          uri: uri,
        });
  }
}
