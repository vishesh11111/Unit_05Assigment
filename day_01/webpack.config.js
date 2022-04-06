const path  = require("path");

module.exports = {
    entry : "./src/calc.js",
    output : {
        path: path.resolve(".", "build"),   // can use resolve or join 
        filename : "bundle.js"
    },
    mode: "development",
    module: {
        rules: [
          { test: /\.css$/, use: ["style-loader", "css-loader"] }
        //   {test: /\.jpg$/, use:["whatever-loader"]},
          ],
      },
};


// for install css loader and style commond => ( npm install style-loader css-loader )
// for install webpack and webpack-cli  =>  (npm i webpack webpack-cli)
// run server => (npm run build)
// line Number 10 to 14 copy by => https://webpack.js.org/concepts/loaders/