import { ReactNode } from "react";

export type MaybePromise<T> = T | PromiseLike<T>;
export interface Widget {
  name: string;
  render(): ReactNode;
}

export const TYPES = {
  MenuRegistry: Symbol.for("MenuRegistry"),
  FrontEndApplication: Symbol.for("FrontEndApplication"),
  OpenHandler: Symbol.for("OpenHandler"),
  OpenService: Symbol.for("OpenService"),
  WidgetManager: Symbol.for("WidgetManager"),
  WidgetFactory: Symbol.for("WidgetFactory"),
};
