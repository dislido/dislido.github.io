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
    'react/forbid-prop-types': ['error', {
      forbid: ['any', 'array'],
      checkContextTypes: true,
      checkChildContextTypes: true,
    }],
    'import/no-unresolved': ['error', { ignore: ['^@/'] }],
    'import/named': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
  },
};
