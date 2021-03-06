const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const devMode = process.env.NODE_ENV;
const conf = {
  entry: ["./src/index.js"],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: 'dist/'
  },
  devServer: {
    overlay: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
        // use: ['babel-loader']
      },

      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
        // use: ['babel-loader']
      },

      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            
            {
              loader: 'css-loader',
              options: {
                // If you are having trouble with urls not resolving add this setting.
                // See https://github.com/webpack-contrib/css-loader#url
                sourceMap: true
              }
            },


            {
              loader: 'sass-loader',
                options: {
                  sourceMap: true,
                }
            },
          
          ]
        })
      }

    ]
  },
  plugins: [
    new ExtractTextPlugin(
      {filename: 'style.css'}
    ),
  ]
};

module.exports = (env, options) => {
  // let production = options.mode === 'production';
  if (options.mode === "production") {
    conf.devtool = "none";
    conf.plugins.push(new CleanWebpackPlugin("dist"));
    return conf;
  }
  else {
    conf.devtool = 'source-map';
    return conf;
  }
};
// module.exports = (env, options) => {
//   let production = options.mode === 'production';
//   conf.devtool = production ? false : 'source-map';
//   return conf;
// }