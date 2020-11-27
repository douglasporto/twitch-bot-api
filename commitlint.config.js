module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [':sparkles:feat', 'fix', 'docs', 'style', 'refactor', 'test', 'revert'],
    ],
    'type-empty': [1, 'never'],
  },
};
