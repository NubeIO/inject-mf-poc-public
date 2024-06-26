import React, { useState } from "react";

import { Provider } from 'inversify-react';
import businessContainer from "flex_business/module";
import uiContainer from "flex_ui/module";
import coreContainer from "@nubeio/flex-core/module";

import {
  Container,
  CoreFrontendApplication,
} from "@nubeio/flex-core";
import FlexBusinessApplication from "flex_business/frontend-application";
import FlexUIApplication from "flex_ui/frontend-application";

import { ChildComponent } from "./components/Layout";

const App = () => {
  const [container, setContainer] = useState<Container | null>(null);

  React.useEffect(() => {
    const newContainer = new Container();
    newContainer.load(coreContainer, uiContainer, businessContainer);

    // todo find better way to initialize
    newContainer.get<CoreFrontendApplication>(CoreFrontendApplication);
    newContainer.get<FlexBusinessApplication>(FlexBusinessApplication);
    newContainer.get<FlexUIApplication>(FlexUIApplication);

    setContainer(newContainer);
  }, []);

  if (!container) {
    return <div>Loading...</div>;
  }

  return (
    <Provider container={container}>
      <ChildComponent />
    </Provider>
  );
};

export default App;
