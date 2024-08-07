import React, { useState } from "react";

import businessContainer from "flex_business/module";
import uiContainer from "flex_ui/module";
import japaneseContainer from "flex_japanese/module";
import appContainer from "./module";
import coreContainer from "@nubeio/flex-core/module";

import {
  Container,
  initializeApplication,
  Provider,
  UserProvider,
} from "@nubeio/flex-core";

import { ChildComponent } from "./components/Layout";

const App = () => {
  const [container, setContainer] = useState<Container | null>(null);

  React.useEffect(() => {
    if (container) return;
    const newContainer = new Container();
    newContainer.load(
      coreContainer,
      appContainer,
      uiContainer,
      businessContainer,
      japaneseContainer,
    );
    initializeApplication(newContainer);
    setContainer(newContainer);
  }, []);

  if (!container) {
    return <div>Loading...</div>;
  }

  return (
    <Provider container={container}>
      <UserProvider>
        <ChildComponent />
      </UserProvider>
    </Provider>
  );
};

export default App;
