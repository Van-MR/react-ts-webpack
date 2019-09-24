const path = require('path');

module.exports = {
    target: 'web',
    mode: 'development',
    devServer: {
      contentBase: './',
      port: 5000
    }
    entry: 'src/index.tsx',
    output: {
      filename: 'bundle.js',
      path:  path.join(__dirname,'dist')
    },
    module {
      rules:[]
    },
    plugin: {

    },
    resolve: {extensions:['.ts','.tsx','.js']}
}
