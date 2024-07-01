import React, { useState, useEffect } from "react";
import { useInjection } from "inversify-react";
import { LayoutMenu } from "./Menu";
import { WelcomeLayout } from "./WelcomeLayout";
import { WidgetManager, TYPES, Widget } from "@nubeio/flex-core";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@nubeio/ui/tabs";

interface ChildComponentProps {}

export const ChildComponent: React.FC<ChildComponentProps> = () => {
  const menuRegistry = useInjection<WidgetManager>(TYPES.WidgetManager);
  const [widgets, setWidgets] = useState<Map<string, Widget>>(new Map());
  const [selectedWidget, setSelectedWidget] = useState<string | undefined>();

  const onUpdateSelectedTab = (tab: string) => {
    setSelectedWidget(tab);
  };

  useEffect(() => {
    const updateWidgets = () => {
      const newWidgets = new Map(menuRegistry.widgets);
      setWidgets(newWidgets);
      if (newWidgets.size > 0 && !selectedWidget) {
        setSelectedWidget(newWidgets.keys().next().value);
      }
    };

    const handleWidgetOpened = (key: string) => {
      onUpdateSelectedTab(key);
    };

    menuRegistry.onWidgetChange(updateWidgets);
    menuRegistry.onWidgetOpened(handleWidgetOpened);
    updateWidgets();

    return () => {
      menuRegistry.removeOnWidgetChange(updateWidgets);
      menuRegistry.removeOnWidgetOpened(handleWidgetOpened);
    };
  }, [menuRegistry, selectedWidget]);

  return (
    <div>
      <LayoutMenu />
      {widgets.size === 0 ? (
        <WelcomeLayout />
      ) : (
        <Tabs
          key={selectedWidget}
          defaultValue={selectedWidget}
          onValueChange={onUpdateSelectedTab}
        >
          <TabsList className="grid w-full grid-cols-2">
            {Array.from(widgets.entries()).map(([key, widget]) => (
              <TabsTrigger key={key} value={key}>
                {widget.name}
              </TabsTrigger>
            ))}
          </TabsList>
          {Array.from(widgets.entries()).map(([key, widget]) => (
            <TabsContent key={key} value={key}>
              {widget.render()}
            </TabsContent>
          ))}
        </Tabs>
      )}
    </div>
  );
};
