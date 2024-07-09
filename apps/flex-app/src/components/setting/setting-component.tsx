import { ReactNode } from "react";
import {
  OpenService,
  TYPES,
  URI,
  Widget,
  useInjection,
} from "@nubeio/flex-core";
import { SettingWidgetOpenerOptions } from "./setting-contribution";
import { Button } from "@nubeio/ui/button";

export default class SettingComponent implements Widget {
  static readonly ID = "widget:settings";

  public get name() {
    return "Settings";
  }

  constructor(private options: SettingWidgetOpenerOptions) {}

  render(): ReactNode {
    return <SettingWidget />;
  }
}

const SettingWidget = (): React.ReactNode => {
  const openHandler = useInjection<OpenService>(TYPES.OpenService);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p>Display from Main App</p>
      <Button
        className="mt-2"
        onClick={() => {
          openHandler.open(URI.parse("wires://nube.app/?id=counter"));
        }}
      >
        Open `counter.wires`
      </Button>
    </div>
  );
};
