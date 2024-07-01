import { ReactNode } from "react";
import { Widget } from "@nubeio/flex-core";
import "reactflow/dist/style.css";
export default class FlowComponent implements Widget {
  static readonly ID = "widget:flow";
  render(): ReactNode;
}
