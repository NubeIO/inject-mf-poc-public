import React from "react";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";
import { inject, injectable, postConstruct } from "inversify";
import { getLangCodeList, getLangNameFromCode } from "language-name-map";
import { initReactI18next } from "react-i18next";
import { create, StoreApi, UseBoundStore } from "zustand";

import { TYPES } from "../common";
import { I18nService } from "./i18n-service";
import {
  ExtensionLanguageInfo,
  ILanguageRegistry,
  LangRegistry,
  LangResorces,
} from "./i18n-type";

@injectable()
export class LanguageRegistry implements ILanguageRegistry {
  i18nService: I18nService;
  i18nInstance: any;

  private languageRegistryStore = create<any>((set: any) => ({
    currentLanguage: "en",
    availableLanguages: [],
    languageOptions: [{ value: "en", label: "English" }],
    setCurrentLanguage: (input: string) => set({ currentLanguage: input }),
    setAvailableLanguages: (input: string[]) =>
      set({ availableLanguages: input }),
    setLanguageOptions: (input: { value: string; label: string }[]) =>
      set({ languageOptions: input }),
  }));

  subscribeToLanguageRegistryStore(listener: any): void {
    this.languageRegistryStore.subscribe(listener);
  }

  constructor(@inject(TYPES.I18nService) private _i18nService: I18nService) {
    this.i18nService = _i18nService;

    i18n
      .use(HttpBackend)
      .use(LanguageDetector)
      .use(initReactI18next)
      .init({
        fallbackLng: "en",
        // debug: true,
        ns: ["flex"],
        defaultNS: "flex",
        backend: {
          loadPath:
            "http://localhost:4000/translations/{{ns}}/{{lng}}/dictionary.json",
        },
        interpolation: {
          escapeValue: false,
        },
      });

    this.i18nInstance = i18n;

    this.fetchAvailableLanguages();
    this.initializeI18nextNamespaces();
  }

  async fetchAvailableLanguages() {
    const languageCodes = await this.i18nService.getFlexAvaiableLangCodes();
    const langOptions = languageCodes.map((langCode: string) => {
      return {
        value: langCode,
        label: getLangNameFromCode(langCode)?.native || langCode,
      };
    });

    this.languageRegistryStore.setState({
      availableLanguages: languageCodes,
      languageOptions: langOptions,
    });
  }

  async initializeI18nextNamespaces() {
    const namespaces = await this.i18nService.getLangNameSpaces();
    await this.i18nInstance.loadNamespaces(namespaces);

    console.log(
      "i18nInstance is after loading namespaces: ",
      this.i18nInstance.hasLoadedNamespace("i18n-manager"),
    );
  }

  getLanguageOptions(): { value: string; label: string }[] {
    return this.languageRegistryStore.getState().languageOptions;
  }

  getLanguageForExtension(
    extensionName: string,
  ): Promise<ExtensionLanguageInfo[]> {
    throw new Error("Method not implemented.");
  }

  registerLanguageForExtension(
    extensionName: string,
    resorces: LangResorces,
  ): Promise<void> {
    throw new Error("Method not implemented.");
  }

  removeLanguageForExtension(extensionName: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
