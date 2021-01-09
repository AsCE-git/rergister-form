const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const OptimizeCssAssetWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const autoprefixer = require('autoprefixer')
const path = require('path')

const isDevelopment = process.env.NODE_ENV === 'development'
const filename = (ext) => isDevelopment ? `[name].${ext}` : `[name].[hash].${ext}` 

const optimization = () => {
  if (!isDevelopment) {
    return {
      minimizer: [
        new OptimizeCssAssetWebpackPlugin(),
        new TerserWebpackPlugin({
          extractComments: true
        })
      ]
    }
  }
  return {
    splitChunks: {
      chunks: 'all'
    }
  }
}

const plugins = [
  new CopyWebpackPlugin({
    patterns: [{
      from: path.resolve(__dirname, 'src/images/favicon.ico'),
      to: path.resolve(__dirname, 'dist')
    }]
  }),
  new HTMLWebpackPlugin({
    minify: !isDevelopment,
    template: path.resolve(__dirname, 'index.html')
  }),
  new MiniCssExtractPlugin({
    filename: filename('css')
  }),
  new CleanWebpackPlugin()
]

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: {
    bundle: ['@babel/polyfill', './index.tsx']
  },
  output: {
    filename: filename('js'),
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.svg'], 
    alias: {
      '@': path.resolve(__dirname, 'src/components/'),
      '@storybook': path.resolve(__dirname, 'src/components/storybook/index'),
      '@images': path.resolve(__dirname, 'src/images/')
    }
  },
  optimization: optimization(),
  devtool: 'source-map',
  plugins,
  module: {
    rules: [{
      test: /\.ts(x?)$/,
      use: 'ts-loader'
    }, {
      test: /\.css$/,
      use: [ MiniCssExtractPlugin.loader, 'css-loader' ]
    }, {
      test: /\.svg$/,
      include: [
        path.resolve(__dirname, 'src/images/')
      ],
      use: [ 'babel-loader', 'svg-react-loader' ]
    }, {
      test: /\.s[ac]ss$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            plugins: [
              autoprefixer()
            ],
            sourceMap: true
          }
        },
        'sass-loader'
      ]
    }, {
      test: /\.png$/,
      use: ['file-loader']
    }]
  }
}
