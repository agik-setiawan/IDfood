const path = require("path");
const webpack=require('webpack');
//main node modules
module.exports = {
  entry: {
    //"assets/js/react":"./webpack/src/React.js",
    "assets/src/components/home/search":"./webpack/src/components/home/SearchHome.js",
  },
  output: {
    path: path.join(__dirname, "/"),
    filename: "[name].bundle.js",
    chunkFilename: "[id].chunk.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["source-map-loader",{
          loader: "babel-loader"
        }]
      }
    ]
  },
//   plugins: [
//   new webpack.DefinePlugin({
//     'process.env': {
//       'NODE_ENV': JSON.stringify('production')
//     }
//   })
// ],
};