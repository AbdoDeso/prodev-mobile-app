const { getDefaultConfig } = require("expo/metro-config");

module.exports = (async () => {
  const config = await getDefaultConfig(__dirname);
  return require("nativewind/metro").withNativeWind(config, { input: "./global.css" });
})();