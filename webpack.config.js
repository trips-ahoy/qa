
const path = require('path');

// module.exports = {
//   entry: '/client/src/index.js',
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve(__dirname, '/client/dist'),
//   },
//   module: {
//     rules: [
//       {
//         test: /\.jsx?/,
//         exclude: /node_modules/,
//         use: {
//           loader: "babel-loader",
//           options: {
//             presets: ['@babel/preset-env', '@babel/preset-react']
//           }
//         }
//       }
//     ]
//   }
// };

module.exports = {
  entry: __dirname + '/client/src/index.jsx',
  mode: 'development',
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      }
    ]
  },
   output: {
    filename: 'bundle.js',
    path: __dirname + '/client/dist'
  }
};





