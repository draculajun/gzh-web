module.exports = {
    devServer: {
        disableHostCheck: true, //webpack-dev-server出于安全考虑，默认检查hostname，如果hostname不是配置内的，将中断访问
        proxy: {
            '/wxApi': {   //代理api，解决跨域问题
                target: process.env.VUE_APP_WX_URL,
                ws: true,
                changOrigin: true,
                pathRewrite: {
                    '^/wxApi': ''
                }
            },
        },
    },
    lintOnSave: false,
}
