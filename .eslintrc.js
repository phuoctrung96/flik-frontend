module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    requireConfigFile: false,
    sourceType: 'module',
  },
  ignorePatterns: ['/node_modules/**', '/src/assets/images/**', '/docs/**', '/public/**'],
  plugins: ['react'],
  rules: {
    'no-unused-vars': ['warn', { args: 'none', argsIgnorePattern: 'req|res|next|val' }],
    'react/prop-types': 'off',
    'react/jsx-no-undef': 'warn',
    'react/display-name': 'off',
    'react/no-unescaped-entities': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-key': 'warn',
    'prettier/prettier': 'warn',
  },
};
