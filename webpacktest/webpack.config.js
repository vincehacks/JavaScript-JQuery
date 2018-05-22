// Created by Vince Chang

// This allows me to bundle webpack by running this command
// ./node_modules/.bin/webpack
// But, if I put build: webpack in my scripts in package.json, then I can run
// npm run build
module.exports = {
  entry: './js/index.js',
  // output: {
  //   filename: 'bundle.js'
  // },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, //for all files that end with js/jsx
        use: {
          loader: 'babel-loader', //use the babel loader to load:
          options: {
            presets: ["es2015" , "react"] //the es2015 compiler
          }
        }
      }
    ]
  }
};