/** @type {import('@commitlint/types').UserConfig} */
const CommitLintConfiguration = {
    extends: ['@commitlint/config-conventional'],
    rules: {
      'scope-enum': [
        2,
        'always',
        [
          'components',
          'layout',
          'pages',
          'styles',
          'utils',
          'types',
          'translate',
        ],
      ],
      'scope-case': [2, 'always', 'kebab-case'],
    },
  };
  
  module.exports = CommitLintConfiguration;
  