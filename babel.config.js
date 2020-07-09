module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          components: ['./src/components'],
          screen: ['./src/screen'],
          res: ['./src/res'],
          image: ['./src/res/image'],
          Color: ['./src/res/Color'],
          StringKr: ['./src/res/StringKr'],
          StyleCommon: ['./src/StyleCommon'],
        },
      },
    ],
  ],
};
