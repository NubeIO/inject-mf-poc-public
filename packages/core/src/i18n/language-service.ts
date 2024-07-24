import i18n from "i18next";
import { inject, injectable } from "inversify";
import { initReactI18next } from "react-i18next";

import { TYPES } from "../common";
import { deepEqual } from "../utils/object";
import {
  LanguageRegistry,
  LanguageStore,
  Localization,
} from "./language-registry";
import { LanguageLabel } from "./types";

@injectable()
export class LocalizationService {
  constructor(
    @inject(TYPES.LanguageRegistry)
    protected readonly languageRegistry: LanguageRegistry,
  ) {
    this.languageRegistry = languageRegistry;
    this.initializeI18n();
    this.languageRegistry.subscribe(this.handleLanguageUpdate);
  }

  private initializeI18n() {
    i18n.use(initReactI18next).init({
      resources: {},
      lng: "en",
      fallbackLng: "en",
      interpolation: {
        escapeValue: false,
      },
    });
  }

  private handleLanguageUpdate = (
    state: LanguageStore,
    prevState: LanguageStore,
  ) => {
    if (!deepEqual(state.availableLanguages, prevState.availableLanguages)) {
      this.updateResources(state.availableLanguages);
    }
  };

  private updateResources = (languages: {
    [key: string]: { [namespace: string]: Localization };
  }) => {
    Object.keys(languages).forEach((languageId) => {
      Object.keys(languages[languageId]).forEach((namespace) => {
        i18n.addResources(
          languageId,
          namespace,
          flattenTranslations(languages[languageId][namespace].translations),
        );
      });
    });
  };

  changeLanguage(languageId: string) {
    i18n.changeLanguage(languageId);
    this.languageRegistry.setCurrentLanguage(languageId);
  }

  localize(key: string, namespace: string, fallback?: string): LanguageLabel {
    return { id: key, namespace, fallback };
  }
}

function flattenTranslations(obj: any, parentKey = "", res: any = {}): any {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];
      const newKey = parentKey ? `${parentKey}.${key}` : key;
      if (
        typeof value === "object" &&
        value !== null &&
        !Array.isArray(value)
      ) {
        flattenTranslations(value, newKey, res);
      } else {
        res[newKey] = value;
      }
    }
  }
  return res;
}
