module.exports = {
    entry: './index',

    output: {
        filename: './bundle.js'
    },

    optimization: {
        // We no not want to minimize our code.
        minimize: false
    },
};