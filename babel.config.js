module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["."],
          extensions: [
            ".ios.ts",
            ".android.ts",
            ".ts",
            ".ios.tsx",
            ".android.tsx",
            ".tsx",
            ".jsx",
            ".js",
            ".json",
          ],
          alias: {
            "@app/config": "./app/config",
            "@app/context": "./app/context",
            "@app/constants": "./app/constants",
            "@app/states": "./app/states",
            "@app/layout": "./app/layout",
            "@app/navigation": "./app/navigation",
            "@app/screens": "./app/screens",
            "@app/theme": "./app/theme",
            "@app/utils": "./app/utils",
          },
        },
      ],
    ],
  };
};
