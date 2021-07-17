import axios from "axios"
import config from "../../config/config.base"

let instance = axios.create({
    timeout: 120000,
    crossDomain: true,
    withCredentials: false, //设置cross跨域 并设置访问权限 允许跨域携带cookie信息
})

instance.defaults.baseURL = config.baseURL

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    config.headers.appId = "appId";
    config.headers.token = "token";
    return config
}, function (error) {
    return Promise.reject(error)
})

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    if (response.status == "200") {
        if (response.data.code == "500") {
            localStorage.clear()
            window.location.href = loginUrl
        }
    }
    return response.data
}, function (error) {
    console.log('--- 401 res error response ---')
    console.log(error.response)
    if (error && error.response && error.response.status == '401') {
        localStorage.clear()
        window.location.href = loginUrl
    }
    return Promise.reject(error)
})

export default instance