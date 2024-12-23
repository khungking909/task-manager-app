/**
 * @type {import('semantic-release').GlobalConfig}
 */

export default {
  branches: [
    'main',
    { name: 'develop', prerelease: true, channel: 'beta' },
    { name: 'staging', prerelease: true, channel: 'rc' },
  ],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    [
      '@semantic-release/npm',
      {
        npmPublish: false,
      },
    ],
    [
      '@semantic-release/git',
      {
        assets: ['package.json', 'CHANGELOG.md'],
        message: 'chore(ITS_RCT-RELEASE): ${nextRelease.version}',
      },
    ],
  ],
};
