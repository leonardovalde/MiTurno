const HtmlWebPackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const Dotenv = require('dotenv-webpack')
const deps = require('./package.json').dependencies
module.exports = (_, argv) => ({
  output: {
    publicPath: `${
      argv.mode === 'production'
        ? 'https://miturno-host.onrender.com/'
        : 'http://localhost:9000/'
    }`,
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
  },

  devServer: {
    port: 9000,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: 'javascript/auto',
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: 'host',
      filename: 'remoteEntry.js',
      remotes: {
        side_bar: `side_bar@${
          argv.mode === 'production'
            ? 'side_bar@hhttps://miturno-side-bar.onrender.com/remoteEntry.js'
            : 'side_bar@http://localhost:9001/remoteEntry.js'
        }}`,
        not_found:
          argv.mode === 'production'
            ? 'not_found@https://miturno-bqii.onrender.com/remoteEntry.js'
            : 'not_found@http://localhost:9010/remoteEntry.js',
        login:
          argv.mode === 'production'
            ? 'login@https://miturno-login.onrender.com/remoteEntry.js'
            : 'login@http://localhost:9009/remoteEntry.js',
        nav_bar:
          argv.mode === 'production'
            ? 'nav_bar@https://miturno.onrender.com/remoteEntry.js'
            : 'nav_bar@http://localhost:9008/remoteEntry.js',
        register:
          argv.mode === 'production'
            ? 'register@https://miturno-register.onrender.com/remoteEntry.js'
            : 'register@http://localhost:9007/remoteEntry.js',
        home:
          argv.mode === 'production'
            ? 'home@https://miturno-home.onrender.com/remoteEntry.js'
            : 'home@http://localhost:9006/remoteEntry.js',
        menu_admin:
          argv.mode === 'production'
            ? 'menu_admin@https://miturno-menu-admin.onrender.com/remoteEntry.js'
            : 'menu_admin@http://localhost:9005/remoteEntry.js',
      },
      exposes: {},
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: deps['react-dom'],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: './src/index.html',
    }),
    new Dotenv(),
  ],
})
