// rsbuild.config.ts
import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { ModuleFederationPlugin } from "@module-federation/enhanced/rspack";

export default defineConfig({
  server: {
    port: 3001,
  },
  dev: {
    // It is necessary to configure assetPrefix, and in the production environment, you need to configure output.assetPrefix
    assetPrefix: "http://localhost:3001",
  },
  tools: {
    rspack: (config, { appendPlugins }) => {
      // You need to set a unique value that is not equal to other applications
      config.output!.uniqueName = "flex_business";
      appendPlugins([
        new ModuleFederationPlugin({
          name: "flex_business",
          exposes: {
            "./button": "./src/button.tsx",
            "./module": "./src/module.ts",
            "./frontend-application": "./src/frontend-application.ts",
          },
          shared: {
            react: { singleton: true, requiredVersion: "^18.0.0" },
            "react-dom": { singleton: true, requiredVersion: "^18.0.0" },
          },
        }),
      ])
    },
  },
  plugins: [pluginReact()],
});
