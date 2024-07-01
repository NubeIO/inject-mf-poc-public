import { injectable } from "inversify";

import { MaybePromise, Widget } from "../common";

export interface WidgetFactory {
  readonly id: string;
  createWidget(options?: any): MaybePromise<Widget>;
}

export interface WidgetConstructionOptions {
  readonly factoryId: string;
  options?: any;
}

type WidgetChangeListener = () => void;
type WidgetOpenedListener = (key: string | undefined) => void;

@injectable()
export class WidgetManager {
  protected _cachedFactories = new Map<string, WidgetFactory>();
  readonly widgets = new Map<string, Widget>();
  private widgetChangeListeners = new Set<WidgetChangeListener>();
  private widgetOpenedListeners = new Set<WidgetOpenedListener>();

  getWidgets(factoryId: string): Widget[] {
    const result: Widget[] = [];
    for (const [key, widget] of this.widgets.entries()) {
      if (this.fromKey(key).factoryId === factoryId) {
        result.push(widget);
      }
    }
    return result;
  }

  async getWidget<T extends Widget>(
    factoryId: string,
    options?: any,
  ): Promise<T | undefined> {
    const key = this.toKey({ factoryId, options });
    const widget = this.widgets.get(key);
    return widget as T | undefined;
  }

  async getOrCreateWidget<T extends Widget>(
    factoryId: string,
    options?: any,
  ): Promise<T> {
    const key = this.toKey({ factoryId, options });
    let widget = this.widgets.get(key) as T | undefined;

    if (widget) {
      this.notifyWidgetOpenedListeners(key);
      return widget;
    }

    const factory = this._cachedFactories.get(factoryId);
    if (!factory) {
      throw new Error(`No widget factory '${factoryId}' has been registered.`);
    }

    const widgetPromise = factory.createWidget(options);
    widget = (await widgetPromise) as T;
    this.widgets.set(key, widget);
    this.notifyWidgetChangeListeners();
    this.notifyWidgetOpenedListeners(key);

    return widget;
  }

  protected toKey(options: WidgetConstructionOptions): string {
    return JSON.stringify(options);
  }

  protected fromKey(key: string): WidgetConstructionOptions {
    return JSON.parse(key);
  }

  registerFactory(factory: WidgetFactory): void {
    if (this._cachedFactories.has(factory.id)) {
      return;
    }
    this._cachedFactories.set(factory.id, factory);
  }

  onWidgetChange(listener: WidgetChangeListener): void {
    this.widgetChangeListeners.add(listener);
  }

  removeOnWidgetChange(listener: WidgetChangeListener): void {
    this.widgetChangeListeners.delete(listener);
  }

  onWidgetOpened(listener: WidgetOpenedListener): void {
    this.widgetOpenedListeners.add(listener);
  }

  removeOnWidgetOpened(listener: WidgetOpenedListener): void {
    this.widgetOpenedListeners.delete(listener);
  }

  private notifyWidgetChangeListeners(): void {
    for (const listener of this.widgetChangeListeners) {
      listener();
    }
  }

  private notifyWidgetOpenedListeners(key: string): void {
    for (const listener of this.widgetOpenedListeners) {
      listener(key);
    }
  }

  onCloseWidget(key: string): void {
    this.widgets.delete(key);
    this.notifyWidgetChangeListeners();

    const firstAvailableKey =
      this.widgets.size > 0 ? this.widgets.keys().next().value : undefined;
    this.notifyWidgetOpenedListeners(firstAvailableKey);
  }
}
