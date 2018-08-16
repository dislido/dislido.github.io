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
    'import/no-unresolved': ['error', { ignore: ['^style/'] }],
  },
};
