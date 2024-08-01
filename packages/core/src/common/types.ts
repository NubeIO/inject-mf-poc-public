import { ReactNode } from "react";



import { AclService } from "../acl/acl-service";
import { CommunicationService } from "../communication/communication-service";
import { ExtensionsLoader } from "../extensions-loader";
import { LanguageRegistry } from "../i18n/i18n-registry";
import { I18nService } from "../i18n/i18n-service";
import { LayoutRegistry } from "../layouts";
import { StoreManager } from "../stores";

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
  LanguageRegistry: Symbol.for("LanguageRegistry"),
  I18nService: Symbol.for("I18nService"),
  CommunicationService: Symbol.for("CommunicationService"),
  AclService: Symbol.for("AclService"),
};