import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import pluginPrettier from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

// pluginPrettier.configs.recommended contém o equivalente ao "plugin:prettier/recommended"
export default [
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      prettier: pluginPrettier
    },
    rules: {
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react/props-types": "off",
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",

      // Se quiser que o ESLint reporte formatação do Prettier como erro:
      "prettier/prettier": "error"
    },
    settings: {
      react: { version: "detect" }
    }
  },

  // Aplica o conjunto do plugin-prettier (recommended)
  // se o plugin exportar configs.recommended — inclui regras e parserOptions do plugin
  ...(pluginPrettier.configs && pluginPrettier.configs.recommended ? [pluginPrettier.configs.recommended] : []),

  // E no final: desativa regras do ESLint que conflitam com Prettier
  prettierConfig
];
