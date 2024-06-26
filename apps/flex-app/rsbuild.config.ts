// rsbuild.config.ts
import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { ModuleFederationPlugin } from "@module-federation/enhanced/rspack";

export default defineConfig({
  server: {
    port: 8000,
  },
  tools: {
    rspack: (_, { appendPlugins }) => {
      appendPlugins([
        new ModuleFederationPlugin({
          name: "flex",
          remotes: {
            flex_ui: "flex_ui@http://localhost:3000/mf-manifest.json",
            flex_business:
              "flex_business@http://localhost:3001/mf-manifest.json",
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
