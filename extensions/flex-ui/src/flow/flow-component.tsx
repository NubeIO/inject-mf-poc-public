import { ReactNode } from "react";
import { Widget } from "@nubeio/flex-core";
import { FlowWidgetOpenerOptions } from "./flow-contribution";
import ReactFlow, { Controls, Background, ReactFlowProvider } from "reactflow";
import "reactflow/dist/style.css";
import { Badge } from "@nubeio/ui/badge";

export default class FlowComponent implements Widget {
  static readonly ID = "widget:flow";
  private positionX = Math.random() * 500;
  private positionY = Math.random() * 500;

  public get name() {
    return this.options.id ?? "Wires";
  }

  get nodes() {
    return [
      {
        id: "1",
        position: { x: this.positionX, y: this.positionY },
        data: { label: this.name },
      },
    ];
  }

  constructor(private options: FlowWidgetOpenerOptions) {}

  render(): ReactNode {
    return (
      <div className="h-full">
        <Badge className="absolute right-2">Hello from Flex UI</Badge>
        <ReactFlowProvider>
          <ReactFlow nodes={this.nodes}>
            <Background />
            <Controls />
          </ReactFlow>
        </ReactFlowProvider>
      </div>
    );
  }
}
