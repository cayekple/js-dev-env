import path from 'path';

export default {
    mode: "development",
  devtool: 'inline-source-map',
  devServer: {
    noInfo: false,
  },
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [],
  module: {
      rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ['@babel/preset-env']
                }
            }

        },
        {
            test: /\.css$/,
            exclude: /node_modules/,
            use: [
                "style-loader",
                {
                    loader: "css-loader"
                }
            ]

        }
    ]

  }
}
