module.exports = {
  extends: 'airbnb',
  rules: {
    'no-console': 'off',
    'global-require': 'off',
    'import/no-dynamic-require': 'off',
    'no-plusplus': 'off',
    'no-param-reassign': 'off',
    'max-len': ['error', { code: 120 }],
    'import/no-unresolved': [2, { ignore: ['^cqnode$'] }],
  },
};
