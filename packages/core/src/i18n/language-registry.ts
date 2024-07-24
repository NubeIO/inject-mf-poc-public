import { injectable } from "inversify";
import { useTranslation as reactTranlation } from "react-i18next";
import { create } from "zustand";

import { Store } from "../common";
import { LanguageLabel } from "./types";

export type Localization = {
  languageId: string;
  languageName?: string;
  order?: number;
  translations: { [key: string]: any };
};

export function useTranslation() {
  const { t } = reactTranlation();

  function localize(
    label: string | LanguageLabel | undefined,
    fallback?: string,
  ): string {
    if (LanguageLabel.is(label)) {
      return t(label.id, label.fallback ?? fallback ?? label.id);
    }
    return label ? t(label) : fallback ?? "";
  }

  return { localize };
}

export type LanguageStore = {
  currentLanguage: string;
  availableLanguages: { [key: string]: Localization };
  setCurrentLanguage: (langaugeId: string) => void;
  registerLanguage: (
    languageId: string,
    languageName: string,
    translations: { [key: string]: any },
    order?: number,
  ) => Localization;
};

@injectable()
export class LanguageRegistry implements LanguageStore, Store<LanguageStore> {
  private orders: { [languageId: string]: { [key: string]: number } } = {};

  private store = create<LanguageStore>((set, get) => ({
    currentLanguage: "en",
    availableLanguages: {},
    setCurrentLanguage: (languageId: string) => {
      set({ currentLanguage: languageId });
    },
    registerLanguage: (
      languageId: string,
      languageName: string,
      translations: { [key: string]: any },
      order?: number,
    ) => {
      const state = get();
      const existingLanguage = state.availableLanguages[languageId];

      if (existingLanguage) {
        const mergedTranslations = this.mergeNestedTranslations(
          existingLanguage.translations,
          translations,
          languageId,
          order,
        );

        const updatedLanguage: Localization = {
          ...existingLanguage,
          languageName: languageName || existingLanguage.languageName,
          translations: mergedTranslations,
        };

        set({
          availableLanguages: {
            ...state.availableLanguages,
            [languageId]: updatedLanguage,
          },
        });

        return updatedLanguage;
      } else {
        const newLanguage: Localization = {
          languageId,
          languageName,
          translations,
        };

        set({
          availableLanguages: {
            ...state.availableLanguages,
            [languageId]: newLanguage,
          },
        });
        return newLanguage;
      }
    },
  }));

  get currentLanguage(): string {
    return this.getState().currentLanguage;
  }
  get availableLanguages(): { [key: string]: Localization } {
    return this.getState().availableLanguages;
  }
  setCurrentLanguage = (langaugeId: string) =>
    this.getState().setCurrentLanguage(langaugeId);
  registerLanguage = (
    languageId: string,
    languageName: string,
    translations: { [key: string]: any },
    order?: number,
  ) =>
    this.getState().registerLanguage(
      languageId,
      languageName,
      translations,
      order,
    );

  useStore(): LanguageStore {
    return this.store();
  }

  getState(): LanguageStore {
    return this.store.getState();
  }

  subscribe = (
    listener: (state: LanguageStore, prevState: LanguageStore) => void,
  ) => this.store.subscribe(listener);

  private mergeNestedTranslations(
    existing: { [key: string]: any },
    newTranslations: { [key: string]: any },
    languageId: string,
    order: number = 0,
  ): { [key: string]: any } {
    const merged: { [key: string]: any } = { ...existing };

    this.mergeNestedObjects(merged, newTranslations, order, languageId);

    return merged;
  }

  private mergeNestedObjects(
    existing: { [key: string]: any },
    newTranslations: { [key: string]: any },
    order: number,
    languageId: string,
    baseKey: string = "",
  ) {
    for (const key in newTranslations) {
      if (newTranslations.hasOwnProperty(key)) {
        const newValue = newTranslations[key];
        const fullKey = baseKey ? `${baseKey}.${key}` : key;

        if (
          typeof newValue === "object" &&
          newValue !== null &&
          !Array.isArray(newValue)
        ) {
          if (!existing[key] || typeof existing[key] !== "object") {
            existing[key] = {};
          }
          this.mergeNestedObjects(
            existing[key],
            newValue,
            order,
            languageId,
            fullKey,
          );
        } else {
          const existingOrder = this.orders[languageId]?.[fullKey] || 0;
          if (order >= existingOrder) {
            existing[key] = newValue;
            if (!this.orders[languageId]) {
              this.orders[languageId] = {};
            }
            this.orders[languageId][fullKey] = order;
          }
        }
      }
    }
  }
}
