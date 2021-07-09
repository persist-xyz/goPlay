const path = require("path");
const resolve = (dir) => path.resolve(__dirname, dir);

const config = {
  projectName: "goPlay",
  date: "2021-7-4",
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
  },
  sourceRoot: "src",
  outputRoot: `dist/${process.env.TARO_ENV}`,
  plugins: [],
  defineConstants: {},
  copy: {
    patterns: [
      {
        from: "src/custom-tab-bar/",
        to: `dist/custom-tab-bar/`,
      },
    ],
    options: {},
  },
  framework: "react",
  alias: {
    "@/utils": resolve(`../src/utils`),
    "@/plugins": resolve(`../src/plugins`),
    "@/api": resolve(`../src/api`),
    "@/styles": resolve(`../src/styles`),
    "@/service": resolve(`../src/service`),
    "@/components": resolve(`../src/components`),
    "@/assets": resolve(`../src/assets`),
    "@/actions": resolve(`../src/actions`),
    "@/constants": resolve(`../src/constants`),
    "@/reducers": resolve(`../src/reducers`),
    "@/store": resolve(`../src/store`),
  },
  mini: {
    compile: {
      include: [resolve("node_modules/@mini/")],
      exclude: [resolve("src/custom-tab-bar")],
    },
    postcss: {
      pxtransform: {
        enable: true,
        config: {},
      },
      url: {
        enable: true,
        config: {
          limit: 1024, // 设定转换尺寸上限
        },
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: "module", // 转换模式，取值为 global/module
          generateScopedName: "[name]__[local]___[hash:base64:5]",
        },
      },
    },
  },
  h5: {
    publicPath: "/",
    staticDirectory: "static",
    postcss: {
      autoprefixer: {
        enable: true,
        config: {},
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: "module", // 转换模式，取值为 global/module
          generateScopedName: "[name]__[local]___[hash:base64:5]",
        },
      },
    },
  },
};

module.exports = function (merge) {
  if (process.env.NODE_ENV === "development") {
    return merge({}, config, require("./dev"));
  }
  return merge({}, config, require("./prod"));
};
