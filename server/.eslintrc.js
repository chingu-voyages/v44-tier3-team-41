module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/react-in-jsx-scope': 0,
    'import/extensions': 0,
    'comma-dangle': 0,
    'react/function-component-definition': 0,
    'arrow-body-style': 0,
    'react/jsx-no-useless-fragment': 0,
    'arrow-parens': 0,
    'no-shadow': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'no-unused-vars': 0,
    'eol-last': 0,
    'no-return-await': 0,
    strict: 0,
    'no-console': 0,
    ignoreComments: true
  },
};
