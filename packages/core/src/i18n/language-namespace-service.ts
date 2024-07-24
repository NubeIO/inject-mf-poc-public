import { Container, inject, injectable, interfaces } from "inversify";

import { TYPES } from "../common";
import { LanguageRegistry } from "./language-registry";
import { LocalizationService } from "./language-service";
import { LanguageLabel } from "./types";

const NSOptionsSymbol = Symbol("NSOptions");

export interface NSOptions {
  id: string;
}

@injectable()
export class LanguageNSRegistry {
  static createBinding(bind: interfaces.Bind, namespace: string) {
    bind(TYPES.LanguageNSRegistry)
      .toDynamicValue((context) => {
        return LanguageNSRegistry.createContainer(context.container, {
          id: namespace,
        }).get(LanguageNSRegistry);
      })
      .whenTargetNamed(namespace);
  }

  private static createContainer(
    parent: interfaces.Container,
    options: NSOptions,
  ): Container {
    const child = new Container();
    child.parent = parent;
    child.bind(LanguageNSRegistry).toSelf();
    child.bind(NSOptionsSymbol).toConstantValue(options);
    return child;
  }

  constructor(
    @inject(TYPES.LanguageRegistry)
    protected readonly languageRegistry: LanguageRegistry,
    @inject(TYPES.LocalizationService)
    protected readonly nls: LocalizationService,
    @inject(NSOptionsSymbol)
    protected readonly options: NSOptions,
  ) {}

  registerLanguage = (
    languageId: string,
    translations: { [key: string]: any },
  ) =>
    this.languageRegistry.registerLanguage(
      languageId,
      translations,
      this.options.id,
    );

  localize(key: string, fallback?: string): LanguageLabel {
    return { id: key, namespace: this.options.id, fallback };
  }

  changeLanguage(languageId: string) {
    this.nls.changeLanguage(languageId);
  }
}
