import React, { useState, useEffect } from "react";
import { useInjection } from "inversify-react";
import { LayoutMenu } from "./Menu";
import { WelcomeLayout } from "./WelcomeLayout";
import { WidgetManager, TYPES, Widget } from "@nubeio/flex-core";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@nubeio/ui/tabs";
import LeftTree from "./Tree";
import { Button } from "@nubeio/ui/button";

interface ChildComponentProps {}

export const ChildComponent: React.FC<ChildComponentProps> = () => {
  const menuRegistry = useInjection<WidgetManager>(TYPES.WidgetManager);
  const [widgets, setWidgets] = useState<Map<string, Widget>>(new Map());
  const [selectedWidget, setSelectedWidget] = useState<string | undefined>();

  const onUpdateSelectedTab = (tab: string | undefined) => {
    setSelectedWidget(tab);
  };

  const onCloseWidget = (tab: string) => {
    menuRegistry.onCloseWidget(tab);
  };

  useEffect(() => {
    const updateWidgets = () => {
      const newWidgets = new Map(menuRegistry.widgets);
      setWidgets(newWidgets);
      if (newWidgets.size > 0 && !selectedWidget) {
        setSelectedWidget(newWidgets.keys().next().value);
      }
    };

    const handleWidgetOpened = (key: string | undefined) => {
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
      <div className="flex">
        <LeftTree />
        <div className="flex-1">
          {widgets.size === 0 ? (
            <WelcomeLayout />
          ) : (
            <Tabs
              key={selectedWidget}
              defaultValue={selectedWidget}
              onValueChange={onUpdateSelectedTab}
            >
              <TabsList className="flex gap-0 border-b-0 justify-start">
                {Array.from(widgets.entries()).map(([key, widget]) => (
                  <div className="flex relative">
                    <TabsTrigger key={key} value={key}>
                      {widget.name}
                      <div className="w-12"></div>
                    </TabsTrigger>
                    <div className="absolute right-1">
                      <Button
                        size="iconOnly"
                        variant="ghost"
                        className="relative top-0 right-0"
                        onClick={(event) => {
                          event.stopPropagation();
                          onCloseWidget(key);
                        }}
                      >
                        x<span className="sr-only">Close</span>
                      </Button>
                    </div>
                  </div>
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
      </div>
    </div>
  );
};
