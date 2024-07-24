// rsbuild.config.ts
import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { ModuleFederationPlugin } from "@module-federation/enhanced/rspack";

export default defineConfig({
  server: {
    port: 3002,
  },
  dev: {
    // It is necessary to configure assetPrefix, and in the production environment, you need to configure output.assetPrefix
    assetPrefix: "http://localhost:3002",
  },
  tools: {
    rspack: (config, { appendPlugins }) => {
      // You need to set a unique value that is not equal to other applications
      config.output!.uniqueName = "flex_japanese";
      appendPlugins([
        new ModuleFederationPlugin({
          name: "flex_japanese",
          exposes: {
            "./module": "./src/module.ts",
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
