import { injectable } from "inversify";
import { useTranslation as reactTranslation } from "react-i18next";
import { create } from "zustand";

import { Store } from "../common";
import { LanguageLabel } from "./types";

export const DEFAULT_NAMESPACE = "core";

export type Localization = {
  languageId: string;
  namespace?: string;
  translations: { [key: string]: any };
};

export function useTranslation(ns?: string) {
  function localize(
    label: string | LanguageLabel | undefined,
    options?: { fallback?: string; namespace?: string },
  ): string {
    const fallbackNS = LanguageLabel.is(label)
      ? label.namespace
      : DEFAULT_NAMESPACE;
    const namespace = ns ?? options?.namespace ?? fallbackNS;

    const fallbackLabel = LanguageLabel.is(label) ? label.fallback : undefined;
    const fallback = options?.fallback ?? fallbackLabel ?? "";

    const { t } = reactTranslation(namespace);

    if (LanguageLabel.is(label)) {
      return t(label.id, fallback);
    }

    return label ? t(label) ?? fallback : fallback;
  }

  return { localize };
}
export type LanguageStore = {
  currentLanguage: string;
  availableLanguages: { [key: string]: { [namespace: string]: Localization } };
  setCurrentLanguage: (languageId: string) => void;
  registerLanguage: (
    languageId: string,
    translations: { [key: string]: any },
    namespace?: string,
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
      translations: { [key: string]: any },
      namespace?: string,
    ) => {
      const state = get();
      const language = state.availableLanguages[languageId] || {};

      namespace = namespace ?? DEFAULT_NAMESPACE;

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
    translations: { [key: string]: any },
    namespace?: string,
  ) => this.getState().registerLanguage(languageId, translations, namespace);

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
