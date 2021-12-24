import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";

export const common = {
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve("./build"),
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: ["ts-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"], //注意顺序
      },
      {
        test: /\.styl$/,
        use: ["style-loader", "css-loader", "stylus-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", "ts"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
