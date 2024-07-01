import { ReactNode } from "react";
import { Widget } from "@nubeio/flex-core";
import { FlowWidgetOpenerOptions } from "./flow-contribution";
export default class FlowComponent implements Widget {
  private options;
  static readonly ID = "widget:flow";
  get name(): string;
  constructor(options: FlowWidgetOpenerOptions);
  render(): ReactNode;
}
