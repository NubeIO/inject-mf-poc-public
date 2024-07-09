import { ReactNode } from "react";



import { ExtensionsLoader } from "../extensions-loader";
import { LayoutRegistry } from "../layouts";


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
  LayoutRegistry: Symbol.for("LayoutRegistry"),
  ExtensionsLoader: Symbol.for("ExtensionsLoader"),
  StoreManager: Symbol.for("StoreManager"),
};