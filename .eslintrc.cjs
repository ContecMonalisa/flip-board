/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  env: {
    'node': true,
    'vue/setup-compiler-macros': true,
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
  ],
  plugins: [
    'import',
  ],
  overrides: [
    {
      files: [
        '**/__tests__/*.{cy,spec}.{js,ts,jsx,tsx}',
        'cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}',
        'cypress/support/**/*.{js,ts,jsx,tsx}',
      ],
      'extends': [
        'plugin:cypress/recommended',
      ],
    },
  ],
  parserOptions: {ecmaVersion: 'latest'},
  rules: {
    'import/order': [
      'error',
      {
        'groups': [
          'builtin',
          'external',
          'internal',
          'unknown',
        ],
        'pathGroups': [
          {
            'pattern': 'vue',
            'group': 'builtin',
            'position': 'before',
          },
          {
            'pattern': 'pinia',
            'group': 'external',
            'position': 'before',
          },
          {
            'pattern': '@/stores/**',
            'group': 'internal',
            'position': 'before',
          },
          {
            'pattern': '@/interface/**',
            'group': 'internal',
            'position': 'before',
          },
          {
            'pattern': '@/composable/**',
            'group': 'internal',
            'position': 'before',
          },
          {
            'pattern': '@/views/**',
            'group': 'internal',
            'position': 'before',
          },
          {
            'pattern': '@/components/**',
            'group': 'internal',
            'position': 'before',
          },
          {
            'pattern': '*',
            'group': 'external',
          },
        ],
        'pathGroupsExcludedImportTypes': ['builtin'],
        'alphabetize': {
          'order': 'asc',
          'caseInsensitive': true,
        },
      },
    ],
    'vue/multi-word-component-names': 'off',
    'semi': [
      'error',
      'always',
    ],
    '@typescript-eslint/no-unused-vars': 'error',
    'vue/attributes-order': [
      'error',
      {
        'order': [
          'CONDITIONALS',
          'LIST_RENDERING',
          'OTHER_ATTR',
          'TWO_WAY_BINDING',
          'OTHER_DIRECTIVES',
          'EVENTS',
          'CONTENT',
        ],
      },
    ],
    'vue/attribute-hyphenation': ['error', 'never', { 'ignore': ['custom-prop'] }],
    'vue/v-on-event-hyphenation': ['error', 'never', { 'ignore': ['custom-prop'] }],
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': [
      'error',
      {
        'before': false,
        'after': true,
      },
    ],
    'object-curly-newline': [
      'error',
      {'multiline': true},
    ],
    'quotes': ['error', 'single'],
  },
};
