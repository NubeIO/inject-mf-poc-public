import React, { useState } from "react";
import appContainer from "./module";
import coreContainer from "@nubeio/flex-core/module";
import {
  Container,
  ContainerModule,
  initializeApplication,
  Provider,
} from "@nubeio/flex-core";
import { ChildComponent } from "./components/Layout";
import { init, loadRemote } from "@module-federation/enhanced/runtime";

const extensions = [
  { name: "flex_ui", port: 3000 },
  { name: "flex_business", port: 3001 },
  { name: "flex_japanese", port: 3002 },
];

const App = () => {
  const [container, setContainer] = useState<Container | null>(null);

  React.useEffect(() => {
    const loadExtensionsAndInitialize = async () => {
      init({
        name: "@nubeio-flex/flex-app",
        remotes: extensions.map((extension) => {
          return {
            name: extension.name,
            entry: `http://localhost:${extension.port}/mf-manifest.json`,
            alias: extension.name,
          };
        }),
      });

      const newContainer = new Container();

      const loadedExtensions = await Promise.all(
        extensions.map(async (extension) => {
          const module = (await loadRemote(extension.name)) as any;

          return module.default as ContainerModule;
        }),
      );

      newContainer.load(coreContainer, appContainer, ...loadedExtensions);

      initializeApplication(newContainer);
      setContainer(newContainer);
    };

    if (!container) {
      loadExtensionsAndInitialize();
    }
  }, [container]);

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
