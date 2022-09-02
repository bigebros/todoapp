module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'eslint-config-prettier',
    'plugin:jsx-a11y/recommended'
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  plugins: ['react', 'eslint-plugin-prettier', 'jsx-a11y'],
  rules: {
    'jsx-a11y/click-events-have-key-events': 'off',
    'linebreak-style': 0,
    'prettier/prettier': ['error', { singleQuote: true }],
    'react/react-in-jsx-scope': 'off',
    quotes: [2, 'single'],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'no-underscore-dangle': 'off',
    eqeqeq: 'warn',
    strict: 'off',
    'no-param-reassign': 0
  }
};
