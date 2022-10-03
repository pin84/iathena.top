const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir);
}


// vue.config.js
module.exports = {
    // 选项...

    lintOnSave: true,
    configureWebpack: { // webpack 配置

        devtool: 'source-map',

    },

    devServer: {
        port: 8080
    }
}