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
    'react/react-in-jsx-scope': 'off',
    indent: 'off',
    'import/extensions': 'off',
    'comma-dangle': 'off',
    'react/function-component-definition': 'off',
    'arrow-body-style': 'off',
    'react/jsx-no-useless-fragment': 'off',
    'arrow-parens': 'off',
    'no-shadow': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'no-unused-vars': 'off',
    'eol-last': 'off',
    'no-return-await': 'off',
    strict: 'off',
    'no-console': 'off',
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    ignoreComments: 0,
    'consistent-return': 'off',
    radix: 'off',
    'global-require': 'off'
  },
};
