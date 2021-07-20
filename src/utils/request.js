import axios from "axios"
import config from "@/config.base.js"

let baseAxios = axios.create({
    timeout: 30000,
    baseURL: ``,     //api为代理路径，在vue.config.js中有配置
})

// 添加请求拦截器
baseAxios.interceptors.request.use(function (config) {

    // 认证信息
    // ['appId', 'token'].forEach((key) => {
    //     config.headers = autoHeaders(config.headers, key, encodeURIComponent(localStorage.getItem(key)));
    // });

    return config;
}, function (error) {
    return Promise.reject(error)
})

// 添加响应拦截器
baseAxios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    if (response.data.code != "200") {
        localStorage.clear();
        window.location.href = config.loginUrl;
    }
    return response.data;
}, function (error) {
    console.log(error.response);
    if (error && error.response && error.response.status == '401') {
        localStorage.clear();
        window.location.href = config.loginUrl;
    }
    return Promise.reject(error);
})


// function autoHeaders(headers, key, value) {
//     if ((headers[key] == null || String(headers[key]).trim() === '') && value != null) {
//         headers[key] = value;
//     }
//     return headers;
// }

export default baseAxios
