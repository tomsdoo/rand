var path = require("path");

module.exports = {
  mode:"development",
  // mode:"production",
  module:{
    rules:[
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
    "test":"./test/test.ts"
  },
  output:{
    path:path.join(__dirname, "test"),
    filename:"[name].js"
  }
};
