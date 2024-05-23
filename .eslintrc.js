module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es2021: true,
    'react-native/react-native': true,
    'jest/globals': true
  },
  extends: ['expo', 'plugin:@typescript-eslint/recommended', 'plugin:react/recommended', 'prettier', 'plugin:jest/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'react-native', 'jest', '@typescript-eslint', 'unused-imports', 'simple-import-sort', 'react-hooks'],
  ignorePatterns: ['!.*', 'dist', 'node_modules/'],
  rules: {
    'no-console': 'error',
    'no-unused-vars': 'error',
    '@typescript-eslint/no-unused-vars': ['error'],
    'no-tabs': ['error', { allowIndentationTabs: true }],
    'max-len': ['error', 160],
    semi: ['error', 'always'],
    'linebreak-style': 0,
    'no-restricted-syntax': 'off',
    indent: ['error', 2, { SwitchCase: 1 }],
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'comma-dangle': ['error', 'never'],
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off'
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
