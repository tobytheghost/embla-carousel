module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    'no-debugger': 2,
    'no-console': 2,
    'import/prefer-default-export': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-var-requires': 0,
    'react/prop-types': 'off',
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          '{}': false,
        },
        extendDefaults: true,
      },
    ],
  },
  overrides: [
    {
      files: ['*.ts'],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': ['error'],
      },
    },
    {
      files: ['src/components/Page/Mdx.tsx'],
      rules: {
        'react/display-name': 'off',
      },
    },
    {
      files: [
        'src/components/CodeSandbox/ExamplesVanilla/**/*js',
        'src/components/CodeSandbox/ExamplesReact/**/*.js',
      ],
      rules: {
        'no-undef': 0,
        '@typescript-eslint/no-unused-vars': 0,
      },
    },
  ],
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
