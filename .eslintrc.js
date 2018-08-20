module.exports = {
  extends: 'airbnb',
  env: {
    "browser": true,
    "node": true
  },
  parser: "babel-eslint",
  rules: {
    'no-plusplus': 'off',
    'max-len': ['error', { code: 120 }],
    'import/no-unresolved': ['error', { ignore: ['^style/', '^assets/'] }],
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
  },
};
