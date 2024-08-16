// eslint.config.mjs
import typescript from '@typescript-eslint/parser';
import airbnb from 'eslint-config-airbnb-typescript';
import eslintPluginImport from 'eslint-plugin-import';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y';
import eslintPluginPrettier from 'eslint-plugin-prettier';

export default [
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: typescript,
    },
    plugins: {
      import: eslintPluginImport,
      react: eslintPluginReact,
      'jsx-a11y': eslintPluginJsxA11y,
      prettier: eslintPluginPrettier,
    },
    rules: {
      ...airbnb.rules,
      'prettier/prettier': 'error',
      'import/prefer-default-export': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];
