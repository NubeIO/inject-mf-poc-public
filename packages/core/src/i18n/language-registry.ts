import { injectable } from "inversify";
import { useTranslation as reactTranslation } from "react-i18next";
import { create } from "zustand";

import { Store } from "../common";
import { LanguageLabel } from "./types";

export type Localization = {
  languageId: string;
  namespace: string;
  translations: { [key: string]: any };
};

export function useTranslation() {
  function localize(
    label: string | LanguageLabel | undefined,
    namespace?: string,
    fallback?: string,
  ): string {
    if (LanguageLabel.is(label)) {
      const { t } = reactTranslation(label.namespace);
      return t(label.id, label.fallback ?? fallback ?? label.id);
    }
    const { t } = reactTranslation(namespace ?? "core");
    return label ? t(label) : fallback ?? "";
  }

  return { localize };
}

export type LanguageStore = {
  currentLanguage: string;
  availableLanguages: { [key: string]: { [namespace: string]: Localization } };
  setCurrentLanguage: (languageId: string) => void;
  registerLanguage: (
    languageId: string,
    namespace: string,
    translations: { [key: string]: any },
  ) => Localization;
};

@injectable()
export class LanguageRegistry implements LanguageStore, Store<LanguageStore> {
  private store = create<LanguageStore>((set, get) => ({
    currentLanguage: "en",
    availableLanguages: {},
    setCurrentLanguage: (languageId: string) => {
      set({ currentLanguage: languageId });
    },
    registerLanguage: (
      languageId: string,
      namespace: string,
      translations: { [key: string]: any },
    ) => {
      const state = get();
      const language = state.availableLanguages[languageId] || {};

      if (language[namespace]) {
        throw new Error(
          `Namespace ${namespace} for language ${languageId} already exists`,
        );
      }

      const updatedLanguage = {
        ...language,
        [namespace]: {
          languageId,
          namespace,
          translations,
        },
      };

      set({
        availableLanguages: {
          ...state.availableLanguages,
          [languageId]: updatedLanguage,
        },
      });

      return {
        languageId,
        namespace,
        translations,
      };
    },
  }));

  get currentLanguage(): string {
    return this.getState().currentLanguage;
  }
  get availableLanguages(): {
    [key: string]: { [namespace: string]: Localization };
  } {
    return this.getState().availableLanguages;
  }
  setCurrentLanguage = (languageId: string) =>
    this.getState().setCurrentLanguage(languageId);

  registerLanguage = (
    languageId: string,
    namespace: string,
    translations: { [key: string]: any },
  ) => this.getState().registerLanguage(languageId, namespace, translations);

  useStore(): LanguageStore {
    return this.store();
  }

  getState(): LanguageStore {
    return this.store.getState();
  }

  subscribe = (
    listener: (state: LanguageStore, prevState: LanguageStore) => void,
  ) => this.store.subscribe(listener);
}
