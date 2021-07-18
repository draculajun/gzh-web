module.exports = {
    devServer: {
        proxy: {
            '/api': {   //代理api，解决跨域问题
                target: 'http://www.dracula.host',
                ws: true,
                changOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}
