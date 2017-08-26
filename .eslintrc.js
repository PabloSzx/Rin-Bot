module.exports = {
  extends: ['airbnb-base', 'prettier'],
  plugin: ['import'],
  rules: {
    'no-console': ['error', { allow: ['warn', 'error', 'log'] }],
    'import/no-unresolved': [2, { caseSensitive: false }],
  },
};
