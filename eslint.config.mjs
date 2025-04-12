// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';
import eslint from '@eslint/js';
import eslintPluginVue from 'eslint-plugin-vue';
import globals from 'globals';
import typescriptEslint from 'typescript-eslint';
import stylisticTs from '@stylistic/eslint-plugin-ts';

export default withNuxt(
  eslint.configs.recommended,
  eslintPluginVue.configs['flat/recommended'],
  { ignores: ['*.d.ts', '**/coverage', '**/dist'] },
  {
    files: ['**/*.{ts,vue}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
      parserOptions: {
        parser: typescriptEslint.parser,
      },
    },
    plugins: {
      '@stylistic/ts': stylisticTs,
    },
    rules: {
      'vue/html-indent': ['warn', 2],
      'vue/multi-word-component-names': ['off'],

      'spaced-comment': [
        'error',
        'always',
        {
          markers: ['/'],
        },
      ],

      'no-undef': ['off'],
      'no-unused-vars': ['warn'],

      '@typescript-eslint/no-unused-vars': ['off'],
      '@typescript-eslint/explicit-member-accessibility': ['off'],
      '@typescript-eslint/no-parameter-properties': ['off'],
      '@typescript-eslint/unified-signatures': ['off'],

      '@stylistic/ts/member-delimiter-style': [
        'warn',
        {
          multiline: {
            delimiter: 'none',
            requireLast: false,
          },

          singleline: {
            delimiter: 'comma',
            requireLast: false,
          },

          multilineDetection: 'brackets',
        },
      ],
    },
  }
);
