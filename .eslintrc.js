module.exports = {
  root: true,
  extends: '@react-native',
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  overrides: [],
  plugins: ['react', '@typescript-eslint', 'react-hooks'],
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
}
