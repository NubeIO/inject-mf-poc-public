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
  BearStore: Symbol.for("BearStore"),
  LanguageRegistry: Symbol.for("LanguageRegistry"),
  LocalizationService: Symbol.for("LocalizationService"),
  LanguageNSRegistry: Symbol.for("LanguageNSRegistry"),
  ACLRegistry: Symbol.for("ACLRegistry"),
  ThemeRegistry: Symbol.for("ThemeRegistry"),
};
