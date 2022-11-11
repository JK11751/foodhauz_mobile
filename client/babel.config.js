module.exports = function(api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            components: "./src/components",
            screens: "./src/screens",
            theme: "./src/theme",
            utils: "./src/utils",
            slices: "./src/redux/slices",
          },
        },
      ],
      "react-native-reanimated/plugin",
    ],
  };
};
