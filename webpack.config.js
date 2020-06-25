require('dotenv').config()

const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'

console.log(process.env.API_URL)

const config = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: isDev ? 'dev-bundle.js' : 'bundle-[hash].js',
    chunkFilename: isDev ? 'dev-chunk.js' : '[name].[hash].js',
    publicPath: '/',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: './public/index.html',
      minify: {
        collapseWhitespace: !isDev,
      },
    }),
  ],
  devtool: isDev ? 'source-map' : '',
  devServer: {
    hot: isDev,
    contentBase: './dist',
    historyApiFallback: true,
    hot: true,
    port: 3000,
    // proxy doesn't work, hm....
    proxy: {
      '/api': {
        target: process.env.API_URL,
        secure: false,
        changeOrigin: true,
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.svg$/,
        exclude: /fonts/,
        loader: 'svg-react-loader',
      },
      {
        test: /\.(jpg|png|webp|jpeg)$/,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              disable: true,
              webp: {
                enabled: true,
              },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      modules: path.resolve(__dirname, 'src/modules'),
      ui: path.resolve(__dirname, 'src/ui'),
      core: path.resolve(__dirname, 'src/core'),
      screens: path.resolve(__dirname, 'src/screens'),
      components: path.resolve(__dirname, 'src/components'),
    },
    extensions: ['.wasm', '.mjs', '.js', '.jsx', '.json'],
  },
}

if (!isDev) {
  config.optimization = {
    minimize: true,
    minimizer: [new TerserPlugin()],
  }
}

module.exports = config
