import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

export default defineConfig([
  ...nextVitals,
  globalIgnores([".next/**", "node_modules/**"]),
  {
    rules: {
      // These client components deliberately synchronize transient UI state
      // (cookie consent and navigation menus) after hydration and navigation.
      "react-hooks/set-state-in-effect": "off",
    },
  },
]);
