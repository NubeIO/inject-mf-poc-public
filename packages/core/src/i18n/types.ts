export interface LanguageLabel {
  id: string;
  fallback?: string;
}

export namespace LanguageLabel {
  export function is(label: any): label is LanguageLabel {
    return typeof label === "object" && label !== null && "id" in label;
  }
}
