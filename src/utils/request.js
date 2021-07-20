import axios from "axios"
import config from "@/config.base.js"
import {mergeObj} from "@/utils/objectUtils.js"

let baseAxios = axios.create({
    timeout: 30000,
    baseURL: ``,     //api为代理路径，在vue.config.js中有配置
});

baseAxios._get = baseAxios.get;
baseAxios._post = baseAxios.post;

//JSON方式通讯
baseAxios.get = (url, config) => {
    console.log(config);
    let configNew = mergeObj(config, getDefaultAthubConfig());
    return baseAxios._get(url, configNew);
};

baseAxios.post = (url, data, config) => {
    let configNew = mergeObj(config, getDefaultAthubConfig());
    configNew['headers']['Content-Type'] = 'application/json; charset=utf-8';
    console.log(configNew);
    return baseAxios._post(url, JSON.stringify(data), configNew);
};


// 添加请求拦截器
baseAxios.interceptors.request.use(function (config) {
    localStorage.setItem('appId', 'WEB');
    localStorage.setItem('token', 'token');
    // 认证信息
    ['appId', 'token'].forEach((key) => {
        config.headers = autoHeaders(config.headers, key, encodeURIComponent(localStorage.getItem(key)));
    });
    return config;
}, function (error) {
    return Promise.reject(error);
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

function getDefaultAthubConfig() {
    let headers = {};
    return {
        loading: false,
        headers: headers
    };
}

function autoHeaders(headers, key, value) {
    if ((headers[key] == null || String(headers[key]).trim() === '') && value != null) {
        headers[key] = value;
    }
    return headers;
}

export default baseAxios
