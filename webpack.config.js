const { env } = require('process')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const autoprefixer = require('autoprefixer')
const CompressionPlugin = require('compression-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const entry = [
  './src/index.js'
]

const output = {
  filename: 'bundle.js',
  path: `${__dirname}/docs/`
}

const plugins = [
  new HtmlWebpackPlugin({
    title: 'Ansible Lockdown',
    filename: 'index.html',
    template: './src/index.html'
  }),
  new MiniCssExtractPlugin({
    filename: 'main.css'
  }),
  new CompressionPlugin({
    algorithm: 'gzip'
  })
]

const optimization = {}

const rules = [
  {
    test: /\.(scss|css)$/,
    use: [
      MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          minimize: { safe: true }
        }
      },
      {
        loader: 'postcss-loader',
        options: {
          autoprefixer: {
            browsers: ['cover 99.5%']
          },
          plugins: () => [
            autoprefixer
          ]
        }
      },
      {
        loader: 'sass-loader'
      }
    ]
  },
  {
    test: /\.(png|jpg|gif|svg)$/,
    use: [{
      loader: 'file-loader'
    }]
  }
]

const devServer = {
  overlay: true,
  open: true
}

module.exports = {
  target: 'web',
  entry,
  output,
  node: {
    __dirname: true,
    fs: 'empty'
  },
  devtool: (env.NODE_ENV === 'development') ? 'inline-source-map' : false,
  module: {
    rules
  },
  plugins,
  devServer,
  optimization
}
