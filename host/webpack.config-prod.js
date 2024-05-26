const HtmlWebPackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const Dotenv = require('dotenv-webpack')
const deps = require('./package.json').dependencies
module.exports = (_, argv) => ({
  output: {
    publicPath: 'http://localhost:9000/',
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
        side_bar:
          'side_bar@https://miturno-side-bar.onrender.com/remoteEntry.js',
        not_found: 'not_found@https://miturno-bqii.onrender.com/remoteEntry.js',
        login: 'login@https://miturno-login.onrender.com/remoteEntry.js',
        nav_bar: 'nav_bar@https://miturno.onrender.com/remoteEntry.js',
        register:
          'register@https://miturno-register.onrender.com/remoteEntry.js',
        home: 'home@https://miturno-home.onrender.com/remoteEntry.js',
        menu_admin:
          'menu_admin@https://miturno-menu-admin.onrender.com/remoteEntry.js',
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
