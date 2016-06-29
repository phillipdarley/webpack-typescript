module.exports = {

    entry: './app/app.ts',
    output: {
        filename: './app/bundle.js',
        path: './dist'
    },
    devtool: 'source-map',
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
    module: {
        loaders: [{
                test: /\.css$/,
                loader: 'style!css!'
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
    }



};