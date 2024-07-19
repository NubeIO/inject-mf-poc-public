export interface II18nService {
  getFlexAvaiableLangCodes(): Promise<string[]>;
  getLangNameSpaces(): Promise<string[]>;
  addExtensionTranslation(translationObj: any): Promise<void>;
  getLangRegistry(): Promise<LangRegistry>;
  // only register the language for the extension that doesnt exist, because existing extension's dictionary could have already been modified
  registerLangForExtension(
    extensionName: string,
    resorces: LangResorces,
  ): Promise<void>;
  getLangForExtension(extensionName: string): Promise<LangResorces>;
  addLanguageForExtension(
    extensionName: string,
    languageId: string,
  ): Promise<void>;
  removeLanguageForExtension(
    extensionName: string,
    languageId: string,
  ): Promise<void>;
  addTranslation(
    extensionName: string,
    languageId: string,
    key: string,
    value: string,
  ): Promise<void>;
  updateTranslation(
    extensionName: string,
    languageId: string,
    key: string,
    newValue: string,
  ): Promise<void>;
  removeTranslation(
    extensionName: string,
    languageId: string,
    key: string,
  ): Promise<void>;
}

// stores key value pairs of translation in a specific language
export type Dictionary = {
  translation: { [key: string]: string };
};

// each key is a language code, and the value is a dictionary of translations
export type LangResorces = {
  resorces: { [key: string]: Dictionary };
};

// each extension has its own translations stored in a separate directory using the extension's name under the translation folder
export type ExtensionLanguageInfo = {
  extensionName: string;
  languageIds: string[];
  // languageNames?: { [languageId: string]: string }; // optional, if not provided, the languageId will be used as the language name
};

export type LangRegistry = { [key: string]: ExtensionLanguageInfo };

export interface ILanguageRegistry {
  // lanRegistry: LangRegistry;
  // getCurrentExtensionLanguageNames(): Promise<{ [languageId: string]: string }>;
  getLanguageForExtension(
    extensionName: string,
  ): Promise<ExtensionLanguageInfo[]>;
  registerLanguageForExtension(
    extensionName: string,
    resorces: LangResorces,
  ): Promise<void>;
  removeLanguageForExtension(extensionName: string): Promise<void>;
}
