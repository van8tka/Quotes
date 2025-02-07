module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@shared': './src/shared',
          '@app': './src/app',
          '@entities': './src/entities',
          '@features': './src/features',
          '@pages': './src/pages',
          '@processes': './src/processes',
          '@widgets': './src/widgets',
        },
      },
    ],
  ],
};
