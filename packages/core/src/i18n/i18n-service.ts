import React from "react";
import axios from "axios";
import { inject, injectable } from "inversify";

import {
  ExtensionLanguageInfo,
  II18nService,
  ILanguageRegistry,
  LangRegistry,
  LangResorces,
} from "./i18n-type";

@injectable()
export class I18nService {
  async getFlexAvaiableLangCodes(): Promise<string[]> {
    const res = await axios.get("http://localhost:4000/languages");
    return res?.data?.languages || [];
  }

  async getLangNameSpaces(): Promise<string[]> {
    const res = await axios.get("http://localhost:4000/extension-namespaces");
    return res?.data?.extensionNamespaces || [];
  }

  async addExtensionTranslation(translationObj: any): Promise<void> {
    await axios.post("http://localhost:4000/new-translations", translationObj);
  }

  // getLangRegistry(): Promise<LangRegistry> {
  //   throw new Error("Method not implemented.");
  // }

  // registerLangForExtension(
  //   extensionName: string,
  //   resorces: LangResorces,
  // ): Promise<void> {
  //   throw new Error("Method not implemented.");
  // }

  // getLangForExtension(extensionName: string): Promise<LangResorces> {
  //   throw new Error("Method not implemented.");
  // }

  // addLanguageForExtension(
  //   extensionName: string,
  //   languageId: string,
  // ): Promise<void> {
  //   throw new Error("Method not implemented.");
  // }

  // removeLanguageForExtension(
  //   extensionName: string,
  //   languageId: string,
  // ): Promise<void> {
  //   throw new Error("Method not implemented.");
  // }

  // addTranslation(
  //   extensionName: string,
  //   languageId: string,
  //   key: string,
  //   value: string,
  // ): Promise<void> {
  //   throw new Error("Method not implemented.");
  // }

  // updateTranslation(
  //   extensionName: string,
  //   languageId: string,
  //   key: string,
  //   newValue: string,
  // ): Promise<void> {
  //   throw new Error("Method not implemented.");
  // }

  // removeTranslation(
  //   extensionName: string,
  //   languageId: string,
  //   key: string,
  // ): Promise<void> {
  //   throw new Error("Method not implemented.");
  // }
}
