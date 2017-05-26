const path = require('path')

const svgSpriteDirs = [
  path.resolve(__dirname, 'src/svg/'),
]

export default {
  entry: ["babel-polyfill", "src/index.js"],
  svgSpriteLoaderDirs: svgSpriteDirs,
  "theme": "./theme.config.js",
  "env": {
      "development": {
        "extraBabelPlugins": [
          "dva-hmr",
          "transform-runtime",
  		    ["import", { "libraryName": "antd", "style": true }]
        ]
      },
      "production": {
        "extraBabelPlugins": [
          "transform-runtime",
  		    ["import", { "libraryName": "antd", "style": true}]
        ]
      }
  },
  "proxy": {
    "/api": {
      "target": "http://localhost:8081/",
      "changeOrigin": true,
      "pathRewrite": { "^/api/v1" : "" }
    }
  },
}
