import axios from "axios"
import config from "@/config.base.js"

let wxAxios = axios.create({
    timeout: 30000,
    // changeOrigin: true,
    // crossDomain: true,
})

wxAxios.defaults.baseURL = config.wxURL

// 添加请求拦截器
wxAxios.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error)
})

// 添加响应拦截器
wxAxios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    if (response.data.code != "200") {
        localStorage.clear()
        window.location.href = config.loginUrl;
    }
    return response.data
}, function (error) {
    console.log(error.response)
    if (error && error.response && error.response.status == '401') {
        localStorage.clear()
        window.location.href = config.loginUrl;
    }
    return Promise.reject(error)
})

export default wxAxios
