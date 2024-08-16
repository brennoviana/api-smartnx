import typescript from '@typescript-eslint/parser';
import airbnb from 'eslint-config-airbnb-typescript';
import eslintPluginImport from 'eslint-plugin-import';
import eslintPluginPrettier from 'eslint-plugin-prettier';

export default [
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: typescript,
    },
    plugins: {
      import: eslintPluginImport,
      prettier: eslintPluginPrettier,
    },
    rules: {
      ...airbnb.rules,
      'prettier/prettier': 'error',
      'import/prefer-default-export': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'react/jsx-filename-extension': 'off',
      'react/react-in-jsx-scope': 'off',
    },
  },
];
