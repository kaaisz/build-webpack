module.exports = {
  // JS file as a main - this should be an entry point
  // - 'src/index.js' will automatically add, if you not specified
  entry: `./src/index.js`,

  // Setting up output environment
  output: {
    // Setting up directry and files for store output

    // where do you wanna place output file
    // 'dist' will be automatically add, if you not specified
    // you can ignore this code below instead of 'dist' will be automatically add
    path: `${__dirname}/dist`, 

    // what name do you wanna add to the output file
    // 'main.js' will be automatically add, if you not specified
    filename: 'main.js',
  },

  // when 'mode' set into production, output will be minify,
  // when 'mode' set into development, output will be readable,
  mode: 'development',

  // to run localhost (normally 8080)
  // this code will open localhost when webpack has been executed
  devServer: {
    contentBase: 'dist',
    open: true,
  }
};