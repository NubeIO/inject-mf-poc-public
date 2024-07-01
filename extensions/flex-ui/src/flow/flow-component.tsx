import { ReactNode } from "react";
import { Widget } from "@nubeio/flex-core";
import { FlowWidgetOpenerOptions } from "./flow-contribution";
import { Button } from "@nubeio/ui/button";

export default class FlowComponent implements Widget {
  static readonly ID = "widget:flow";

  public get name() {
    return this.options.id ?? "Wires";
  }

  constructor(private options: FlowWidgetOpenerOptions) {}

  render(): ReactNode {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <p>Display from Flow Component</p>
        <div className="flex gap-2">Props: {this.options.id}</div>
        <Button className="mt-2">Hi from App</Button>
      </div>
    );
  }
}
