module.exports = {
    devServer: {
        proxy: {
            '/api': {   //代理api，解决跨域问题
                target: process.env.VUE_APP_WX_URL,
                ws: true,
                changOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
    }
}
