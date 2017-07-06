var config = {
   entry: './client.js',
	
   output: {
      path:'/',
      filename: 'main.js',
   },
	
   devServer: {
      inline: true,
      port: 8900
   },
	
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
				
            query: {
               presets: ["es2015",'react'],
               plugins: ["transform-object-rest-spread","transform-class-properties","transform-decorators-legacy"]
            }
         }
      ]
   }
}

module.exports = config;