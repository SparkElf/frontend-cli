import { merge } from "webpack-merge";
import { common } from "./webpack.common.js";
import { CleanPlugin } from "webpack";
export default merge(common, {
  plugins: [new CleanPlugin()],
});
