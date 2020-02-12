// most of where the webpack magic happens
module.exports = {
    // where do we want webpack to start
    entry: [
        './src/index.js'
    ],
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    // where to look 
    devServer:{
        contentBase: './dist'
    },
    module:{
        rules:[{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use:['babel-loader']
        },{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use:['eslint-loader']
        }]
    },
    // no need to add extenstions
    resolve:{
        extenstions: ['.js', '.jsx']
    }

}