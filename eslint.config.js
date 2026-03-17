import universe from 'eslint-config-universe';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';

export default [
  ...universe,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      import: importPlugin,
    },
    rules: {
      // FSD-inspired rules (custom)
      'import/no-internal-modules': [
        'error',
        {
          forbid: [
            'src/features/*/ui/*',
            'src/entities/*/ui/*',
            'src/widgets/*/ui/*',
            'src/pages/*/ui/*',
          ],
        },
      ],
      'import/order': [
        'error',
        {
          pathGroups: [
            {
              pattern: 'src/app/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: 'src/processes/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: 'src/pages/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: 'src/widgets/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: 'src/features/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: 'src/entities/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: 'src/shared/**',
              group: 'internal',
              position: 'before',
            },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
    },
  },
];