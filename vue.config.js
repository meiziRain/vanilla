module.exports = {
  publicPath: "./",
  // 输出文件目录
  outputDir: "dist",
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(glsl|vs|fs|vert|frag)$/,
          exclude: /node_modules/,
          use: ["raw-loader", "glslify-loader"],
        },
      ],
    },
  }
}
