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
          remotes: {},
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
