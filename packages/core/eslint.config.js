import baseConfig from "@nubeio/eslint-config/base";
import reactConfig from "@nubeio/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: [],
  },
  {
    plugins: {
      base: baseConfig,
      react: reactConfig,
    },
  },
];
