import React, { useState } from "react";

import { Provider } from "inversify-react";
import businessContainer from "flex_business/module";
import uiContainer from "flex_ui/module";
import coreContainer from "@nubeio/flex-core/module";

import { Container, initializeApplication } from "@nubeio/flex-core";

import { ChildComponent } from "./components/Layout";

const App = () => {
  const [container, setContainer] = useState<Container | null>(null);

  React.useEffect(() => {
    const newContainer = new Container();
    newContainer.load(coreContainer, uiContainer, businessContainer);
    initializeApplication(newContainer);
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
