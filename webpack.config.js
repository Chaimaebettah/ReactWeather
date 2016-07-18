var webpack = require('webpack');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './public/app.jsx'
  ],
  externals:{
  jquery:'jQuery'
  },
  plugins:[
    new webpack.ProvidePlugin({
      '$':'jquery',
      'jQuery':'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'public/components/Main.jsx',
      Nav: 'public/components/Nav.jsx',
      Weather: 'public/components/Weather.jsx',
      About: 'public/components/About.jsx',
      Examples: 'public/components/Examples.jsx',
      WeatherMessage:'public/components/WeatherMessage.jsx',
      WeatherForm:'public/components/WeatherForm.jsx',
      AxiosExample:'axios/AxiosExample.jsx'

    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        //we are telling the babel to take the file jsx and pars them through react get the output and run them with is5
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool:'cheap-module-eval-source-map'
};