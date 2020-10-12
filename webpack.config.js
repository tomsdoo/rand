var path = require("path");

module.exports = {
  // mode:"development",
  mode:"production",
  module:{
    rules:[
      {
        test:/\.css$/,
        use:["style-loader","css-loader"]
      },
      {
        test:/\.ts$/,
        loader:"ts-loader"
      }
    ]
  },
  resolve:{
    extensions:[".js",".ts"],
    modules:["node_modules"]
  },
  entry:{
    "rand":"./src/use-rand.ts",
    "rand.esm":"./src/rand.ts"
  },
  output:{
    path:path.join(__dirname, "dist"),
    filename:"[name].js"
  }
};
