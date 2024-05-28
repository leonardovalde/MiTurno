const HtmlWebPackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const Dotenv = require('dotenv-webpack')
const deps = require('./package.json').dependencies
module.exports = (_, argv) => ({
  output: {
    publicPath: process.env.PUBLIC_PATH || 'http://localhost:9000/',
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
  },

  devServer: {
    port: process.env.PORT || 9000,
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
      remotes:
        argv.mode === 'production'
          ? {
              side_bar:
                'side_bar@https://miturno-side-bar.onrender.com/remoteEntry.js',
              not_found:
                'not_found@https://miturno-bqii.onrender.com/remoteEntry.js',
              login: 'login@https://miturno-login.onrender.com/remoteEntry.js',
              nav_bar: 'nav_bar@https://miturno.onrender.com/remoteEntry.js',
              register:
                'register@https://miturno-register.onrender.com/remoteEntry.js',
              home: 'home@https://miturno-home.onrender.com/remoteEntry.js',
              create_turn: 'create_turn@https://miturno-createturn.onrender.com/remoteEntry.js',
              menu_admin:
                'menu_admin@https://miturno-menu-admin.onrender.com/remoteEntry.js',
              user_list:
                'user_list@https://miturno-user-list.onrender.com/remoteEntry.js',
            }
          : {
              side_bar: 'side_bar@http://localhost:9001/remoteEntry.js',
              not_found: 'not_found@http://localhost:9010/remoteEntry.js',
              login: 'login@http://localhost:9009/remoteEntry.js',
              nav_bar: 'nav_bar@http://localhost:9008/remoteEntry.js',
              register: 'register@http://localhost:9007/remoteEntry.js',
              home: 'home@http://localhost:9006/remoteEntry.js',
              menu_admin: 'menu_admin@http://localhost:9005/remoteEntry.js',
              create_turn: 'create_turn@http://localhost:9004/remoteEntry.js',
              user_list: 'user_list@http://localhost:9003/remoteEntry.js',
              shift_list: 'shift_list@http://localhost:9012/remoteEntry.js',
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
