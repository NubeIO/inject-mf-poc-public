// rsbuild.config.ts
import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { ModuleFederationPlugin } from "@module-federation/enhanced/rspack";

export default defineConfig({
  server: {
    port: 3000,
  },
  dev: {
    // It is necessary to configure assetPrefix, and in the production environment, you need to configure output.assetPrefix
    assetPrefix: "http://localhost:3000",
  },
  tools: {
    rspack: (config, { appendPlugins }) => {
      // You need to set a unique value that is not equal to other applications
      config.output!.uniqueName = "flex_ui";
      appendPlugins([
        new ModuleFederationPlugin({
          name: "flex_ui",
          exposes: {
            "./button": "./src/button.tsx",
            "./module": "./src/module.ts",
            "./frontend-application": "./src/frontend-application.ts",
          },
          shared: {
            react: { singleton: true },
            "react-dom": { singleton: true },
          },
        }),
      ]);
    },
  },
  plugins: [pluginReact()],
});
