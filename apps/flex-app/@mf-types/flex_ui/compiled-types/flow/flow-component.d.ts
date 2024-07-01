import { ReactNode } from "react";
import { Widget } from "@nubeio/flex-core";
import { FlowWidgetOpenerOptions } from "./flow-contribution";
import "reactflow/dist/style.css";
export default class FlowComponent implements Widget {
  private options;
  static readonly ID = "widget:flow";
  private positionX;
  private positionY;
  get name(): string;
  get nodes(): {
    id: string;
    position: {
      x: number;
      y: number;
    };
    data: {
      label: string;
    };
  }[];
  constructor(options: FlowWidgetOpenerOptions);
  render(): ReactNode;
}
