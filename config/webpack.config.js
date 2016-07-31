module.exports = {
    context: __dirname + '/..', //step out of the config for rel paths
    entry: ['webpack/hot/dev-server', './app/app.ts'],
    output: {
        filename: './bundle.js',
        path: './dist'
    },
    devtool: 'source-map',
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
    module: {
        loaders: [
            //css
            {
                test: /\.css$/,
                loader: 'style!css!'
            },
            //less
            {
                test: /\.less$/,
                loader: 'style!css!less'
            },
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            },
            //raw file loader for html files
            {
                test: /.html?$/,
                loader: 'raw'
            }
        ]
    },
    //TODO: get dev server serving index html with the [hash[]bundle] file name, currently this only works with npm build
    devServer: {

        stats: 'minimal',
        port: '8080'
    }

};