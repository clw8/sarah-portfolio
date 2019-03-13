const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const glob = require('glob');
const path = require('path');
var webpack = require('webpack');

function getEntries(pattern) {
  const entries = {};

  glob.sync(pattern).forEach((file) => {
    entries[file.replace('src/js/', '')] = path.join(__dirname, file);
  });

  return entries;
}

module.exports = {
 // entry: getEntries('src/js/*.js'),
 // entry: './src/entry.js',
  entry: {
  //  'views': path.resolve(__dirname, './src/views.js'),
    'main' : path.resolve(__dirname, './src/main.js')
  },
  output: {
    path: path.resolve(__dirname, 'src/dist'),
    filename: '[name].js',
    publicPath: '/src',  
  },
  module: {
  rules: [
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    },
    // {
    //   test: /\.css$/,
    //   use: [
    //       {
    //           loader: MiniCssExtractPlugin.loader,
    //           options: {
    //             // you can specify a publicPath here
    //             // by default it use publicPath in webpackOptions.output
    //             publicPath: '/'
    //           }
    //         },
    //         //"css-loader"
    //         { loader: 'css-loader', options: { minimize: true }},
    //   ]
    // },
    // {
    //   test: /\.(png|svg|jpg|gif)$/,
    //   loader: 'file-loader',
    //   options: {
    //     name: '[path][name].[ext]',
    //     outputPath: 'images/'
    //   }
    // },
  //   {
  //     test: /\.(png|jp(e*)g|svg)$/,  
  //     use: [{
  //         loader: 'url-loader',
  //         options: { 
  //             limit: 8000, // Convert images < 8kb to base64 strings
  //             name: 'images/[hash]-[name].[ext]'
  //         } 
  //     }]
  // }
  ]
},
plugins: [
  new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(true),
  }),
  new MiniCssExtractPlugin({
    // Options similar to the same options in webpackOptions.output
    // both options are optional
    filename: "[name].css",
    chunkFilename: "[id].css"
  })
]
  // ...
}
// module.exports = {
//   entry: "./app.js",
//   output: {
//     filename: "bundle.js"
//   }
// }
