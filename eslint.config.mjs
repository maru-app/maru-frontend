import prettier from 'eslint-plugin-prettier';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import next from '@next/eslint-plugin-next';
import importPlugin from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';

/* eslint-disable no-underscore-dangle */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
/* eslint-enable no-underscore-dangle */

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

export default [
  ...compat.extends('airbnb', 'prettier'),
  {
    plugins: {
      react,
      reactHooks,
      next,
      importPlugin,
      jsxA11y,
      prettier
    },
    languageOptions: {
      globals: {
        JSX: true
      }
    },
    rules: {
      'arrow-body-style': 'off',
      'jsx-quotes': 'off',
      'comma-dangle': 'off',
      'object-curly-newline': 'off',
      'linebreak-style': 'off',

      'react/jsx-filename-extension': 'off',
      'react/no-unescaped-entities': 'off',
      'react/jsx-tag-spacing': 'off',
      'react/prop-types': 'off',
      'react/jsx-one-expression-per-line': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/function-component-definition': 'off',
      'react/jsx-no-useless-fragment': 'off',
      'react/require-default-props': 'off',
      'react/react-in-jsx-scope': 'off',

      'import/extensions': 'off',
      'import/no-unresolved': 'off',
      'import/no-extraneous-dependencies': 'off',
      'import/prefer-default-export': 'off',
      'prettier/prettier': 'error',

      'jsx-a11y/label-has-associated-control': [
        2,
        {
          some: ['nesting', 'id']
        }
      ]
    }
  }
];
